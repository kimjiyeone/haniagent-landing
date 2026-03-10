import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0",
    period: "원/월",
    desc: "소규모 한의원에서 바로 시작",
    features: [
      "AI 녹음 차팅 (월 30건)",
      "SOAP 차트 자동 생성",
      "실장 인박스",
      "EMR 복붙 대기열",
      "기본 환자 관리",
    ],
    cta: "무료로 시작하기",
    ctaStyle: "border border-[#ddd] text-[#333] hover:border-[#bbb] bg-white",
    highlight: false,
  },
  {
    name: "Pro",
    price: "330,000",
    period: "원/월",
    desc: "성장하는 한의원을 위한 올인원",
    features: [
      "AI 녹음 차팅 무제한",
      "경영지표 대시보드",
      "AI 상담 피드백 & 환자 유형 분석",
      "카카오 알림톡 (복사 발송)",
      "D-1 / D+0 리마인드",
      "멀티 직원 계정",
      "우선 기술 지원",
    ],
    addons: [
      { name: "카카오 자동발송", price: "+110,000원/월", desc: "복사 없이 1탭 자동 발송" },
    ],
    cta: "Pro 시작하기",
    ctaStyle: "bg-[#111] text-white hover:bg-[#333]",
    highlight: true,
    badge: "추천",
  },
  {
    name: "Enterprise",
    price: "별도 문의",
    period: "",
    desc: "다지점 · 대형 한의원 맞춤",
    features: [
      "Pro의 모든 기능",
      "카카오 자동발송 포함",
      "다지점 통합 관리",
      "커스텀 알림톡 템플릿",
      "EMR 연동 API",
      "전담 매니저 배정",
      "온보딩 교육 지원",
    ],
    cta: "도입 문의하기",
    ctaStyle: "border border-[#ddd] text-[#333] hover:border-[#bbb] bg-white",
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[13px] text-[#00B6C5] font-semibold mb-3 tracking-wide uppercase">
            Pricing
          </p>
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#111] tracking-tight">
            합리적인 가격, 확실한 효과
          </h2>
          <p className="mt-3 text-[15px] text-[#777]">
            무료로 시작하고, 필요할 때 업그레이드하세요.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-xl p-6 flex flex-col ${
                plan.highlight
                  ? "bg-white border-2 border-[#111] shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
                  : "bg-white border border-[#e8e8e8]"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#111] text-white text-[11px] font-bold px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              <div className="mb-5">
                <h3 className="text-[16px] font-bold text-[#111]">{plan.name}</h3>
                <p className="text-[12px] text-[#888] mt-1">{plan.desc}</p>
              </div>

              <div className="mb-5">
                {plan.period ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-[32px] font-extrabold text-[#111]">{plan.price}</span>
                    <span className="text-[13px] text-[#888]">{plan.period}</span>
                  </div>
                ) : (
                  <span className="text-[24px] font-extrabold text-[#111]">{plan.price}</span>
                )}
              </div>

              <a
                href={plan.name === "Enterprise" ? "mailto:contact@hanitek.kr" : "https://www.haniagent.kr/auth/login"}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>

              <ul className="mt-5 pt-5 border-t border-[#f0f0f0] space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px] text-[#555]">
                    <Check className="w-4 h-4 text-[#00B6C5] shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Addon section for Pro */}
              {plan.addons && (
                <div className="mt-4 pt-4 border-t border-dashed border-[#e0e0e0]">
                  <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wide mb-2">Add-on</p>
                  {plan.addons.map((addon) => (
                    <div key={addon.name} className="flex items-center justify-between bg-[#f8fafb] rounded-lg px-3 py-2.5">
                      <div>
                        <p className="text-[13px] font-semibold text-[#333]">{addon.name}</p>
                        <p className="text-[11px] text-[#888]">{addon.desc}</p>
                      </div>
                      <span className="text-[13px] font-bold text-[#00B6C5] whitespace-nowrap ml-2">{addon.price}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-[13px] text-[#999] mt-8"
        >
          모든 플랜은 VAT 별도입니다. 연간 결제 시 2개월 무료 혜택이 제공됩니다.
        </motion.p>
      </div>
    </section>
  );
}
