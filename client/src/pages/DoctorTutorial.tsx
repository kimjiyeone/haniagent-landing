/*
 * 원장 온보딩 튜토리얼 페이지 (개선 v2)
 * Design: hanitek.kr 틸(#00B6C5) 브랜드 컬러, 깔끔한 SaaS 톤
 * 7 Steps: 환영 → 환자 리스트 → 녹음 → SOAP+권장시점 → 리핏 → 실장 연결 확인 → 완료
 * 변경: SOAP+권장시점 동시 표시, 리핏 플로우 추가, 대표원장용 실장 플로우 미리보기
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic, MicOff, CheckCircle2, Calendar, ArrowRight, ArrowLeft,
  Play, Square, Clock, FileText, Inbox, MessageSquare,
  ChevronRight, Volume2, RefreshCw, Copy, Send, ClipboardCheck,
  Search, UserPlus, ChevronDown, Eye
} from "lucide-react";
import Logo from "@/components/Logo";

const TOTAL_STEPS = 7;

/* ─── Pulse Ring Component ─── */
function PulseRing({ color = "#00B6C5" }: { color?: string }) {
  return (
    <motion.span
      className="absolute inset-0 rounded-xl border-2"
      style={{ borderColor: color }}
      animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0, 0.5] }}
      transition={{ duration: 1.2, repeat: Infinity }}
    />
  );
}

/* ─── Bounce Arrow ─── */
function BounceArrow({ text }: { text: string }) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-3 text-center text-[12px] text-[#bbb]"
    >
      <motion.span animate={{ y: [0, -4, 0] }} transition={{ duration: 0.8, repeat: Infinity }}>
        ↑
      </motion.span>{" "}
      {text}
    </motion.p>
  );
}

/* ─── Tooltip Bubble ─── */
function TooltipBubble({ text, duration = 2500 }: { text: string; duration?: number }) {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), duration);
    return () => clearTimeout(t);
  }, [duration]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="mb-4 bg-[#111] text-white text-[13px] px-4 py-2.5 rounded-xl text-center relative"
        >
          {text}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#111] rotate-45" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Toast ─── */
function Toast({ message, show }: { message: string; show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#111] text-white text-[13px] font-medium px-5 py-3 rounded-xl shadow-lg max-w-sm text-center"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Progress Bar ─── */
function ProgressBar({ step }: { step: number }) {
  const stepNames = ["환영", "환자 리스트", "녹음 체험", "SOAP + 권장시점", "리핏 체험", "실장 연결 확인", "완료"];
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
    { icon: Mic, label: "녹음", desc: "진료 중 녹음 시작/종료" },
    { icon: CheckCircle2, label: "확정", desc: "AI 차트 확인 후 확정" },
    { icon: Calendar, label: "권장시점", desc: "다음 내원 시점 선택" },
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

        {/* Additional info for 대표원장 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-5 bg-[#f8fafb] border border-[#e8e8e8] rounded-xl p-3 text-left"
        >
          <p className="text-[12px] text-[#888] leading-relaxed">
            <span className="font-bold text-[#555]">💡 대표원장님이라면:</span> 이 튜토리얼 마지막에 실장님의 업무 흐름도 확인하실 수 있습니다. 
            녹음 없이 반복 치료하는 <span className="font-semibold text-[#00B6C5]">리핏</span> 기능도 함께 체험합니다.
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          onClick={onNext}
          className="mt-6 w-full h-12 bg-[#00B6C5] hover:bg-[#00a3b1] text-white font-bold rounded-xl text-[15px] transition-colors flex items-center justify-center gap-2"
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
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-5"
    >
      <div className="max-w-md w-full">
        <TooltipBubble text="실장님이 체크인하면 여기에 환자가 나타납니다" />

        <h2 className="text-[20px] font-extrabold text-[#111] mb-1">원장 홈</h2>
        <p className="text-[13px] text-[#999] mb-5">진료 대기 환자 목록</p>

        {/* Simulated app screen */}
        <div className="bg-white border border-[#e8e8e8] rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
          <div className="px-4 py-3 border-b border-[#f0f0f0] flex items-center justify-between">
            <span className="text-[13px] font-semibold text-[#555]">진료 대기</span>
            <span className="text-[11px] text-[#bbb]">2명</span>
          </div>

          <div className="p-4 space-y-3">
            {/* Patient 1 - 김서연 (녹음 대상) */}
            <div className="flex items-center gap-3 p-3 bg-[#fafafa] rounded-xl border border-[#f0f0f0]">
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
                <motion.button
                  onClick={onNext}
                  className="relative flex items-center gap-1.5 h-9 px-3.5 bg-[#00B6C5] text-white rounded-lg text-[13px] font-semibold"
                  whileTap={{ scale: 0.95 }}
                >
                  <PulseRing />
                  <Mic size={14} />
                  녹음
                </motion.button>
                <button className="flex items-center gap-1 h-9 px-3 bg-[#f0f0f0] text-[#ccc] rounded-lg text-[13px] cursor-not-allowed opacity-40">
                  🔁
                </button>
              </div>
            </div>

            {/* Patient 2 - 이준호 (리핏 대상 — dim) */}
            <div className="flex items-center gap-3 p-3 bg-[#fafafa] rounded-xl border border-[#f0f0f0] opacity-40">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-bold text-[#111]">이준호</span>
                  <span className="text-[10px] font-semibold text-[#888] bg-[#f0f0f0] px-1.5 py-0.5 rounded">Lite</span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <Clock size={11} className="text-[#bbb]" />
                  <span className="text-[11px] text-[#999]">09:45 체크인</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 h-9 px-3.5 bg-[#f0f0f0] text-[#999] rounded-lg text-[13px]">
                  <Mic size={14} />
                  녹음
                </button>
                <button className="flex items-center gap-1 h-9 px-3 bg-[#f0f0f0] text-[#999] rounded-lg text-[13px]">
                  🔁
                </button>
              </div>
            </div>
          </div>
        </div>

        <BounceArrow text="김서연 환자의 녹음 버튼을 눌러보세요" />

        <div className="mt-4 bg-[#f8fafb] border border-[#e8e8e8] rounded-xl p-3">
          <p className="text-[11px] text-[#999] leading-relaxed">
            <span className="font-semibold text-[#666]">참고:</span> 녹음과 리핏 버튼은 상호 배타적입니다. 
            체크인 후 둘 중 하나만 선택할 수 있어요. 이준호 환자는 뒤에서 리핏으로 처리해볼게요.
          </p>
        </div>
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
    "좌측 요부 중심으로 앉아있을 때 악화됩니다.",
    "침 치료 후에 좀 호전되는 느낌이에요.",
    "다음 주에 한 번 더 오시는 게 좋겠습니다.",
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  useEffect(() => {
    if (seconds >= 1 && seconds <= 4) {
      setSttLines(allLines.slice(0, seconds));
    }
    if (seconds === 4) setCanStop(true);
  }, [seconds]);

  const handleStop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setLoading(true);
    setTimeout(onNext, 2000);
  };

  if (loading) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-5"
      >
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-3 border-[#e8e8e8] border-t-[#00B6C5] rounded-full mx-auto mb-4"
          />
          <p className="text-[15px] font-semibold text-[#111]">AI가 차트를 작성하고 있습니다...</p>
          <p className="text-[13px] text-[#999] mt-1">SOAP 차트와 권장시점이 동시에 생성됩니다</p>
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
        {/* 화면 전환 금지 경고 — 강조 */}
        <div className="bg-red-50 border-2 border-red-300 rounded-xl px-4 py-3 mb-5">
          <div className="flex items-center gap-2 justify-center mb-1">
            <span className="text-[14px]">🚨</span>
            <span className="text-[14px] font-extrabold text-red-600">절대 화면을 전환하지 마세요!</span>
          </div>
          <p className="text-[12px] text-red-500 text-center leading-relaxed">
            녹음 중 다른 앱으로 이동하거나 화면을 끄면 <span className="font-bold">녹음이 중단</span>됩니다.<br/>
            진료가 끝날 때까지 이 화면을 유지해주세요.
          </p>
        </div>

        <h2 className="text-[20px] font-extrabold text-[#111] mb-1">녹음 중</h2>
        <p className="text-[13px] text-[#999] mb-6">김서연 환자 진료 녹음</p>

        {/* Recording visualization */}
        <div className="bg-[#fafafa] border border-[#e8e8e8] rounded-2xl p-5 mb-5">
          {/* Waveform */}
          <div className="flex items-center justify-center gap-[3px] h-12 mb-4">
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-[3px] rounded-full bg-[#00B6C5]"
                animate={{ height: [8, 12 + Math.random() * 24, 8] }}
                transition={{ duration: 0.4 + Math.random() * 0.4, repeat: Infinity, delay: i * 0.05 }}
              />
            ))}
          </div>

          {/* Timer */}
          <div className="text-center mb-4">
            <span className="text-[32px] font-mono font-bold text-[#111]">
              0:{String(seconds).padStart(2, "0")}
            </span>
          </div>

          {/* STT text */}
          <div className="min-h-[100px] space-y-2">
            {sttLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[13px] text-[#555] leading-relaxed"
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Stop button */}
        <motion.button
          onClick={canStop ? handleStop : undefined}
          className={`relative w-full h-12 rounded-xl text-[15px] font-bold transition-all flex items-center justify-center gap-2 ${
            canStop
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-[#e8e8e8] text-[#ccc] cursor-not-allowed"
          }`}
          whileTap={canStop ? { scale: 0.97 } : {}}
        >
          {canStop && <PulseRing color="#ef4444" />}
          <Square size={14} />
          녹음 중지
        </motion.button>

        {canStop && <BounceArrow text="녹음 중지 버튼을 눌러보세요" />}
        {!canStop && (
          <p className="mt-3 text-center text-[12px] text-[#bbb]">
            실시간 음성 인식 중... (중지 전에는 화면 이동 불가)
          </p>
        )}

        {/* 하단 추가 경고 */}
        <div className="mt-4 bg-[#f8fafb] border border-[#e8e8e8] rounded-xl p-3">
          <p className="text-[11px] text-[#888] leading-relaxed">
            <span className="font-bold text-red-500">⚠️ 중요:</span> 녹음 중 카카오톡, 전화 등 다른 앱으로 전환하면 녹음이 끊깁니다. 
            진료 중에는 반드시 하니에이전트 화면을 유지해주세요. 전화가 오면 녹음을 먼저 중지한 후 받으세요.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Step 4: SOAP + 권장시점 (동시 표시) ─── */
function StepSOAPAndDate({ onNext }: { onNext: () => void }) {
  const [confirmed, setConfirmed] = useState(false);
  const [selectedDate, setSelectedDate] = useState("1주");
  const [showToast, setShowToast] = useState(false);

  const soap = [
    { key: "S", title: "Subjective", content: "허리 통증 2주 전 발생. 좌측 요부 중심. 앉아있을 때 악화. 기침 시 통증 없음.", color: "bg-blue-50 border-blue-200 text-blue-700" },
    { key: "O", title: "Objective", content: "요추 ROM: 굴곡 60°(제한), 신전 20°(제한). L4-5 좌측 압통(+). SLR(-).", color: "bg-green-50 border-green-200 text-green-700" },
    { key: "A", title: "Assessment", content: "요추 염좌 의심. 디스크 가능성 낮음.", color: "bg-amber-50 border-amber-200 text-amber-700" },
    { key: "P", title: "Plan", content: "침 치료(요부 아시혈 + 위중, 환도) + 부항. 1주 후 재방문 권장.", color: "bg-purple-50 border-purple-200 text-purple-700" },
  ];

  const dateOptions = ["1일후", "3일후", "1주", "2주", "1달", "직접", "미정"];

  const handleConfirm = () => {
    setConfirmed(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
    setTimeout(onNext, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center min-h-[calc(100vh-60px)] px-5 py-8"
    >
      <div className="max-w-md w-full">
        <h2 className="text-[20px] font-extrabold text-[#111] mb-1">SOAP 차트 + 권장시점</h2>
        <p className="text-[13px] text-[#999] mb-5">AI가 자동 생성한 차트를 확인하고 확정하세요</p>

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
        <div className="space-y-2.5 mb-5">
          {soap.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              className="bg-white border border-[#e8e8e8] rounded-xl p-3.5"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${s.color}`}>
                  {s.key}
                </span>
                <span className="text-[11px] text-[#999]">{s.title}</span>
              </div>
              <p className="text-[13px] text-[#555] leading-relaxed">{s.content}</p>
            </motion.div>
          ))}
        </div>

        {/* 권장시점 — P차트 바로 아래 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="bg-[#f0fafb] border border-[#d5eef0] rounded-xl p-4 mb-5"
        >
          <p className="text-[13px] font-bold text-[#111] mb-3">
            <Calendar size={14} className="inline mr-1.5 text-[#00B6C5]" />
            권장 내원 시점
          </p>
          <p className="text-[11px] text-[#888] mb-3">AI가 P차트를 분석하여 추천한 시점이 자동 선택되어 있어요.</p>
          <div className="flex flex-wrap gap-2">
            {dateOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setSelectedDate(opt)}
                className={`relative h-9 px-3.5 rounded-lg text-[12px] font-semibold transition-all border ${
                  selectedDate === opt
                    ? "bg-[#e8f7f8] border-[#00B6C5] text-[#00B6C5]"
                    : "bg-white border-[#e8e8e8] text-[#666] hover:border-[#ccc]"
                }`}
              >
                {opt}
                {opt === "1주" && (
                  <span className="absolute -top-2 -right-1 text-[8px] font-bold bg-[#00B6C5] text-white px-1.5 py-0.5 rounded-full">
                    AI
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        <p className="text-[12px] text-[#bbb] text-center mb-4">
          내용을 수정할 수도 있어요. <span className="font-semibold text-[#888]">확정을 눌러야 실장님에게 전달됩니다.</span>
        </p>

        {/* Confirm button */}
        <motion.button
          onClick={handleConfirm}
          disabled={confirmed}
          className={`relative w-full h-12 rounded-xl text-[15px] font-bold transition-colors flex items-center justify-center gap-2 ${
            confirmed
              ? "bg-green-500 text-white"
              : "bg-[#00B6C5] hover:bg-[#00a3b1] text-white"
          }`}
          whileTap={!confirmed ? { scale: 0.97 } : {}}
        >
          {!confirmed && <PulseRing />}
          {confirmed ? (
            <>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
                <CheckCircle2 size={18} />
              </motion.div>
              확정 완료!
            </>
          ) : (
            <>
              <CheckCircle2 size={16} />
              확정 (차트 + 권장시점)
            </>
          )}
        </motion.button>

        {!confirmed && <BounceArrow text="확정 버튼을 눌러보세요" />}
      </div>

      <Toast message="✅ 실장님에게 태스크가 전달되었습니다 + EMR 대기열에 등장" show={showToast} />
    </motion.div>
  );
}

/* ─── Step 5: 리핏 체험 ─── */
function StepRepeat({ onNext }: { onNext: () => void }) {
  const [repeated, setRepeated] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleRepeat = () => {
    setRepeated(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
    setTimeout(onNext, 1500);
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
        <TooltipBubble text="녹음 없이 반복 치료하는 환자는 리핏으로 처리합니다" duration={3000} />

        <h2 className="text-[20px] font-extrabold text-[#111] mb-1">리핏 체험</h2>
        <p className="text-[13px] text-[#999] mb-5">녹음 없이 반복 치료하는 환자를 처리합니다</p>

        {/* Simulated app screen */}
        <div className="bg-white border border-[#e8e8e8] rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
          <div className="px-4 py-3 border-b border-[#f0f0f0] flex items-center justify-between">
            <span className="text-[13px] font-semibold text-[#555]">진료 대기</span>
            <span className="text-[11px] text-[#bbb]">1명 남음</span>
          </div>

          <div className="p-4">
            {/* 김서연 — 이미 확정 완료 */}
            <div className="flex items-center gap-3 p-3 bg-[#f8faf8] rounded-xl border border-[#e0e8e0] mb-3 opacity-50">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-bold text-[#111]">김서연</span>
                  <span className="text-[10px] font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">확정 완료 ✓</span>
                </div>
              </div>
            </div>

            {/* 이준호 — 리핏 대상 */}
            <div className="flex items-center gap-3 p-3 bg-[#fafafa] rounded-xl border border-[#f0f0f0]">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-bold text-[#111]">이준호</span>
                  <span className="text-[10px] font-semibold text-[#888] bg-[#f0f0f0] px-1.5 py-0.5 rounded">Lite</span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <Clock size={11} className="text-[#bbb]" />
                  <span className="text-[11px] text-[#999]">09:45 체크인 · 목 통증 · 침 치료 반복</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 h-9 px-3 bg-[#f0f0f0] text-[#ccc] rounded-lg text-[13px] cursor-not-allowed opacity-40">
                  <Mic size={14} />
                </button>
                <motion.button
                  onClick={!repeated ? handleRepeat : undefined}
                  className={`relative flex items-center gap-1.5 h-9 px-3.5 rounded-lg text-[13px] font-semibold ${
                    repeated
                      ? "bg-green-500 text-white"
                      : "bg-[#00B6C5] text-white"
                  }`}
                  whileTap={!repeated ? { scale: 0.95 } : {}}
                >
                  {!repeated && <PulseRing />}
                  {repeated ? (
                    <><CheckCircle2 size={14} /> 완료</>
                  ) : (
                    <>🔁 리핏</>
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {!repeated && <BounceArrow text="이준호 환자의 리핏 버튼을 눌러보세요" />}

        {/* Explanation */}
        <div className="mt-4 bg-[#f8fafb] border border-[#e8e8e8] rounded-xl p-3 space-y-2">
          <p className="text-[12px] text-[#666] leading-relaxed">
            <span className="font-bold text-[#00B6C5]">리핏이란?</span> 녹음 없이 반복 치료하는 환자를 시스템에 기록합니다.
          </p>
          <p className="text-[12px] text-[#888] leading-relaxed">
            리핏을 누르면 → 실장 EMR 탭에 "EMR 리핏 처리" 태스크가 자동 생성됩니다. 
            녹음 안 하는 환자도 시스템 안에 들어와서 관리됩니다.
          </p>
        </div>
      </div>

      <Toast message="🔁 리핏 처리 완료 → 실장 EMR 탭에 태스크 자동 생성" show={showToast} />
    </motion.div>
  );
}

/* ─── Step 6: 실장 연결 확인 (대표원장용) ─── */
function StepStaffPreview({ onNext }: { onNext: () => void }) {
  const [expanded, setExpanded] = useState(false);

  const doctorFlow = [
    { icon: CheckCircle2, label: "원장님이 확정", desc: "SOAP 차트 + 권장시점이 확정되었습니다", color: "bg-[#00B6C5]", type: "doctor" },
    { icon: Inbox, label: "실장 인박스에 T1(예약관리) 자동 생성", desc: "실장님이 환자에게 예약 안내를 보냅니다", color: "bg-blue-500", type: "auto" },
    { icon: FileText, label: "EMR 대기열에 차트 등장", desc: "실장님이 SOAP 복사 → EMR 붙여넣기", color: "bg-amber-500", type: "auto" },
    { icon: MessageSquare, label: "카톡 내용 자동 생성", desc: "실장님이 복사해서 카카오톡으로 발송", color: "bg-green-500", type: "staff" },
  ];

  const staffDailyFlow = [
    { step: "1", label: "환자 도착 → 퀵 체크인", desc: "이름 검색 → 탭 → 체크인 완료", role: "실장" },
    { step: "2", label: "원장님 진료 + 확정", desc: "자동으로 태스크가 인박스에 생성됨", role: "자동" },
    { step: "3", label: "인박스에서 태스크 처리", desc: "카톡 내용 복사 → 카카오톡 앱에서 발송", role: "실장" },
    { step: "4", label: "EMR 복붙", desc: "EMR 탭 → 복사 → EMR 붙여넣기 → 완료", role: "실장" },
    { step: "5", label: "다음 환자 체크인", desc: "대기 태스크 자동 해소 → 루프 반복", role: "실장" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center min-h-[calc(100vh-60px)] px-5 py-8"
    >
      <div className="max-w-md w-full">
        <h2 className="text-[20px] font-extrabold text-[#111] mb-1">확정 후 어떻게 되나요?</h2>
        <p className="text-[13px] text-[#999] mb-6">원장님이 확정하면 시스템이 자동으로 실장님에게 연결합니다</p>

        {/* Connection Timeline */}
        <div className="relative pl-8 space-y-0 mb-6">
          <div className="absolute left-[13px] top-3 bottom-3 w-[2px] bg-[#e8e8e8]" />
          {doctorFlow.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.4 }}
              className="relative py-3"
            >
              <div className={`absolute -left-8 top-3.5 w-[26px] h-[26px] rounded-full ${item.color} flex items-center justify-center z-10`}>
                <item.icon className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-1">
                  <p className="text-[14px] font-bold text-[#111]">{item.label}</p>
                  <p className="text-[12px] text-[#888] mt-0.5">{item.desc}</p>
                </div>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 mt-1 ${
                  item.type === "doctor" ? "bg-[#e8f7f8] text-[#00B6C5]" :
                  item.type === "auto" ? "bg-[#f0f0f0] text-[#888]" :
                  "bg-blue-50 text-blue-600"
                }`}>
                  {item.type === "doctor" ? "원장" : item.type === "auto" ? "자동" : "실장"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 대표원장용: 실장 하루 플로우 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="border border-[#e8e8e8] rounded-xl overflow-hidden mb-6"
        >
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full px-4 py-3 flex items-center justify-between bg-[#f8fafb] hover:bg-[#f0f4f5] transition-colors"
          >
            <span className="text-[13px] font-bold text-[#555] flex items-center gap-2">
              <Eye size={14} className="text-[#00B6C5]" />
              대표원장님용: 실장의 하루 업무 흐름 보기
            </span>
            <motion.div animate={{ rotate: expanded ? 180 : 0 }}>
              <ChevronDown size={16} className="text-[#999]" />
            </motion.div>
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-4 py-3 space-y-3 border-t border-[#e8e8e8]">
                  {staffDailyFlow.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                        item.role === "자동" ? "bg-[#f0f0f0] text-[#888]" : "bg-[#e8f7f8] text-[#00B6C5]"
                      }`}>
                        {item.step}
                      </span>
                      <div>
                        <p className="text-[13px] font-semibold text-[#333]">
                          {item.label}
                          <span className={`ml-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                            item.role === "자동" ? "bg-[#f0f0f0] text-[#888]" : "bg-blue-50 text-blue-600"
                          }`}>
                            {item.role}
                          </span>
                        </p>
                        <p className="text-[11px] text-[#888] mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                  <div className="bg-[#fff8e6] border border-[#f5e6b8] rounded-lg p-2.5 mt-2">
                    <p className="text-[11px] text-[#b8860b]">
                      💡 실장 튜토리얼도 별도로 준비되어 있습니다. 실장님이 첫 로그인하면 자동으로 시작됩니다.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Highlight message */}
        <div className="bg-[#f0fafb] border border-[#d5eef0] rounded-xl p-4 text-center mb-6">
          <p className="text-[14px] font-bold text-[#00B6C5]">
            "원장님은 진료에만 집중하세요."
          </p>
          <p className="text-[12px] text-[#888] mt-1">확정만 누르면, 나머지는 하니에이전트가 처리합니다</p>
        </div>

        <button
          onClick={onNext}
          className="w-full h-12 bg-[#00B6C5] hover:bg-[#00a3b1] text-white font-bold rounded-xl text-[15px] transition-colors flex items-center justify-center gap-2"
        >
          다음
          <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  );
}

/* ─── Step 7: 완료 ─── */
function StepComplete({ onFinish }: { onFinish: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-5 py-8"
    >
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-20 h-20 rounded-full bg-[#e8f7f8] flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 className="w-10 h-10 text-[#00B6C5]" />
        </motion.div>

        <h2 className="text-[24px] font-extrabold text-[#111] mb-2">
          온보딩 완료!
        </h2>
        <p className="text-[14px] text-[#888] mb-8">
          원장님의 업무 흐름을 모두 익히셨습니다
        </p>

        {/* Summary */}
        <div className="bg-[#f8fafb] border border-[#e8e8e8] rounded-xl p-5 text-left mb-6 space-y-3">
          <p className="text-[13px] font-bold text-[#333] mb-2">📋 원장님이 기억할 3가지</p>
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#e8f7f8] flex items-center justify-center shrink-0">
              <Mic size={14} className="text-[#00B6C5]" />
            </div>
            <div>
              <p className="text-[13px] font-semibold text-[#333]">1. 녹음 시작/종료</p>
              <p className="text-[11px] text-[#888]">진료 중 버튼 2번이면 끝</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#e8f7f8] flex items-center justify-center shrink-0">
              <CheckCircle2 size={14} className="text-[#00B6C5]" />
            </div>
            <div>
              <p className="text-[13px] font-semibold text-[#333]">2. SOAP 확인 → 확정</p>
              <p className="text-[11px] text-[#888]">확정해야 실장님에게 전달됩니다</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#e8f7f8] flex items-center justify-center shrink-0">
              <RefreshCw size={14} className="text-[#00B6C5]" />
            </div>
            <div>
              <p className="text-[13px] font-semibold text-[#333]">3. 녹음 안 하는 환자 → 리핏</p>
              <p className="text-[11px] text-[#888]">반복 치료 환자도 시스템에 기록됩니다</p>
            </div>
          </div>
        </div>

        {/* Tip */}
        <div className="bg-[#fff8e6] border border-[#f5e6b8] rounded-xl p-3 mb-6">
          <p className="text-[12px] text-[#b8860b]">
            💡 하루 끝에 미확정 차트가 있으면 알림이 옵니다. 꼭 확정해주세요!
          </p>
        </div>

        <button
          onClick={onFinish}
          className="w-full h-12 bg-[#00B6C5] hover:bg-[#00a3b1] text-white font-bold rounded-xl text-[15px] transition-colors flex items-center justify-center gap-2"
        >
          완료! 시작하기
          <ArrowRight size={16} />
        </button>

        <p className="mt-3 text-[12px] text-[#bbb]">
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
          {step === 4 && <StepSOAPAndDate key="s4" onNext={goNext} />}
          {step === 5 && <StepRepeat key="s5" onNext={goNext} />}
          {step === 6 && <StepStaffPreview key="s6" onNext={goNext} />}
          {step === 7 && <StepComplete key="s7" onFinish={goFinish} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
