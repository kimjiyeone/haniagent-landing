import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";

/*
 * PricingSection — mediark.app 참고, 가격 문의 방식
 * Basic (무료) + Pro (가격 문의) 2열 구조
 */

const plans = [
  {
    name: "Basic",
    badge: "무료",
    badgeStyle: "bg-[#f0f0f0] text-[#666]",
    price: "무료",
    priceNote: "",
    desc: "하니에이전트를 먼저 경험해보세요",
    features: [
      "AI 녹음 차팅 (월 30건)",
      "SOAP 차트 자동 생성",
      "실장 인박스",
      "EMR 복붙 대기열",
      "기본 환자 관리",
    ],
    cta: "무료로 시작하기",
    ctaStyle: "border-2 border-[#ddd] text-[#333] hover:border-[#bbb] bg-white",
    href: "https://www.haniagent.kr/auth/login",
    highlight: false,
  },
  {
    name: "Pro",
    badge: "추천",
    badgeStyle: "bg-[#00B6C5] text-white",
    price: "가격 문의",
    priceNote: "한의원 규모에 맞춘 합리적인 가격",
    desc: "성장하는 한의원을 위한 올인원 솔루션",
    features: [
      "AI 녹음 차팅 무제한",
      "경영지표 대시보드",
      "AI 상담 피드백 & 환자 유형 분석",
      "카카오 알림톡 (AI 맞춤 생성)",
      "D-1 / D+1 리마인드 태스크",
      "멀티 직원 계정",
      "우선 기술 지원",
      "추후 카카오 자동발송 업데이트",
    ],
    cta: "1:1 맞춤 상담 받기",
    ctaStyle: "bg-[#111] text-white hover:bg-[#333]",
    href: "https://forms.gle/placeholder",
    highlight: true,
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
            합리적인 요금제를 만나보세요
          </h2>
          <p className="mt-3 text-[15px] text-[#777]">
            무료로 시작하고, 우리 한의원에 맞는 플랜을 상담받으세요.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 md:p-7 flex flex-col ${
                plan.highlight
                  ? "bg-white border-2 border-[#111] shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
                  : "bg-white border border-[#e8e8e8]"
              }`}
            >
              {/* Badge */}
              <span className={`inline-flex items-center self-start text-[11px] font-bold px-2.5 py-1 rounded-full mb-4 ${plan.badgeStyle}`}>
                {plan.badge === "추천" && <Sparkles size={10} className="mr-1" />}
                {plan.badge}
              </span>

              {/* Plan name */}
              <h3 className="text-[20px] font-extrabold text-[#111] mb-1">{plan.name}</h3>
              <p className="text-[12px] text-[#888] mb-5">{plan.desc}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-[32px] font-extrabold text-[#111]">{plan.price}</span>
                {plan.priceNote && (
                  <p className="text-[12px] text-[#999] mt-1">{plan.priceNote}</p>
                )}
              </div>

              {/* CTA */}
              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[15px] font-semibold transition-colors ${plan.ctaStyle}`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </a>

              {/* Features */}
              <ul className="mt-6 pt-6 border-t border-[#f0f0f0] space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px] text-[#555]">
                    <Check className="w-4 h-4 text-[#00B6C5] shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Enterprise note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-[#f8f8f8] rounded-xl px-5 py-3 border border-[#f0f0f0]">
            <span className="text-[13px] text-[#666]">
              다지점 · 대형 한의원은 <b className="text-[#111]">Enterprise</b> 플랜을 문의해주세요
            </span>
            <a
              href="mailto:contact@hanitek.kr"
              className="text-[13px] font-semibold text-[#00B6C5] hover:underline whitespace-nowrap"
            >
              문의하기 →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
