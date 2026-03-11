/*
 * 실장 온보딩 튜토리얼 페이지
 * Design: hanitek.kr 틸(#00B6C5) 브랜드 컬러, 깔끔한 SaaS 톤
 * 7 Steps: 환영 → 퀵 체크인 → 신규 등록 → 인박스 태스크 → 카톡 복사 → EMR 복붙 → 완료
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, UserPlus, Inbox, Copy, FileText, CheckCircle2,
  ArrowRight, Clock, MessageSquare, ClipboardCheck,
  ChevronDown, AlertCircle, RefreshCw
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
  const stepNames = ["환영", "퀵 체크인", "신규 등록", "인박스 태스크", "카톡 복사", "EMR 복붙", "완료"];
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
    { icon: Search, label: "체크인", desc: "환자 도착 시 검색 → 체크인" },
    { icon: Inbox, label: "인박스", desc: "태스크 확인 및 처리" },
    { icon: MessageSquare, label: "카톡 복사", desc: "알림 내용 복사 → 발송" },
    { icon: ClipboardCheck, label: "EMR 복붙", desc: "차트 복사 → EMR 입력" },
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
          실장님, 환영합니다
        </h1>
        <p className="mt-3 text-[15px] text-[#888]">
          실장님이 하실 일은 딱 <span className="text-[#00B6C5] font-bold">4가지</span>입니다
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-5 bg-[#f0fafb] border border-[#d5eef0] rounded-xl p-3"
        >
          <p className="text-[13px] font-bold text-[#00B6C5] text-center">
            "체크인 → 인박스 순서대로 → 카톡 복사 → EMR 복붙"
          </p>
          <p className="text-[11px] text-[#888] text-center mt-1">이 흐름만 기억하세요!</p>
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

/* ─── Step 2: 퀵 체크인 체험 ─── */
function StepCheckin({ onNext }: { onNext: () => void }) {
  const [typed, setTyped] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [checkedIn, setCheckedIn] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const target = "김서연";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < target.length) {
        setTyped(target.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowDropdown(true), 300);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const handleCheckin = () => {
    setCheckedIn(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
    setTimeout(onNext, 1800);
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
        <TooltipBubble text="체크인이 모든 것의 시작입니다. 체크인해야 원장님이 녹음을 시작할 수 있어요" duration={3500} />

        <h2 className="text-[20px] font-extrabold text-[#111] mb-1">퀵 체크인</h2>
        <p className="text-[13px] text-[#999] mb-5">기존 환자를 검색하여 체크인합니다</p>

        {/* Search bar */}
        <div className="relative mb-4">
          <div className="flex items-center gap-2 bg-white border-2 border-[#00B6C5] rounded-xl px-4 h-12">
            <Search size={16} className="text-[#00B6C5]" />
            <span className="text-[15px] text-[#111] font-medium">{typed}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="w-0.5 h-5 bg-[#00B6C5]"
            />
          </div>

          {/* Autocomplete dropdown */}
          <AnimatePresence>
            {showDropdown && !checkedIn && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
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

        {showDropdown && !checkedIn && (
          <BounceArrow text="김서연 환자를 탭하여 체크인하세요" />
        )}

        <div className="mt-4 bg-[#f8fafb] border border-[#e8e8e8] rounded-xl p-3">
          <p className="text-[11px] text-[#999] leading-relaxed">
            <span className="font-semibold text-[#666]">참고:</span> 체크인하면 원장님 화면에 환자가 나타나고, 
            기존 대기 태스크(예: 예약 확인)가 자동으로 완료 처리됩니다.
          </p>
        </div>
      </div>

      <Toast message="✅ 김서연 체크인 완료 → 원장님 화면에 환자가 나타났습니다" show={showToast} />
    </motion.div>
  );
}

/* ─── Step 3: 신규 환자 등록 ─── */
function StepNewPatient({ onNext }: { onNext: () => void }) {
  const [phase, setPhase] = useState<"button" | "form" | "filling" | "done">("button");
  const [showToast, setShowToast] = useState(false);
  const [nameTyped, setNameTyped] = useState("");
  const [phoneTyped, setPhoneTyped] = useState("");
  const [symptomTyped, setSymptomTyped] = useState("");

  const typeText = (text: string, setter: (v: string) => void, delay: number) => {
    return new Promise<void>((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setter(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          resolve();
        }
      }, delay);
    });
  };

  const handleOpenForm = async () => {
    setPhase("form");
    setTimeout(async () => {
      setPhase("filling");
      await typeText("박민수", setNameTyped, 100);
      await typeText("010-9876-5432", setPhoneTyped, 60);
      await typeText("어깨 통증", setSymptomTyped, 100);
    }, 500);
  };

  const handleRegister = () => {
    setPhase("done");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
    setTimeout(onNext, 1800);
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
        <TooltipBubble text="처음 오신 환자는 이렇게 등록해주세요" duration={3000} />

        <h2 className="text-[20px] font-extrabold text-[#111] mb-1">신규 환자 등록</h2>
        <p className="text-[13px] text-[#999] mb-5">처음 방문한 환자를 등록하고 체크인합니다</p>

        {/* Search bar with +신규 button */}
        <div className="flex gap-2 mb-5">
          <div className="flex-1 flex items-center gap-2 bg-[#fafafa] border border-[#e8e8e8] rounded-xl px-4 h-11">
            <Search size={14} className="text-[#bbb]" />
            <span className="text-[13px] text-[#ccc]">환자 검색...</span>
          </div>
          <motion.button
            onClick={phase === "button" ? handleOpenForm : undefined}
            className={`relative flex items-center gap-1.5 h-11 px-4 rounded-xl text-[13px] font-bold transition-colors ${
              phase === "button"
                ? "bg-[#00B6C5] text-white"
                : "bg-[#e8e8e8] text-[#999]"
            }`}
            whileTap={phase === "button" ? { scale: 0.95 } : {}}
          >
            {phase === "button" && <PulseRing />}
            <UserPlus size={14} />
            +신규
          </motion.button>
        </div>

        {/* Registration form */}
        {phase !== "button" && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-[#e8e8e8] rounded-2xl p-5 shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
          >
            <p className="text-[15px] font-bold text-[#111] mb-4">신규 환자 등록</p>

            <div className="space-y-3 mb-5">
              <div>
                <label className="text-[11px] font-semibold text-[#888] mb-1 block">이름</label>
                <div className="h-10 bg-[#fafafa] border border-[#e8e8e8] rounded-lg px-3 flex items-center">
                  <span className="text-[14px] text-[#111]">{nameTyped}</span>
                  {phase === "filling" && nameTyped.length < 3 && (
                    <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} className="w-0.5 h-4 bg-[#00B6C5] ml-0.5" />
                  )}
                </div>
              </div>
              <div>
                <label className="text-[11px] font-semibold text-[#888] mb-1 block">전화번호</label>
                <div className="h-10 bg-[#fafafa] border border-[#e8e8e8] rounded-lg px-3 flex items-center">
                  <span className="text-[14px] text-[#111]">{phoneTyped}</span>
                  {phase === "filling" && nameTyped.length >= 3 && phoneTyped.length < 13 && (
                    <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} className="w-0.5 h-4 bg-[#00B6C5] ml-0.5" />
                  )}
                </div>
              </div>
              <div>
                <label className="text-[11px] font-semibold text-[#888] mb-1 block">주증</label>
                <div className="h-10 bg-[#fafafa] border border-[#e8e8e8] rounded-lg px-3 flex items-center">
                  <span className="text-[14px] text-[#111]">{symptomTyped}</span>
                  {phase === "filling" && phoneTyped.length >= 13 && symptomTyped.length < 5 && (
                    <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} className="w-0.5 h-4 bg-[#00B6C5] ml-0.5" />
                  )}
                </div>
              </div>
            </div>

            <motion.button
              onClick={symptomTyped.length >= 4 ? handleRegister : undefined}
              className={`relative w-full h-11 rounded-xl text-[14px] font-bold transition-colors flex items-center justify-center gap-2 ${
                symptomTyped.length >= 4
                  ? "bg-[#00B6C5] hover:bg-[#00a3b1] text-white"
                  : "bg-[#e8e8e8] text-[#ccc] cursor-not-allowed"
              }`}
              whileTap={symptomTyped.length >= 4 ? { scale: 0.97 } : {}}
            >
              {symptomTyped.length >= 4 && <PulseRing />}
              <UserPlus size={14} />
              등록 + 체크인
            </motion.button>
          </motion.div>
        )}

        {phase === "button" && <BounceArrow text="+신규 버튼을 눌러보세요" />}
        {symptomTyped.length >= 4 && phase !== "done" && <BounceArrow text="등록 + 체크인 버튼을 눌러보세요" />}
      </div>

      <Toast message="✅ 박민수 Lite 환자카드 생성 + 체크인 완료" show={showToast} />
    </motion.div>
  );
}

/* ─── Step 4: 인박스 태스크 처리 ─── */
function StepInbox({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-5"
    >
      <div className="max-w-md w-full">
        <TooltipBubble text="원장님이 진료 후 확정하면, 여기에 태스크가 자동으로 나타납니다" duration={3500} />

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
          {/* Task 2 - 이준호 overdue */}
          <div className="bg-white border-2 border-red-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle size={14} className="text-red-400" />
              <span className="text-[13px] font-bold text-[#111]">이준호</span>
              <span className="text-[10px] font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">지남</span>
            </div>
            <p className="text-[12px] text-[#888] mb-3">T2 리마인드 · 목 통증 · 3월 9일 예정</p>
            <div className="flex gap-2">
              <button className="h-8 px-3 bg-[#f0f0f0] text-[#888] rounded-lg text-[12px] font-medium opacity-50">
                카톡 내용 복사
              </button>
            </div>
          </div>

          {/* Task 1 - 김서연 */}
          <div className="bg-white border border-[#e8e8e8] rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Inbox size={14} className="text-[#00B6C5]" />
              <span className="text-[13px] font-bold text-[#111]">김서연</span>
              <span className="text-[10px] font-bold text-[#00B6C5] bg-[#e8f7f8] px-1.5 py-0.5 rounded">오늘</span>
            </div>
            <p className="text-[12px] text-[#888] mb-3">T1 예약관리 · 허리 통증 · 1주 후 권장</p>
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

        <div className="mt-4 bg-[#f8fafb] border border-[#e8e8e8] rounded-xl p-3">
          <p className="text-[11px] text-[#999] leading-relaxed">
            <span className="font-semibold text-[#666]">참고:</span> 빨간 테두리는 기한이 지난(overdue) 태스크입니다. 
            우선적으로 처리해주세요. 태스크는 위에서부터 긴급한 순서로 정렬됩니다.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Step 5: 카톡 내용 복사 ─── */
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
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-5"
    >
      <div className="max-w-md w-full">
        <h2 className="text-[20px] font-extrabold text-[#111] mb-1">카톡 내용 미리보기</h2>
        <p className="text-[13px] text-[#999] mb-5">김서연 환자에게 보낼 메시지입니다</p>

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

        <p className="text-[12px] text-[#bbb] text-center mb-4">
          내용을 수정할 수도 있어요. 복사 후 카카오톡 앱에서 붙여넣기로 보내주세요.
        </p>

        {/* Copy button */}
        <motion.button
          onClick={!copied ? handleCopy : undefined}
          className={`relative w-full h-12 rounded-xl text-[15px] font-bold transition-colors flex items-center justify-center gap-2 ${
            copied
              ? "bg-green-500 text-white"
              : "bg-[#00B6C5] hover:bg-[#00a3b1] text-white"
          }`}
          whileTap={!copied ? { scale: 0.97 } : {}}
        >
          {!copied && <PulseRing />}
          {copied ? (
            <>
              <CheckCircle2 size={16} />
              복사 완료!
            </>
          ) : (
            <>
              <Copy size={16} />
              복사
            </>
          )}
        </motion.button>

        {!copied && <BounceArrow text="복사 버튼을 눌러보세요" />}

        <div className="mt-4 bg-[#fff8e6] border border-[#f5e6b8] rounded-xl p-3">
          <p className="text-[11px] text-[#b8860b] leading-relaxed">
            💡 현재는 자동발송이 아닌 <span className="font-bold">복사 + 붙여넣기</span> 방식입니다. 
            복사 후 카카오톡 앱에서 해당 환자에게 직접 보내주세요.
          </p>
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
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-5"
    >
      <div className="max-w-md w-full">
        <TooltipBubble text="원장님이 확정한 차트를 EMR에 옮겨주세요" duration={3000} />

        <h2 className="text-[20px] font-extrabold text-[#111] mb-1">EMR 복붙</h2>
        <p className="text-[13px] text-[#999] mb-5">확정된 차트를 EMR에 입력합니다</p>

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
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[14px] font-bold text-[#111]">김서연</span>
                      <span className="text-[10px] text-[#999]">09:45 확정</span>
                    </div>
                    <p className="text-[12px] text-[#888] leading-relaxed">
                      S: 허리 통증 2주 전 발생, 좌측 요부 중심<br />
                      O: 요추 ROM 굴곡 60° 제한, L4-5 압통(+)<br />
                      A: 요추 염좌 의심<br />
                      P: 침 치료 + 부항, 1주 후 재방문
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 mt-3">
                  <motion.button
                    onClick={phase === "copy" ? handleCopy : undefined}
                    className={`relative flex-1 h-10 rounded-xl text-[13px] font-bold transition-colors flex items-center justify-center gap-1.5 ${
                      phase === "copy"
                        ? "bg-[#00B6C5] text-white"
                        : "bg-green-100 text-green-600"
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
                      phase === "copied"
                        ? "bg-[#00B6C5] text-white"
                        : "bg-[#f0f0f0] text-[#ccc] cursor-not-allowed"
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-8 text-center"
            >
              <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-[13px] text-[#888]">모든 차트가 EMR에 입력되었습니다</p>
            </motion.div>
          )}
        </div>

        {phase === "copy" && <BounceArrow text="복사 버튼을 눌러보세요" />}
        {phase === "copied" && <BounceArrow text="EMR에 붙여넣기 후 완료 버튼을 눌러보세요" />}

        <div className="mt-4 bg-[#f8fafb] border border-[#e8e8e8] rounded-xl p-3">
          <p className="text-[11px] text-[#999] leading-relaxed">
            <span className="font-semibold text-[#666]">참고:</span> 환자명을 누르면 통합보드를 확인할 수 있어요. 
            복사 → EMR 프로그램에 붙여넣기 → 완료 순서로 진행합니다.
          </p>
        </div>
      </div>

      <Toast
        message={phase === "copied" ? "✅ SOAP 차트 복사 완료 → EMR에 붙여넣기 해주세요" : "✅ EMR 복붙 완료!"}
        show={showToast}
      />
    </motion.div>
  );
}

/* ─── Step 7: 완료 ─── */
function StepComplete({ onFinish }: { onFinish: () => void }) {
  const dailyFlow = [
    { step: "1", label: "환자 도착 → 퀵 체크인", role: "직접", color: "bg-[#e8f7f8] text-[#00B6C5]" },
    { step: "2", label: "원장님 진료 + 확정", role: "자동", color: "bg-[#f0f0f0] text-[#888]" },
    { step: "3", label: "인박스에서 태스크 확인", role: "직접", color: "bg-[#e8f7f8] text-[#00B6C5]" },
    { step: "4", label: "카톡 내용 복사 → 카톡 앱에서 발송", role: "직접", color: "bg-[#e8f7f8] text-[#00B6C5]" },
    { step: "5", label: "EMR 복사 → EMR에 붙여넣기 → 완료", role: "직접", color: "bg-[#e8f7f8] text-[#00B6C5]" },
    { step: "🔄", label: "다음 환자 체크인 → 반복", role: "루프", color: "bg-green-50 text-green-600" },
  ];

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
        <p className="text-[14px] text-[#888] mb-6">
          실장님의 하루 업무 흐름을 모두 익히셨습니다
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

        {/* Tip */}
        <div className="bg-[#fff8e6] border border-[#f5e6b8] rounded-xl p-3 mb-6">
          <p className="text-[12px] text-[#b8860b]">
            💡 인박스에 빨간 테두리 태스크가 보이면 기한이 지난 것이에요. 우선 처리해주세요!
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
          첫 환자가 오시면 체크인부터 시작해보세요!
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Main Tutorial Page ─── */
export default function StaffTutorial() {
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
          {step === 2 && <StepCheckin key="s2" onNext={goNext} />}
          {step === 3 && <StepNewPatient key="s3" onNext={goNext} />}
          {step === 4 && <StepInbox key="s4" onNext={goNext} />}
          {step === 5 && <StepKakaoCopy key="s5" onNext={goNext} />}
          {step === 6 && <StepEMR key="s6" onNext={goNext} />}
          {step === 7 && <StepComplete key="s7" onFinish={goFinish} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
