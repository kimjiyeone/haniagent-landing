/*
 * Stage 1: 전체 플로우 튜토리얼 (모든 역할 공통)
 * 단순하고 직관적으로 — 바로 실전 가이드로 넘어가도록
 * 
 * 4 Steps:
 * 1. 환영 + 하니에이전트란?
 * 2. 코어 루프 시각화 (녹음→차트→확정→인박스→카톡→재방문)
 * 3. 원장-실장 역할 분담 요약
 * 4. 완료 → 바로 실전 가이드 선택
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic, CheckCircle2, Calendar, ArrowRight, ArrowLeft,
  Inbox, MessageSquare, Clock, Users,
  Stethoscope, UserCheck, RefreshCw, FileText, ChevronRight
} from "lucide-react";
import Logo from "@/components/Logo";

const TOTAL_STEPS = 4;

/* ─── Shared Components ─── */
function ProgressBar({ step }: { step: number }) {
  const stepNames = ["소개", "코어 루프", "역할 분담", "완료"];
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
          <span className="text-[11px] text-[#bbb] font-medium hidden sm:inline">전체 플로우</span>
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
          <ArrowLeft size={14} />
          이전
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

/* ─── Step 1: 소개 ─── */
function Step1({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-5"
    >
      <div className="max-w-lg w-full text-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }}>
          <Logo className="h-8 w-auto mx-auto mb-6" />
        </motion.div>

        <h1 className="text-[28px] md:text-[32px] font-extrabold text-[#111] leading-tight">
          하니에이전트는 어떻게 작동하나요?
        </h1>
        <p className="mt-3 text-[15px] text-[#888] max-w-md mx-auto">
          1분이면 전체 흐름을 이해할 수 있습니다.<br />
          원장님과 실장님 모두 이 가이드를 먼저 보세요.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="mt-8 bg-[#f8fafb] border border-[#e8e8e8] rounded-2xl p-5"
        >
          <p className="text-[15px] font-bold text-[#111] mb-4">한 줄 요약</p>
          <div className="bg-[#f0fafb] border border-[#d5eef0] rounded-xl p-4">
            <p className="text-[15px] font-bold text-[#00B6C5] leading-relaxed">
              원장님이 녹음하면, AI가 차트를 만들고,<br />
              실장님이 인박스에서 나머지를 처리합니다.
            </p>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-[13px] text-[#888]">
            <span className="bg-[#e8f7f8] text-[#00B6C5] font-bold px-2.5 py-1 rounded-lg">녹음</span>
            <ChevronRight size={14} className="text-[#ccc]" />
            <span className="bg-[#e8f7f8] text-[#00B6C5] font-bold px-2.5 py-1 rounded-lg">AI 차트</span>
            <ChevronRight size={14} className="text-[#ccc]" />
            <span className="bg-[#e8f7f8] text-[#00B6C5] font-bold px-2.5 py-1 rounded-lg">확정</span>
            <ChevronRight size={14} className="text-[#ccc]" />
            <span className="bg-[#e8f7f8] text-[#00B6C5] font-bold px-2.5 py-1 rounded-lg">인박스</span>
          </div>
        </motion.div>

        <NavButtons onNext={onNext} nextLabel="코어 루프 보기" showPrev={false} />
      </div>
    </motion.div>
  );
}

/* ─── Step 2: 코어 루프 ─── */
function Step2({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  const [activeNode, setActiveNode] = useState(0);

  const nodes = [
    { icon: Mic, label: "녹음", desc: "원장님이 진료 중 녹음 버튼을 누릅니다. AI가 실시간으로 음성을 인식합니다.", role: "원장", color: "bg-[#00B6C5]" },
    { icon: FileText, label: "AI 차트 생성", desc: "녹음이 끝나면 AI가 자동으로 SOAP 차트를 작성합니다. 원장님이 확인하고 수정할 수 있습니다.", role: "자동", color: "bg-amber-500" },
    { icon: CheckCircle2, label: "확정", desc: "원장님이 차트를 확정하면, 실장님 인박스에 태스크가 자동 생성됩니다.", role: "원장", color: "bg-green-500" },
    { icon: Inbox, label: "인박스 처리", desc: "실장님이 인박스에서 태스크를 순서대로 처리합니다. 예약 안내, 카톡 발송, EMR 입력 등.", role: "실장", color: "bg-blue-500" },
    { icon: MessageSquare, label: "카톡 발송", desc: "AI가 원장님의 생활코칭 메모를 분석해 환자별 맞춤 카톡을 생성합니다. 예약확인·D-1·D+1 세 가지 타입으로 자동 생성됩니다.", role: "실장", color: "bg-purple-500" },
    { icon: Calendar, label: "재방문", desc: "환자가 예약일에 다시 방문하면, 체크인부터 루프가 반복됩니다.", role: "루프", color: "bg-[#00B6C5]" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center min-h-[calc(100vh-60px)] px-5 py-8"
    >
      <div className="max-w-lg w-full">
        <h2 className="text-[22px] font-extrabold text-[#111] mb-1">코어 루프</h2>
        <p className="text-[13px] text-[#888] mb-6">환자 한 명마다 이 루프가 반복됩니다. 각 단계를 탭해보세요.</p>

        {/* Loop visualization */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {nodes.map((node, i) => (
            <motion.button
              key={node.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.06 }}
              onClick={() => setActiveNode(i)}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-[12px] font-semibold border transition-all ${
                activeNode === i
                  ? "border-[#00B6C5] bg-[#e8f7f8] text-[#00B6C5] shadow-[0_2px_12px_rgba(0,182,197,0.15)]"
                  : "border-[#e8e8e8] bg-white text-[#888] hover:border-[#ccc]"
              }`}
            >
              <div className={`w-6 h-6 rounded-full ${node.color} flex items-center justify-center`}>
                <node.icon size={12} className="text-white" />
              </div>
              {node.label}
              {i < nodes.length - 1 && (
                <ChevronRight size={12} className="text-[#ccc] -mr-1" />
              )}
            </motion.button>
          ))}
        </div>

        {/* Active node detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-[#e8e8e8] rounded-2xl p-5 shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-xl ${nodes[activeNode].color} flex items-center justify-center`}>
                {(() => { const Icon = nodes[activeNode].icon; return <Icon size={18} className="text-white" />; })()}
              </div>
              <div>
                <p className="text-[16px] font-extrabold text-[#111]">{nodes[activeNode].label}</p>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  nodes[activeNode].role === "원장" ? "bg-[#e8f7f8] text-[#00B6C5]" :
                  nodes[activeNode].role === "실장" ? "bg-blue-50 text-blue-600" :
                  nodes[activeNode].role === "자동" ? "bg-amber-50 text-amber-600" :
                  "bg-green-50 text-green-600"
                }`}>
                  {nodes[activeNode].role}
                </span>
              </div>
            </div>
            <p className="text-[14px] text-[#555] leading-relaxed">{nodes[activeNode].desc}</p>
          </motion.div>
        </AnimatePresence>

        <NavButtons onPrev={onPrev} onNext={onNext} />
      </div>
    </motion.div>
  );
}

/* ─── Step 3: 역할 분담 ─── */
function Step3({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center min-h-[calc(100vh-60px)] px-5 py-8"
    >
      <div className="max-w-lg w-full">
        <h2 className="text-[22px] font-extrabold text-[#111] mb-1">역할 분담</h2>
        <p className="text-[13px] text-[#888] mb-6">원장님과 실장님의 업무가 명확히 분리됩니다</p>

        <div className="grid grid-cols-1 gap-5 mb-5">
          {/* 원장 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="bg-[#f0fafb] border border-[#d5eef0] rounded-2xl p-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-[#e8f7f8] flex items-center justify-center">
                <Stethoscope size={20} className="text-[#00B6C5]" />
              </div>
              <div>
                <p className="text-[16px] font-extrabold text-[#111]">원장님</p>
                <p className="text-[11px] text-[#00B6C5] font-semibold">진료에만 집중</p>
              </div>
            </div>
            <div className="space-y-2">
              {[
                "환자 진료 시 녹음 시작/종료",
                "AI 차트 확인 → 필요시 수정 → 확정",
                "반복 치료 환자는 리핏 버튼",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#00B6C5] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[9px] font-bold text-white">{i + 1}</span>
                  </div>
                  <p className="text-[13px] text-[#555]">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 실장 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
                <UserCheck size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="text-[16px] font-extrabold text-[#111]">실장님</p>
                <p className="text-[11px] text-blue-600 font-semibold">환자 관리 + 행정 처리</p>
              </div>
            </div>
            <div className="space-y-2">
              {[
                "환자 도착 시 퀵 체크인",
                "인박스에서 태스크 순서대로 처리",
                "카톡 복사 → 카카오톡 앱에서 발송",
                "EMR 복사 → EMR 프로그램에 붙여넣기",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[9px] font-bold text-white">{i + 1}</span>
                  </div>
                  <p className="text-[13px] text-[#555]">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <NavButtons onPrev={onPrev} onNext={onNext} nextLabel="완료" />
      </div>
    </motion.div>
  );
}

/* ─── Step 4: 완료 → 바로 실전 가이드 ─── */
function Step4({ onPrev }: { onPrev: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-5 py-8"
    >
      <div className="max-w-lg w-full text-center">
        <motion.div
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-20 h-20 rounded-full bg-[#e8f7f8] flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 className="w-10 h-10 text-[#00B6C5]" />
        </motion.div>

        <h2 className="text-[24px] font-extrabold text-[#111] mb-2">
          전체 흐름 이해 완료!
        </h2>
        <p className="text-[14px] text-[#888] mb-8">
          이제 역할에 맞는 실전 가이드를 바로 시작하세요
        </p>

        {/* Stage 2 links */}
        <div className="space-y-3 mb-6">
          <a
            href="/tutorial/doctor"
            className="group flex items-center gap-4 bg-[#f0fafb] border border-[#d5eef0] rounded-xl p-4 hover:border-[#00B6C5] hover:shadow-[0_2px_16px_rgba(0,182,197,0.1)] transition-all text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-[#e8f7f8] flex items-center justify-center shrink-0">
              <Stethoscope size={22} className="text-[#00B6C5]" />
            </div>
            <div className="flex-1">
              <p className="text-[15px] font-bold text-[#111]">원장님 실전 가이드</p>
              <p className="text-[12px] text-[#888]">마이크 테스트 → 녹음 → SOAP 수정 → 확정 → 리핏</p>
            </div>
            <ArrowRight size={16} className="text-[#00B6C5] group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/tutorial/staff"
            className="group flex items-center gap-4 bg-blue-50/50 border border-blue-100 rounded-xl p-4 hover:border-blue-300 hover:shadow-[0_2px_16px_rgba(59,130,246,0.08)] transition-all text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
              <UserCheck size={22} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-[15px] font-bold text-[#111]">실장님 실전 가이드</p>
              <p className="text-[12px] text-[#888]">예약확인·D-1·D+1 태스크 → 체크인 → 인박스 → 카톡 → EMR</p>
            </div>
            <ArrowRight size={16} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onPrev}
            className="h-12 px-5 border border-[#e8e8e8] text-[#888] font-semibold rounded-xl text-[14px] hover:bg-[#f8f8f8] transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={14} />
            이전
          </button>
          <a
            href="/tutorial"
            className="flex-1 h-12 bg-[#111] hover:bg-[#333] text-white font-bold rounded-xl text-[15px] transition-colors flex items-center justify-center gap-2"
          >
            튜토리얼 허브로 돌아가기
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Component ─── */
export default function FullFlowTutorial() {
  const [step, setStep] = useState(1);

  const goNext = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const goPrev = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="min-h-screen bg-white">
      <ProgressBar step={step} />
      <div className="pt-[60px]">
        <AnimatePresence mode="wait">
          {step === 1 && <Step1 key="s1" onNext={goNext} />}
          {step === 2 && <Step2 key="s2" onPrev={goPrev} onNext={goNext} />}
          {step === 3 && <Step3 key="s3" onPrev={goPrev} onNext={goNext} />}
          {step === 4 && <Step4 key="s4" onPrev={goPrev} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
