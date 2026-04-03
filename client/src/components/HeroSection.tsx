import { motion, AnimatePresence } from "framer-motion";
import { Mic, FileText, CheckCircle2, Inbox, MessageSquare, Calendar, ArrowRight, Monitor, Send, Volume2, Radio } from "lucide-react";
import { useState, useEffect } from "react";

/* ─── 한의원 로고 + 이름 (2줄, 반대 방향) ─── */
const clinicsRow1 = [
  { name: "청원한의원", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/0_edZryrad2Zm3qPaULcBn03_1773911281178_na1fn_L2hvbWUvdWJ1bnR1L2NoZW9uZ3dvbl9sb2dv_d166eaa0.png" },
  { name: "운정중앙한의원", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/1_p7gW1fHPaZqOqB6Y1kznjz_1773911268195_na1fn_L2hvbWUvdWJ1bnR1L2xvZ28_bb813000.webp" },
  { name: "위례하늘애한의원", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/2_vh6lyxEHaJlJePbC4ZoSDw_1773911265524_na1fn_L2hvbWUvdWJ1bnR1L2xvZ28_4eb1fa82.png" },
  { name: "경희아양한의원", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/3_54vGt0h6ziDodkO0SGa1ad_1773911290265_na1fn_L2hvbWUvdWJ1bnR1L2xvZ29zL2t5dW5naGVlX2F5YW5nX2xvZ28_a043b974.webp" },
  { name: "이든한의원", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/edeun_logo_751a06ef.jpeg" },
  { name: "친절한홍한의원", logo: "" },
];
const clinicsRow2 = [
  { name: "아현재한의원", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/4_yMO9swfD3XajE4qBTzG3zm_1773911249974_na1fn_L2hvbWUvdWJ1bnR1L2Rvd25sb2Fkcy9haHl1bmphZV9sb2dv_6cab7fd0.webp" },
  { name: "경희일생한의원", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/5_ri2iLqsjWeIgn6gjdb3Qay_1773911298365_na1fn_L2hvbWUvdWJ1bnR1L3VwbG9hZC9zZWFyY2hfaW1hZ2VzLzZGZ0dickRMZFg0ag_2ffc15fc.jpg" },
  { name: "본아한의원", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/6_91Uvbf1EikDoAzuRHnRL0u_1773911261683_na1fn_L2hvbWUvdWJ1bnR1L2Rvd25sb2Fkcy9ib25haGFuaV9sb2dv_35db1364.webp" },
  { name: "감동한의원 양주점", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/gamdong_logo_37d324b6.jpeg" },
  { name: "청이담한의원", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/cheongeedam_logo_dd587ec3.png" },
];

/* ─── 작동 흐름 단계 (7단계) ─── */
const flowSteps = [
  { icon: Mic, label: "음성 녹음", role: "원장", roleColor: "text-[#00B6C5]", roleBg: "bg-[#e8f7f8]" },
  { icon: FileText, label: "SOAP 차트", role: "AI", roleColor: "text-amber-600", roleBg: "bg-amber-50" },
  { icon: CheckCircle2, label: "확정 1탭", role: "원장", roleColor: "text-[#00B6C5]", roleBg: "bg-[#e8f7f8]" },
  { icon: Inbox, label: "예약확인", role: "시스템", roleColor: "text-blue-600", roleBg: "bg-blue-50" },
  { icon: MessageSquare, label: "D-1 카톡", role: "실장", roleColor: "text-purple-600", roleBg: "bg-purple-50" },
  { icon: Send, label: "D+1 카톡", role: "실장", roleColor: "text-rose-600", roleBg: "bg-rose-50" },
  { icon: Calendar, label: "재내원", role: "루프", roleColor: "text-green-600", roleBg: "bg-green-50" },
];

/* ─── 실제 UI 기반 인터랙티브 데모 (7단계) ─── */
function HeroFlowAnimation() {
  const [activeStep, setActiveStep] = useState(0);
  const phases = ["recording", "soap", "confirm", "t1", "katalk", "katalk_d1", "revisit"] as const;
  type Phase = typeof phases[number];
  const [phase, setPhase] = useState<Phase>("recording");

  useEffect(() => {
    const durations = [3500, 4000, 2500, 3000, 4500, 4000, 3000];
    const timeout = setTimeout(() => {
      setActiveStep(prev => {
        const next = (prev + 1) % phases.length;
        setPhase(phases[next]);
        return next;
      });
    }, durations[activeStep]);
    return () => clearTimeout(timeout);
  }, [activeStep]);

  const goTo = (i: number) => { setActiveStep(i); setPhase(phases[i]); };

  return (
    <div className="w-full max-w-3xl mx-auto px-2 sm:px-0">
      {/* Step indicator */}
      <div className="flex items-center justify-center gap-0.5 sm:gap-1 mb-4 sm:mb-5 overflow-x-auto pb-1 scrollbar-hide">
        {flowSteps.map((step, i) => (
          <div key={i} className="flex items-center gap-0.5 sm:gap-1 shrink-0">
            <motion.button
              onClick={() => goTo(i)}
              className={`flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2.5 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-[11px] font-semibold transition-all ${
                i === activeStep
                  ? "bg-[#00B6C5] text-white shadow-[0_2px_12px_rgba(0,182,197,0.3)]"
                  : i < activeStep ? "bg-[#e8f7f8] text-[#00B6C5]" : "bg-[#f5f5f5] text-[#999] hover:bg-[#eee]"
              }`}
            >
              <step.icon size={11} className="shrink-0" />
              <span className="hidden sm:inline">{step.label}</span>
            </motion.button>
            {i < flowSteps.length - 1 && (
              <ArrowRight size={8} className={`shrink-0 ${i < activeStep ? "text-[#00B6C5]" : "text-[#ddd]"}`} />
            )}
          </div>
        ))}
      </div>

      {/* App window */}
      <div className="relative bg-white rounded-2xl border border-[#e8e8e8] shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#fafafa] border-b border-[#f0f0f0]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[11px] text-[#bbb] font-medium ml-2">HaniAgent</span>
          <div className="flex-1" />
          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${flowSteps[activeStep].roleBg} ${flowSteps[activeStep].roleColor}`}>
            {flowSteps[activeStep].role}
          </span>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-5 md:p-6 min-h-[260px] sm:min-h-[320px] md:min-h-[360px]">
          <AnimatePresence mode="wait">
            {/* Step 1: 음성 녹음 — 간결한 인포그래픽 */}
            {phase === "recording" && (
              <motion.div key="rec" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
                <div className="flex flex-col items-center justify-center min-h-[280px] sm:min-h-[320px]">
                  {/* 인포그래픽: 원장-환자 진료 녹음 */}
                  <div className="flex items-center gap-6 sm:gap-10 mb-6">
                    {/* 원장 */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex flex-col items-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#e8f7f8] flex items-center justify-center mb-2 border-2 border-[#00B6C5]/30">
                        <span className="text-[20px] sm:text-[22px]">👨‍⚕️</span>
                      </div>
                      <span className="text-[11px] sm:text-[12px] font-bold text-[#333]">원장</span>
                      <span className="text-[9px] text-[#999]">진료 중</span>
                    </motion.div>

                    {/* 음파 애니메이션 */}
                    <motion.div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                          <motion.div
                            key={i}
                            className="w-1 bg-[#00B6C5] rounded-full"
                            animate={{ height: [8, 16 + Math.random() * 20, 8] }}
                            transition={{ duration: 0.6 + Math.random() * 0.4, repeat: Infinity, delay: i * 0.1 }}
                          />
                        ))}
                      </div>
                      <motion.div
                        className="flex items-center gap-1.5 bg-red-500 text-white px-3 py-1.5 rounded-full"
                        animate={{ opacity: [1, 0.7, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Radio size={10} />
                        <span className="text-[10px] font-bold">녹음 중</span>
                      </motion.div>
                    </motion.div>

                    {/* 환자 */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex flex-col items-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-50 flex items-center justify-center mb-2 border-2 border-amber-200/50">
                        <span className="text-[20px] sm:text-[22px]">🧑</span>
                      </div>
                      <span className="text-[11px] sm:text-[12px] font-bold text-[#333]">환자</span>
                      <span className="text-[9px] text-[#999]">김서연</span>
                    </motion.div>
                  </div>

                  {/* 실시간 텍스트 변환 */}
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="w-full max-w-md">
                    <div className="bg-[#f8fafb] border border-[#e8e8e8] rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Volume2 size={12} className="text-[#00B6C5]" />
                        <span className="text-[10px] font-bold text-[#555]">실시간 텍스트 변환</span>
                        <div className="flex items-center gap-1 ml-auto">
                          <span className="text-[9px] text-[#999]">저장</span>
                          <div className="w-7 h-3.5 bg-[#00B6C5] rounded-full relative">
                            <div className="absolute right-0.5 top-0.5 w-2.5 h-2.5 bg-white rounded-full" />
                          </div>
                          <span className="text-[9px] font-semibold text-[#00B6C5]">실시간</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} className="flex gap-2">
                          <span className="text-[9px] font-bold text-[#00B6C5] bg-[#e8f7f8] px-1.5 py-0.5 rounded shrink-0">원장</span>
                          <p className="text-[11px] text-[#555]">허리 통증은 언제부터 시작됐어요?</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="flex gap-2">
                          <span className="text-[9px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded shrink-0">환자</span>
                          <p className="text-[11px] text-[#555]">일주일 전에 무거운 거 들다가 삐끗했어요</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} className="flex gap-2">
                          <span className="text-[9px] font-bold text-[#00B6C5] bg-[#e8f7f8] px-1.5 py-0.5 rounded shrink-0">원장</span>
                          <p className="text-[11px] text-[#555]">집에서 핫팩 해주시고, 무거운 거 당분간 안 드는 게...</p>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Step 2: SOAP 차트 — 실제 haniagent.kr 통합보드 UI */}
            {phase === "soap" && (
              <motion.div key="soap" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
                {/* 환자 정보 + 확정 대기 */}
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-[#f0f0f0]">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] font-bold text-[#111]">김서연</span>
                    <span className="text-[9px] font-bold text-amber-700 bg-amber-200 px-1.5 py-0.5 rounded">확정 대기</span>
                    <span className="text-[9px] font-bold text-green-700 bg-green-100 px-1.5 py-0.5 rounded">Lite</span>
                  </div>
                  <span className="text-[10px] text-[#999]">3회차 · 14:51</span>
                </div>

                {/* 실장 전달 메모 */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-3">
                  <span className="text-[10px] font-semibold text-[#888] mb-1 block">실장 전달 메모</span>
                  <div className="bg-[#f8f8f8] rounded-lg px-3 py-2 text-[11px] text-[#999] border border-[#eee]">실장에게 전달할 메모</div>
                </motion.div>

                {/* 권장 방문일 */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-semibold text-[#888]">권장 방문일</span>
                  <div className="flex gap-1">
                    {["1일", "3일", "1주", "2주", "1달", "미정"].map((d, i) => (
                      <span key={d} className={`text-[9px] px-2 py-1 rounded-md font-medium ${
                        i === 1 ? "bg-amber-300 text-amber-900 font-bold" : "bg-[#f0f0f0] text-[#999]"
                      }`}>
                        {d}{i === 1 && " AI"}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* S 섹션 — 파란 점선 테두리 */}
                <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="border-2 border-dashed border-blue-300 rounded-xl p-3 mb-2.5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-extrabold text-white bg-blue-500 w-5 h-5 rounded flex items-center justify-center shrink-0">S</span>
                  </div>
                  <div className="space-y-1.5 pl-1">
                    <div>
                      <span className="text-[10px] font-bold text-[#333]">C/C</span>
                      <p className="text-[11px] text-[#555] leading-relaxed">좌측 허리/둔부 통증</p>
                      <p className="text-[10px] text-[#777] leading-relaxed">좌측 허리, 엉덩이 쪽 지속 통증<br/>앉았다 일어날 때 심함</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#333]">O/S</span>
                      <p className="text-[10px] text-[#777]">좌측 허리/둔부 통증 · 2026.04.03(3일 전)</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#333]">MOT</span>
                      <p className="text-[10px] text-[#777]">무거운 장바구니 들다가 허리 삐끗</p>
                    </div>
                  </div>
                </motion.div>

                {/* O 섹션 — 파란 점선 테두리 */}
                <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }} className="border-2 border-dashed border-blue-300 rounded-xl p-3 mb-2.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-extrabold text-white bg-blue-500 w-5 h-5 rounded flex items-center justify-center shrink-0">O</span>
                  </div>
                  <p className="text-[10px] text-[#777] pl-1 leading-relaxed">요추 전굴 40도 · 요추 신전 10도<br/>둔부 압통(+) · 하지직거상(-)<br/>맥: 현맥, 설: 설홍</p>
                </motion.div>

                {/* A 섹션 — 빨간 점선 테두리 */}
                <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3 }} className="border-2 border-dashed border-red-300 rounded-xl p-3 mb-2.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-extrabold text-white bg-red-400 w-5 h-5 rounded flex items-center justify-center shrink-0">A</span>
                  </div>
                  <div className="pl-1 space-y-1">
                    {["S3350 - 요추의 염좌 및 긴장", "M5456 - 요통/요추부", "U238 - 비증(痺證)"].map((code) => (
                      <div key={code} className="flex items-center gap-1.5">
                        <CheckCircle2 size={10} className="text-green-500 shrink-0" />
                        <span className="text-[10px] text-[#555]">{code}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* P 섹션 — 빨간 점선 테두리 + 코치 + 관용구 */}
                <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.7 }} className="border-2 border-dashed border-red-300 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-extrabold text-white bg-red-400 w-5 h-5 rounded flex items-center justify-center shrink-0">P</span>
                    <span className="text-[9px] font-bold text-green-700 bg-green-100 px-1.5 py-0.5 rounded">코치</span>
                    <span className="text-[9px] font-bold text-violet-700 bg-violet-100 px-1.5 py-0.5 rounded ml-auto cursor-pointer hover:bg-violet-200 transition-colors">📋 관용구</span>
                  </div>
                  <div className="pl-1 text-[10px] text-[#555] leading-relaxed">
                    <p>SCHED: 3일 뒤 1회 내원</p>
                    <p className="text-[#00B6C5] font-semibold">COACH: 무거운 거 당분간 들지 말기</p>
                    <p className="text-[#00B6C5] font-semibold">COACH: 집에서 핫팩 하기</p>
                    <p className="text-[#00B6C5] font-semibold">COACH: 앉아있을 때 허리 펴고 쿠션 받치기</p>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Step 3: 확정 */}
            {phase === "confirm" && (
              <motion.div key="confirm" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }} className="flex flex-col items-center justify-center min-h-[280px]">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 12 }} className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  <CheckCircle2 size={40} className="text-green-500" />
                </motion.div>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-[18px] font-extrabold text-[#111] mb-2">차트 확정 완료!</motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-[13px] text-[#888] text-center">원장님은 여기까지. 버튼 2번 + 확정 1탭.<br/>나머지는 시스템이 알아서 합니다.</motion.p>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} className="mt-5 flex items-center gap-3 text-[11px] text-[#aaa]">
                  <span className="flex items-center gap-1"><Inbox size={12} /> 예약확인 태스크 생성 중...</span>
                  <span className="flex items-center gap-1"><FileText size={12} /> EMR 대기열 추가...</span>
                </motion.div>
              </motion.div>
            )}

            {/* Step 4: 예약확인 — 실장 인박스 UI */}
            {phase === "t1" && (
              <motion.div key="t1" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
                <div className="flex items-center gap-2 mb-4">
                  <Inbox size={16} className="text-blue-500" />
                  <p className="text-[14px] font-bold text-[#111]">실장님 인박스</p>
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full">새 태스크</motion.span>
                </div>
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white border-2 border-amber-200 rounded-xl p-4 mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-extrabold text-amber-800 bg-amber-200 px-2 py-0.5 rounded">예약확인</span>
                    <span className="text-[10px] text-[#999]">현장안내</span>
                    <div className="flex-1" />
                    <span className="text-[10px] text-[#bbb]">방금</span>
                  </div>
                  <p className="text-[13px] font-bold text-[#333]">김서연</p>
                  <p className="text-[11px] text-[#888] mt-1">예약 확인 + 예약관리 카톡 발송</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg">
                      <MessageSquare size={12} />카톡
                    </div>
                    <div className="text-[11px] text-[#999] bg-[#f5f5f5] px-3 py-1.5 rounded-lg">안내불필요</div>
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="bg-[#f8fafb] border border-[#e8e8e8] rounded-lg p-3 flex items-center gap-2">
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded">D-1 카톡</span>
                  <span className="text-[10px] font-bold text-rose-600 bg-rose-100 px-1.5 py-0.5 rounded">D+1 카톡</span>
                  <p className="text-[11px] text-[#888]">예약일 기준 D-1, D+1에 자동 생성됩니다</p>
                </motion.div>
              </motion.div>
            )}

            {/* Step 5: D-1 카톡 — 생활코칭 중심 */}
            {phase === "katalk" && (
              <motion.div key="katalk" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-extrabold text-blue-700 bg-blue-200 px-2 py-0.5 rounded">D-1 카톡</span>
                  <p className="text-[14px] font-bold text-[#111]">D-1 리마인드 카톡</p>
                  <span className="text-[10px] text-[#999] bg-[#f5f5f5] px-2 py-0.5 rounded">예약 하루 전 자동 생성</span>
                </div>
                <div className="bg-[#B2C7D9] rounded-2xl p-4 max-w-sm mx-auto">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#FEE500] flex items-center justify-center">
                      <MessageSquare size={14} className="text-[#3C1E1E]" />
                    </div>
                    <span className="text-[13px] font-bold text-white">OO한의원</span>
                  </div>
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-[13px] text-[#333] leading-relaxed">
                      안녕하세요, 서연님 😊
                      <br /><br />
                      OO한의원 담당의 <b>이OO 원장</b>입니다.
                      <br />
                      오늘 치료 잘 받으셨는지 모르겠네요.
                      <br /><br />
                      아까 말씀드린 부분 중에서 한두 가지만 다시 적어드릴게요.
                      <br /><br />
                      <b>핫팩은 하루에 2~3번, 15분 정도</b> 해주시면 됩니다. 혈류 순환이 좋아져서 회복이 빨라집니다.
                      <br /><br />
                      <b>무거운 물건은 당분간 피해주시고</b>, 꼭 들어야 할 때는 허리가 아니라 무릎을 굽혀서 들어주시면 됩니다.
                      <br /><br />
                      📅 <b>3월 24일(월) 14:00</b>에 예약 잡혀 있습니다.
                      <br /><br />
                      다음에 오실 때도 최선을 다해 진료하겠습니다. 그때 뵙겠습니다!
                      <br />
                      불편한 점 생기시면 언제든 편하게 연락 주세요 😊
                      <br /><br />
                      이OO 원장 드림
                    </p>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-3 flex items-center justify-between">
                    <p className="text-[10px] text-white/70 font-medium">차트 기반 생활코칭 포함</p>
                    <span className="text-[10px] text-white/50">추후 자동 발송 예정</span>
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="mt-3 text-center">
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-[#888] bg-[#f8f8f8] px-3 py-1.5 rounded-lg">
                    실장님이 [카톡 복사] → 카카오톡에 붙여넣기
                  </span>
                </motion.div>
              </motion.div>
            )}

            {/* Step 6: D+1 카톡 — 생활코칭 팔로업 */}
            {phase === "katalk_d1" && (
              <motion.div key="katalk_d1" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-extrabold text-rose-700 bg-rose-200 px-2 py-0.5 rounded">D+1 카톡</span>
                  <p className="text-[14px] font-bold text-[#111]">D+1 팔로업 카톡</p>
                  <span className="text-[10px] text-[#999] bg-[#f5f5f5] px-2 py-0.5 rounded">미내원 시 자동 생성</span>
                </div>
                <div className="bg-[#B2C7D9] rounded-2xl p-4 max-w-sm mx-auto">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#FEE500] flex items-center justify-center">
                      <MessageSquare size={14} className="text-[#3C1E1E]" />
                    </div>
                    <span className="text-[13px] font-bold text-white">OO한의원</span>
                  </div>
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-[13px] text-[#333] leading-relaxed">
                      안녕하세요, 서연님 😊
                      <br /><br />
                      OO한의원 담당의 <b>이OO 원장</b>입니다.
                      <br />
                      어제 내원 예정이셨는데 못 오셨더라고요. 별일 없으신지 걱정이 돼서 연락드렸어요.
                      <br /><br />
                      요즘 허리 쪽 통증이 심해지지는 않으셨을지 걱정이 됩니다.
                      <br /><br />
                      말씀드렸던 핫팩, 틈틈이 해주고 계시면 좋겠습니다 🙂
                      <br /><br />
                      불편하신 부분이 있으시면 참지 마시고 편하게 오셔도 됩니다. 예약 없이 오셔도 괜찮습니다.
                      <br /><br />
                      이OO 원장 드림 🙏
                    </p>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-3 flex items-center justify-between">
                    <p className="text-[10px] text-white/70 font-medium">차트 기반 생활코칭 포함</p>
                    <span className="text-[10px] text-white/50">노쇼 방지 팔로업</span>
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="mt-3 text-center">
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-[#888] bg-[#f8f8f8] px-3 py-1.5 rounded-lg">
                    실장님이 [카톡 복사] → 카카오톡에 붙여넣기
                  </span>
                </motion.div>
              </motion.div>
            )}

            {/* Step 7: 재내원 — 루프 */}
            {phase === "revisit" && (
              <motion.div key="revisit" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }} className="flex flex-col items-center justify-center min-h-[280px]">
                <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 150, damping: 12 }} className="w-20 h-20 rounded-full bg-[#e8f7f8] flex items-center justify-center mb-4">
                  <Calendar size={36} className="text-[#00B6C5]" />
                </motion.div>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-[18px] font-extrabold text-[#111] mb-2">환자 재내원!</motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-[13px] text-[#888] mb-1">실장 체크인 → 태스크 자동 해소</motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-[12px] text-[#aaa] mb-5">녹음 → 차트 → 확정 → 루프가 다시 시작됩니다</motion.p>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.0 }} className="flex items-center gap-2 bg-[#f0fafb] border border-[#d5eef0] rounded-full px-4 py-2">
                  {flowSteps.map((s, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <s.icon size={11} className="text-[#00B6C5]" />
                      {i < flowSteps.length - 1 && <ArrowRight size={8} className="text-[#ccc]" />}
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ─── Clinic Marquee Row ─── */
function ClinicMarquee({ clinics, reverse = false }: { clinics: typeof clinicsRow1; reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />
      <div className={`flex ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[...clinics, ...clinics, ...clinics, ...clinics].map((clinic, i) => (
          <div key={i} className="shrink-0 mx-1.5 sm:mx-2.5 flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#fafafa] hover:bg-[#f5f5f5] rounded-xl border border-[#eee] transition-colors">
            {clinic.logo ? (
              <img src={clinic.logo} alt={clinic.name} className="w-7 h-7 rounded-lg object-contain bg-white" loading="lazy" />
            ) : (
              <div className="w-7 h-7 rounded-lg bg-[#e8e8e8] flex items-center justify-center shrink-0">
                <span className="text-[10px] font-bold text-[#999]">{clinic.name.charAt(0)}</span>
              </div>
            )}
            <span className="text-[12px] sm:text-[13px] text-[#555] font-medium whitespace-nowrap">{clinic.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── App Download Button (primary = 무료로 시작하기, secondary = 앱 다운로드) ─── */
export function AppDownloadButton({ variant = "primary" }: { variant?: "primary" | "secondary" }) {
  const isPrimary = variant === "primary";
  return (
    <a
      href="https://www.haniagent.kr/auth/login"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-5 sm:px-6 font-semibold rounded-xl text-[14px] sm:text-[15px] transition-all w-full sm:w-auto ${
        isPrimary
          ? "bg-[#111] hover:bg-[#333] text-white shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
          : "bg-white border-2 border-[#e0e0e0] hover:border-[#bbb] text-[#333]"
      }`}
    >
      {isPrimary ? (
        <>
          <ArrowRight size={18} />
          <span>무료로 시작하기</span>
        </>
      ) : (
        <>
          <Monitor size={18} />
          <span>Windows 앱 다운로드</span>
        </>
      )}
    </a>
  );
}

/* ─── Main Hero Section ─── */
export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-10 sm:pt-28 sm:pb-16 md:pt-36 md:pb-20 overflow-hidden">
      {/* Brand gradient background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-[#eef9fa] via-[#f6fcfc] to-white" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[130%] h-[800px] bg-[radial-gradient(ellipse_80%_60%_at_50%_15%,rgba(0,182,197,0.08),transparent)]" />
        <div className="absolute top-0 -left-20 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(0,182,197,0.04),transparent_65%)]" />
        <div className="absolute top-16 -right-16 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,210,220,0.03),transparent_65%)]" />
      </div>

      <div className="container relative z-10">
        {/* Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto px-4 sm:px-0"
        >
          <h1 className="text-[26px] sm:text-[36px] md:text-[48px] lg:text-[52px] font-extrabold text-[#111] leading-[1.15] tracking-tight">
            진료에만 집중할 수 있도록,
            <br />
            <span className="text-[#00B6C5]">가장 똑똑한 AI 시스템</span>
          </h1>
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-[17px] text-[#666] leading-relaxed max-w-md sm:max-w-lg mx-auto">
            녹음 한 번이면 SOAP 차트 작성부터 환자/직원 관리,
            <br className="hidden sm:block" />
            데이터 기반 경영전략까지.
            <br />
            사람의존에서 시스템 경영으로 바꿔보세요.
          </p>

          {/* CTA Buttons: 무료로 시작하기(primary) → 앱 다운로드(secondary) */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <AppDownloadButton variant="primary" />
            <a
              href="https://www.haniagent.kr/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-5 sm:px-6 border-2 border-[#e0e0e0] hover:border-[#bbb] text-[#555] font-medium rounded-xl text-[14px] sm:text-[15px] transition-colors bg-white w-full sm:w-auto"
            >
              <Monitor size={16} />
              Windows 앱 다운로드
            </a>
          </div>
        </motion.div>

        {/* Flow animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 sm:mt-14"
        >
          <HeroFlowAnimation />
        </motion.div>

        {/* Trust marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 sm:mt-16"
        >
          <p className="text-center text-[12px] sm:text-[13px] text-[#999] font-medium mb-4 sm:mb-5">
            탁월한 성과를 가진 한의원들의 선택
          </p>
          <div className="space-y-3">
            <ClinicMarquee clinics={clinicsRow1} />
            <ClinicMarquee clinics={clinicsRow2} reverse />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
