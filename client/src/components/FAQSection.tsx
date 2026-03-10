import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "기존 EMR과 호환되나요?",
    a: "네, 웹 브라우저에서 동작하며 생성된 SOAP 차트를 복사하여 기존 EMR에 붙여넣기만 하면 됩니다. 별도 연동 없이 어떤 EMR에서도 사용 가능합니다.",
  },
  {
    q: "녹음 데이터는 안전한가요?",
    a: "모든 음성 데이터는 AES-256 암호화로 전송·저장되며, 녹음 원본은 차트 생성 후 자동 삭제됩니다. 국내 서버에서만 처리됩니다.",
  },
  {
    q: "AI 차트의 정확도는 어느 정도인가요?",
    a: "한의학 용어에 특화된 모델을 사용하며, 원장님이 확정하기 전까지 실장에게 전달되지 않습니다. 확정 전 수정도 가능합니다.",
  },
  {
    q: "카카오 알림톡 발송 비용은 별도인가요?",
    a: "Pro 플랜에 포함되어 있습니다. 별도의 카카오 비즈니스 계정 설정이 필요하며, 온보딩 시 안내해 드립니다.",
  },
  {
    q: "도입까지 얼마나 걸리나요?",
    a: "회원가입 후 바로 사용 가능합니다. Pro 플랜은 전담 온보딩 매니저가 배정되어 1~2일이면 세팅 완료됩니다.",
  },
];

function FAQItem({ faq, isOpen, toggle }: { faq: typeof faqs[0]; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-[#f0f0f0] last:border-b-0">
      <button onClick={toggle} className="w-full flex items-center justify-between py-4 text-left group">
        <span className={`text-[14px] font-semibold pr-4 transition-colors ${isOpen ? "text-[#111]" : "text-[#555] group-hover:text-[#111]"}`}>
          {faq.q}
        </span>
        <ChevronDown className={`w-4 h-4 text-[#999] shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 pb-4" : "max-h-0"}`}>
        <p className="text-[13px] text-[#777] leading-relaxed pr-8">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-20 bg-[#fafafa]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-[13px] text-[#00B6C5] font-semibold mb-3 tracking-wide uppercase">
            FAQ
          </p>
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#111] tracking-tight">
            자주 묻는 질문
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto bg-white rounded-xl border border-[#e8e8e8] px-6"
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
