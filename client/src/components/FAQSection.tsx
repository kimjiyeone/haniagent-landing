import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "기존 EMR과 호환되나요?",
    a: "네, 하니에이전트는 웹 브라우저에서 동작하며, 생성된 SOAP 차트를 복사하여 기존 EMR에 붙여넣기만 하면 됩니다. EMR 파일 대기열에 자동 정렬되어, 어떤 EMR에서도 별도 연동 없이 사용 가능합니다.",
  },
  {
    q: "녹음 데이터는 안전한가요?",
    a: "모든 음성 데이터는 TLS 1.3 + AES-256 암호화로 전송·저장되며, SOAP 차트 생성 후 녹음 원본은 즉시 삭제됩니다. 클리닉 간 완벽한 데이터 격리 아키텍처를 적용하고 있습니다.",
  },
  {
    q: "AI 차트의 정확도는 어느 정도인가요?",
    a: "한의학 전문 용어에 특화된 모델을 사용하여 98%+ 정확도를 달성했습니다. 원장님이 확정하기 전까지 실장에게 전달되지 않으며, 확정 전 자유롭게 수정할 수 있습니다.",
  },
  {
    q: "카톡은 자동으로 발송되나요?",
    a: "현재는 AI가 차트 기반 맞춤 카톡 메시지를 자동 생성하고, 실장님이 인박스에서 복사하여 카카오톡으로 발송하는 방식입니다. 카카오 알림톡 연동을 통한 자동 발송 기능이 개발 로드맵에 포함되어 있습니다.",
  },
  {
    q: "도입까지 얼마나 걸리나요?",
    a: "회원가입 후 바로 사용 가능합니다. Pro 플랜은 전담 온보딩 매니저가 배정되어 1~2일이면 세팅이 완료됩니다. 신입 직원도 인박스만 따라하면 Day 1부터 업무가 가능합니다.",
  },
  {
    q: "원장님이 해야 할 일이 많지 않나요?",
    a: "원장님은 딱 3가지만 하시면 됩니다: ① 녹음 시작/종료 (버튼 2번), ② SOAP 확인 후 [확정] 1탭, ③ AI 추천 권장시점 확인 1탭. 나머지 태스크 생성, 카톡 작성, EMR 정리는 모두 시스템이 처리합니다.",
  },
  {
    q: "방문진료 한의원도 사용할 수 있나요?",
    a: "네, 방문진료에 특화된 Basic 플랜이 별도로 있습니다. 고도화된 상병코드 추천 기능이 포함되어 있어 방문진료 차트 작성이 더욱 편리합니다.",
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
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-48 pb-4" : "max-h-0"}`}>
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
