/*
 * Stage 2: 원장 실전 가이드
 * 전체 플로우(Stage 1)를 이해한 후 진행하는 실전 체험 가이드
 * 
 * 6 Steps:
 * 1. 환영 + 마이크 테스트
 * 2. 환자 리스트 (Active/Lite 배지 확인 + 녹음 시작)
 * 3. 녹음 체험 (화면 전환 금지 경고 강조)
 * 4. SOAP 확인/수정 + 권장시점 + 메모
 * 5. 리핏 체험
 * 6. 완료 + 체크리스트
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic, CheckCircle2, Calendar, ArrowRight,
  Square, Clock, RefreshCw, AlertTriangle, Edit3
} from "lucide-react";
import Logo from "@/components/Logo";

const TOTAL_STEPS = 6;

/* ─── Shared Components ─── */
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

function BounceArrow({ text }: { text: string }) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-3 text-center text-[12px] text-[#bbb]"
    >
      <motion.span animate={{ y: [0, -4, 0] }} transition={{ duration: 0.8, repeat: Infinity }}>↑</motion.span>{" "}
      {text}
    </motion.p>
  );
}

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

function ProgressBar({ step }: { step: number }) {
  const stepNames = ["마이크 테스트", "환자 리스트", "녹음 체험", "SOAP 확정", "리핏 체험", "완료"];
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
        <a href="/tutorial" className="flex items-center gap-2">
          <Logo className="h-5 w-auto" />
          <span className="text-[11px] text-[#bbb] font-medium hidden sm:inline">원장 가이드</span>
        </a>
        <span className="text-[12px] text-[#999] font-medium">
          {step}/{TOTAL_STEPS} — {stepNames[step - 1]}
        </span>
      </div>
    </div>
  );
}

/* ─── Step 1: 마이크 테스트 ─── */
function StepMicTest({ onNext }: { onNext: () => void }) {
  const [micState, setMicState] = useState<"idle" | "requesting" | "granted" | "denied">("idle");
  const [testDone, setTestDone] = useState(false);
  const [volume, setVolume] = useState(0);

  const handleTest = () => {
    setMicState("requesting");
    setTimeout(() => {
      setMicState("granted");
      let count = 0;
      const interval = setInterval(() => {
        setVolume(Math.random() * 80 + 20);
        count++;
        if (count > 15) {
          clearInterval(interval);
          setVolume(0);
          setTestDone(true);
        }
      }, 200);
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-5"
    >
      <div className="max-w-md w-full text-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }}>
          <Logo className="h-8 w-auto mx-auto mb-6" />
        </motion.div>

        <h1 className="text-[28px] md:text-[32px] font-extrabold text-[#111] leading-tight">
          원장님, 실전 가이드입니다
        </h1>
        <p className="mt-3 text-[15px] text-[#888]">
          먼저 마이크가 제대로 작동하는지 확인합니다
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="mt-8 bg-[#fafafa] border border-[#e8e8e8] rounded-2xl p-6"
        >
          {micState === "idle" && (
            <>
              <div className="w-14 h-14 rounded-full bg-[#e8f7f8] flex items-center justify-center mx-auto mb-4">
                <Mic className="w-7 h-7 text-[#00B6C5]" />
              </div>
              <p className="text-[14px] font-semibold text-[#333] mb-1">마이크 권한 확인</p>
              <p className="text-[12px] text-[#888] mb-5">
                브라우저가 마이크 권한을 요청하면 <span className="font-bold text-[#00B6C5]">"허용"</span>을 눌러주세요.
              </p>
              <motion.button
                onClick={handleTest}
                className="relative w-full h-12 bg-[#00B6C5] hover:bg-[#00a3b1] text-white font-bold rounded-xl text-[15px] transition-colors flex items-center justify-center gap-2"
                whileTap={{ scale: 0.97 }}
              >
                <PulseRing />
                마이크 테스트 시작
              </motion.button>
            </>
          )}

          {micState === "requesting" && (
            <div className="py-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 border-3 border-[#e8e8e8] border-t-[#00B6C5] rounded-full mx-auto mb-4"
              />
              <p className="text-[14px] font-semibold text-[#333]">마이크 권한 요청 중...</p>
            </div>
          )}

          {micState === "granted" && !testDone && (
            <div className="py-4">
              <p className="text-[14px] font-semibold text-green-600 mb-3">마이크 연결됨</p>
              <p className="text-[12px] text-[#888] mb-4">말씀해보세요</p>
              <div className="h-3 bg-[#e8e8e8] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-green-500 rounded-full"
                  animate={{ width: `${volume}%` }}
                  transition={{ duration: 0.15 }}
                />
              </div>
            </div>
          )}

          {testDone && (
            <div className="py-4">
              <motion.div
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle2 className="w-7 h-7 text-green-500" />
              </motion.div>
              <p className="text-[15px] font-bold text-green-600">마이크 테스트 완료</p>
            </div>
          )}
        </motion.div>

        {testDone && (
          <motion.button
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            onClick={onNext}
            className="mt-6 w-full h-12 bg-[#00B6C5] hover:bg-[#00a3b1] text-white font-bold rounded-xl text-[15px] transition-colors flex items-center justify-center gap-2"
          >
            다음
            <ArrowRight size={16} />
          </motion.button>
        )}

        {!testDone && micState === "idle" && (
          <button
            onClick={onNext}
            className="mt-4 text-[12px] text-[#bbb] hover:text-[#888] transition-colors"
          >
            건너뛰기
          </button>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Step 2: 환자 리스트 ─── */
function StepPatientList({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-5"
    >
      <div className="max-w-md w-full">
        <h2 className="text-[20px] font-extrabold text-[#111] mb-1">진료 대기</h2>
        <p className="text-[13px] text-[#999] mb-5">실장님이 체크인한 환자가 여기에 나타납니다</p>

        <div className="bg-white border border-[#e8e8e8] rounded-2xl overflow-hidden shadow-sm">
          <div className="px-4 py-3 border-b border-[#f0f0f0] flex items-center justify-between">
            <span className="text-[13px] font-semibold text-[#555]">대기 환자</span>
            <span className="text-[11px] text-[#bbb]">2명</span>
          </div>

          <div className="p-4 space-y-3">
            {/* Patient 1 - 김서연 (Active) */}
            <div className="flex items-center gap-3 p-3 bg-[#fafafa] rounded-xl border border-[#f0f0f0]">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-bold text-[#111]">김서연</span>
                  <span className="text-[10px] font-semibold text-[#00B6C5] bg-[#e8f7f8] px-1.5 py-0.5 rounded">Active</span>
                </div>
                <span className="text-[11px] text-[#999]">09:30 · 허리 통증</span>
              </div>
              <motion.button
                onClick={onNext}
                className="relative flex items-center gap-1.5 h-9 px-3.5 bg-[#00B6C5] text-white rounded-lg text-[13px] font-semibold"
                whileTap={{ scale: 0.95 }}
              >
                <PulseRing />
                녹음
              </motion.button>
            </div>

            {/* Patient 2 - 이준호 (Lite) */}
            <div className="flex items-center gap-3 p-3 bg-[#fafafa] rounded-xl border border-[#f0f0f0] opacity-40">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-bold text-[#111]">이준호</span>
                  <span className="text-[10px] font-semibold text-[#888] bg-[#f0f0f0] px-1.5 py-0.5 rounded">Lite</span>
                </div>
                <span className="text-[11px] text-[#999]">09:45 · 목 통증 · 반복 치료</span>
              </div>
              <button className="flex items-center gap-1.5 h-9 px-3.5 bg-[#f0f0f0] text-[#999] rounded-lg text-[13px]">
                녹음
              </button>
            </div>
          </div>
        </div>

        <BounceArrow text="김서연 환자의 녹음 버튼을 눌러보세요" />

        <p className="mt-4 text-[11px] text-[#999] text-center">
          <span className="font-semibold text-[#00B6C5]">Active</span> = 사전상담 완료,{" "}
          <span className="font-semibold text-[#888]">Lite</span> = 일반 환자
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Step 3: 녹음 체험 ─── */
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
            className="w-10 h-10 border-3 border-[#e8e8e8] border-t-[#00B6C5] rounded-full mx-auto mb-4"
          />
          <p className="text-[15px] font-semibold text-[#111]">AI가 차트를 작성하고 있습니다...</p>
          <p className="text-[13px] text-[#999] mt-1">SOAP 차트와 권장시점이 동시에 생성됩니다</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-5"
    >
      <div className="max-w-md w-full">
        {/* 화면 전환 금지 경고 */}
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-5">
          <p className="text-[13px] font-bold text-red-600 text-center">
            녹음 중 화면을 전환하면 녹음이 중단됩니다
          </p>
        </div>

        <h2 className="text-[20px] font-extrabold text-[#111] mb-1">녹음 중</h2>
        <p className="text-[13px] text-[#999] mb-6">김서연 환자 진료 녹음</p>

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

        <motion.button
          onClick={canStop ? handleStop : undefined}
          className={`w-full h-12 rounded-xl text-[15px] font-bold transition-all flex items-center justify-center gap-2 ${
            canStop
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-[#e8e8e8] text-[#ccc] cursor-not-allowed"
          }`}
          whileTap={canStop ? { scale: 0.97 } : {}}
        >
          <Square size={14} />
          녹음 중지
        </motion.button>

        {canStop && <BounceArrow text="녹음 중지 버튼을 눌러보세요" />}
        {!canStop && (
          <p className="mt-3 text-center text-[12px] text-[#bbb]">실시간 음성 인식 중...</p>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Step 4: SOAP 수정/확정 + 권장시점 + 메모 ─── */
function StepSOAPAndDate({ onNext }: { onNext: () => void }) {
  const [confirmed, setConfirmed] = useState(false);
  const [selectedDate, setSelectedDate] = useState("1주");
  const [showToast, setShowToast] = useState(false);
  const [editingSOAP, setEditingSOAP] = useState<string | null>(null);
  const [memo, setMemo] = useState("");

  const [soapData, setSoapData] = useState([
    { key: "S", title: "Subjective", content: "허리 통증 2주 전 발생. 좌측 요부 중심. 앉아있을 때 악화. 기침 시 통증 없음.", color: "bg-blue-50 border-blue-200 text-blue-700" },
    { key: "O", title: "Objective", content: "요추 ROM: 굴곡 60°(제한), 신전 20°(제한). L4-5 좌측 압통(+). SLR(-).", color: "bg-green-50 border-green-200 text-green-700" },
    { key: "A", title: "Assessment", content: "요추 염좌 의심. 디스크 가능성 낮음.", color: "bg-amber-50 border-amber-200 text-amber-700" },
    { key: "P", title: "Plan", content: "침 치료(요부 아시혈 + 위중, 환도) + 부항. 1주 후 재방문 권장.", color: "bg-purple-50 border-purple-200 text-purple-700" },
  ]);

  const dateOptions = ["1일후", "3일후", "1주", "2주", "1달", "직접", "미정"];

  const handleConfirm = () => {
    setConfirmed(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
    setTimeout(onNext, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center min-h-[calc(100vh-60px)] px-5 py-8"
    >
      <div className="max-w-md w-full">
        <h2 className="text-[20px] font-extrabold text-[#111] mb-1">SOAP 차트 확인</h2>
        <p className="text-[13px] text-[#999] mb-5">AI가 작성한 차트를 확인하고 확정하세요</p>

        {/* SOAP cards */}
        <div className="space-y-2.5 mb-4">
          {soapData.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              className="bg-white border border-[#e8e8e8] rounded-xl p-3.5"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${s.color}`}>
                    {s.key}
                  </span>
                  <span className="text-[11px] text-[#999]">{s.title}</span>
                </div>
                <button
                  onClick={() => setEditingSOAP(editingSOAP === s.key ? null : s.key)}
                  className="flex items-center gap-1 text-[10px] font-semibold text-[#00B6C5] hover:text-[#00a3b1] transition-colors"
                >
                  <Edit3 size={10} />
                  {editingSOAP === s.key ? "완료" : "수정"}
                </button>
              </div>
              {editingSOAP === s.key ? (
                <textarea
                  defaultValue={s.content}
                  onChange={(e) => {
                    const newData = [...soapData];
                    newData[i] = { ...newData[i], content: e.target.value };
                    setSoapData(newData);
                  }}
                  className="w-full text-[13px] text-[#555] leading-relaxed bg-[#fafafa] border border-[#e8e8e8] rounded-lg p-2 outline-none focus:border-[#00B6C5] resize-none"
                  rows={3}
                />
              ) : (
                <p className="text-[13px] text-[#555] leading-relaxed">{s.content}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* 권장시점 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="bg-[#fafafa] border border-[#e8e8e8] rounded-xl p-4 mb-4"
        >
          <p className="text-[13px] font-bold text-[#111] mb-2">권장 내원 시점</p>
          <p className="text-[11px] text-[#888] mb-3">AI가 P차트를 분석하여 추천한 시점입니다. 변경 가능합니다.</p>
          <div className="flex flex-wrap gap-2">
            {dateOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setSelectedDate(opt)}
                className={`h-9 px-3.5 rounded-lg text-[12px] font-semibold transition-all border ${
                  selectedDate === opt
                    ? "bg-[#e8f7f8] border-[#00B6C5] text-[#00B6C5]"
                    : "bg-white border-[#e8e8e8] text-[#666] hover:border-[#ccc]"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 실장 참고 메모 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="bg-[#fafafa] border border-[#e8e8e8] rounded-xl p-3 mb-4"
        >
          <p className="text-[12px] font-semibold text-[#555] mb-2">
            실장 참고 메모 <span className="text-[10px] font-normal text-[#bbb]">(선택)</span>
          </p>
          <input
            type="text"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="예: 다음 내원 시 X-ray 촬영 필요"
            className="w-full bg-white text-[13px] text-[#555] placeholder:text-[#ccc] border border-[#e8e8e8] rounded-lg px-3 py-2.5 outline-none focus:border-[#00B6C5]"
          />
        </motion.div>

        {/* 생활코칭 메모 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
          className="bg-[#fafafa] border border-[#e8e8e8] rounded-xl p-3 mb-5"
        >
          <p className="text-[12px] font-semibold text-[#00B6C5] mb-2">
            생활코칭 메모 <span className="text-[10px] font-normal text-[#bbb]">(카톡에 반영됨)</span>
          </p>
          <div className="bg-white border border-[#e8e8e8] rounded-lg px-3 py-2.5">
            <p className="text-[12px] text-[#555] leading-relaxed">앉아있을 때 요추 쿠션 받치기, 자기 전 핫팩 10~15분</p>
          </div>
        </motion.div>

        <p className="text-[12px] text-[#888] text-center mb-4">
          확정을 눌러야 실장님에게 전달됩니다
        </p>

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
          {confirmed ? (
            <>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
                <CheckCircle2 size={18} />
              </motion.div>
              확정 완료
            </>
          ) : (
            "확정"
          )}
        </motion.button>

        {!confirmed && <BounceArrow text="확정 버튼을 눌러보세요" />}
      </div>

      <Toast message="실장님에게 태스크가 전달되었습니다" show={showToast} />
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
      initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-5"
    >
      <div className="max-w-md w-full">
        <h2 className="text-[20px] font-extrabold text-[#111] mb-1">리핏</h2>
        <p className="text-[13px] text-[#999] mb-5">녹음 없이 반복 치료하는 환자를 처리합니다</p>

        <div className="bg-white border border-[#e8e8e8] rounded-2xl overflow-hidden shadow-sm">
          <div className="px-4 py-3 border-b border-[#f0f0f0] flex items-center justify-between">
            <span className="text-[13px] font-semibold text-[#555]">대기 환자</span>
            <span className="text-[11px] text-[#bbb]">1명 남음</span>
          </div>

          <div className="p-4 space-y-3">
            {/* 김서연 — 확정 완료 */}
            <div className="flex items-center gap-3 p-3 bg-[#f8faf8] rounded-xl border border-[#e0e8e0] opacity-50">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-bold text-[#111]">김서연</span>
                  <span className="text-[10px] font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">완료</span>
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
                <span className="text-[11px] text-[#999]">09:45 · 목 통증 · 반복 치료</span>
              </div>

              <motion.button
                onClick={!repeated ? handleRepeat : undefined}
                className={`relative flex items-center gap-1.5 h-9 px-3.5 rounded-lg text-[13px] font-semibold ${
                  repeated
                    ? "bg-green-500 text-white"
                    : "bg-[#00B6C5] text-white"
                }`}
                whileTap={!repeated ? { scale: 0.95 } : {}}
              >
                {repeated ? (
                  <><CheckCircle2 size={14} /> 완료</>
                ) : (
                  <><RefreshCw size={14} /> 리핏</>
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {!repeated && <BounceArrow text="이준호 환자의 리핏 버튼을 눌러보세요" />}

        <p className="mt-4 text-[12px] text-[#888] text-center">
          리핏 = 녹음 없이 반복 치료 환자를 기록합니다
        </p>
      </div>

      <Toast message="리핏 완료 → 실장 EMR 탭에 태스크 자동 생성" show={showToast} />
    </motion.div>
  );
}

/* ─── Step 6: 완료 ─── */
function StepComplete({ onFinish }: { onFinish: () => void }) {
  const checklist = [
    "녹음 시작/종료 — 화면 전환 금지",
    "SOAP 차트 확인 → 필요시 수정 → 확정",
    "권장 내원 시점 선택 + 실장 메모 (선택)",
    "반복 치료 환자 → 리핏 버튼",
    "하루 끝에 미확정 차트 반드시 확정",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-5 py-8"
    >
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-16 h-16 rounded-full bg-[#e8f7f8] flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 className="w-8 h-8 text-[#00B6C5]" />
        </motion.div>

        <h2 className="text-[24px] font-extrabold text-[#111] mb-2">
          가이드 완료
        </h2>
        <p className="text-[14px] text-[#888] mb-8">
          원장님의 모든 업무 흐름을 체험하셨습니다
        </p>

        <div className="bg-[#fafafa] border border-[#e8e8e8] rounded-xl p-5 text-left mb-6 space-y-3">
          <p className="text-[13px] font-bold text-[#333] mb-2">체크리스트</p>
          {checklist.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 size={14} className="text-[#00B6C5] mt-0.5 shrink-0" />
              <p className="text-[13px] text-[#555] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <p className="text-[12px] text-[#b8860b] bg-[#fff8e6] border border-[#f5e6b8] rounded-xl p-3 mb-6">
          하루 끝에 미확정 차트가 있으면 알림이 옵니다. 꼭 확정해주세요!
        </p>

        <button
          onClick={onFinish}
          className="w-full h-12 bg-[#00B6C5] hover:bg-[#00a3b1] text-white font-bold rounded-xl text-[15px] transition-colors flex items-center justify-center gap-2"
        >
          완료
        </button>

        <a href="/tutorial" className="inline-block mt-3 text-[12px] text-[#bbb] hover:text-[#888] transition-colors">
          ← 튜토리얼 허브로 돌아가기
        </a>
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
          {step === 1 && <StepMicTest key="s1" onNext={goNext} />}
          {step === 2 && <StepPatientList key="s2" onNext={goNext} />}
          {step === 3 && <StepRecording key="s3" onNext={goNext} />}
          {step === 4 && <StepSOAPAndDate key="s4" onNext={goNext} />}
          {step === 5 && <StepRepeat key="s5" onNext={goNext} />}
          {step === 6 && <StepComplete key="s6" onFinish={goFinish} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
