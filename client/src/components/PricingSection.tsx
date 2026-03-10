/*
 * Design: Clinical Dashboard — Modern SaaS
 * Pricing: 간결한 가격 정보 + 무료 체험 유도
 */
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

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
    highlighted: false,
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
      "다중 원장 지원",
      "전담 온보딩 지원",
    ],
    cta: "도입 문의하기",
    highlighted: true,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-hani-green tracking-wide uppercase">Pricing</span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-hani-slate tracking-tight">
            합리적인 가격으로 시작하세요
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            무료 플랜으로 먼저 체험하고, 한의원에 맞는 플랜을 선택하세요.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-7 md:p-8 border transition-all ${
                plan.highlighted
                  ? "bg-white border-hani-green/30 shadow-lg shadow-hani-green/10 relative"
                  : "bg-white border-border/50 hover:shadow-md"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold text-white bg-hani-green px-3 py-1 rounded-full">
                  추천
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-hani-slate">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-hani-slate">{plan.price}</span>
                  {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-hani-green shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-xl h-11 font-semibold ${
                  plan.highlighted
                    ? "bg-hani-green hover:bg-hani-green-dark text-white shadow-sm"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
                onClick={() => window.open("https://www.haniagent.kr/auth/login", "_blank")}
              >
                {plan.cta}
                <ArrowRight className="ml-1.5 w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
