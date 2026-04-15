import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createConsultation } from "./db";
import { notifyOwner } from "./_core/notification";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  consultation: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "성함을 입력해주세요"),
          phone: z.string().min(1, "연락처를 입력해주세요"),
          clinicName: z.string().min(1, "한의원명을 입력해주세요"),
          isPreOpening: z.boolean().default(false),
          region: z.string().min(1, "지역을 입력해주세요"),
        })
      )
      .mutation(async ({ input }) => {
        await createConsultation({
          name: input.name,
          phone: input.phone,
          clinicName: input.clinicName,
          isPreOpening: input.isPreOpening,
          region: input.region,
        });

        // 오너에게 알림 발송
        await notifyOwner({
          title: `새 도입 상담 신청: ${input.clinicName}`,
          content: `성함: ${input.name}\n연락처: ${input.phone}\n한의원: ${input.clinicName}${input.isPreOpening ? " (개원 예정)" : ""}\n지역: ${input.region}`,
        }).catch((err) => {
          console.warn("[Consultation] Failed to notify owner:", err);
        });

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
