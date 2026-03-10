/*
 * Design: Clinical Dashboard — Modern SaaS
 * Core Loop: 녹음→차트→알림→재방문 코어 루프를 스텝 다이어그램으로 시각화
 */
import { motion } from "framer-motion";
import { Mic, FileCheck, Bell, RotateCcw } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Mic,
    title: "녹음",
    who: "원장",
    description: "진료 중 녹음 버튼 한 번. AI가 실시간으로 음성을 텍스트로 변환합니다.",
    color: "bg-hani-green",
    lightColor: "bg-hani-green/10",
    textColor: "text-hani-green",
  },
  {
    step: "02",
    icon: FileCheck,
    title: "AI 차트 확정",
    who: "원장",
    description: "AI가 SOAP 차트를 자동 생성. 원장님은 확인 후 확정 버튼 1탭이면 끝.",
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    step: "03",
    icon: Bell,
    title: "자동 알림",
    who: "시스템",
    description: "권장 내원일 D-1에 카카오톡 리마인드 자동 생성. 실장은 발송 버튼만 누르면 됩니다.",
    color: "bg-amber-500",
    lightColor: "bg-amber-50",
    textColor: "text-amber-600",
  },
  {
    step: "04",
    icon: RotateCcw,
    title: "환자 재방문",
    who: "환자",
    description: "알림을 받은 환자가 내원하면 체크인 → 태스크 자동 해소 → 루프가 반복됩니다.",
    color: "bg-hani-green",
    lightColor: "bg-hani-green/10",
    textColor: "text-hani-green",
  },
];

export default function CoreLoopSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-hani-green tracking-wide uppercase">Core Loop</span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-hani-slate tracking-tight">
            단 하나의 루프로 환자가 돌아옵니다
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            하니에이전트의 모든 기능은 이 코어 루프를 완성하기 위해 존재합니다.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-0.5 bg-gradient-to-r from-hani-green/30 via-blue-300/30 via-amber-300/30 to-hani-green/30" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step number + icon */}
                <div className="relative z-10 mb-5">
                  <div className={`w-[72px] h-[72px] rounded-2xl ${s.lightColor} flex items-center justify-center transition-transform group-hover:scale-110 border border-white shadow-sm`}>
                    <s.icon className={`w-7 h-7 ${s.textColor}`} />
                  </div>
                  <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${s.color} text-white text-[10px] font-bold flex items-center justify-center shadow-sm`}>
                    {s.step}
                  </span>
                </div>

                {/* Who badge */}
                <span className={`text-[11px] font-semibold ${s.textColor} ${s.lightColor} px-2.5 py-0.5 rounded-full mb-2`}>
                  {s.who}
                </span>

                <h3 className="text-base font-bold text-hani-slate mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px]">{s.description}</p>

                {/* Arrow between steps (mobile) */}
                {i < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-3">
                    <svg className="w-5 h-5 text-border" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Role summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-xl p-5 border border-border/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-hani-green" />
              <span className="text-sm font-bold text-hani-slate">원장님이 하는 일</span>
            </div>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-hani-green mt-0.5 shrink-0">1.</span>
                녹음 시작/종료 — 버튼 2번
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hani-green mt-0.5 shrink-0">2.</span>
                SOAP 확인 후 확정 — 1탭
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hani-green mt-0.5 shrink-0">3.</span>
                권장 내원 시점 선택 — 1탭
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-5 border border-border/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-sm font-bold text-hani-slate">실장이 하는 일</span>
            </div>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5 shrink-0">1.</span>
                체크인 — 이름 검색 + 탭
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5 shrink-0">2.</span>
                인박스 태스크 순서대로 처리
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5 shrink-0">3.</span>
                카카오톡 발송 — 1탭
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
