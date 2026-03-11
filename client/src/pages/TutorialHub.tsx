/*
 * 튜토리얼 허브 페이지
 * 원장/실장 튜토리얼 선택 + 대표원장용 전체 플로우 보기
 */

import { motion } from "framer-motion";
import { Mic, CheckCircle2, Calendar, Search, Inbox, MessageSquare, ClipboardCheck, ArrowRight, Eye } from "lucide-react";
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
            <p className="mt-3 text-[15px] text-[#888]">
              역할에 맞는 튜토리얼을 선택하세요. 2~3분이면 모든 기능을 익힐 수 있습니다.
            </p>
          </motion.div>

          {/* Role Cards */}
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {/* 원장 카드 */}
            <motion.a
              href="/tutorial/doctor"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group block bg-white border border-[#e8e8e8] rounded-2xl p-6 hover:border-[#00B6C5] hover:shadow-[0_4px_24px_rgba(0,182,197,0.08)] transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#e8f7f8] flex items-center justify-center">
                  <Mic className="w-6 h-6 text-[#00B6C5]" />
                </div>
                <div>
                  <h2 className="text-[18px] font-extrabold text-[#111]">원장님 가이드</h2>
                  <p className="text-[12px] text-[#999]">7 Steps · 약 3분</p>
                </div>
              </div>

              <p className="text-[13px] text-[#666] leading-relaxed mb-4">
                녹음 → SOAP 차트 확인 → 확정 → 리핏까지.<br />
                원장님이 하실 일은 딱 3가지입니다.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { icon: Mic, label: "녹음" },
                  { icon: CheckCircle2, label: "확정" },
                  { icon: Calendar, label: "권장시점" },
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

            {/* 실장 카드 */}
            <motion.a
              href="/tutorial/staff"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group block bg-white border border-[#e8e8e8] rounded-2xl p-6 hover:border-[#00B6C5] hover:shadow-[0_4px_24px_rgba(0,182,197,0.08)] transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#e8f7f8] flex items-center justify-center">
                  <Inbox className="w-6 h-6 text-[#00B6C5]" />
                </div>
                <div>
                  <h2 className="text-[18px] font-extrabold text-[#111]">실장님 가이드</h2>
                  <p className="text-[12px] text-[#999]">7 Steps · 약 2분</p>
                </div>
              </div>

              <p className="text-[13px] text-[#666] leading-relaxed mb-4">
                체크인 → 인박스 → 카톡 복사 → EMR 복붙.<br />
                실장님이 하실 일은 딱 4가지입니다.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { icon: Search, label: "체크인" },
                  { icon: Inbox, label: "인박스" },
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

          {/* 대표원장용 전체 플로우 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#f8fafb] border border-[#e8e8e8] rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#e8f7f8] flex items-center justify-center">
                <Eye className="w-5 h-5 text-[#00B6C5]" />
              </div>
              <div>
                <h3 className="text-[16px] font-extrabold text-[#111]">대표원장님을 위한 전체 플로우</h3>
                <p className="text-[12px] text-[#999]">원장 + 실장 양쪽 업무 흐름을 한눈에</p>
              </div>
            </div>

            <div className="relative pl-8 space-y-0">
              <div className="absolute left-[13px] top-2 bottom-2 w-[2px] bg-[#ddd]" />

              {[
                { step: "1", label: "환자 도착", desc: "실장이 퀵 체크인 (이름 검색 → 탭)", role: "실장", color: "bg-blue-500" },
                { step: "2", label: "원장 화면에 환자 등장", desc: "체크인된 환자가 진료 대기 목록에 나타남", role: "자동", color: "bg-gray-400" },
                { step: "3", label: "녹음 시작", desc: "원장이 녹음 버튼 → 진료 중 대화 녹음", role: "원장", color: "bg-[#00B6C5]" },
                { step: "4", label: "녹음 종료 → AI 차트 생성", desc: "SOAP 차트 + 권장 내원 시점이 동시에 생성됨", role: "자동", color: "bg-gray-400" },
                { step: "5", label: "원장 확정", desc: "차트 확인 → 확정 버튼 (수정 가능)", role: "원장", color: "bg-[#00B6C5]" },
                { step: "6", label: "실장 인박스에 태스크 자동 생성", desc: "T1(예약관리) 태스크 + EMR 대기열 등장", role: "자동", color: "bg-gray-400" },
                { step: "7", label: "카톡 내용 복사 → 발송", desc: "실장이 카톡 내용 복사 → 카카오톡에서 환자에게 발송", role: "실장", color: "bg-blue-500" },
                { step: "8", label: "EMR 복붙", desc: "실장이 SOAP 복사 → EMR 프로그램에 붙여넣기", role: "실장", color: "bg-blue-500" },
                { step: "🔄", label: "다음 환자 체크인", desc: "루프 반복 — 하루 종일 이 흐름", role: "루프", color: "bg-green-500" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.06 }}
                  className="relative py-2.5"
                >
                  <div className={`absolute -left-8 top-3 w-[26px] h-[26px] rounded-full ${item.color} flex items-center justify-center z-10`}>
                    <span className="text-[10px] font-bold text-white">{item.step}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex-1">
                      <p className="text-[13px] font-bold text-[#333]">{item.label}</p>
                      <p className="text-[11px] text-[#888] mt-0.5">{item.desc}</p>
                    </div>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 mt-0.5 ${
                      item.role === "원장" ? "bg-[#e8f7f8] text-[#00B6C5]" :
                      item.role === "실장" ? "bg-blue-50 text-blue-600" :
                      item.role === "자동" ? "bg-[#f0f0f0] text-[#888]" :
                      "bg-green-50 text-green-600"
                    }`}>
                      {item.role}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 bg-[#f0fafb] border border-[#d5eef0] rounded-xl p-3 text-center">
              <p className="text-[13px] font-bold text-[#00B6C5]">
                원장님은 녹음 + 확정만. 나머지는 시스템 + 실장님이 처리합니다.
              </p>
            </div>

            <div className="mt-3 bg-[#fff8e6] border border-[#f5e6b8] rounded-xl p-3">
              <p className="text-[11px] text-[#b8860b] leading-relaxed">
                💡 <span className="font-bold">리핏 환자</span>: 녹음 없이 반복 치료하는 환자는 원장이 리핏 버튼을 누르면 됩니다. 
                실장 EMR 탭에 "리핏 처리" 태스크가 자동 생성됩니다.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
