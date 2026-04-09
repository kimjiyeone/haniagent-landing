import { motion } from "framer-motion";
import { Mic, FileCheck, Inbox, MessageSquare, Calendar, CheckCircle2, Clock, UserCheck } from "lucide-react";
import { useState } from "react";

/*
 * CoreLoopSection — 간결한 코어 루프
 * 역할 색상 통일: 원장=#00B6C5, 시스템=#6366f1, 실장=#f59e0b, 환자=#22c55e
 */

const roleColors = {
  "원장": { text: "text-[#00B6C5]", bg: "bg-[#e8f7f8]", dot: "#00B6C5" },
  "AI/시스템": { text: "text-indigo-600", bg: "bg-indigo-50", dot: "#6366f1" },
  "실장": { text: "text-amber-600", bg: "bg-amber-50", dot: "#f59e0b" },
  "환자": { text: "text-green-600", bg: "bg-green-50", dot: "#22c55e" },
};

const loopSteps = [
  {
    icon: Mic,
    title: "진료 녹음",
    shortDesc: "버튼 2번이면 끝",
    desc: "원장님이 녹음 시작/종료 버튼만 누르면 됩니다. AI가 진료 대화를 실시간으로 분석합니다.",
    role: "원장" as keyof typeof roleColors,
  },
  {
    icon: FileCheck,
    title: "AI SOAP 생성",
    shortDesc: "자동 차트 완성",
    desc: "녹음이 끝나면 AI가 한의학 SOAP 형식의 차트를 자동 생성합니다. 수정도 가능합니다.",
    role: "AI/시스템" as keyof typeof roleColors,
  },
  {
    icon: CheckCircle2,
    title: "확정 + 권장시점",
    shortDesc: "1탭이면 완료",
    desc: "차트 확인 후 [확정] 1탭. AI가 추천한 다음 내원 권장시점도 1탭으로 확인/변경합니다.",
    role: "원장" as keyof typeof roleColors,
  },
  {
    icon: Inbox,
    title: "예약확인 카톡",
    shortDesc: "실장 인박스에 도착",
    desc: "확정 즉시 예약확인 태스크가 실장 인박스에 자동 생성됩니다. 실장이 예약 안내 카톡을 발송합니다.",
    role: "실장" as keyof typeof roleColors,
  },
  {
    icon: Clock,
    title: "D-1 카톡",
    shortDesc: "예약 전날 리마인드",
    desc: "권장일 D-1에 리마인드 태스크가 자동 생성됩니다. AI가 차트 기반 맞춤 카톡을 만들어줍니다.",
    role: "AI/시스템" as keyof typeof roleColors,
  },
  {
    icon: MessageSquare,
    title: "D+1 카톡",
    shortDesc: "미내원 팔로업",
    desc: "예약일 다음 날 미내원 환자에게 D+1 팔로업 카톡 태스크가 자동 생성됩니다. 노쇼 방지에 효과적입니다.",
    role: "AI/시스템" as keyof typeof roleColors,
  },
  {
    icon: Calendar,
    title: "환자 재방문",
    shortDesc: "노쇼 방지",
    desc: "리마인드를 받은 환자가 예약일에 재방문합니다. 체크인 시 태스크가 자동 해소됩니다.",
    role: "환자" as keyof typeof roleColors,
  },
  {
    icon: UserCheck,
    title: "체크인 → 루프",
    shortDesc: "다시 처음부터",
    desc: "실장이 체크인하면 태스크가 자동 해소되고, 진료 녹음부터 루프가 다시 시작됩니다.",
    role: "실장" as keyof typeof roleColors,
  },
];

export default function CoreLoopSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="py-16 md:py-24 bg-[#fafafa]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-[13px] text-[#00B6C5] font-semibold mb-3 tracking-wide uppercase">
            Core Loop
          </p>
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#111] tracking-tight">
            녹음에서 재방문까지, 하나의 루프
          </h2>
          <p className="mt-3 text-[14px] sm:text-[15px] text-[#777] max-w-lg mx-auto">
            원장님은 <b className="text-[#111]">녹음 + 확정 + 권장시점</b> 3가지만.
            나머지는 시스템이 자동으로 처리합니다.
          </p>

          {/* 역할 범례 */}
          <div className="flex items-center justify-center gap-4 mt-5 flex-wrap">
            {Object.entries(roleColors).map(([role, colors]) => (
              <div key={role} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: colors.dot }} />
                <span className={`text-[11px] font-semibold ${colors.text}`}>{role}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ─── Desktop: Horizontal timeline loop ─── */}
        <div className="hidden md:block max-w-5xl mx-auto">
          {/* Step indicators */}
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-[20px] left-[4%] right-[4%] h-[2px] bg-[#e8e8e8]" />
            {/* Animated progress */}
            <motion.div
              className="absolute top-[20px] left-[4%] h-[2px] bg-[#00B6C5]"
              animate={{ width: `${(activeStep / (loopSteps.length - 1)) * 92}%` }}
              transition={{ duration: 0.4 }}
            />

            <div className="relative flex justify-between">
              {loopSteps.map((step, i) => {
                const Icon = step.icon;
                const isActive = i === activeStep;
                const isPast = i < activeStep;
                const dotColor = roleColors[step.role].dot;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className="flex flex-col items-center group"
                    style={{ width: `${100 / loopSteps.length}%` }}
                  >
                    {/* Node */}
                    <motion.div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all z-10`}
                      style={{
                        borderColor: isActive || isPast ? dotColor : "#e0e0e0",
                        backgroundColor: isActive ? dotColor : isPast ? dotColor + "15" : "#fff",
                        boxShadow: isActive ? `0 0 16px ${dotColor}40` : "none",
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon size={16} className={isActive ? "text-white" : isPast ? "" : "text-[#bbb]"} style={isPast ? { color: dotColor } : {}} />
                    </motion.div>
                    {/* Label */}
                    <span className={`mt-2 text-[11px] font-semibold text-center leading-tight transition-colors ${
                      isActive ? "text-[#111]" : "text-[#999]"
                    }`}>
                      {step.title}
                    </span>
                    <span className={`text-[9px] mt-0.5 font-semibold transition-colors`} style={{ color: isActive ? dotColor : "transparent" }}>
                      {step.role}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail card */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl border border-[#e8e8e8] p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: roleColors[loopSteps[activeStep].role].dot + "15" }}
                >
                  {(() => { const Icon = loopSteps[activeStep].icon; return <Icon size={22} style={{ color: roleColors[loopSteps[activeStep].role].dot }} />; })()}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-[#bbb]">STEP {String(activeStep + 1).padStart(2, "0")}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${roleColors[loopSteps[activeStep].role].text} ${roleColors[loopSteps[activeStep].role].bg}`}>
                      {loopSteps[activeStep].role}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-extrabold text-[#111] mb-2">{loopSteps[activeStep].title}</h3>
                  <p className="text-[14px] text-[#666] leading-relaxed">{loopSteps[activeStep].desc}</p>
                </div>
              </div>
              {/* Navigation */}
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#f0f0f0]">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="text-[12px] font-semibold text-[#999] hover:text-[#666] disabled:opacity-30 transition-colors"
                >
                  ← 이전
                </button>
                <div className="flex gap-1.5">
                  {loopSteps.map((step, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className="w-2 h-2 rounded-full transition-all"
                      style={{
                        backgroundColor: i === activeStep ? roleColors[step.role].dot : "#e0e0e0",
                        width: i === activeStep ? "20px" : "8px",
                      }}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setActiveStep(Math.min(loopSteps.length - 1, activeStep + 1))}
                  disabled={activeStep === loopSteps.length - 1}
                  className="text-[12px] font-semibold text-[#999] hover:text-[#666] disabled:opacity-30 transition-colors"
                >
                  다음 →
                </button>
              </div>
            </div>
          </motion.div>

          {/* Loop back indicator */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-[#00B6C5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M17 1l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 11V9a4 4 0 014-4h14" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 23l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 13v2a4 4 0 01-4 4H3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[12px] text-[#00B6C5] font-semibold">재방문 시 루프가 반복됩니다</span>
          </div>
        </div>

        {/* ─── Mobile: Vertical timeline ─── */}
        <div className="md:hidden">
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-[#e8e8e8]" />

            {loopSteps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i === activeStep;
              const dotColor = roleColors[step.role].dot;
              return (
                <motion.button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={`relative w-full text-left mb-3 p-3 rounded-xl border transition-all ${
                    isActive
                      ? "bg-white border-[#00B6C5] shadow-sm"
                      : "bg-white/50 border-[#f0f0f0]"
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[25px] top-4 w-5 h-5 rounded-full border-2 flex items-center justify-center z-10"
                    style={{
                      borderColor: isActive ? dotColor : "#ddd",
                      backgroundColor: isActive ? dotColor : "#fff",
                    }}
                  >
                    <span className={`text-[8px] font-bold ${isActive ? "text-white" : "text-[#ccc]"}`}>{i + 1}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: isActive ? dotColor + "15" : "#f5f5f5" }}
                    >
                      <Icon size={14} style={{ color: isActive ? dotColor : "#bbb" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className={`text-[13px] font-bold ${isActive ? "text-[#111]" : "text-[#888]"}`}>{step.title}</h3>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${roleColors[step.role].text} ${roleColors[step.role].bg}`}>
                          {step.role}
                        </span>
                      </div>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="text-[11px] text-[#666] mt-1 leading-relaxed"
                        >
                          {step.desc}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Loop back */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <svg className="w-4 h-4 text-[#00B6C5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M17 1l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 11V9a4 4 0 014-4h14" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 23l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 13v2a4 4 0 01-4 4H3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[11px] text-[#00B6C5] font-semibold">재방문 시 루프 반복</span>
          </div>
        </div>

        {/* Summary pill */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-[#e8e8e8] rounded-full px-5 py-2.5 shadow-sm">
            <span className="text-[13px] text-[#666] font-medium">
              원장님은 <b className="text-[#111]">녹음 + 확정 + 권장시점</b>만, 나머지는 <b className="text-[#00B6C5]">하니</b>가 처리합니다
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
