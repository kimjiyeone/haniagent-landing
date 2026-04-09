import { motion } from "framer-motion";
import { useContactModal } from "@/contexts/ContactModalContext";

/*
 * UpdateRoadmapSection — 간결한 로드맵
 * 3단계 프로세스 아이콘 카드 제거, 로드맵만 깔끔한 리스트로
 */

const roadmapItems = [
  {
    date: "2026 Q2",
    status: "진행 중",
    active: true,
    title: "환자유형별 AI 피드백 고도화",
  },
  {
    date: "2026 Q2",
    status: "진행 중",
    active: true,
    title: "실장 상담 차팅",
  },
  {
    date: "2026 Q2",
    status: "진행 중",
    active: true,
    title: "카카오 알림톡 자동 발송",
  },
  {
    date: "2026 Q3",
    status: "예정",
    active: false,
    title: "자연어 환자 필터링 & 맞춤 AI 카톡 발송",
  },
  {
    date: "2026 Q3–Q4",
    status: "예정",
    active: false,
    title: "처방관리 및 카톡 연동 확장",
  },
];

export default function UpdateRoadmapSection() {
  const { open: openContactModal } = useContactModal();

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#111] tracking-tight">
            원장님의 피드백이{" "}
            <span className="text-[#00B6C5]">다음 업데이트</span>가 됩니다
          </h2>
          <p className="mt-3 text-[14px] sm:text-[15px] text-[#777] max-w-md mx-auto">
            현장의 목소리를 가장 빠르게 반영합니다.
          </p>
        </motion.div>

        {/* Roadmap list */}
        <div className="max-w-xl mx-auto space-y-3">
          {roadmapItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="flex items-center gap-4 bg-white rounded-xl border border-[#eee] px-5 py-4"
            >
              <span className="text-[11px] text-[#999] font-medium shrink-0 w-20">{item.date}</span>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                  item.active
                    ? "bg-[#e8f7f8] text-[#00B6C5]"
                    : "bg-[#f5f5f5] text-[#999]"
                }`}
              >
                {item.status}
              </span>
              <span className="text-[13px] font-semibold text-[#333] flex-1">{item.title}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <button
            type="button"
            onClick={openContactModal}
            className="text-[13px] font-semibold text-[#00B6C5] hover:text-[#009aa8] transition-colors cursor-pointer"
          >
            기능 제안하기 →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
