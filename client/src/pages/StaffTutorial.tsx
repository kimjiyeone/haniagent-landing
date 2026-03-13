/*
 * Stage 2: 실장 실전 가이드
 * 
 * 7 Steps:
 * 1. 환영 + 업무 요약
 * 2. T1/T2/T3 태스크 유형 설명
 * 3. 퀵 체크인 + 신규 등록
 * 4. 인박스 태스크 처리
 * 5. 카톡 복사 → 카카오톡 발송
 * 6. EMR 복붙
 * 7. 완료 + 하루 루틴 체크리스트
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, UserPlus, Inbox, Copy, FileText, CheckCircle2,
  ArrowRight, Clock, MessageSquare, ClipboardCheck,
  ChevronDown, AlertCircle, RefreshCw, AlertTriangle, Edit3,
  Calendar, Bell, Zap
} from "lucide-react";
import Logo from "@/components/Logo";

const TOTAL_STEPS = 7;

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
  const stepNames = ["업무 요약", "태스크 유형", "체크인", "인박스", "카톡 복사", "EMR 복붙", "완료"];
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
          <span className="text-[11px] text-[#bbb] font-medium hidden sm:inline">실장 실전 가이드</span>
        </a>
        <span className="text-[12px] text-[#999] font-medium">
          {step}/{TOTAL_STEPS} — {stepNames[step - 1]}
        </span>
      </div>
    </div>
  );
}

function NavButtons({ onPrev, onNext, nextLabel = "다음", showPrev = true }: {
  onPrev?: () => void; onNext: () => void; nextLabel?: string; showPrev?: boolean;
}) {
  return (
    <div className="flex gap-3 mt-6">
      {showPrev && onPrev && (
        <button
          onClick={onPrev}
          className="h-12 px-5 border border-[#e8e8e8] text-[#888] font-semibold rounded-xl text-[14px] hover:bg-[#f8f8f8] transition-colors flex items-center gap-2"
        >
          ← 이전
        </button>
      )}
      <button
        onClick={onNext}
        className="flex-1 h-12 bg-[#00B6C5] hover:bg-[#00a3b1] text-white font-bold rounded-xl text-[15px] transition-colors flex items-center justify-center gap-2"
      >
        {nextLabel}
        <ArrowRight size={16} />
      </button>
    </div>
  );
}

/* ─── Step 1: 환영 + 업무 요약 ─── */
function StepWelcome({ onNext }: { onNext: () => void }) {
  const roles = [
    { icon: Search, label: "체크인", desc: "환자 도착 → 이름 검색 → 탭" },
    { icon: Inbox, label: "인박스", desc: "태스크 순서대로 처리" },
    { icon: MessageSquare, label: "카톡 복사", desc: "AI 맞춤 카톡 → 복사 발송" },
    { icon: ClipboardCheck, label: "EMR 복붙", desc: "차트 복사 → EMR 붙여넣기" },
  ];

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
          실장님, 실전 가이드입니다
        </h1>
        <p className="mt-3 text-[15px] text-[#888]">
          실제 화면을 체험하며 <span className="text-[#00B6C5] font-bold">4가지</span> 업무를 익힙니다
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {roles.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              className="bg-[#f8fafb] border border-[#e8f4f5] rounded-xl p-4 text-center"
            >
              <div className="w-11 h-11 rounded-xl bg-[#e8f7f8] flex items-center justify-center mx-auto mb-2.5">
                <r.icon className="w-5 h-5 text-[#00B6C5]" strokeWidth={2} />
              </div>
              <p className="text-[13px] font-bold text-[#111]">{r.label}</p>
              <p className="text-[11px] text-[#999] mt-0.5 leading-snug">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="mt-5 bg-[#f0fafb] border border-[#d5eef0] rounded-xl p-3"
        >
          <p className="text-[13px] font-bold text-[#00B6C5] text-center">
            "체크인 → 인박스 순서대로 → 카톡 복사 → EMR 복붙"
          </p>
          <p className="text-[11px] text-[#888] text-center mt-1">이 흐름만 기억하세요!</p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
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

/* ─── Step 2: T1/T2/T3 태스크 유형 설명 ─── */
function StepTaskTypes({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  const tasks = [
    {
      type: "T1", name: "예약 확인 + 예약관리 카톡", icon: Calendar,
      desc: "원장님이 차트를 확정하면 자동 생성됩니다. 환자에게 예약 안내 카톡을 보내고, 예약 여부를 처리합니다.",
      detail: "AI가 진료 차트를 분석하여 환자 맞춤형 카톡 메시지를 자동 생성합니다.",
      timing: "차트 확정 직후",
      color: "border-blue-300 bg-blue-50", tagColor: "bg-blue-500",
    },
    {
      type: "T2", name: "D-1 리마인드 카톡", icon: Bell,
      desc: "예약일 하루 전, 환자에게 내원 리마인드 카톡을 보냅니다.",
      detail: "차트 기반으로 AI가 환자 상태에 맞는 맞춤형 리마인드 메시지를 생성합니다.",
      timing: "예약일 D-1 자동 생성",
      color: "border-green-300 bg-green-50", tagColor: "bg-green-500",
    },
    {
      type: "T3", name: "D+1 리마인드 카톡", icon: MessageSquare,
      desc: "예약일 다음 날, 미방문 환자에게 리마인드 카톡을 보냅니다.",
      detail: "차트 기반 AI 맞춤형 메시지로 환자의 재방문을 유도합니다.",
      timing: "예약일 D+1 자동 생성",
      color: "border-amber-300 bg-amber-50", tagColor: "bg-amber-500",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center min-h-[calc(100vh-60px)] px-5 py-8"
    >
      <div className="max-w-lg w-full">
        <h2 className="text-[22px] font-extrabold text-[#111] mb-1">인박스 태스크 유형</h2>
        <p className="text-[13px] text-[#888] mb-6">인박스에 들어오는 태스크는 3가지 유형입니다</p>

        <div className="space-y-4">
          {tasks.map((task, i) => (
            <motion.div
              key={task.type}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className={`border-2 rounded-2xl p-5 ${task.color}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`${task.tagColor} text-white text-[12px] font-extrabold px-2.5 py-1 rounded-lg`}>
                  {task.type}
                </span>
                <div className="flex items-center gap-2">
                  <task.icon size={16} className="text-[#555]" />
                  <span className="text-[15px] font-bold text-[#111]">{task.name}</span>
                </div>
              </div>
              <p className="text-[13px] text-[#555] leading-relaxed mb-2">{task.desc}</p>
              <p className="text-[12px] text-[#888] leading-relaxed mb-3">
                <Zap size={11} className="inline mr-1 text-amber-500" />
                {task.detail}
              </p>
              <p className="text-[11px] text-[#888]">
                <span className="font-bold text-[#666]">생성 시점:</span> {task.timing}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 bg-[#f0fafb] border border-[#d5eef0] rounded-xl p-3">
          <p className="text-[13px] font-bold text-[#00B6C5] text-center">
            모든 카톡 메시지는 AI가 차트를 분석해서 환자별 맞춤 생성합니다
          </p>
          <p className="text-[11px] text-[#888] text-center mt-1">
            현재는 복사 후 카카오톡 앱에서 직접 발송 · 추후 자동 발송 기능이 추가될 예정입니다
          </p>
        </div>

        <div className="mt-3 bg-[#f8fafb] border border-[#e8e8e8] rounded-xl p-3">
          <p className="text-[11px] text-[#999] leading-relaxed">
            <span className="font-semibold text-[#666]">처리 팁:</span> 인박스에서 태스크는 긴급도 순으로 자동 정렬됩니다.
            기한이 지난(빨간 테두리) 태스크를 먼저 처리하세요.
          </p>
        </div>

        <NavButtons onPrev={onPrev} onNext={onNext} />
      </div>
    </motion.div>
  );
}

/* ─── Step 3: 퀵 체크인 + 신규 등록 ─── */
function StepCheckin({ onNext }: { onNext: () => void }) {
  const [phase, setPhase] = useState<"search" | "found" | "checkedIn" | "newBtn" | "newForm" | "newFilling" | "newDone">("search");
  const [typed, setTyped] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [nameTyped, setNameTyped] = useState("");
  const [phoneTyped, setPhoneTyped] = useState("");
  const target = "김서연";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < target.length) {
        setTyped(target.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setPhase("found"), 300);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const handleCheckin = () => {
    setPhase("checkedIn");
    setToastMsg("✅ 김서연 체크인 완료 → 원장님 화면에 환자가 나타났습니다");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
    setTimeout(() => setPhase("newBtn"), 2000);
  };

  const handleNewOpen = async () => {
    setPhase("newForm");
    setTimeout(async () => {
      setPhase("newFilling");
      const name = "박민수";
      for (let i = 0; i <= name.length; i++) {
        await new Promise(r => setTimeout(r, 100));
        setNameTyped(name.slice(0, i));
      }
      const phone = "010-9876-5432";
      for (let i = 0; i <= phone.length; i++) {
        await new Promise(r => setTimeout(r, 60));
        setPhoneTyped(phone.slice(0, i));
      }
    }, 500);
  };

  const handleRegister = () => {
    setPhase("newDone");
    setToastMsg("✅ 박민수 Lite 환자카드 생성 + 체크인 완료");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
    setTimeout(onNext, 1800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center min-h-[calc(100vh-60px)] px-5 py-8"
    >
      <div className="max-w-md w-full">
        <h2 className="text-[20px] font-extrabold text-[#111] mb-1">체크인 + 신규 등록</h2>
        <p className="text-[13px] text-[#999] mb-5">기존 환자 체크인과 신규 환자 등록을 체험합니다</p>

        {(phase === "search" || phase === "found" || phase === "checkedIn") && (
          <>
            <TooltipBubble text="체크인이 모든 것의 시작입니다. 체크인해야 원장님이 녹음을 시작할 수 있어요" duration={3500} />

            <p className="text-[13px] font-bold text-[#333] mb-3">1. 기존 환자 체크인</p>

            <div className="relative mb-4">
              <div className="flex items-center gap-2 bg-white border-2 border-[#00B6C5] rounded-xl px-4 h-12">
                <Search size={16} className="text-[#00B6C5]" />
                <span className="text-[15px] text-[#111] font-medium">{typed}</span>
                {phase === "search" && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="w-0.5 h-5 bg-[#00B6C5]"
                  />
                )}
              </div>

              <AnimatePresence>
                {phase === "found" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                    className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#e8e8e8] rounded-xl shadow-lg overflow-hidden z-10"
                  >
                    <motion.button
                      onClick={handleCheckin}
                      className="relative w-full px-4 py-3 flex items-center gap-3 hover:bg-[#f8fafb] transition-colors text-left"
                      whileTap={{ scale: 0.98 }}
                    >
                      <PulseRing />
                      <div className="w-8 h-8 rounded-full bg-[#e8f7f8] flex items-center justify-center">
                        <span className="text-[12px] font-bold text-[#00B6C5]">김</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-[14px] font-bold text-[#111]">김서연</p>
                        <p className="text-[11px] text-[#999]">010-1234-5678 · Active</p>
                      </div>
                      <span className="text-[11px] font-semibold text-[#00B6C5] bg-[#e8f7f8] px-2 py-1 rounded-lg">체크인</span>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {phase === "found" && <BounceArrow text="김서연 환자를 탭하여 체크인하세요" />}

            {phase === "checkedIn" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="bg-green-50 border border-green-200 rounded-xl p-3 text-center"
              >
                <CheckCircle2 size={16} className="text-green-500 mx-auto mb-1" />
                <p className="text-[13px] font-semibold text-green-600">체크인 완료!</p>
                <p className="text-[11px] text-[#888] mt-1">다음: 신규 환자 등록 체험</p>
              </motion.div>
            )}
          </>
        )}

        {(phase === "newBtn" || phase === "newForm" || phase === "newFilling" || phase === "newDone") && (
          <>
            <p className="text-[13px] font-bold text-[#333] mb-3">2. 신규 환자 등록</p>

            <div className="flex gap-2 mb-5">
              <div className="flex-1 flex items-center gap-2 bg-[#fafafa] border border-[#e8e8e8] rounded-xl px-4 h-11">
                <Search size={14} className="text-[#bbb]" />
                <span className="text-[13px] text-[#ccc]">환자 검색...</span>
              </div>
              <motion.button
                onClick={phase === "newBtn" ? handleNewOpen : undefined}
                className={`relative flex items-center gap-1.5 h-11 px-4 rounded-xl text-[13px] font-bold transition-colors ${
                  phase === "newBtn" ? "bg-[#00B6C5] text-white" : "bg-[#e8e8e8] text-[#999]"
                }`}
                whileTap={phase === "newBtn" ? { scale: 0.95 } : {}}
              >
                {phase === "newBtn" && <PulseRing />}
                <UserPlus size={14} />
                +신규
              </motion.button>
            </div>

            {phase === "newBtn" && <BounceArrow text="+신규 버튼을 눌러보세요" />}

            {(phase === "newForm" || phase === "newFilling" || phase === "newDone") && (
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-[#e8e8e8] rounded-2xl p-5 shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
              >
                <p className="text-[15px] font-bold text-[#111] mb-4">신규 환자 등록</p>
                <div className="space-y-3 mb-5">
                  <div>
                    <label className="text-[11px] font-semibold text-[#888] mb-1 block">이름</label>
                    <div className="h-10 bg-[#fafafa] border border-[#e8e8e8] rounded-lg px-3 flex items-center">
                      <span className="text-[14px] text-[#111]">{nameTyped}</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-[#888] mb-1 block">전화번호</label>
                    <div className="h-10 bg-[#fafafa] border border-[#e8e8e8] rounded-lg px-3 flex items-center">
                      <span className="text-[14px] text-[#111]">{phoneTyped}</span>
                    </div>
                  </div>
                </div>

                <motion.button
                  onClick={phoneTyped.length >= 13 ? handleRegister : undefined}
                  className={`relative w-full h-11 rounded-xl text-[14px] font-bold transition-colors flex items-center justify-center gap-2 ${
                    phoneTyped.length >= 13
                      ? "bg-[#00B6C5] hover:bg-[#00a3b1] text-white"
                      : "bg-[#e8e8e8] text-[#ccc] cursor-not-allowed"
                  }`}
                  whileTap={phoneTyped.length >= 13 ? { scale: 0.97 } : {}}
                >
                  {phoneTyped.length >= 13 && <PulseRing />}
                  <UserPlus size={14} />
                  등록 + 체크인
                </motion.button>
              </motion.div>
            )}

            {phoneTyped.length >= 13 && phase !== "newDone" && (
              <BounceArrow text="등록 + 체크인 버튼을 눌러보세요" />
            )}
          </>
        )}

        <div className="mt-4 bg-[#f8fafb] border border-[#e8e8e8] rounded-xl p-3">
          <p className="text-[11px] text-[#999] leading-relaxed">
            <span className="font-semibold text-[#666]">참고:</span> 체크인하면 원장님 화면에 환자가 나타나고,
            기존 대기 태스크(예: 예약 확인)가 자동으로 완료 처리됩니다.
          </p>
        </div>
      </div>

      <Toast message={toastMsg} show={showToast} />
    </motion.div>
  );
}

/* ─── Step 4: 인박스 태스크 처리 ─── */
function StepInbox({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-5"
    >
      <div className="max-w-md w-full">
        <TooltipBubble text="원장님이 확정하면 여기에 태스크가 자동으로 나타납니다" duration={3500} />

        <h2 className="text-[20px] font-extrabold text-[#111] mb-1">인박스</h2>
        <p className="text-[13px] text-[#999] mb-5">원장님이 확정한 태스크를 처리합니다</p>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-4">
          {["오늘", "전체", "지남"].map((tab, i) => (
            <button
              key={tab}
              className={`h-8 px-3.5 rounded-lg text-[12px] font-semibold transition-colors ${
                i === 0 ? "bg-[#00B6C5] text-white" : "bg-[#f0f0f0] text-[#888]"
              }`}
            >
              {tab}
              {tab === "지남" && <span className="ml-1 text-[10px] text-red-400">1</span>}
            </button>
          ))}
        </div>

        {/* Task cards */}
        <div className="space-y-3">
          {/* Overdue task — T3 D+1 */}
          <div className="bg-white border-2 border-red-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle size={14} className="text-red-400" />
              <span className="text-[13px] font-bold text-[#111]">이준호</span>
              <span className="text-[10px] font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">지남</span>
              <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">T3</span>
            </div>
            <p className="text-[12px] text-[#888] mb-3">D+1 리마인드 · 목 통증 · 3월 9일 예정</p>
            <div className="flex gap-2">
              <button className="h-8 px-3 bg-[#f0f0f0] text-[#888] rounded-lg text-[12px] font-medium opacity-50">
                카톡 내용 복사
              </button>
            </div>
          </div>

          {/* Today's task — T1 */}
          <div className="bg-white border border-[#e8e8e8] rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Inbox size={14} className="text-[#00B6C5]" />
              <span className="text-[13px] font-bold text-[#111]">김서연</span>
              <span className="text-[10px] font-bold text-[#00B6C5] bg-[#e8f7f8] px-1.5 py-0.5 rounded">오늘</span>
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">T1</span>
            </div>
            <p className="text-[12px] text-[#888] mb-2">예약 확인 + 예약관리 카톡 · 허리 통증 · 1주 후 권장</p>
            {/* 원장 메모 */}
            <div className="bg-[#fafafa] border border-[#e8e8e8] rounded-lg px-3 py-2 mb-3">
              <p className="text-[11px] text-[#888]">
                <span className="font-semibold text-[#666]">📌 원장 메모:</span> 다음 내원 시 X-ray 촬영 필요
              </p>
            </div>
            <div className="flex gap-2">
              <motion.button
                onClick={onNext}
                className="relative h-8 px-3.5 bg-[#00B6C5] text-white rounded-lg text-[12px] font-semibold flex items-center gap-1.5"
                whileTap={{ scale: 0.95 }}
              >
                <PulseRing />
                <Copy size={12} />
                카톡 내용 복사
              </motion.button>
              <button className="h-8 px-3 bg-[#f0f0f0] text-[#888] rounded-lg text-[12px] font-medium opacity-50">
                예약함
              </button>
              <button className="h-8 px-3 bg-[#f0f0f0] text-[#888] rounded-lg text-[12px] font-medium opacity-50">
                안함
              </button>
            </div>
          </div>
        </div>

        <BounceArrow text="김서연 태스크의 카톡 내용 복사 버튼을 눌러보세요" />

        <div className="mt-4 bg-[#f8fafb] border border-[#e8e8e8] rounded-xl p-3 space-y-1.5">
          <p className="text-[11px] text-[#999] leading-relaxed">
            <span className="font-semibold text-red-500">빨간 테두리</span> = 기한이 지난 태스크. 우선 처리하세요.
          </p>
          <p className="text-[11px] text-[#999] leading-relaxed">
            <span className="font-semibold text-[#666]">원장 메모</span>가 있으면 환자 안내 시 참고하세요.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Step 5: 카톡 복사 → 카카오톡 발송 ─── */
function StepKakaoCopy({ onNext }: { onNext: () => void }) {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const kakaoMessage = "안녕하세요 김서연님, OO한의원입니다.\n\n원장님께서 김서연님의 허리 통증 치료 경과를 위해 3월 17일경 내원을 권해 주셨어요.\n\n예약 도와드릴까요? 😊";

  const handleCopy = () => {
    setCopied(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setTimeout(onNext, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-5"
    >
      <div className="max-w-md w-full">
        <h2 className="text-[20px] font-extrabold text-[#111] mb-1">카톡 내용 복사 → 발송</h2>
        <p className="text-[13px] text-[#999] mb-5">AI가 차트를 분석해 생성한 맞춤형 메시지입니다</p>

        {/* Kakao-style message preview */}
        <div className="bg-[#B2C7D9] rounded-2xl p-5 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-[#FEE500] flex items-center justify-center">
              <MessageSquare size={14} className="text-[#3C1E1E]" />
            </div>
            <span className="text-[13px] font-bold text-[#111]">OO한의원</span>
          </div>
          <div className="bg-white rounded-xl p-4">
            <p className="text-[13px] text-[#333] leading-relaxed whitespace-pre-line">
              {kakaoMessage}
            </p>
          </div>
        </div>

        <div className="bg-[#f0fafb] border border-[#d5eef0] rounded-xl p-3 mb-4">
          <p className="text-[12px] text-[#00B6C5] text-center leading-relaxed">
            <Zap size={12} className="inline mr-1" />
            <span className="font-bold">AI 맞춤 메시지</span> — 진료 차트를 분석하여 환자별로 다른 내용이 생성됩니다
          </p>
        </div>

        {/* Copy button */}
        <motion.button
          onClick={!copied ? handleCopy : undefined}
          className={`relative w-full h-12 rounded-xl text-[15px] font-bold transition-colors flex items-center justify-center gap-2 ${
            copied ? "bg-green-500 text-white" : "bg-[#00B6C5] hover:bg-[#00a3b1] text-white"
          }`}
          whileTap={!copied ? { scale: 0.97 } : {}}
        >
          {!copied && <PulseRing />}
          {copied ? (
            <><CheckCircle2 size={16} /> 복사 완료!</>
          ) : (
            <><Copy size={16} /> 복사</>
          )}
        </motion.button>

        {!copied && <BounceArrow text="복사 버튼을 눌러보세요" />}

        {/* 워크플로우 안내 */}
        <div className="mt-5 space-y-2">
          <div className="bg-[#f8fafb] border border-[#e8e8e8] rounded-xl p-3">
            <p className="text-[11px] text-[#888] leading-relaxed">
              <span className="font-semibold text-[#666]">발송 순서:</span> 복사 버튼 → 카카오톡 앱 열기 → 환자 채팅방 → 붙여넣기 → 전송
            </p>
          </div>
          <div className="bg-[#f0fafb] border border-[#d5eef0] rounded-xl p-3">
            <p className="text-[12px] text-[#00B6C5] leading-relaxed">
              <span className="font-bold">🚀 자동 발송 기능이 추후 추가될 예정입니다.</span>
              <span className="text-[#888]"> 현재는 복사 후 카카오톡 앱에서 직접 발송해주세요.</span>
            </p>
          </div>
        </div>
      </div>

      <Toast message="✅ 복사 완료! 카카오톡 앱에서 환자에게 붙여넣기로 보내주세요" show={showToast} />
    </motion.div>
  );
}

/* ─── Step 6: EMR 복붙 ─── */
function StepEMR({ onNext }: { onNext: () => void }) {
  const [phase, setPhase] = useState<"copy" | "copied" | "done">("copy");
  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    setPhase("copied");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleDone = () => {
    setPhase("done");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
    setTimeout(onNext, 1800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-5"
    >
      <div className="max-w-md w-full">
        <TooltipBubble text="원장님이 확정한 차트를 EMR에 옮겨주세요" duration={3000} />

        <h2 className="text-[20px] font-extrabold text-[#111] mb-1">EMR 복붙</h2>
        <p className="text-[13px] text-[#999] mb-5">확정된 차트를 EMR 프로그램에 입력합니다</p>

        {/* Tab bar */}
        <div className="flex gap-1 mb-4 bg-[#f0f0f0] rounded-lg p-1">
          <button className="flex-1 h-8 rounded-md text-[12px] font-medium text-[#888]">인박스</button>
          <button className="flex-1 h-8 rounded-md text-[12px] font-bold bg-white text-[#111] shadow-sm">EMR</button>
        </div>

        {/* EMR queue */}
        <div className="bg-white border border-[#e8e8e8] rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
          <div className="px-4 py-3 border-b border-[#f0f0f0] flex items-center justify-between">
            <span className="text-[13px] font-semibold text-[#555]">복붙 대기열</span>
            <span className="text-[11px] text-[#bbb]">{phase === "done" ? "0건" : "1건"}</span>
          </div>

          <AnimatePresence>
            {phase !== "done" && (
              <motion.div
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[14px] font-bold text-[#111]">김서연</span>
                  <span className="text-[10px] text-[#00B6C5] font-semibold bg-[#e8f7f8] px-1.5 py-0.5 rounded">Active</span>
                  <span className="text-[10px] text-[#999]">09:45 확정</span>
                </div>

                <div className="flex gap-2">
                  <motion.button
                    onClick={phase === "copy" ? handleCopy : undefined}
                    className={`relative flex-1 h-10 rounded-xl text-[13px] font-bold transition-colors flex items-center justify-center gap-1.5 ${
                      phase === "copy" ? "bg-[#00B6C5] text-white" : "bg-green-100 text-green-600"
                    }`}
                    whileTap={phase === "copy" ? { scale: 0.97 } : {}}
                  >
                    {phase === "copy" && <PulseRing />}
                    {phase === "copy" ? (
                      <><Copy size={13} /> 복사</>
                    ) : (
                      <><CheckCircle2 size={13} /> 복사됨</>
                    )}
                  </motion.button>

                  <motion.button
                    onClick={phase === "copied" ? handleDone : undefined}
                    className={`relative flex-1 h-10 rounded-xl text-[13px] font-bold transition-colors flex items-center justify-center gap-1.5 ${
                      phase === "copied" ? "bg-[#00B6C5] text-white" : "bg-[#f0f0f0] text-[#ccc] cursor-not-allowed"
                    }`}
                    whileTap={phase === "copied" ? { scale: 0.97 } : {}}
                  >
                    {phase === "copied" && <PulseRing />}
                    <ClipboardCheck size={13} />
                    완료
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {phase === "done" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 text-center">
              <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-[13px] text-[#888]">모든 차트가 EMR에 입력되었습니다</p>
            </motion.div>
          )}
        </div>

        {phase === "copy" && <BounceArrow text="복사 버튼을 눌러보세요" />}
        {phase === "copied" && <BounceArrow text="EMR에 붙여넣기 후 완료 버튼을 눌러보세요" />}

        <div className="mt-4 bg-[#f8fafb] border border-[#e8e8e8] rounded-xl p-3">
          <p className="text-[11px] text-[#999] leading-relaxed">
            <span className="font-semibold text-[#666]">순서:</span> 복사 → EMR 프로그램 열기 → 환자 차트에 붙여넣기 → 하니에이전트에서 완료 버튼
          </p>
        </div>
      </div>

      <Toast
        message={phase === "copied" ? "✅ 차트 복사 완료 → EMR에 붙여넣기 해주세요" : "✅ EMR 복붙 완료!"}
        show={showToast}
      />
    </motion.div>
  );
}

/* ─── Step 7: 완료 ─── */
function StepComplete({ onFinish }: { onFinish: () => void }) {
  const dailyFlow = [
    { step: "1", label: "환자 도착 → 퀵 체크인", role: "직접", color: "bg-[#e8f7f8] text-[#00B6C5]" },
    { step: "2", label: "원장님 진료 + 확정 (대기)", role: "자동", color: "bg-[#f0f0f0] text-[#888]" },
    { step: "3", label: "인박스에서 태스크 확인", role: "직접", color: "bg-[#e8f7f8] text-[#00B6C5]" },
    { step: "4", label: "카톡 내용 복사 → 카톡 앱에서 발송", role: "직접", color: "bg-[#e8f7f8] text-[#00B6C5]" },
    { step: "5", label: "EMR 복사 → EMR에 붙여넣기 → 완료", role: "직접", color: "bg-[#e8f7f8] text-[#00B6C5]" },
    { step: "🔄", label: "다음 환자 체크인 → 반복", role: "루프", color: "bg-green-50 text-green-600" },
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
          className="w-20 h-20 rounded-full bg-[#e8f7f8] flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 className="w-10 h-10 text-[#00B6C5]" />
        </motion.div>

        <h2 className="text-[24px] font-extrabold text-[#111] mb-2">
          실전 가이드 완료!
        </h2>
        <p className="text-[14px] text-[#888] mb-6">
          실장님의 모든 업무 흐름을 체험하셨습니다
        </p>

        {/* Daily flow summary */}
        <div className="bg-[#f8fafb] border border-[#e8e8e8] rounded-xl p-5 text-left mb-5">
          <p className="text-[13px] font-bold text-[#333] mb-3">📋 실장님의 하루 루틴</p>
          <div className="space-y-2.5">
            {dailyFlow.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${item.color}`}>
                  {item.step}
                </span>
                <p className="text-[13px] text-[#333] flex-1">{item.label}</p>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${item.color}`}>
                  {item.role}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key message */}
        <div className="bg-[#f0fafb] border border-[#d5eef0] rounded-xl p-4 mb-5">
          <p className="text-[14px] font-bold text-[#00B6C5]">
            "체크인 → 인박스 순서대로 → 카톡 복사 → EMR 복붙"
          </p>
          <p className="text-[12px] text-[#888] mt-1">이 흐름만 기억하세요!</p>
        </div>

        {/* Tips */}
        <div className="bg-[#fff8e6] border border-[#f5e6b8] rounded-xl p-3 mb-6 text-left space-y-1.5">
          <p className="text-[12px] text-[#b8860b]">
            💡 빨간 테두리 태스크 = 기한 지남. 우선 처리하세요!
          </p>
          <p className="text-[12px] text-[#b8860b]">
            💡 카톡 자동 발송 기능이 추후 추가될 예정입니다.
          </p>
          <p className="text-[12px] text-[#b8860b]">
            💡 원장 메모가 있으면 환자 안내 시 참고하세요.
          </p>
        </div>

        <button
          onClick={onFinish}
          className="w-full h-12 bg-[#00B6C5] hover:bg-[#00a3b1] text-white font-bold rounded-xl text-[15px] transition-colors flex items-center justify-center gap-2"
        >
          완료! 서비스 시작하기
          <ArrowRight size={16} />
        </button>

        <a href="/tutorial" className="inline-block mt-3 text-[12px] text-[#bbb] hover:text-[#888] transition-colors">
          ← 튜토리얼 허브로 돌아가기
        </a>
      </div>
    </motion.div>
  );
}

/* ─── Main Tutorial Page ─── */
export default function StaffTutorial() {
  const [step, setStep] = useState(1);

  const goNext = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const goPrev = () => setStep((s) => Math.max(s - 1, 1));
  const goFinish = () => {
    window.location.href = "https://www.haniagent.kr/main";
  };

  return (
    <div className="min-h-screen bg-white">
      <ProgressBar step={step} />

      <div className="pt-[60px]">
        <AnimatePresence mode="wait">
          {step === 1 && <StepWelcome key="s1" onNext={goNext} />}
          {step === 2 && <StepTaskTypes key="s2" onPrev={goPrev} onNext={goNext} />}
          {step === 3 && <StepCheckin key="s3" onNext={goNext} />}
          {step === 4 && <StepInbox key="s4" onNext={goNext} />}
          {step === 5 && <StepKakaoCopy key="s5" onNext={goNext} />}
          {step === 6 && <StepEMR key="s6" onNext={goNext} />}
          {step === 7 && <StepComplete key="s7" onFinish={goFinish} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
