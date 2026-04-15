/*
 * Stage 1: 전체 플로우 튜토리얼 (모든 역할 공통)
 * 4 Steps: 소개 → 코어 루프 → 역할 분담 → 완료
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
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
    <div className="flex gap-3 mt-8">
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
        <Logo className="h-8 w-auto mx-auto mb-6" />

        <h1 className="text-[28px] md:text-[32px] font-extrabold text-[#111] leading-tight">
          하니에이전트는 어떻게 작동하나요?
        </h1>
        <p className="mt-3 text-[15px] text-[#888] max-w-md mx-auto">
          1분이면 전체 흐름을 이해할 수 있습니다.<br />
          원장님과 실장님 모두 이 가이드를 먼저 보세요.
        </p>

        <div className="mt-8 bg-[#f8fafb] border border-[#e8e8e8] rounded-2xl p-6">
          <p className="text-[15px] font-bold text-[#111] mb-4">한 줄 요약</p>
          <p className="text-[16px] font-bold text-[#00B6C5] leading-relaxed">
            원장님이 녹음하면, AI가 차트를 만들고,<br />
            실장님이 인박스에서 나머지를 처리합니다.
          </p>

          <div className="mt-5 flex items-center justify-center gap-3 text-[13px] text-[#888]">
            <span className="font-bold text-[#00B6C5]">녹음</span>
            <span className="text-[#ccc]">→</span>
            <span className="font-bold text-[#00B6C5]">AI 차트</span>
            <span className="text-[#ccc]">→</span>
            <span className="font-bold text-[#00B6C5]">확정</span>
            <span className="text-[#ccc]">→</span>
            <span className="font-bold text-[#00B6C5]">인박스</span>
          </div>
        </div>

        <NavButtons onNext={onNext} nextLabel="코어 루프 보기" showPrev={false} />
      </div>
    </motion.div>
  );
}

/* ─── Step 2: 코어 루프 ─── */
function Step2({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  const [activeNode, setActiveNode] = useState(0);

  const nodes = [
    { label: "체크인", desc: "환자가 도착하면 실장님이 이름을 검색해 탭 한 번으로 체크인합니다. 신규 환자는 이름+전화번호만 입력하면 됩니다.", role: "실장" },
    { label: "녹음", desc: "원장님이 진료 중 녹음 버튼을 누릅니다. AI가 실시간으로 음성을 인식합니다.", role: "원장" },
    { label: "AI 차트 생성", desc: "녹음이 끝나면 AI가 자동으로 SOAP 차트를 작성합니다. 원장님이 확인하고 수정할 수 있습니다.", role: "자동" },
    { label: "확정", desc: "원장님이 차트를 확정하면, 실장님 인박스에 태스크가 자동 생성됩니다.", role: "원장" },
    { label: "인박스 처리", desc: "실장님이 인박스에서 태스크를 순서대로 처리합니다. 예약 안내, 카톡 발송, EMR 입력 등.", role: "실장" },
    { label: "카톡 발송", desc: "AI가 원장님과 환자분의 진료차트를 분석해 환자별 맞춤 카톡을 생성합니다. 예약확인·D-1·D+1 세 가지 타입으로 타이밍을 맞춰 자동 생성됩니다.", role: "실장" },
    { label: "재방문", desc: "환자가 예약일에 다시 방문하면, 체크인부터 루프가 반복됩니다.", role: "루프" },
  ];

  const roleColor = (role: string) => {
    if (role === "원장") return "text-[#00B6C5] bg-[#e8f7f8]";
    if (role === "실장") return "text-blue-600 bg-blue-50";
    if (role === "자동") return "text-amber-600 bg-amber-50";
    return "text-green-600 bg-green-50";
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center min-h-[calc(100vh-60px)] px-5 py-8"
    >
      <div className="max-w-lg w-full">
        <h2 className="text-[22px] font-extrabold text-[#111] mb-1">코어 루프</h2>
        <p className="text-[13px] text-[#888] mb-6">환자 한 명마다 이 루프가 반복됩니다. 각 단계를 탭해보세요.</p>

        {/* Loop visualization - simple text buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {nodes.map((node, i) => (
            <button
              key={node.label}
              onClick={() => setActiveNode(i)}
              className={`px-3.5 py-2 rounded-lg text-[13px] font-semibold border transition-all ${
                activeNode === i
                  ? "border-[#00B6C5] bg-[#e8f7f8] text-[#00B6C5]"
                  : "border-[#e8e8e8] bg-white text-[#888] hover:border-[#ccc]"
              }`}
            >
              {node.label}
            </button>
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
            className="bg-white border border-[#e8e8e8] rounded-2xl p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <p className="text-[17px] font-extrabold text-[#111]">{nodes[activeNode].label}</p>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${roleColor(nodes[activeNode].role)}`}>
                {nodes[activeNode].role}
              </span>
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

        <div className="space-y-4 mb-5">
          {/* 원장 */}
          <div className="bg-[#f8fafb] border border-[#e8e8e8] rounded-2xl p-5">
            <div className="mb-4">
              <p className="text-[17px] font-extrabold text-[#111]">원장님</p>
              <p className="text-[12px] text-[#00B6C5] font-semibold">진료에만 집중</p>
            </div>
            <div className="space-y-2.5">
              {[
                "환자 진료 시 녹음 시작/종료",
                "AI 차트 확인 → 필요시 수정 → 확정",
                "반복 치료 환자는 리핏 버튼",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="text-[12px] font-bold text-[#00B6C5] mt-0.5">{i + 1}.</span>
                  <p className="text-[14px] text-[#555]">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 실장 */}
          <div className="bg-[#f8fafb] border border-[#e8e8e8] rounded-2xl p-5">
            <div className="mb-4">
              <p className="text-[17px] font-extrabold text-[#111]">실장님</p>
              <p className="text-[12px] text-blue-600 font-semibold">환자 관리 + 행정 처리</p>
            </div>
            <div className="space-y-2.5">
              {[
                "환자 도착 시 퀵 체크인",
                "인박스에서 태스크 순서대로 처리",
                "카톡 복사 → 카카오톡 앱에서 발송",
                "EMR 복사 → EMR 프로그램에 붙여넣기",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="text-[12px] font-bold text-blue-600 mt-0.5">{i + 1}.</span>
                  <p className="text-[14px] text-[#555]">{text}</p>
                </div>
              ))}
            </div>
          </div>
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
          className="w-16 h-16 rounded-full bg-[#e8f7f8] flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 className="w-8 h-8 text-[#00B6C5]" />
        </motion.div>

        <h2 className="text-[24px] font-extrabold text-[#111] mb-2">
          전체 흐름 이해 완료!
        </h2>
        <p className="text-[14px] text-[#888] mb-8">
          이제 역할에 맞는 실전 가이드를 바로 시작하세요
        </p>

        {/* Stage 2 links */}
        <div className="space-y-3 mb-8 text-left">
          <a
            href="/tutorial/doctor"
            className="group flex items-center justify-between bg-[#f8fafb] border border-[#e8e8e8] rounded-xl p-4 hover:border-[#00B6C5] transition-all"
          >
            <div>
              <p className="text-[15px] font-bold text-[#111]">원장님 실전 가이드</p>
              <p className="text-[12px] text-[#888]">마이크 테스트 → 녹음 → SOAP 수정 → 확정 → 리핏</p>
            </div>
            <ArrowRight size={16} className="text-[#00B6C5] shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/tutorial/staff"
            className="group flex items-center justify-between bg-[#f8fafb] border border-[#e8e8e8] rounded-xl p-4 hover:border-[#00B6C5] transition-all"
          >
            <div>
              <p className="text-[15px] font-bold text-[#111]">실장님 실전 가이드</p>
              <p className="text-[12px] text-[#888]">체크인 → 인박스 → 카톡 → EMR</p>
            </div>
            <ArrowRight size={16} className="text-[#00B6C5] shrink-0 group-hover:translate-x-1 transition-transform" />
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
            className="flex-1 h-12 bg-[#111] hover:bg-[#333] text-white font-bold rounded-xl text-[15px] transition-colors flex items-center justify-center"
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
