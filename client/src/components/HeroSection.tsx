import { motion, AnimatePresence } from "framer-motion";
import { Mic, FileText, CheckCircle2, Inbox, MessageSquare, Calendar, ArrowRight, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/mockup-hero-soap-Vh9hWeMEGNYxEwmZzcvZDy.webp";

/* ─── 한의원 목록 (두 줄, 반대 방향) ─── */
const clinicsRow1 = [
  "청원한의원", "운정중앙한의원", "위례하늘애한의원", "경희아양한의원",
  "아현재한의원", "경희일생한의원", "본아한의원", "수한의원",
  "온누리한의원", "참좋은한의원",
];
const clinicsRow2 = [
  "한마음한의원", "동의보감한의원", "청아한의원", "하나한의원",
  "보령한의원", "청담한의원", "우리한의원", "미소한의원",
  "경희한의원", "보성한의원",
];

/* ─── 작동 흐름 애니메이션 단계 ─── */
interface FlowStep {
  icon: typeof Mic;
  label: string;
  role: string;
  roleColor: string;
  roleBg: string;
}

const flowSteps: FlowStep[] = [
  { icon: Mic, label: "음성 녹음", role: "원장", roleColor: "text-[#00B6C5]", roleBg: "bg-[#e8f7f8]" },
  { icon: FileText, label: "SOAP 차트", role: "AI", roleColor: "text-amber-600", roleBg: "bg-amber-50" },
  { icon: CheckCircle2, label: "차트 확정", role: "원장", roleColor: "text-[#00B6C5]", roleBg: "bg-[#e8f7f8]" },
  { icon: Inbox, label: "T1 생성", role: "자동", roleColor: "text-blue-600", roleBg: "bg-blue-50" },
  { icon: MessageSquare, label: "D-1 카톡", role: "실장", roleColor: "text-purple-600", roleBg: "bg-purple-50" },
  { icon: Calendar, label: "재내원", role: "루프", roleColor: "text-green-600", roleBg: "bg-green-50" },
];

/* ─── 인라인 작동 흐름 애니메이션 (tiro 스타일 - 히어로 이미지 대체) ─── */
function HeroFlowAnimation() {
  const [activeStep, setActiveStep] = useState(0);
  const [phase, setPhase] = useState<"recording" | "soap" | "confirm" | "t1" | "katalk" | "revisit">("recording");

  useEffect(() => {
    const phases: typeof phase[] = ["recording", "soap", "confirm", "t1", "katalk", "revisit"];
    const durations = [3500, 4000, 2500, 3000, 4000, 3000];
    
    let timeout: NodeJS.Timeout;
    const advance = () => {
      setActiveStep(prev => {
        const next = (prev + 1) % phases.length;
        setPhase(phases[next]);
        return next;
      });
    };
    
    timeout = setTimeout(advance, durations[activeStep]);
    return () => clearTimeout(timeout);
  }, [activeStep]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Step indicator bar */}
      <div className="flex items-center justify-center gap-1 mb-5">
        {flowSteps.map((step, i) => (
          <div key={i} className="flex items-center gap-1">
            <motion.button
              onClick={() => { setActiveStep(i); setPhase(["recording", "soap", "confirm", "t1", "katalk", "revisit"][i] as typeof phase); }}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all ${
                i === activeStep
                  ? "bg-[#00B6C5] text-white shadow-[0_2px_12px_rgba(0,182,197,0.3)]"
                  : "bg-[#f5f5f5] text-[#999] hover:bg-[#eee]"
              }`}
              animate={i === activeStep ? { scale: [1, 1.02, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <step.icon size={12} />
              <span className="hidden sm:inline">{step.label}</span>
            </motion.button>
            {i < flowSteps.length - 1 && (
              <ArrowRight size={10} className={i < activeStep ? "text-[#00B6C5]" : "text-[#ddd]"} />
            )}
          </div>
        ))}
      </div>

      {/* Main animation area */}
      <div className="relative bg-white rounded-2xl border border-[#e8e8e8] shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden">
        {/* Top bar */}
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

        {/* Content area */}
        <div className="p-5 md:p-6 min-h-[320px] md:min-h-[360px]">
          <AnimatePresence mode="wait">
            {phase === "recording" && (
              <motion.div key="recording" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#e8f7f8] flex items-center justify-center">
                    <span className="text-[12px] font-bold text-[#00B6C5]">김</span>
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#111]">김서연 환자</p>
                    <p className="text-[12px] text-[#999]">허리 통증 · 3회차 내원</p>
                  </div>
                </div>
                <div className="bg-[#f8fafb] border border-[#e8e8e8] rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    >
                      <Mic size={20} className="text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[13px] font-bold text-red-500">녹음 중</span>
                        <span className="text-[11px] text-[#999] font-mono">02:34</span>
                      </div>
                      <div className="flex gap-[2px]">
                        {Array.from({ length: 30 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-[3px] bg-red-400 rounded-full"
                            animate={{ height: [3, Math.random() * 20 + 3, 3] }}
                            transition={{ duration: 0.3 + Math.random() * 0.3, repeat: Infinity, delay: i * 0.03 }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-4 bg-white rounded-lg p-3 border border-[#f0f0f0]"
                  >
                    <p className="text-[12px] text-[#666] leading-relaxed italic">
                      "김서연님 허리 통증 3회차입니다. 지난 침 치료 후 호전 양상 보이고, ROM 개선되었습니다..."
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {phase === "soap" && (
              <motion.div key="soap" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[14px] font-bold text-[#111]">AI SOAP 차트 생성</p>
                  <motion.span
                    className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 0.8, repeat: 3 }}
                  >
                    AI 분석 중...
                  </motion.span>
                </div>
                <div className="bg-white border border-[#e8e8e8] rounded-xl overflow-hidden">
                  {[
                    { label: "S", text: "허리 통증 3회차. 침 치료 후 호전. 일상생활 시 간헐적 통증 잔존. 앉아있을 때 뻐근함 호소.", color: "bg-[#00B6C5]" },
                    { label: "O", text: "요추 ROM 개선 (굴곡 60° → 75°). L4-5 압통 감소. 근긴장도 완화.", color: "bg-blue-500" },
                    { label: "A", text: "요추 염좌 호전 중. 추가 2-3회 치료 권장.", color: "bg-amber-500" },
                    { label: "P", text: "침 치료 + 부항. 1주 후 재내원 권장. 스트레칭 교육.", color: "bg-green-500" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.5 }}
                      className="flex gap-3 p-3.5 border-b border-[#f5f5f5] last:border-0"
                    >
                      <span className={`text-[11px] font-extrabold text-white ${item.color} w-6 h-6 rounded flex items-center justify-center shrink-0`}>
                        {item.label}
                      </span>
                      <p className="text-[12px] text-[#555] leading-relaxed">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {phase === "confirm" && (
              <motion.div key="confirm" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}
                className="flex flex-col items-center justify-center min-h-[280px]"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-4"
                >
                  <CheckCircle2 size={40} className="text-green-500" />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-[18px] font-extrabold text-[#111] mb-2"
                >
                  차트 확정 완료!
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-[13px] text-[#888]"
                >
                  실장님 인박스에 태스크가 자동 생성됩니다
                </motion.p>
              </motion.div>
            )}

            {phase === "t1" && (
              <motion.div key="t1" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
                <div className="flex items-center gap-2 mb-4">
                  <Inbox size={16} className="text-blue-500" />
                  <p className="text-[14px] font-bold text-[#111]">실장님 인박스</p>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="text-[10px] font-bold text-white bg-red-500 px-1.5 py-0.5 rounded-full"
                  >
                    1
                  </motion.span>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-blue-50/60 border-2 border-blue-200 rounded-xl p-4 mb-3"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-extrabold text-white bg-blue-500 px-2 py-0.5 rounded">T1</span>
                    <span className="text-[13px] font-bold text-[#333]">김서연 — 예약 확인 + 예약관리 카톡</span>
                  </div>
                  <p className="text-[12px] text-[#888]">AI 맞춤 카톡 메시지 생성 완료</p>
                  <div className="mt-3 flex gap-2">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-[11px] font-semibold text-blue-600 bg-blue-100 px-3 py-1.5 rounded-lg"
                    >
                      카톡 복사
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.0 }}
                      className="text-[11px] font-semibold text-[#888] bg-[#f0f0f0] px-3 py-1.5 rounded-lg"
                    >
                      EMR 복사
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="bg-[#f8fafb] border border-[#e8e8e8] rounded-lg p-3 flex items-center gap-2"
                >
                  <Zap size={12} className="text-[#00B6C5]" />
                  <p className="text-[11px] text-[#888]">T2(D-1), T3(D+1) 태스크도 예약일 기준 자동 생성됩니다</p>
                </motion.div>
              </motion.div>
            )}

            {phase === "katalk" && (
              <motion.div key="katalk" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-extrabold text-white bg-green-500 px-2 py-0.5 rounded">T2</span>
                  <p className="text-[14px] font-bold text-[#111]">D-1 리마인드 카톡</p>
                  <span className="text-[11px] text-[#999]">예약 하루 전</span>
                </div>
                <div className="bg-[#B2C7D9] rounded-2xl p-4 max-w-sm mx-auto">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#FEE500] flex items-center justify-center">
                      <MessageSquare size={14} className="text-[#3C1E1E]" />
                    </div>
                    <span className="text-[13px] font-bold text-white">OO한의원</span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-xl p-4 shadow-sm"
                  >
                    <p className="text-[13px] text-[#333] leading-relaxed">
                      안녕하세요 김서연님 😊
                      <br /><br />
                      내일 <b>3월 24일(월) 오후 2시</b> 예약이 있으셔서 안내드려요.
                      <br /><br />
                      지난 치료 후 허리 상태가 많이 좋아지셨는데, 이번에 마무리 치료 받으시면 더 안정될 거예요.
                      <br /><br />
                      내원이 어려우시면 미리 말씀해 주세요!
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-2 text-center"
                  >
                    <p className="text-[10px] text-white/70 font-medium">AI가 차트 기반으로 맞춤 생성</p>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {phase === "revisit" && (
              <motion.div key="revisit" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}
                className="flex flex-col items-center justify-center min-h-[280px]"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 150, damping: 12 }}
                  className="w-20 h-20 rounded-full bg-[#e8f7f8] flex items-center justify-center mb-4"
                >
                  <Calendar size={36} className="text-[#00B6C5]" />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-[18px] font-extrabold text-[#111] mb-2"
                >
                  환자 재내원!
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-[13px] text-[#888] mb-4"
                >
                  체크인 → 녹음 → 차트 → 루프가 다시 시작됩니다
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center gap-2 bg-[#f0fafb] border border-[#d5eef0] rounded-full px-4 py-2"
                >
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
function ClinicMarquee({ clinics, reverse = false }: { clinics: string[]; reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
      <div className={`flex ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[...clinics, ...clinics, ...clinics].map((name, i) => (
          <div
            key={i}
            className="shrink-0 mx-3 flex items-center gap-2 px-4 py-2 bg-[#f8f8f8] hover:bg-[#f0f0f0] rounded-lg border border-[#f0f0f0] transition-colors"
          >
            <div className="w-6 h-6 rounded bg-[#e8e8e8] flex items-center justify-center shrink-0">
              <span className="text-[9px] font-bold text-[#999]">{name.charAt(0)}</span>
            </div>
            <span className="text-[12px] text-[#666] font-medium whitespace-nowrap">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Hero Section ─── */
export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fffe] to-white -z-10" />

      <div className="container">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-[15px] text-[#00B6C5] font-semibold mb-4 tracking-wide">
            한의원 전용 AI 어시스턴트
          </p>
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-extrabold text-[#111] leading-[1.15] tracking-tight">
            원장님은{" "}
            <br className="hidden sm:block" />
            <span className="text-[#00B6C5]">진료에만 집중하세요!</span>
          </h1>
          <p className="mt-5 text-[16px] md:text-[17px] text-[#666] leading-relaxed max-w-lg mx-auto">
            녹음 한 번이면 SOAP 차트 작성, 내원 안내, 예약 리마인드까지.
            <br />
            나머지는 하니가 다 해놓겠습니다.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://www.haniagent.kr/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-7 bg-[#111] hover:bg-[#333] text-white font-semibold rounded-lg text-[15px] transition-colors"
            >
              무료로 시작하기
            </a>
            <a
              href="https://forms.gle/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 border border-[#00B6C5] hover:bg-[#f0fafb] text-[#00B6C5] font-semibold rounded-lg text-[15px] transition-colors bg-white"
            >
              우리 한의원 맞춤 1:1 무료 컨설팅
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Product flow animation (tiro style) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14"
        >
          <HeroFlowAnimation />
        </motion.div>

        {/* Trust marquee - 2 rows, opposite directions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <p className="text-center text-[13px] text-[#999] font-medium mb-5">
            전국 한의원에서 사용 중
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
