import { motion, AnimatePresence } from "framer-motion";
import { Play, Mic, FileText, CheckCircle2, Inbox, MessageSquare, Calendar, ArrowRight, X, ChevronRight, Zap } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/mockup-hero-soap-Vh9hWeMEGNYxEwmZzcvZDy.webp";

const clinics = [
  "청원한의원", "운정중앙한의원", "위례하늘애한의원", "경희아양한의원",
  "아현재한의원", "경희일생한의원", "본아한의원",
];

/* ─── Interactive Demo Flow ─── */
interface DemoStep {
  id: number;
  icon: typeof Mic;
  title: string;
  subtitle: string;
  role: string;
  roleColor: string;
  content: React.ReactNode;
  duration: number;
}

function DemoFlow({ onClose }: { onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const steps: DemoStep[] = [
    {
      id: 0, icon: Mic, title: "원장님 음성 녹음", subtitle: "진료 중 녹음 버튼 한 번",
      role: "원장", roleColor: "bg-[#00B6C5] text-white",
      duration: 4000,
      content: (
        <div className="space-y-3">
          <div className="bg-[#f8fafb] border border-[#e8e8e8] rounded-xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#e8f7f8] flex items-center justify-center">
                <span className="text-[11px] font-bold text-[#00B6C5]">김</span>
              </div>
              <div>
                <p className="text-[13px] font-bold text-[#111]">김서연 환자</p>
                <p className="text-[11px] text-[#999]">허리 통증 · 3회차</p>
              </div>
            </div>
            <motion.div
              className="flex items-center gap-3 bg-white border border-[#e8e8e8] rounded-lg p-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                <Mic size={16} className="text-white" />
              </motion.div>
              <div className="flex-1">
                <p className="text-[12px] font-semibold text-red-500">녹음 중...</p>
                <div className="flex gap-[2px] mt-1">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-red-400 rounded-full"
                      animate={{ height: [4, Math.random() * 16 + 4, 4] }}
                      transition={{ duration: 0.4, repeat: Infinity, delay: i * 0.05 }}
                    />
                  ))}
                </div>
              </div>
              <span className="text-[11px] text-[#999] font-mono">02:34</span>
            </motion.div>
          </div>
          <p className="text-[12px] text-[#888] text-center">
            "김서연님 허리 통증 3회차입니다. 침 치료 후 호전 보이고..."
          </p>
        </div>
      ),
    },
    {
      id: 1, icon: FileText, title: "SOAP 차트 자동 완성", subtitle: "AI가 실시간으로 차트 작성",
      role: "AI 자동", roleColor: "bg-amber-500 text-white",
      duration: 4500,
      content: (
        <div className="space-y-3">
          <div className="bg-white border border-[#e8e8e8] rounded-xl overflow-hidden">
            <div className="bg-[#f8fafb] px-4 py-2.5 border-b border-[#f0f0f0] flex items-center justify-between">
              <span className="text-[12px] font-bold text-[#555]">SOAP 차트 — 김서연</span>
              <motion.span
                className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: 2 }}
              >
                AI 생성 중...
              </motion.span>
            </div>
            <div className="p-4 space-y-2.5">
              {[
                { label: "S", text: "허리 통증 3회차. 침 치료 후 호전. 일상생활 시 간헐적 통증 잔존." },
                { label: "O", text: "요추 ROM 개선. 압통 감소. 근긴장도 완화." },
                { label: "A", text: "요추 염좌 호전 중. 추가 2-3회 치료 권장." },
                { label: "P", text: "침 치료 + 부항. 1주 후 재내원 권장." },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.4 }}
                  className="flex gap-2"
                >
                  <span className="text-[11px] font-extrabold text-[#00B6C5] bg-[#e8f7f8] w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5">
                    {item.label}
                  </span>
                  <p className="text-[12px] text-[#555] leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2, icon: CheckCircle2, title: "원장님 확정 → T1 자동 생성", subtitle: "실장님 인박스에 태스크가 나타납니다",
      role: "원장 → 실장", roleColor: "bg-green-500 text-white",
      duration: 4000,
      content: (
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 border border-green-200 rounded-xl p-3 text-center"
          >
            <CheckCircle2 size={20} className="text-green-500 mx-auto mb-1" />
            <p className="text-[13px] font-bold text-green-600">차트 확정 완료!</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white border-2 border-blue-200 rounded-xl p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Inbox size={14} className="text-blue-500" />
              <span className="text-[12px] font-bold text-[#111]">실장님 인박스</span>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded"
              >
                NEW
              </motion.span>
            </div>
            <div className="bg-blue-50/50 rounded-lg p-3">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold text-white bg-blue-500 px-1.5 py-0.5 rounded">T1</span>
                <span className="text-[12px] font-semibold text-[#333]">김서연 — 예약 확인 + 예약관리 카톡</span>
              </div>
              <p className="text-[11px] text-[#888] mt-1">AI 맞춤 카톡 메시지 생성 완료</p>
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      id: 3, icon: Calendar, title: "T2 · T3 자동 생성", subtitle: "예약일 기준으로 리마인드 태스크가 자동 생성됩니다",
      role: "AI 자동", roleColor: "bg-amber-500 text-white",
      duration: 4500,
      content: (
        <div className="space-y-3">
          <div className="bg-[#f8fafb] border border-[#e8e8e8] rounded-xl p-3">
            <div className="flex items-center gap-2 mb-3">
              <Calendar size={14} className="text-[#00B6C5]" />
              <span className="text-[12px] font-bold text-[#555]">김서연 예약: 3월 24일 (월)</span>
            </div>
            <div className="relative pl-4 border-l-2 border-dashed border-[#d5eef0] space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-green-50 border border-green-200 rounded-lg p-3"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold text-white bg-green-500 px-1.5 py-0.5 rounded">T2</span>
                  <span className="text-[12px] font-semibold text-[#333]">D-1 리마인드 카톡</span>
                </div>
                <p className="text-[11px] text-[#888] mt-1">3월 23일(일) 자동 생성 → 실장님 인박스</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="bg-amber-50 border border-amber-200 rounded-lg p-3"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold text-white bg-amber-500 px-1.5 py-0.5 rounded">T3</span>
                  <span className="text-[12px] font-semibold text-[#333]">D+1 리마인드 카톡</span>
                </div>
                <p className="text-[11px] text-[#888] mt-1">미방문 시 3월 25일(화) 자동 생성</p>
              </motion.div>
            </div>
          </div>
          <div className="bg-[#f0fafb] border border-[#d5eef0] rounded-lg p-2.5 text-center">
            <p className="text-[11px] text-[#00B6C5] font-semibold">
              <Zap size={11} className="inline mr-1" />
              모든 카톡은 AI가 차트 기반으로 환자별 맞춤 생성
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 4, icon: MessageSquare, title: "환자가 카톡을 받습니다", subtitle: "맞춤형 메시지로 재내원을 유도합니다",
      role: "환자", roleColor: "bg-purple-500 text-white",
      duration: 4000,
      content: (
        <div className="space-y-3">
          <div className="bg-[#B2C7D9] rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2.5">
              <div className="w-7 h-7 rounded-full bg-[#FEE500] flex items-center justify-center">
                <MessageSquare size={12} className="text-[#3C1E1E]" />
              </div>
              <span className="text-[12px] font-bold text-[#111]">OO한의원</span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-3.5"
            >
              <p className="text-[12px] text-[#333] leading-relaxed">
                안녕하세요 김서연님, OO한의원입니다. 😊
                <br /><br />
                원장님께서 허리 통증 치료 경과를 위해 3월 24일(월)경 내원을 권해 주셨어요.
                <br /><br />
                예약 도와드릴까요?
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="bg-green-50 border border-green-200 rounded-xl p-3 text-center"
          >
            <p className="text-[13px] font-bold text-green-600">
              ✅ 환자 재내원 → 다시 체크인 → 루프 반복!
            </p>
          </motion.div>
        </div>
      ),
    },
  ];

  // Auto-advance timer
  useEffect(() => {
    if (!autoPlay) return;
    setProgress(0);
    const duration = steps[currentStep].duration;
    const interval = 50;
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += interval;
      setProgress((elapsed / duration) * 100);
      if (elapsed >= duration) {
        clearInterval(timer);
        if (currentStep < steps.length - 1) {
          setCurrentStep(s => s + 1);
        } else {
          setAutoPlay(false);
        }
      }
    }, interval);

    return () => clearInterval(timer);
  }, [currentStep, autoPlay]);

  const goToStep = useCallback((i: number) => {
    setCurrentStep(i);
    setAutoPlay(true);
    setProgress(0);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 pt-5 pb-3 flex items-center justify-between">
          <div>
            <p className="text-[16px] font-extrabold text-[#111]">하니에이전트 작동 흐름</p>
            <p className="text-[12px] text-[#888]">환자 한 명의 전체 사이클을 보여드립니다</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f0f0f0] transition-colors text-[#888]"
          >
            <X size={18} />
          </button>
        </div>

        {/* Step indicators */}
        <div className="px-5 flex gap-1.5 mb-4">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => goToStep(i)}
              className="flex-1 h-1.5 rounded-full overflow-hidden bg-[#e8e8e8] cursor-pointer"
            >
              <motion.div
                className="h-full bg-[#00B6C5] rounded-full"
                style={{
                  width: i < currentStep ? "100%" : i === currentStep ? `${progress}%` : "0%",
                }}
              />
            </button>
          ))}
        </div>

        {/* Current step */}
        <div className="px-5 pb-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Step header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#e8f7f8] flex items-center justify-center">
                  {(() => { const Icon = steps[currentStep].icon; return <Icon size={18} className="text-[#00B6C5]" />; })()}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-[15px] font-extrabold text-[#111]">{steps[currentStep].title}</p>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${steps[currentStep].roleColor}`}>
                      {steps[currentStep].role}
                    </span>
                  </div>
                  <p className="text-[12px] text-[#888]">{steps[currentStep].subtitle}</p>
                </div>
              </div>

              {/* Step content */}
              {steps[currentStep].content}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#f0f0f0]">
            <span className="text-[11px] text-[#bbb] font-medium">
              {currentStep + 1} / {steps.length}
            </span>
            <div className="flex gap-2">
              {currentStep > 0 && (
                <button
                  onClick={() => goToStep(currentStep - 1)}
                  className="h-8 px-3 text-[12px] font-semibold text-[#888] border border-[#e8e8e8] rounded-lg hover:bg-[#f8f8f8] transition-colors"
                >
                  이전
                </button>
              )}
              {currentStep < steps.length - 1 ? (
                <button
                  onClick={() => goToStep(currentStep + 1)}
                  className="h-8 px-4 text-[12px] font-bold text-white bg-[#00B6C5] hover:bg-[#00a3b1] rounded-lg transition-colors flex items-center gap-1"
                >
                  다음 <ChevronRight size={12} />
                </button>
              ) : (
                <button
                  onClick={onClose}
                  className="h-8 px-4 text-[12px] font-bold text-white bg-[#111] hover:bg-[#333] rounded-lg transition-colors flex items-center gap-1"
                >
                  닫기
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Main Hero Section ─── */
export default function HeroSection() {
  const [demoOpen, setDemoOpen] = useState(false);

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
            <button
              onClick={() => setDemoOpen(true)}
              className="inline-flex items-center justify-center gap-2 h-12 px-6 border border-[#ddd] hover:border-[#bbb] text-[#333] font-medium rounded-lg text-[15px] transition-colors bg-white"
            >
              <Play size={16} className="text-[#00B6C5]" />
              작동 흐름 보기
            </button>
          </div>
        </motion.div>

        {/* Product image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 max-w-3xl mx-auto"
        >
          <div className="relative rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-[#e8e8e8]">
            <img
              src={HERO_IMG}
              alt="HaniAgent SOAP 차트 화면"
              className="w-full"
            />
          </div>
        </motion.div>

        {/* Trust marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14"
        >
          <p className="text-center text-[13px] text-[#999] font-medium mb-5">
            전국 한의원에서 사용 중
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...clinics, ...clinics, ...clinics].map((name, i) => (
                <div
                  key={i}
                  className="shrink-0 mx-5 px-5 py-2 bg-[#f8f8f8] rounded-full text-[13px] text-[#888] font-medium whitespace-nowrap"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Interactive Demo Modal */}
      <AnimatePresence>
        {demoOpen && <DemoFlow onClose={() => setDemoOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}
