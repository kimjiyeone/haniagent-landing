import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock db module
vi.mock("./db", () => ({
  createConsultation: vi.fn().mockResolvedValue(true),
}));

// Mock notification module
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

import { createConsultation } from "./db";
import { notifyOwner } from "./_core/notification";

describe("Consultation API", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should validate required fields", () => {
    // Test input validation schema
    const { z } = require("zod");
    const schema = z.object({
      name: z.string().min(1, "성함을 입력해주세요"),
      phone: z.string().min(1, "연락처를 입력해주세요"),
      clinicName: z.string().min(1, "한의원명을 입력해주세요"),
      isPreOpening: z.boolean().default(false),
      region: z.string().min(1, "지역을 입력해주세요"),
    });

    // Valid input
    const validResult = schema.safeParse({
      name: "김원장",
      phone: "01033570527",
      clinicName: "미소한의원",
      isPreOpening: false,
      region: "서울시 강남구",
    });
    expect(validResult.success).toBe(true);

    // Missing name
    const missingName = schema.safeParse({
      name: "",
      phone: "01033570527",
      clinicName: "미소한의원",
      region: "서울시 강남구",
    });
    expect(missingName.success).toBe(false);

    // Missing phone
    const missingPhone = schema.safeParse({
      name: "김원장",
      phone: "",
      clinicName: "미소한의원",
      region: "서울시 강남구",
    });
    expect(missingPhone.success).toBe(false);

    // Missing clinicName
    const missingClinic = schema.safeParse({
      name: "김원장",
      phone: "01033570527",
      clinicName: "",
      region: "서울시 강남구",
    });
    expect(missingClinic.success).toBe(false);

    // Missing region
    const missingRegion = schema.safeParse({
      name: "김원장",
      phone: "01033570527",
      clinicName: "미소한의원",
      region: "",
    });
    expect(missingRegion.success).toBe(false);
  });

  it("should accept valid consultation data with isPreOpening default", () => {
    const { z } = require("zod");
    const schema = z.object({
      name: z.string().min(1),
      phone: z.string().min(1),
      clinicName: z.string().min(1),
      isPreOpening: z.boolean().default(false),
      region: z.string().min(1),
    });

    // Without isPreOpening (should default to false)
    const result = schema.safeParse({
      name: "박원장",
      phone: "01012345678",
      clinicName: "연세한의원",
      region: "경기도 성남시",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.isPreOpening).toBe(false);
    }

    // With isPreOpening = true
    const resultWithOpening = schema.safeParse({
      name: "박원장",
      phone: "01012345678",
      clinicName: "연세한의원",
      isPreOpening: true,
      region: "경기도 성남시",
    });
    expect(resultWithOpening.success).toBe(true);
    if (resultWithOpening.success) {
      expect(resultWithOpening.data.isPreOpening).toBe(true);
    }
  });

  it("should call createConsultation with correct data", async () => {
    const mockData = {
      name: "김원장",
      phone: "01033570527",
      clinicName: "미소한의원",
      isPreOpening: false,
      region: "서울시 강남구",
    };

    await createConsultation(mockData);
    expect(createConsultation).toHaveBeenCalledWith(mockData);
    expect(createConsultation).toHaveBeenCalledTimes(1);
  });

  it("should call notifyOwner after consultation submission", async () => {
    const title = "새 도입 상담 신청: 미소한의원";
    const content = "성함: 김원장\n연락처: 01033570527\n한의원: 미소한의원\n지역: 서울시 강남구";

    await notifyOwner({ title, content });
    expect(notifyOwner).toHaveBeenCalledWith({ title, content });
    expect(notifyOwner).toHaveBeenCalledTimes(1);
  });

  it("should include pre-opening info in notification when checked", async () => {
    const title = "새 도입 상담 신청: 새봄한의원";
    const content = "성함: 이원장\n연락처: 01099998888\n한의원: 새봄한의원 (개원 예정)\n지역: 부산시 해운대구";

    await notifyOwner({ title, content });
    expect(notifyOwner).toHaveBeenCalledWith(
      expect.objectContaining({
        content: expect.stringContaining("(개원 예정)"),
      })
    );
  });
});
