/*
 * Design: hanitek.kr 스타일 — 코어 루프 시각화 (압축 레이아웃)
 * 녹음→차트→알림→재방문 4단계 스텝
 * 틸(#00B6C5) 브랜드 컬러
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
  },
  {
    step: "02",
    icon: FileCheck,
    title: "AI 차트 확정",
    who: "원장",
    description: "AI가 SOAP 차트를 자동 생성. 확인 후 확정 버튼 1탭이면 끝.",
  },
  {
    step: "03",
    icon: Bell,
    title: "자동 알림",
    who: "시스템",
    description: "권장 내원일 D-1에 카카오톡 리마인드 자동 생성. 실장은 발송만.",
  },
  {
    step: "04",
    icon: RotateCcw,
    title: "환자 재방문",
    who: "환자",
    description: "알림을 받은 환자가 내원하면 체크인 → 루프가 반복됩니다.",
  },
];

export default function CoreLoopSection() {
  return (
    <section className="py-14 md:py-18 bg-[#fafafa]">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-bold text-hani bg-hani/10 px-3 py-1 rounded-full mb-3 tracking-wide">
            CORE LOOP
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#333] tracking-tight">
            단 하나의 루프로 환자가 돌아옵니다
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto text-sm">
            하니에이전트의 모든 기능은 이 코어 루프를 완성하기 위해 존재합니다.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-[44px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-0.5 bg-gradient-to-r from-hani/30 via-hani/20 to-hani/30" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-3">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="relative z-10 mb-3">
                  <div className="w-16 h-16 rounded-2xl bg-hani/10 flex items-center justify-center transition-transform group-hover:scale-110 border border-white shadow-sm">
                    <s.icon className="w-6 h-6 text-hani" />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-hani text-white text-[9px] font-bold flex items-center justify-center">
                    {s.step}
                  </span>
                </div>

                <span className="text-[10px] font-semibold text-hani bg-hani/10 px-2 py-0.5 rounded-full mb-1.5">
                  {s.who}
                </span>
                <h3 className="text-sm font-bold text-[#333] mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">{s.description}</p>

                {i < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-2">
                    <svg className="w-4 h-4 text-[#ddd]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Role summary — 압축된 2열 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 grid md:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-xl p-4 border border-[#eee]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-hani" />
              <span className="text-sm font-bold text-[#333]">원장님이 하는 일</span>
            </div>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>1. 녹음 시작/종료 — 버튼 2번</li>
              <li>2. SOAP 확인 후 확정 — 1탭</li>
              <li>3. 권장 내원 시점 선택 — 1탭</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-4 border border-[#eee]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-hani" />
              <span className="text-sm font-bold text-[#333]">실장이 하는 일</span>
            </div>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>1. 체크인 — 이름 검색 + 탭</li>
              <li>2. 인박스 태스크 순서대로 처리</li>
              <li>3. 카카오톡 발송 — 1탭</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
