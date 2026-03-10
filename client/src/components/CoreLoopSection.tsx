import { motion } from "framer-motion";
import { Mic, FileCheck, Inbox, Bell } from "lucide-react";

const steps = [
  {
    icon: Mic,
    step: "01",
    title: "진료 녹음",
    desc: "진료 중 녹음 버튼만 누르세요",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "AI 차트 생성",
    desc: "SOAP 차트가 자동으로 완성됩니다",
  },
  {
    icon: Inbox,
    step: "03",
    title: "실장 인박스",
    desc: "태스크가 자동 생성, 순서대로 처리",
  },
  {
    icon: Bell,
    step: "04",
    title: "자동 리마인드",
    desc: "D-1 카카오톡 알림이 자동 발송됩니다",
  },
];

export default function CoreLoopSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[13px] text-[#00B6C5] font-semibold mb-3 tracking-wide uppercase">
            Core Loop
          </p>
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#111] tracking-tight">
            녹음에서 재방문까지, 하나의 루프
          </h2>
          <p className="mt-3 text-[15px] text-[#777] max-w-md mx-auto">
            원장님은 녹음과 확정만. 나머지는 시스템이 처리합니다.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-3xl mx-auto">
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[12%] right-[12%] h-[2px] bg-[#e8e8e8]" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center relative"
              >
                <div className="relative inline-flex items-center justify-center w-[72px] h-[72px] rounded-2xl bg-[#f0fafb] border border-[#e0f2f4] mb-4">
                  <s.icon className="w-7 h-7 text-[#00B6C5]" strokeWidth={1.8} />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#111] text-white text-[10px] font-bold flex items-center justify-center">
                    {s.step}
                  </span>
                </div>
                <h3 className="text-[15px] font-bold text-[#111] mb-1">{s.title}</h3>
                <p className="text-[12px] text-[#888] leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Loop indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 text-[13px] text-[#999]">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M17 1l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 11V9a4 4 0 014-4h14" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 23l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 13v2a4 4 0 01-4 4H3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            환자 재방문 시 루프가 자동으로 반복됩니다
          </div>
        </motion.div>
      </div>
    </section>
  );
}
