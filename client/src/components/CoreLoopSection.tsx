import { motion } from "framer-motion";

/*
 * CoreLoopSection — 깔끔한 핵심 루프 요약
 * 복잡한 8단계 타임라인 → 핵심 4단계 간결 표현
 */

const steps = [
  {
    num: "01",
    title: "진료 녹음",
    desc: "녹음 시작/종료 버튼만 누르면 됩니다.",
    who: "원장",
  },
  {
    num: "02",
    title: "AI 차트 생성 + 확정",
    desc: "SOAP 차트가 자동 생성됩니다. 확인 후 1탭.",
    who: "AI → 원장",
  },
  {
    num: "03",
    title: "카톡 자동 생성",
    desc: "예약확인 · D-1 리마인드 · D+1 팔로업까지.",
    who: "AI",
  },
  {
    num: "04",
    title: "환자 재방문",
    desc: "체크인하면 루프가 다시 시작됩니다.",
    who: "환자",
  },
];

export default function CoreLoopSection() {
  return (
    <section className="py-16 md:py-24 bg-[#fafafa]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#111] tracking-tight">
            녹음에서 재방문까지, 하나의 루프
          </h2>
          <p className="mt-3 text-[14px] sm:text-[15px] text-[#777] max-w-md mx-auto">
            원장님은 <b className="text-[#111]">녹음 + 확정</b>만.
            나머지는 시스템이 처리합니다.
          </p>
        </motion.div>

        {/* 4-step grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-xl p-5 border border-[#eee] text-center"
            >
              <span className="text-[28px] md:text-[32px] font-extrabold text-[#00B6C5]/20">{step.num}</span>
              <h3 className="text-[15px] font-bold text-[#111] mt-1 mb-2">{step.title}</h3>
              <p className="text-[12px] text-[#777] leading-relaxed">{step.desc}</p>
              <span className="inline-block mt-3 text-[10px] font-semibold text-[#999] bg-[#f5f5f5] px-2.5 py-1 rounded-full">{step.who}</span>
            </motion.div>
          ))}
        </div>

        {/* 핵심 한 줄 요약 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 text-center text-[13px] text-[#999]"
        >
          재방문 시 루프가 반복됩니다
        </motion.p>
      </div>
    </section>
  );
}
