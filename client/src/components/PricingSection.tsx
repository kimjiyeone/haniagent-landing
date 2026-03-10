/*
 * Design: tiro.ooo 스타일 가격 카드 — Free / Pro / Enterprise
 * 틸(#00B6C5) 배경 섹션, 3열 카드
 */
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Building2 } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0",
    period: "원/월",
    description: "하니에이전트를 직접 체험해보세요",
    features: [
      "AI 녹음 차팅 10건/월",
      "SOAP 차트 자동 생성",
      "환자 관리 기본 기능",
      "태스크 인박스",
    ],
    cta: "무료로 시작하기",
    ctaAction: () => window.open("https://www.haniagent.kr/auth/login", "_blank"),
    highlighted: false,
    style: "free" as const,
  },
  {
    name: "Pro",
    price: "문의",
    period: "",
    description: "한의원 운영 자동화의 모든 기능",
    features: [
      "AI 녹음 차팅 무제한",
      "SOAP 차트 자동 생성",
      "카카오 알림톡 자동 발송",
      "재방문 리마인드 시스템",
      "태스크 인박스 + 우선순위",
      "EMR 복붙 대기열",
      "전담 온보딩 지원",
    ],
    cta: "도입 문의하기",
    ctaAction: () => window.open("mailto:contact@hanitek.kr?subject=하니에이전트 Pro 플랜 문의", "_blank"),
    highlighted: true,
    style: "pro" as const,
  },
  {
    name: "Enterprise",
    price: "별도 문의",
    period: "",
    description: "다지점·대형 한의원을 위한 맞춤 솔루션",
    features: [
      "Pro 플랜의 모든 기능",
      "다중 원장 / 다지점 지원",
      "맞춤 API 연동",
      "전용 계정 매니저",
      "SLA 보장",
      "온프레미스 옵션",
    ],
    cta: "영업팀 연락하기",
    ctaAction: () => window.open("mailto:contact@hanitek.kr?subject=하니에이전트 Enterprise 문의", "_blank"),
    highlighted: false,
    style: "enterprise" as const,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-20 bg-[#00B6C5]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-bold text-white/80 bg-white/15 px-3 py-1 rounded-full mb-3 tracking-wide">
            PRICING
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            합리적인 가격으로 시작하세요
          </h2>
          <p className="mt-3 text-white/70 max-w-lg mx-auto text-sm">
            무료 플랜으로 먼저 체험하고, 한의원에 맞는 플랜을 선택하세요.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-2xl p-6 transition-all ${
                plan.highlighted
                  ? "bg-white shadow-xl shadow-black/10 relative scale-[1.02]"
                  : plan.style === "enterprise"
                  ? "bg-[#333] border border-white/10"
                  : "bg-white/10 backdrop-blur-sm border border-white/20"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold text-white bg-[#333] px-3 py-1 rounded-full">
                  추천
                </span>
              )}

              {plan.style === "enterprise" && (
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
              )}

              <div className="mb-5">
                <h3 className={`text-lg font-bold ${plan.highlighted ? "text-[#333]" : "text-white"}`}>
                  {plan.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className={`text-3xl font-extrabold ${plan.highlighted ? "text-[#333]" : "text-white"}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm ${plan.highlighted ? "text-muted-foreground" : "text-white/70"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`mt-1.5 text-xs ${plan.highlighted ? "text-muted-foreground" : "text-white/60"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-2.5 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlighted ? "text-hani" : "text-white/70"}`} />
                    <span className={plan.highlighted ? "text-[#555]" : "text-white/80"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full h-10 font-semibold text-sm ${
                  plan.highlighted
                    ? "bg-hani hover:bg-hani-dark text-white"
                    : plan.style === "enterprise"
                    ? "bg-white text-[#333] hover:bg-white/90"
                    : "bg-white text-[#00B6C5] hover:bg-white/90"
                }`}
                onClick={plan.ctaAction}
              >
                {plan.cta}
                <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
