/*
 * 튜토리얼 허브 페이지 (2-Stage 구조)
 * Stage 1: 전체 플로우 보기 (모든 역할 공통, ~3분)
 * Stage 2: 역할별 실전 가이드 (원장 OR 실장, ~3분)
 */

import { motion } from "framer-motion";
import {
  Mic, CheckCircle2, Calendar, Search, Inbox, MessageSquare,
  ClipboardCheck, ArrowRight, Eye, Play, BookOpen, Zap,
  Clock, Users, Stethoscope
} from "lucide-react";
import Logo from "@/components/Logo";

export default function TutorialHub() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[#f0f0f0]">
        <div className="container flex items-center justify-between h-14">
          <a href="/" className="flex items-center gap-2">
            <Logo className="h-5 w-auto" />
          </a>
          <span className="text-[12px] text-[#999] font-medium">사용 가이드</span>
        </div>
      </div>

      <div className="pt-[80px] pb-16 px-5">
        <div className="max-w-2xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <Logo className="h-8 w-auto mx-auto mb-5" />
            <h1 className="text-[28px] md:text-[34px] font-extrabold text-[#111] leading-tight">
              하니에이전트 사용 가이드
            </h1>
            <p className="mt-3 text-[15px] text-[#888] max-w-md mx-auto">
              2단계로 구성된 가이드입니다. 전체 플로우를 먼저 이해한 후, 역할별 실전 가이드를 진행하세요.
            </p>
          </motion.div>

          {/* ─── Stage 1: 전체 플로우 ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-full bg-[#00B6C5] text-white flex items-center justify-center text-[12px] font-extrabold">1</span>
              <h2 className="text-[18px] font-extrabold text-[#111]">전체 플로우 이해하기</h2>
              <span className="text-[11px] font-semibold text-[#888] bg-[#f0f0f0] px-2 py-0.5 rounded-full ml-auto">모든 역할 공통</span>
            </div>

            <a
              href="/tutorial/flow"
              className="group block bg-gradient-to-br from-[#f0fafb] to-[#f8fafb] border border-[#d5eef0] rounded-2xl p-6 hover:border-[#00B6C5] hover:shadow-[0_4px_24px_rgba(0,182,197,0.1)] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#e8f7f8] flex items-center justify-center shrink-0">
                  <Play className="w-7 h-7 text-[#00B6C5]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[17px] font-extrabold text-[#111] mb-1">전체 플로우 보기</h3>
                  <p className="text-[12px] text-[#999] mb-3">
                    <Clock size={11} className="inline mr-1" />
                    약 3분 · 인터랙티브 체험
                  </p>
                  <p className="text-[13px] text-[#666] leading-relaxed mb-4">
                    환자 도착부터 진료 완료까지, 원장과 실장이 함께 만드는 하루의 전체 흐름을 체험합니다.
                    예약확인/D-1/D+1 태스크, Light/Active 배지, 시간대별 업무 흐름을 한눈에 이해할 수 있습니다.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      { icon: Users, label: "코어 루프" },
                      { icon: Zap, label: "예약확인·D-1·D+1" },
                      { icon: Clock, label: "시간대별 흐름" },
                      { icon: BookOpen, label: "Light·Active 배지" },
                    ].map((item) => (
                      <span key={item.label} className="flex items-center gap-1.5 text-[11px] font-semibold text-[#00B6C5] bg-white border border-[#d5eef0] px-2.5 py-1.5 rounded-lg">
                        <item.icon size={12} />
                        {item.label}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-[14px] font-bold text-[#00B6C5] group-hover:gap-2.5 transition-all">
                    시작하기
                    <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            </a>
          </motion.div>

          {/* ─── Stage 2: 역할별 실전 가이드 ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-full bg-[#111] text-white flex items-center justify-center text-[12px] font-extrabold">2</span>
              <h2 className="text-[18px] font-extrabold text-[#111]">역할별 실전 가이드</h2>
              <span className="text-[11px] font-semibold text-[#888] bg-[#f0f0f0] px-2 py-0.5 rounded-full ml-auto">역할 선택</span>
            </div>

            <p className="text-[13px] text-[#888] mb-5 pl-9">
              전체 플로우를 이해한 후, 본인 역할에 맞는 실전 가이드를 진행하세요.
              실제 화면을 체험하며 바로 업무에 투입할 수 있습니다.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {/* 원장 카드 */}
              <motion.a
                href="/tutorial/doctor"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="group block bg-white border border-[#e8e8e8] rounded-2xl p-6 hover:border-[#00B6C5] hover:shadow-[0_4px_24px_rgba(0,182,197,0.08)] transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#e8f7f8] flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-[#00B6C5]" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-extrabold text-[#111]">원장님 실전 가이드</h3>
                    <p className="text-[12px] text-[#999]">
                      <Clock size={10} className="inline mr-1" />
                      6 Steps · 약 3분
                    </p>
                  </div>
                </div>

                <p className="text-[13px] text-[#666] leading-relaxed mb-4">
                  마이크 테스트 → 녹음 → SOAP 확인/수정 → 확정 → 리핏까지.
                  실제 화면을 체험하며 진료 워크플로우를 익힙니다.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    { icon: Mic, label: "마이크 테스트" },
                    { icon: Mic, label: "녹음" },
                    { icon: CheckCircle2, label: "SOAP 수정/확정" },
                    { icon: Calendar, label: "권장시점·메모" },
                  ].map((item, i) => (
                    <span key={i} className="flex items-center gap-1.5 text-[11px] font-semibold text-[#888] bg-[#f8fafb] border border-[#e8e8e8] px-2.5 py-1.5 rounded-lg">
                      <item.icon size={12} className="text-[#00B6C5]" />
                      {item.label}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-[13px] font-bold text-[#00B6C5] group-hover:gap-2.5 transition-all">
                  시작하기
                  <ArrowRight size={14} />
                </div>
              </motion.a>

              {/* 실장 카드 */}
              <motion.a
                href="/tutorial/staff"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="group block bg-white border border-[#e8e8e8] rounded-2xl p-6 hover:border-[#00B6C5] hover:shadow-[0_4px_24px_rgba(0,182,197,0.08)] transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#e8f7f8] flex items-center justify-center">
                    <Inbox className="w-6 h-6 text-[#00B6C5]" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-extrabold text-[#111]">실장님 실전 가이드</h3>
                    <p className="text-[12px] text-[#999]">
                      <Clock size={10} className="inline mr-1" />
                      7 Steps · 약 3분
                    </p>
                  </div>
                </div>

                <p className="text-[13px] text-[#666] leading-relaxed mb-4">
                  퀵 체크인 → 인박스 처리 → 카톡 복사/발송 → EMR 복붙까지.
                  실제 화면을 체험하며 업무 루틴을 익힙니다.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    { icon: Search, label: "퀵 체크인" },
                    { icon: Inbox, label: "인박스 처리" },
                    { icon: MessageSquare, label: "카톡 복사" },
                    { icon: ClipboardCheck, label: "EMR 복붙" },
                  ].map((item) => (
                    <span key={item.label} className="flex items-center gap-1.5 text-[11px] font-semibold text-[#888] bg-[#f8fafb] border border-[#e8e8e8] px-2.5 py-1.5 rounded-lg">
                      <item.icon size={12} className="text-[#00B6C5]" />
                      {item.label}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-[13px] font-bold text-[#00B6C5] group-hover:gap-2.5 transition-all">
                  시작하기
                  <ArrowRight size={14} />
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 text-center"
          >
            <p className="text-[12px] text-[#bbb]">
              전체 플로우(Stage 1)를 먼저 보신 후 역할별 가이드(Stage 2)를 진행하시면 가장 효과적입니다.
            </p>
            <a href="/" className="inline-flex items-center gap-1 mt-3 text-[13px] font-medium text-[#999] hover:text-[#00B6C5] transition-colors">
              ← 랜딩페이지로 돌아가기
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
