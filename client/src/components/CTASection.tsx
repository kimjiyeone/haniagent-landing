/*
 * Design: hanitek.kr 스타일 — 최종 CTA (압축)
 */
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-14 md:py-18">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00B6C5] via-[#00A5B3] to-[#008E9B] px-6 py-10 md:px-12 md:py-14 text-center"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-white rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              직원이 바뀌어도 흔들리지 않는
              <br />
              한의원을 만들어 보세요
            </h2>
            <p className="mt-3 text-white/80 max-w-lg mx-auto text-sm">
              녹음 한 번이면 차트부터 리마인드까지 자동으로. 지금 무료로 시작하세요.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                size="lg"
                className="bg-white text-[#00B6C5] hover:bg-white/90 font-bold px-7 h-11 rounded-full shadow-lg shadow-black/10"
                onClick={() => window.open("https://www.haniagent.kr/auth/login", "_blank")}
              >
                무료로 시작하기
                <ArrowRight className="ml-1.5 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-medium px-7 h-11 rounded-full bg-transparent"
                onClick={() => window.open("mailto:contact@hanitek.kr?subject=하니에이전트 도입 문의", "_blank")}
              >
                도입 문의하기
              </Button>
            </div>

            <p className="mt-4 text-white/50 text-xs">
              설치 없이 바로 시작 · 신용카드 불필요 · 언제든 해지 가능
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
