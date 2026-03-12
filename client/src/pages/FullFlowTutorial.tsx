/*
 * Stage 1: 전체 플로우 튜토리얼 (모든 역할 공통, ~3분)
 * 하니에이전트의 전체 시스템을 이해하는 인터랙티브 가이드
 * 
 * 8 Steps:
 * 1. 환영 + 전체 구조 소개
 * 2. 코어 루프 시각화 (녹음→차트→인박스→알림→재방문)
 * 3. T1/T2/T3 태스크 설명
 * 4. Light/Active 배지 설명
 * 5. 시간대별 업무 흐름 (오전 준비→진료 중→진료 후→마감)
 * 6. 원장-실장 역할 분담 요약
 * 7. 핵심 주의사항 (녹음 중 화면 전환 금지 등)
 * 8. 완료 + Stage 2 안내
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic, CheckCircle2, Calendar, ArrowRight, ArrowLeft,
  Inbox, MessageSquare, ClipboardCheck, Clock, Users,
  Zap, AlertTriangle, BookOpen, Stethoscope, UserCheck,
  RefreshCw, FileText, Phone, Sun, Sunset, Moon,
  Shield, Copy, ChevronRight
} from "lucide-react";
import Logo from "@/components/Logo";

const TOTAL_STEPS = 8;

/* ─── Shared Components ─── */
function ProgressBar({ step }: { step: number }) {
  const stepNames = [
    "시스템 소개", "코어 루프", "태스크 유형", "환자 배지",
    "하루 일과", "역할 분담", "핵심 주의사항", "완료"
  ];
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

/* ─── Step 1: 시스템 소개 ─── */
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
          3분이면 전체 시스템을 이해할 수 있습니다.<br />
          원장님과 실장님 모두 이 가이드를 먼저 보세요.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="mt-8 bg-[#f8fafb] border border-[#e8e8e8] rounded-2xl p-5 text-left"
        >
          <p className="text-[14px] font-bold text-[#111] mb-4">이 가이드에서 배울 것</p>
          <div className="space-y-3">
            {[
              { icon: RefreshCw, label: "코어 루프", desc: "녹음 → 차트 → 인박스 → 알림 → 재방문" },
              { icon: Zap, label: "태스크 유형", desc: "T1(예약관리), T2(카톡발송), T3(EMR복붙)" },
              { icon: BookOpen, label: "환자 배지", desc: "Light(일반) vs Active(비급여 사전상담 완료)" },
              { icon: Clock, label: "하루 일과", desc: "오전 준비 → 진료 중 → 진료 후 → 마감" },
              { icon: Users, label: "역할 분담", desc: "원장은 녹음+확정, 실장은 체크인+인박스" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#e8f7f8] flex items-center justify-center shrink-0">
                  <item.icon size={15} className="text-[#00B6C5]" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#333]">{item.label}</p>
                  <p className="text-[11px] text-[#888]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <NavButtons onNext={onNext} nextLabel="시작하기" showPrev={false} />
      </div>
    </motion.div>
  );
}

/* ─── Step 2: 코어 루프 ─── */
function Step2({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  const [activeNode, setActiveNode] = useState(0);

  const nodes = [
    { icon: Mic, label: "녹음", desc: "원장이 진료 중 녹음 버튼을 누릅니다. AI가 실시간으로 음성을 인식합니다.", role: "원장", color: "bg-[#00B6C5]" },
    { icon: FileText, label: "SOAP 차트 생성", desc: "녹음이 끝나면 AI가 자동으로 SOAP 차트를 작성합니다. 원장이 확인하고 수정할 수 있습니다.", role: "자동", color: "bg-amber-500" },
    { icon: CheckCircle2, label: "확정", desc: "원장이 차트를 확정하면, 실장 인박스에 태스크가 자동 생성됩니다.", role: "원장", color: "bg-green-500" },
    { icon: Inbox, label: "인박스 처리", desc: "실장이 인박스에서 태스크를 순서대로 처리합니다. 카톡 복사, EMR 복붙 등.", role: "실장", color: "bg-blue-500" },
    { icon: MessageSquare, label: "환자 알림", desc: "실장이 카톡 내용을 복사해서 카카오톡 앱에서 환자에게 발송합니다.", role: "실장", color: "bg-purple-500" },
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
        <p className="text-[13px] text-[#888] mb-6">하니에이전트의 핵심 순환 구조입니다. 각 단계를 탭해보세요.</p>

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

        <div className="mt-5 bg-[#f0fafb] border border-[#d5eef0] rounded-xl p-3 text-center">
          <p className="text-[13px] font-bold text-[#00B6C5]">
            이 루프가 환자 한 명마다 반복됩니다
          </p>
          <p className="text-[11px] text-[#888] mt-1">녹음 → 차트 → 확정 → 인박스 → 카톡 → 재방문</p>
        </div>

        <NavButtons onPrev={onPrev} onNext={onNext} />
      </div>
    </motion.div>
  );
}

/* ─── Step 3: T1/T2/T3 태스크 유형 ─── */
function Step3({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  const tasks = [
    {
      type: "T1", name: "예약관리", icon: Calendar,
      desc: "원장이 확정한 권장 내원 시점을 기반으로 환자에게 예약 안내를 합니다.",
      timing: "확정 직후 자동 생성",
      action: "환자에게 예약 안내 → 예약함/안함 처리",
      color: "border-blue-300 bg-blue-50", tagColor: "bg-blue-500",
    },
    {
      type: "T2", name: "카카오톡 발송", icon: MessageSquare,
      desc: "AI가 생성한 카톡 메시지를 복사해서 카카오톡 앱에서 환자에게 발송합니다.",
      timing: "T1 처리 후 또는 리마인드 시점에 자동 생성",
      action: "카톡 내용 복사 → 카카오톡 앱에서 붙여넣기 발송",
      color: "border-green-300 bg-green-50", tagColor: "bg-green-500",
    },
    {
      type: "T3", name: "EMR 복붙", icon: ClipboardCheck,
      desc: "확정된 SOAP 차트를 복사해서 한의원 EMR 프로그램에 붙여넣기합니다.",
      timing: "확정 직후 EMR 대기열에 자동 등장",
      action: "SOAP 복사 → EMR 프로그램에 붙여넣기 → 완료 처리",
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
        <h2 className="text-[22px] font-extrabold text-[#111] mb-1">태스크 유형: T1 · T2 · T3</h2>
        <p className="text-[13px] text-[#888] mb-6">실장님이 인박스에서 처리하는 태스크는 3가지 유형입니다</p>

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
              <p className="text-[13px] text-[#555] leading-relaxed mb-3">{task.desc}</p>
              <div className="space-y-1.5">
                <p className="text-[11px] text-[#888]">
                  <span className="font-bold text-[#666]">생성 시점:</span> {task.timing}
                </p>
                <p className="text-[11px] text-[#888]">
                  <span className="font-bold text-[#666]">실장 액션:</span> {task.action}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 bg-[#fff8e6] border border-[#f5e6b8] rounded-xl p-3">
          <p className="text-[12px] text-[#b8860b] leading-relaxed">
            <span className="font-bold">처리 순서 팁:</span> 인박스에서 태스크는 긴급도 순으로 자동 정렬됩니다.
            기한이 지난(빨간 테두리) 태스크를 먼저 처리하세요.
          </p>
        </div>

        <NavButtons onPrev={onPrev} onNext={onNext} />
      </div>
    </motion.div>
  );
}

/* ─── Step 4: Light/Active 배지 ─── */
function Step4({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center min-h-[calc(100vh-60px)] px-5 py-8"
    >
      <div className="max-w-lg w-full">
        <h2 className="text-[22px] font-extrabold text-[#111] mb-1">환자 배지: Light vs Active</h2>
        <p className="text-[13px] text-[#888] mb-6">환자 유형에 따라 배지가 다르게 표시됩니다</p>

        <div className="grid grid-cols-1 gap-5 mb-6">
          {/* Light */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="bg-white border border-[#e8e8e8] rounded-2xl p-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[12px] font-bold text-[#888] bg-[#f0f0f0] px-3 py-1.5 rounded-lg">
                Lite
              </span>
              <div>
                <p className="text-[16px] font-extrabold text-[#111]">일반 환자</p>
                <p className="text-[11px] text-[#999]">급여 환자 / 기본 등록 환자</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-green-500 mt-0.5 shrink-0" />
                <p className="text-[13px] text-[#555]">실장이 이름+전화번호만으로 빠르게 등록</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-green-500 mt-0.5 shrink-0" />
                <p className="text-[13px] text-[#555]">녹음 또는 리핏으로 진료 기록</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-green-500 mt-0.5 shrink-0" />
                <p className="text-[13px] text-[#555]">기본 예약 관리 + EMR 복붙</p>
              </div>
            </div>
          </motion.div>

          {/* Active */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-white border-2 border-[#00B6C5] rounded-2xl p-5 shadow-[0_2px_16px_rgba(0,182,197,0.08)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[12px] font-bold text-[#00B6C5] bg-[#e8f7f8] px-3 py-1.5 rounded-lg">
                Active
              </span>
              <div>
                <p className="text-[16px] font-extrabold text-[#111]">비급여 사전상담 완료 환자</p>
                <p className="text-[11px] text-[#999]">사전상담 폼을 작성한 환자</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-[#00B6C5] mt-0.5 shrink-0" />
                <p className="text-[13px] text-[#555]">환자가 사전상담 폼을 통해 증상을 미리 입력</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-[#00B6C5] mt-0.5 shrink-0" />
                <p className="text-[13px] text-[#555]">원장님이 진료 전에 환자 정보를 미리 확인 가능</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-[#00B6C5] mt-0.5 shrink-0" />
                <p className="text-[13px] text-[#555]">AI 상담 피드백 기능 활용 가능 (Pro 플랜)</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-[#00B6C5] mt-0.5 shrink-0" />
                <p className="text-[13px] text-[#555]">카카오톡 알림 발송 대상</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="bg-[#f8fafb] border border-[#e8e8e8] rounded-xl p-3">
          <p className="text-[12px] text-[#666] leading-relaxed">
            <span className="font-bold text-[#00B6C5]">핵심:</span> 모든 환자는 녹음/리핏이 가능합니다.
            Active 환자는 추가로 사전상담 데이터와 AI 피드백을 활용할 수 있습니다.
            배지는 환자 리스트와 인박스에서 이름 옆에 표시됩니다.
          </p>
        </div>

        <NavButtons onPrev={onPrev} onNext={onNext} />
      </div>
    </motion.div>
  );
}

/* ─── Step 5: 시간대별 업무 흐름 ─── */
function Step5({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  const [activeTime, setActiveTime] = useState(0);

  const timeBlocks = [
    {
      icon: Sun, label: "오전 준비", time: "진료 시작 전",
      color: "bg-amber-100 text-amber-700 border-amber-200",
      tasks: [
        { role: "실장", text: "하니에이전트 접속 → 오늘 예약 환자 확인" },
        { role: "실장", text: "인박스에 밀린 태스크(빨간 테두리)가 있으면 우선 처리" },
        { role: "원장", text: "하니에이전트 접속 → 오늘 예약 환자 미리 확인 (선택)" },
      ]
    },
    {
      icon: Clock, label: "진료 중", time: "환자 방문 시",
      color: "bg-[#e8f7f8] text-[#00B6C5] border-[#d5eef0]",
      tasks: [
        { role: "실장", text: "환자 도착 → 퀵 체크인 (이름 검색 → 탭)" },
        { role: "원장", text: "환자 리스트에서 녹음 버튼 → 진료 중 녹음" },
        { role: "원장", text: "녹음 종료 → SOAP 확인/수정 → 확정" },
        { role: "자동", text: "실장 인박스에 태스크 자동 생성" },
      ]
    },
    {
      icon: Sunset, label: "진료 후", time: "환자 진료 사이",
      color: "bg-orange-50 text-orange-600 border-orange-200",
      tasks: [
        { role: "실장", text: "인박스에서 태스크 처리 (T1→T2→T3 순서)" },
        { role: "실장", text: "카톡 내용 복사 → 카카오톡 앱에서 환자에게 발송" },
        { role: "실장", text: "EMR 탭에서 SOAP 복사 → EMR 프로그램에 붙여넣기" },
      ]
    },
    {
      icon: Moon, label: "마감", time: "진료 종료 후",
      color: "bg-indigo-50 text-indigo-600 border-indigo-200",
      tasks: [
        { role: "원장", text: "미확정 차트가 있으면 알림 → 반드시 확정 처리" },
        { role: "실장", text: "인박스에 남은 태스크 모두 처리" },
        { role: "실장", text: "내일 예약 환자 확인 (선택)" },
      ]
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center min-h-[calc(100vh-60px)] px-5 py-8"
    >
      <div className="max-w-lg w-full">
        <h2 className="text-[22px] font-extrabold text-[#111] mb-1">하루 일과 흐름</h2>
        <p className="text-[13px] text-[#888] mb-6">시간대별로 원장과 실장이 할 일을 확인하세요</p>

        {/* Time tabs */}
        <div className="flex gap-2 mb-5 overflow-x-auto">
          {timeBlocks.map((block, i) => (
            <button
              key={block.label}
              onClick={() => setActiveTime(i)}
              className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-[12px] font-semibold border whitespace-nowrap transition-all ${
                activeTime === i
                  ? block.color + " shadow-sm"
                  : "border-[#e8e8e8] bg-white text-[#888] hover:border-[#ccc]"
              }`}
            >
              <block.icon size={14} />
              {block.label}
            </button>
          ))}
        </div>

        {/* Active time block */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTime}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-[#e8e8e8] rounded-2xl p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              {(() => { const Icon = timeBlocks[activeTime].icon; return <Icon size={18} className="text-[#00B6C5]" />; })()}
              <div>
                <p className="text-[16px] font-extrabold text-[#111]">{timeBlocks[activeTime].label}</p>
                <p className="text-[11px] text-[#999]">{timeBlocks[activeTime].time}</p>
              </div>
            </div>

            <div className="space-y-3">
              {timeBlocks[activeTime].tasks.map((task, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <span className={`text-[9px] font-bold px-2 py-1 rounded-full shrink-0 mt-0.5 ${
                    task.role === "원장" ? "bg-[#e8f7f8] text-[#00B6C5]" :
                    task.role === "실장" ? "bg-blue-50 text-blue-600" :
                    "bg-[#f0f0f0] text-[#888]"
                  }`}>
                    {task.role}
                  </span>
                  <p className="text-[13px] text-[#555] leading-relaxed">{task.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <NavButtons onPrev={onPrev} onNext={onNext} />
      </div>
    </motion.div>
  );
}

/* ─── Step 6: 역할 분담 요약 ─── */
function Step6({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center min-h-[calc(100vh-60px)] px-5 py-8"
    >
      <div className="max-w-lg w-full">
        <h2 className="text-[22px] font-extrabold text-[#111] mb-1">역할 분담</h2>
        <p className="text-[13px] text-[#888] mb-6">원장과 실장의 업무가 명확히 분리됩니다</p>

        <div className="grid grid-cols-1 gap-5 mb-6">
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
            <div className="space-y-2.5">
              {[
                "환자 진료 시 녹음 버튼 시작/종료",
                "AI가 작성한 SOAP 차트 확인 및 수정",
                "차트 확정 (확정해야 실장에게 전달)",
                "권장 내원 시점 선택 + 실장 참고 메모 (선택)",
                "반복 치료 환자는 리핏 버튼으로 처리",
                "하루 끝에 미확정 차트 확인",
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
            <div className="space-y-2.5">
              {[
                "환자 도착 시 퀵 체크인 (이름 검색 → 탭)",
                "신규 환자 등록 (이름 + 전화번호 + 주증)",
                "인박스에서 태스크 순서대로 처리",
                "카톡 내용 복사 → 카카오톡 앱에서 환자에게 발송",
                "EMR 탭에서 SOAP 복사 → EMR 프로그램에 붙여넣기",
                "하루 끝에 남은 태스크 모두 처리",
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

        {/* 자동 처리 */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="bg-[#f8fafb] border border-[#e8e8e8] rounded-xl p-4 mb-1"
        >
          <div className="flex items-center gap-2 mb-2">
            <Zap size={14} className="text-amber-500" />
            <p className="text-[13px] font-bold text-[#333]">시스템이 자동으로 처리하는 것</p>
          </div>
          <div className="space-y-1.5">
            {[
              "녹음 → SOAP 차트 자동 생성",
              "확정 → 실장 인박스에 태스크 자동 생성",
              "권장 시점 → 카톡 메시지 내용 자동 생성",
              "태스크 긴급도 자동 정렬 (기한 지난 것 우선)",
            ].map((text, i) => (
              <p key={i} className="text-[12px] text-[#888] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                {text}
              </p>
            ))}
          </div>
        </motion.div>

        <NavButtons onPrev={onPrev} onNext={onNext} />
      </div>
    </motion.div>
  );
}

/* ─── Step 7: 핵심 주의사항 ─── */
function Step7({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}
      className="flex flex-col items-center min-h-[calc(100vh-60px)] px-5 py-8"
    >
      <div className="max-w-lg w-full">
        <h2 className="text-[22px] font-extrabold text-[#111] mb-1">핵심 주의사항</h2>
        <p className="text-[13px] text-[#888] mb-6">반드시 기억해야 할 사항들입니다</p>

        <div className="space-y-4">
          {/* Critical Warning */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="bg-red-50 border-2 border-red-300 rounded-2xl p-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle size={18} className="text-red-500" />
              <p className="text-[16px] font-extrabold text-red-600">녹음 중 화면 전환 금지</p>
            </div>
            <div className="space-y-2">
              <p className="text-[13px] text-red-600 leading-relaxed">
                녹음 중에 다른 앱(카카오톡, 전화 등)으로 전환하거나 화면을 끄면 <span className="font-bold">녹음이 즉시 중단</span>됩니다.
              </p>
              <p className="text-[13px] text-[#888] leading-relaxed">
                진료가 끝날 때까지 하니에이전트 화면을 유지하세요.
                전화가 오면 녹음을 먼저 중지한 후 받으세요.
              </p>
            </div>
          </motion.div>

          {/* Important Notes */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-[#fff8e6] border border-[#f5e6b8] rounded-2xl p-5"
          >
            <p className="text-[14px] font-bold text-[#b8860b] mb-3">기타 중요 사항</p>
            <div className="space-y-3">
              {[
                {
                  title: "첫 녹음 시 마이크 테스트",
                  desc: "처음 녹음할 때 브라우저가 마이크 권한을 요청합니다. 반드시 '허용'을 눌러주세요. 마이크가 제대로 작동하는지 테스트 후 진행하세요."
                },
                {
                  title: "확정을 해야 실장에게 전달",
                  desc: "SOAP 차트를 확인만 하고 확정을 누르지 않으면 실장에게 태스크가 전달되지 않습니다. 반드시 확정 버튼을 눌러주세요."
                },
                {
                  title: "카카오톡은 복사+붙여넣기",
                  desc: "현재 카카오톡 자동 발송은 지원하지 않습니다. 카톡 내용을 복사한 후 카카오톡 앱에서 직접 환자에게 붙여넣기로 보내주세요."
                },
                {
                  title: "SOAP 차트는 수정 가능",
                  desc: "AI가 작성한 차트가 완벽하지 않을 수 있습니다. 원장님이 직접 내용을 수정한 후 확정할 수 있습니다."
                },
                {
                  title: "재방문 환자의 권장시점·메모 수정",
                  desc: "권장 내원 시점과 실장 참고 메모는 원장님이 직접 수정할 수 있습니다. 환자 상태에 맞게 조정하세요."
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[12px] mt-0.5">💡</span>
                  <div>
                    <p className="text-[12px] font-bold text-[#8B6914]">{item.title}</p>
                    <p className="text-[11px] text-[#b8860b] leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <NavButtons onPrev={onPrev} onNext={onNext} />
      </div>
    </motion.div>
  );
}

/* ─── Step 8: 완료 + Stage 2 안내 ─── */
function Step8({ onPrev }: { onPrev: () => void }) {
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
          전체 플로우 이해 완료!
        </h2>
        <p className="text-[14px] text-[#888] mb-8">
          이제 역할에 맞는 실전 가이드를 진행하세요
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
              <p className="text-[12px] text-[#888]">퀵 체크인 → 인박스 → 카톡 복사 → EMR 복붙</p>
            </div>
            <ArrowRight size={16} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="bg-[#f8fafb] border border-[#e8e8e8] rounded-xl p-3 mb-6">
          <p className="text-[12px] text-[#888]">
            실전 가이드에서는 실제 화면을 체험하며 바로 업무에 투입할 수 있도록 안내합니다.
          </p>
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
          {step === 4 && <Step4 key="s4" onPrev={goPrev} onNext={goNext} />}
          {step === 5 && <Step5 key="s5" onPrev={goPrev} onNext={goNext} />}
          {step === 6 && <Step6 key="s6" onPrev={goPrev} onNext={goNext} />}
          {step === 7 && <Step7 key="s7" onPrev={goPrev} onNext={goNext} />}
          {step === 8 && <Step8 key="s8" onPrev={goPrev} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
