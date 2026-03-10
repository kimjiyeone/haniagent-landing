/*
 * Design: Clinical Dashboard — Modern SaaS
 * FAQ: 자주 묻는 질문 아코디언
 */
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "기존 EMR과 호환되나요?",
    a: "네, 하니에이전트는 별도 설치 없이 웹 브라우저에서 동작합니다. 생성된 SOAP 차트를 복사하여 기존 EMR에 붙여넣기만 하면 됩니다. 어떤 EMR을 사용하시든 호환됩니다.",
  },
  {
    q: "녹음 데이터는 안전한가요?",
    a: "모든 음성 데이터는 의료 데이터 보안 기준에 맞춰 암호화 전송 및 저장됩니다. 녹음 원본은 차트 생성 후 자동 삭제되며, 원장님만 접근할 수 있습니다.",
  },
  {
    q: "AI 차트의 정확도는 어느 정도인가요?",
    a: "한의학 용어에 특화된 모델을 사용하며, 지속적으로 정확도를 개선하고 있습니다. 원장님이 확정하기 전까지 실장에게 전달되지 않으므로, 항상 원장님의 검수를 거칩니다.",
  },
  {
    q: "카카오 알림톡 발송 비용은 별도인가요?",
    a: "카카오 알림톡 발송 비용은 Pro 플랜에 포함되어 있습니다. 별도의 카카오 비즈니스 계정 설정이 필요하며, 온보딩 시 안내해 드립니다.",
  },
  {
    q: "직원이 여러 명이어도 사용 가능한가요?",
    a: "네, 원장/실장 역할 기반으로 권한이 분리되어 있습니다. 원장은 차트 확정 권한을, 실장은 태스크 처리 권한을 갖습니다. 다중 원장도 지원합니다.",
  },
  {
    q: "도입까지 얼마나 걸리나요?",
    a: "회원가입 후 바로 사용 가능합니다. Pro 플랜의 경우 전담 온보딩 매니저가 배정되어 초기 설정을 도와드립니다. 보통 1~2일이면 완전히 세팅됩니다.",
  },
];

function FAQItem({ faq, isOpen, toggle }: { faq: typeof faqs[0]; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-border/40 last:border-b-0">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-sm md:text-base font-semibold text-hani-slate pr-4 group-hover:text-hani-green transition-colors">
          {faq.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 pb-5" : "max-h-0"}`}
      >
        <p className="text-sm text-muted-foreground leading-relaxed pr-8">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-hani-green tracking-wide uppercase">FAQ</span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-hani-slate tracking-tight">
            자주 묻는 질문
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl border border-border/50 px-7 md:px-8"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.q}
              faq={faq}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
