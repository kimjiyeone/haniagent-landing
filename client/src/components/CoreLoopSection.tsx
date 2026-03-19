import { motion } from "framer-motion";
import { Mic, FileCheck, Inbox, MessageSquare, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";

/*
 * CoreLoopSection — 시각적 원형 루프 형태로 표현
 * 6단계: 녹음 → AI 차트 → 차트 확정 → 인박스 처리 → 카톡 발송 → 재내원
 * 원형 배치 + 화살표 연결 + 클릭 시 상세 설명
 */

const loopSteps = [
  {
    icon: Mic,
    title: "진료 녹음",
    desc: "원장님이 진료 중 녹음 버튼을 누르면, AI가 대화를 실시간으로 분석합니다.",
    role: "원장",
    roleColor: "text-[#00B6C5]",
    roleBg: "bg-[#e8f7f8]",
    color: "bg-[#00B6C5]",
    lightColor: "bg-[#e8f7f8]",
    borderColor: "border-[#00B6C5]",
  },
  {
    icon: FileCheck,
    title: "AI SOAP 차트",
    desc: "녹음이 끝나면 AI가 SOAP 형식의 차트를 자동으로 생성합니다. 수정도 가능합니다.",
    role: "AI",
    roleColor: "text-amber-600",
    roleBg: "bg-amber-50",
    color: "bg-amber-500",
    lightColor: "bg-amber-50",
    borderColor: "border-amber-500",
  },
  {
    icon: CheckCircle2,
    title: "차트 확정",
    desc: "원장님이 차트를 확인하고 확정하면, 실장님 인박스에 태스크가 자동 생성됩니다.",
    role: "원장",
    roleColor: "text-green-600",
    roleBg: "bg-green-50",
    color: "bg-green-500",
    lightColor: "bg-green-50",
    borderColor: "border-green-500",
  },
  {
    icon: Inbox,
    title: "인박스 처리",
    desc: "실장님이 인박스에서 T1(예약 확인), T2(D-1 리마인드), T3(D+1 리마인드) 태스크를 처리합니다.",
    role: "실장",
    roleColor: "text-blue-600",
    roleBg: "bg-blue-50",
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    borderColor: "border-blue-500",
  },
  {
    icon: MessageSquare,
    title: "맞춤 카톡 발송",
    desc: "AI가 차트를 기반으로 환자별 맞춤 카톡을 생성합니다. 실장님이 복사 후 카카오톡에서 발송합니다.",
    role: "실장",
    roleColor: "text-purple-600",
    roleBg: "bg-purple-50",
    color: "bg-purple-500",
    lightColor: "bg-purple-50",
    borderColor: "border-purple-500",
  },
  {
    icon: Calendar,
    title: "환자 재내원",
    desc: "리마인드를 받은 환자가 예약일에 재방문하면, 체크인부터 루프가 다시 시작됩니다.",
    role: "루프",
    roleColor: "text-[#00B6C5]",
    roleBg: "bg-[#e8f7f8]",
    color: "bg-[#00B6C5]",
    lightColor: "bg-[#e8f7f8]",
    borderColor: "border-[#00B6C5]",
  },
];

export default function CoreLoopSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-[#fafafa]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-[13px] text-[#00B6C5] font-semibold mb-3 tracking-wide uppercase">
            Core Loop
          </p>
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#111] tracking-tight">
            녹음에서 재방문까지, 하나의 루프
          </h2>
          <p className="mt-3 text-[15px] text-[#777] max-w-md mx-auto">
            환자 한 명마다 이 루프가 반복됩니다. 각 단계를 클릭해보세요.
          </p>
        </motion.div>

        {/* ─── Circular Loop Visualization (Desktop) ─── */}
        <div className="hidden md:block relative max-w-2xl mx-auto mb-8">
          {/* SVG circular arrows */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400" fill="none">
            {/* Outer loop path - rounded rectangle shape */}
            <path
              d="M 150 60 L 450 60 Q 530 60 530 140 L 530 260 Q 530 340 450 340 L 150 340 Q 70 340 70 260 L 70 140 Q 70 60 150 60"
              stroke="#e0e0e0"
              strokeWidth="2"
              strokeDasharray="8 4"
              fill="none"
            />
            {/* Animated flowing dot */}
            <motion.circle
              r="5"
              fill="#00B6C5"
              animate={{
                offsetDistance: ["0%", "100%"],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{
                offsetPath: `path("M 150 60 L 450 60 Q 530 60 530 140 L 530 260 Q 530 340 450 340 L 150 340 Q 70 340 70 260 L 70 140 Q 70 60 150 60")`,
              }}
            />
            <motion.circle
              r="5"
              fill="#00B6C5"
              opacity={0.4}
              animate={{
                offsetDistance: ["0%", "100%"],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 4 }}
              style={{
                offsetPath: `path("M 150 60 L 450 60 Q 530 60 530 140 L 530 260 Q 530 340 450 340 L 150 340 Q 70 340 70 260 L 70 140 Q 70 60 150 60")`,
              }}
            />
          </svg>

          {/* Loop nodes positioned around the loop */}
          <div className="relative" style={{ height: "400px" }}>
            {/* Top row: steps 0, 1, 2 */}
            {[0, 1, 2].map((i) => {
              const positions = [
                { left: "8%", top: "0" },
                { left: "38%", top: "0" },
                { left: "68%", top: "0" },
              ];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="absolute"
                  style={{ ...positions[i], width: "26%" }}
                >
                  <LoopNode step={loopSteps[i]} index={i} isActive={activeStep === i} onClick={() => setActiveStep(activeStep === i ? null : i)} />
                </motion.div>
              );
            })}

            {/* Arrow indicators between top row */}
            <div className="absolute top-[42px] left-[33%] text-[#ccc]"><ArrowRight size={16} /></div>
            <div className="absolute top-[42px] left-[63%] text-[#ccc]"><ArrowRight size={16} /></div>

            {/* Right side arrow (down) */}
            <div className="absolute top-[50%] right-[4%] text-[#ccc] rotate-90"><ArrowRight size={16} /></div>

            {/* Bottom row: steps 5, 4, 3 (reversed for loop direction) */}
            {[5, 4, 3].map((i, idx) => {
              const positions = [
                { left: "8%", bottom: "0" },
                { left: "38%", bottom: "0" },
                { left: "68%", bottom: "0" },
              ];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (3 + idx) * 0.1 }}
                  className="absolute"
                  style={{ ...positions[idx], width: "26%" }}
                >
                  <LoopNode step={loopSteps[i]} index={i} isActive={activeStep === i} onClick={() => setActiveStep(activeStep === i ? null : i)} />
                </motion.div>
              );
            })}

            {/* Arrow indicators between bottom row (reversed) */}
            <div className="absolute bottom-[42px] left-[33%] text-[#ccc] rotate-180"><ArrowRight size={16} /></div>
            <div className="absolute bottom-[42px] left-[63%] text-[#ccc] rotate-180"><ArrowRight size={16} /></div>

            {/* Left side arrow (up) */}
            <div className="absolute top-[50%] left-[4%] text-[#ccc] -rotate-90"><ArrowRight size={16} /></div>
          </div>
        </div>

        {/* ─── Mobile: Vertical Loop ─── */}
        <div className="md:hidden space-y-3">
          {loopSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <LoopNode step={step} index={i} isActive={activeStep === i} onClick={() => setActiveStep(activeStep === i ? null : i)} />
              {i < loopSteps.length - 1 && (
                <div className="flex justify-center py-1">
                  <ArrowRight size={14} className="text-[#ddd] rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
          {/* Loop back indicator */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <svg className="w-5 h-5 text-[#00B6C5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M17 1l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 11V9a4 4 0 014-4h14" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 23l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 13v2a4 4 0 01-4 4H3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[12px] text-[#00B6C5] font-semibold">재방문 시 루프 반복</span>
          </div>
        </div>

        {/* Detail panel */}
        {activeStep !== null && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 max-w-lg mx-auto"
          >
            <div className={`bg-white rounded-xl border-2 ${loopSteps[activeStep].borderColor} p-5 shadow-sm`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl ${loopSteps[activeStep].lightColor} flex items-center justify-center`}>
                  {(() => { const Icon = loopSteps[activeStep].icon; return <Icon size={20} className={loopSteps[activeStep].roleColor} />; })()}
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#111]">{loopSteps[activeStep].title}</h3>
                  <span className={`text-[10px] font-bold ${loopSteps[activeStep].roleColor} ${loopSteps[activeStep].roleBg} px-2 py-0.5 rounded-full`}>
                    {loopSteps[activeStep].role}
                  </span>
                </div>
              </div>
              <p className="text-[13px] text-[#666] leading-relaxed">{loopSteps[activeStep].desc}</p>
            </div>
          </motion.div>
        )}

        {/* Loop summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-[#e8e8e8] rounded-full px-5 py-2.5 shadow-sm">
            <svg className="w-4 h-4 text-[#00B6C5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M17 1l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 11V9a4 4 0 014-4h14" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 23l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 13v2a4 4 0 01-4 4H3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[13px] text-[#666] font-medium">
              원장님은 <b className="text-[#111]">녹음 + 확정</b>만, 나머지는 <b className="text-[#00B6C5]">하니</b>가 처리합니다
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Loop Node Component ─── */
function LoopNode({
  step,
  index,
  isActive,
  onClick,
}: {
  step: typeof loopSteps[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = step.icon;
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-3 rounded-xl border-2 transition-all ${
        isActive
          ? `${step.lightColor} ${step.borderColor} shadow-md`
          : "bg-white border-[#f0f0f0] hover:border-[#ddd] hover:shadow-sm"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl ${isActive ? step.color : "bg-[#f5f5f5]"} flex items-center justify-center shrink-0 transition-colors`}>
          <Icon size={18} className={isActive ? "text-white" : "text-[#999]"} />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-[#bbb]">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="text-[14px] font-bold text-[#111] truncate">{step.title}</h3>
          </div>
          <span className={`text-[10px] font-semibold ${step.roleColor}`}>{step.role}</span>
        </div>
      </div>
    </button>
  );
}
