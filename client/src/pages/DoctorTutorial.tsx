/*
 * 원장 온보딩 튜토리얼 페이지
 * Design: hanitek.kr 틸(#00B6C5) 브랜드 컬러, 깔끔한 SaaS 톤
 * 6 Steps: 환영 → 환자 리스트 → 녹음 → SOAP 확인 → 권장시점 → 완료
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mic, MicOff, CheckCircle2, Calendar, ArrowRight, ArrowLeft,
  Play, Square, Clock, FileText, Inbox, MessageSquare,
  ChevronRight, Volume2
} from "lucide-react";
import Logo from "@/components/Logo";

const TOTAL_STEPS = 6;

/* ─── Progress Bar ─── */
function ProgressBar({ step }: { step: number }) {
  const stepNames = ["환영", "환자 리스트", "녹음 체험", "SOAP 확인", "권장시점", "완료"];
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[#f0f0f0]">
      <div className="h-1 bg-[#e5e7eb]">
        <motion.div
          className="h-full bg-[#00B6C5]"
          initial={{ width: 0 }}
          animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      <div className="container flex items-center justify-between h-12">
        <a href="/" className="flex items-center gap-2">
          <Logo className="h-5 w-auto" />
        </a>
        <span className="text-[12px] text-[#999] font-medium">
          Step {step}/{TOTAL_STEPS} — {stepNames[step - 1]}
        </span>
      </div>
    </div>
  );
}

/* ─── Step 1: Welcome ─── */
function StepWelcome({ onNext }: { onNext: () => void }) {
  const roles = [
    { icon: Mic, label: "녹음", desc: "진료 중 녹음 버튼만 누르세요" },
    { icon: CheckCircle2, label: "확정", desc: "AI가 만든 차트를 확인하고 확정" },
    { icon: Calendar, label: "권장시점", desc: "다음 내원 시점을 선택하세요" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-5"
    >
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <Logo className="h-8 w-auto mx-auto mb-6" />
        </motion.div>

        <h1 className="text-[28px] md:text-[32px] font-extrabold text-[#111] leading-tight">
          원장님, 환영합니다
        </h1>
        <p className="mt-3 text-[15px] text-[#888]">
          원장님이 하실 일은 딱 <span className="text-[#00B6C5] font-bold">3가지</span>입니다
        </p>

        <div className="mt-8 grid grid-cols-3 gap-3">
          {roles.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.4 }}
              className="bg-[#f8fafb] border border-[#e8f4f5] rounded-xl p-4 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#e8f7f8] flex items-center justify-center mx-auto mb-3">
                <r.icon className="w-5 h-5 text-[#00B6C5]" strokeWidth={2} />
              </div>
              <p className="text-[14px] font-bold text-[#111]">{r.label}</p>
              <p className="text-[11px] text-[#999] mt-1 leading-snug">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          onClick={onNext}
          className="mt-8 w-full h-12 bg-[#00B6C5] hover:bg-[#00a3b1] text-white font-bold rounded-xl text-[15px] transition-colors flex items-center justify-center gap-2"
        >
          시작하기
          <ArrowRight size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
}

/* ─── Step 2: Patient List ─── */
function StepPatientList({ onNext }: { onNext: () => void }) {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowTooltip(false), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-5"
    >
      <div className="max-w-md w-full">
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mb-4 bg-[#111] text-white text-[13px] px-4 py-2.5 rounded-xl text-center relative"
            >
              실장님이 체크인하면 여기에 환자가 나타납니다
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#111] rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        <h2 className="text-[20px] font-extrabold text-[#111] mb-1">원장 홈</h2>
        <p className="text-[13px] text-[#999] mb-5">진료 대기 환자 목록</p>

        {/* Simulated app screen */}
        <div className="bg-white border border-[#e8e8e8] rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
          {/* App header bar */}
          <div className="px-4 py-3 border-b border-[#f0f0f0] flex items-center justify-between">
            <span className="text-[13px] font-semibold text-[#555]">진료 대기</span>
            <span className="text-[11px] text-[#bbb]">1명</span>
          </div>

          {/* Patient card */}
          <div className="p-4">
            <div className="flex items-center gap-3 p-3 bg-[#fafafa] rounded-xl border border-[#f0f0f0]">
              {/* Status dot */}
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
              
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-bold text-[#111]">김서연</span>
                  <span className="text-[10px] font-semibold text-[#00B6C5] bg-[#e8f7f8] px-1.5 py-0.5 rounded">Active</span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <Clock size={11} className="text-[#bbb]" />
                  <span className="text-[11px] text-[#999]">09:30 체크인</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Record button - highlighted */}
                <motion.button
                  onClick={onNext}
                  className="relative flex items-center gap-1.5 h-9 px-3.5 bg-[#00B6C5] text-white rounded-lg text-[13px] font-semibold"
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Pulse ring */}
                  <motion.span
                    className="absolute inset-0 rounded-lg border-2 border-[#00B6C5]"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  />
                  <Mic size={14} />
                  녹음
                </motion.button>

                {/* Repeat button - dimmed */}
                <button className="flex items-center gap-1 h-9 px-3 bg-[#f0f0f0] text-[#ccc] rounded-lg text-[13px] cursor-not-allowed opacity-40">
                  🔁
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-[12px] text-[#bbb]">
          <span className="inline-flex items-center gap-1">
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >↑</motion.span>
            녹음 버튼을 눌러보세요
          </span>
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Step 3: Recording ─── */
function StepRecording({ onNext }: { onNext: () => void }) {
  const [seconds, setSeconds] = useState(0);
  const [sttLines, setSttLines] = useState<string[]>([]);
  const [canStop, setCanStop] = useState(false);
  const [loading, setLoading] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const allLines = [
    "허리 통증이 2주 전부터 시작됐고요...",
    "침 치료 후에 좀 호전되는 느낌이에요.",
    "다음 주에 한 번 더 오시는 게 좋겠습니다.",
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  useEffect(() => {
    if (seconds === 1) setSttLines([allLines[0]]);
    if (seconds === 2) setSttLines([allLines[0], allLines[1]]);
    if (seconds === 3) {
      setSttLines([allLines[0], allLines[1], allLines[2]]);
      setCanStop(true);
    }
  }, [seconds]);

  const handleStop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setLoading(true);
    setTimeout(onNext, 2000);
  };

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-5"
      >
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-3 border-[#e8e8e8] border-t-[#00B6C5] rounded-full mx-auto mb-4"
          />
          <p className="text-[15px] font-semibold text-[#111]">AI가 차트를 작성하고 있습니다...</p>
          <p className="text-[13px] text-[#999] mt-1">잠시만 기다려주세요</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-5"
    >
      <div className="max-w-md w-full">
        {/* Warning banner */}
        <div className="bg-[#fff8e6] border border-[#f5e6b8] rounded-xl px-4 py-2.5 mb-6 text-center">
          <span className="text-[12px] text-[#b8860b] font-medium">⚠️ 화면을 끄지 마세요</span>
        </div>

        {/* Recording UI */}
        <div className="bg-white border border-[#e8e8e8] rounded-2xl p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
          {/* Waveform animation */}
          <div className="flex items-center justify-center gap-1 h-16 mb-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-[#00B6C5] rounded-full"
                animate={{
                  height: [8, Math.random() * 40 + 10, 8],
                }}
                transition={{
                  duration: 0.6 + Math.random() * 0.4,
                  repeat: Infinity,
                  delay: i * 0.05,
                }}
              />
            ))}
          </div>

          {/* Timer */}
          <div className="text-center mb-5">
            <span className="text-[28px] font-mono font-bold text-[#111]">
              0:{seconds.toString().padStart(2, "0")}
            </span>
          </div>

          {/* STT text area */}
          <div className="bg-[#fafafa] rounded-xl p-4 min-h-[100px] mb-5">
            <p className="text-[11px] text-[#bbb] mb-2 font-medium">실시간 텍스트 변환</p>
            {sttLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[13px] text-[#555] leading-relaxed"
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* Stop button */}
          <motion.button
            onClick={canStop ? handleStop : undefined}
            className={`w-full h-12 rounded-xl font-bold text-[15px] flex items-center justify-center gap-2 transition-all ${
              canStop
                ? "bg-red-500 hover:bg-red-600 text-white cursor-pointer"
                : "bg-[#f0f0f0] text-[#ccc] cursor-not-allowed"
            }`}
            whileTap={canStop ? { scale: 0.97 } : {}}
          >
            {canStop && (
              <motion.span
                className="absolute inset-0 rounded-xl border-2 border-red-500"
                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
            )}
            <Square size={14} />
            녹음 중지
          </motion.button>
        </div>

        {canStop && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-3 text-center text-[12px] text-[#bbb]"
          >
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >↑</motion.span>
            {" "}녹음 중지 버튼을 눌러보세요
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Step 4: SOAP Confirm ─── */
function StepSOAP({ onNext }: { onNext: () => void }) {
  const soap = [
    { key: "S", title: "Subjective", content: "허리 통증 2주 전 발생. 좌측 요부 중심. 앉아있을 때 악화. 기침 시 통증 없음." },
    { key: "O", title: "Objective", content: "요추 ROM: 굴곡 60°(제한), 신전 20°(제한). L4-5 좌측 압통(+). SLR(-)." },
    { key: "A", title: "Assessment", content: "요추 염좌 의심. 디스크 가능성 낮음." },
    { key: "P", title: "Plan", content: "침 치료(요부 아시혈 + 위중, 환도) + 부항. 1주 후 재방문 권장." },
  ];

  const colors: Record<string, string> = {
    S: "bg-blue-50 border-blue-200 text-blue-700",
    O: "bg-green-50 border-green-200 text-green-700",
    A: "bg-amber-50 border-amber-200 text-amber-700",
    P: "bg-purple-50 border-purple-200 text-purple-700",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-5 py-8"
    >
      <div className="max-w-md w-full">
        <h2 className="text-[20px] font-extrabold text-[#111] mb-1">SOAP 차트</h2>
        <p className="text-[13px] text-[#999] mb-5">AI가 자동 생성한 차트를 확인하세요</p>

        {/* Memo field */}
        <div className="bg-[#fafafa] border border-[#e8e8e8] rounded-xl p-3 mb-4 flex items-start gap-2">
          <span className="text-[14px]">📌</span>
          <input
            type="text"
            placeholder="실장 참고용 메모 (선택)"
            className="flex-1 bg-transparent text-[13px] text-[#555] placeholder:text-[#ccc] outline-none"
          />
        </div>

        {/* SOAP cards */}
        <div className="space-y-3 mb-5">
          {soap.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="bg-white border border-[#e8e8e8] rounded-xl p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${colors[s.key]}`}>
                  {s.key}
                </span>
                <span className="text-[12px] text-[#999]">{s.title}</span>
              </div>
              <p className="text-[13px] text-[#555] leading-relaxed">{s.content}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-[12px] text-[#bbb] text-center mb-4">
          내용을 수정할 수도 있어요. 확정을 눌러야 실장님에게 전달됩니다.
        </p>

        {/* Confirm button */}
        <motion.button
          onClick={onNext}
          className="relative w-full h-12 bg-[#00B6C5] hover:bg-[#00a3b1] text-white font-bold rounded-xl text-[15px] transition-colors flex items-center justify-center gap-2"
          whileTap={{ scale: 0.97 }}
        >
          <motion.span
            className="absolute inset-0 rounded-xl border-2 border-[#00B6C5]"
            animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <CheckCircle2 size={16} />
          확정
        </motion.button>
      </div>
    </motion.div>
  );
}

/* ─── Step 5: Recommend Date ─── */
function StepRecommendDate({ onNext }: { onNext: () => void }) {
  const [selected, setSelected] = useState("1주");
  const options = ["1일후", "3일후", "1주", "2주", "1달", "직접", "미정"];

  const handleSelect = (opt: string) => {
    setSelected(opt);
    setTimeout(onNext, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-5"
    >
      <div className="max-w-md w-full">
        <h2 className="text-[20px] font-extrabold text-[#111] mb-1">권장 내원 시점</h2>
        <p className="text-[13px] text-[#999] mb-6">다음 방문 시점을 선택하세요</p>

        {/* P chart context */}
        <div className="bg-[#fafafa] border border-[#e8e8e8] rounded-xl p-4 mb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-md border bg-purple-50 border-purple-200 text-purple-700">P</span>
            <span className="text-[12px] text-[#999]">Plan</span>
          </div>
          <p className="text-[13px] text-[#555]">침 치료(요부 아시혈 + 위중, 환도) + 부항. 1주 후 재방문 권장.</p>
        </div>

        {/* Date options */}
        <div className="flex flex-wrap gap-2 mb-4">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleSelect(opt)}
              className={`relative h-10 px-4 rounded-xl text-[13px] font-semibold transition-all border ${
                selected === opt
                  ? "bg-[#e8f7f8] border-[#00B6C5] text-[#00B6C5]"
                  : "bg-white border-[#e8e8e8] text-[#666] hover:border-[#ccc]"
              }`}
            >
              {opt}
              {opt === "1주" && (
                <span className="absolute -top-2 -right-1 text-[9px] font-bold bg-[#00B6C5] text-white px-1.5 py-0.5 rounded-full">
                  AI 추천
                </span>
              )}
            </button>
          ))}
        </div>

        <p className="text-[12px] text-[#bbb] text-center">
          AI가 추천한 시점이 자동 선택되어 있어요. 변경도 가능합니다.
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Step 6: Connection Result ─── */
function StepComplete({ onFinish }: { onFinish: () => void }) {
  const timeline = [
    { icon: CheckCircle2, label: "원장님이 확정", desc: "SOAP 차트가 확정되었습니다", color: "bg-[#00B6C5]" },
    { icon: Inbox, label: "실장 인박스에 태스크 자동 생성", desc: "수납 안내, EMR 입력 등 태스크가 자동 배정됩니다", color: "bg-blue-500" },
    { icon: FileText, label: "EMR 대기열에 등장", desc: "확정된 차트가 복사 대기열에 자동 정렬됩니다", color: "bg-amber-500" },
    { icon: MessageSquare, label: "카카오톡 리마인드 자동 생성", desc: "D-1에 환자에게 카카오톡 알림이 준비됩니다", color: "bg-green-500" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-5 py-8"
    >
      <div className="max-w-md w-full">
        {/* Completion badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-16 h-16 rounded-full bg-[#e8f7f8] flex items-center justify-center mx-auto mb-5"
        >
          <CheckCircle2 className="w-8 h-8 text-[#00B6C5]" />
        </motion.div>

        <h2 className="text-[22px] font-extrabold text-[#111] text-center mb-2">
          모든 과정이 연결되었습니다
        </h2>
        <p className="text-[13px] text-[#999] text-center mb-8">
          원장님이 확정만 하시면, 이후는 시스템과 실장님이 처리합니다
        </p>

        {/* Timeline */}
        <div className="relative pl-8 space-y-0 mb-8">
          {/* Vertical line */}
          <div className="absolute left-[13px] top-3 bottom-3 w-[2px] bg-[#e8e8e8]" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.4 }}
              className="relative py-3"
            >
              {/* Node */}
              <div className={`absolute -left-8 top-3.5 w-[26px] h-[26px] rounded-full ${item.color} flex items-center justify-center z-10`}>
                <item.icon className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <p className="text-[14px] font-bold text-[#111]">{item.label}</p>
                <p className="text-[12px] text-[#888] mt-0.5">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight message */}
        <div className="bg-[#f0fafb] border border-[#d5eef0] rounded-xl p-4 text-center mb-6">
          <p className="text-[14px] font-bold text-[#00B6C5]">
            "원장님은 진료에만 집중하세요."
          </p>
          <p className="text-[12px] text-[#888] mt-1">나머지는 하니에이전트가 처리합니다</p>
        </div>

        {/* Finish button */}
        <button
          onClick={onFinish}
          className="w-full h-12 bg-[#00B6C5] hover:bg-[#00a3b1] text-white font-bold rounded-xl text-[15px] transition-colors flex items-center justify-center gap-2"
        >
          완료! 시작하기
          <ArrowRight size={16} />
        </button>

        <p className="mt-3 text-center text-[12px] text-[#bbb]">
          첫 환자가 체크인되면 녹음을 시작해보세요!
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Main Tutorial Page ─── */
export default function DoctorTutorial() {
  const [step, setStep] = useState(1);

  const goNext = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const goFinish = () => {
    window.location.href = "https://www.haniagent.kr/main";
  };

  return (
    <div className="min-h-screen bg-white">
      <ProgressBar step={step} />

      <div className="pt-[60px]">
        <AnimatePresence mode="wait">
          {step === 1 && <StepWelcome key="s1" onNext={goNext} />}
          {step === 2 && <StepPatientList key="s2" onNext={goNext} />}
          {step === 3 && <StepRecording key="s3" onNext={goNext} />}
          {step === 4 && <StepSOAP key="s4" onNext={goNext} />}
          {step === 5 && <StepRecommendDate key="s5" onNext={goNext} />}
          {step === 6 && <StepComplete key="s6" onFinish={goFinish} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
