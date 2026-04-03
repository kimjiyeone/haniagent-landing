import { motion } from "framer-motion";
import { MessageCircle, Zap, RefreshCw, ArrowRight, Rocket, Calendar, Sparkles } from "lucide-react";

/*
 * UpdateRoadmapSection
 * "함께 만들어가는 시스템" — 원장님 피드백 기반 빠른 업데이트 약속
 */

const process = [
  {
    icon: MessageCircle,
    step: "01",
    title: "원장님이 말씀하시면",
    desc: "실제 진료 현장에서 느끼는 불편함, 필요한 기능을 알려주세요.",
  },
  {
    icon: Zap,
    step: "02",
    title: "빠르게 반영합니다",
    desc: "전담 카이스트 개발팀이 피드백을 분석하고, 우선순위에 따라 즉시 개발에 착수합니다.",
  },
  {
    icon: RefreshCw,
    step: "03",
    title: "매주 업데이트",
    desc: "새로운 기능과 개선 사항이 자동으로 적용됩니다. 별도 설치 없이.",
  },
];

const roadmapItems = [
  {
    date: "2026 Q2",
    label: "진행 중",
    labelColor: "bg-[#00B6C5] text-white",
    title: "환자유형별 AI 피드백 고도화",
    comingSoon: true,
    desc: "상담 기반 환자 유형 분류 및 유형별 맞춤 대응 전략 피드백",
  },
  {
    date: "2026 Q2",
    label: "진행 중",
    labelColor: "bg-[#00B6C5] text-white",
    title: "실장 상담 차팅",
    comingSoon: true,
    desc: "실장 상담 내용도 음성 녹음 → 자동 차팅으로 기록·관리",
  },
  {
    date: "2026 Q3",
    label: "예정",
    labelColor: "bg-amber-100 text-amber-700",
    title: "자연어 환자 필터링 & 맞춤 AI 카톡 발송",
    desc: "\"3회 이상 내원한 20대 식욕부진 여성 환자\" 같은 자연어로 환자를 필터링, 맞춤형 AI 카톡을 일괄 발송",
  },
  {
    date: "2026 Q3–Q4",
    label: "예정",
    labelColor: "bg-amber-100 text-amber-700",
    title: "처방관리 및 카톡 연동 확장",
    desc: "처방 데이터 관리 + 처방 기반 카톡 발송 (예약확인·D-1·D+1 이후 추가 터치포인트)",
  },
  {
    date: "2026 Q4",
    label: "예정",
    labelColor: "bg-blue-100 text-blue-700",
    title: "카카오 알림톡 자동 발송",
    desc: "예약확인/D-1/D+1 카톡을 수동 복붙 없이 알림톡으로 자동 발송",
  },
];

export default function UpdateRoadmapSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#f0fafb] border border-[#d0eff3] rounded-full px-4 py-1.5 mb-5">
            <Rocket size={14} className="text-[#00B6C5]" />
            <span className="text-[12px] font-semibold text-[#00B6C5] tracking-wide">함께 만들어가는 시스템</span>
          </div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#111] tracking-tight">
            원장님의 피드백이
            <br />
            <span className="text-[#00B6C5]">다음 업데이트</span>가 됩니다
          </h2>
          <p className="mt-4 text-[15px] text-[#777] max-w-md mx-auto leading-relaxed">
            현장의 목소리를 가장 빠르게 반영합니다.
            <br />
            하니에이전트는 원장님과 함께 진화합니다.
          </p>
        </motion.div>

        {/* 3-step process */}
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
          {process.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative text-center"
            >
              {i < process.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-3 z-10">
                  <ArrowRight size={16} className="text-[#ddd]" />
                </div>
              )}
              <div className="w-14 h-14 rounded-2xl bg-[#f5f5f5] flex items-center justify-center mx-auto mb-4">
                <item.icon size={22} className="text-[#00B6C5]" />
              </div>
              <span className="text-[11px] font-bold text-[#bbb] tracking-wider">{item.step}</span>
              <h3 className="text-[16px] font-bold text-[#111] mt-1 mb-2">{item.title}</h3>
              <p className="text-[13px] text-[#777] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Roadmap timeline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Calendar size={16} className="text-[#00B6C5]" />
            <h3 className="text-[16px] font-bold text-[#111]">
              개발 로드맵
            </h3>
          </div>
          <div className="space-y-0">
            {roadmapItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="flex gap-4 relative"
              >
                <div className="flex flex-col items-center shrink-0 w-24">
                  <span className="text-[11px] text-[#999] font-medium whitespace-nowrap">{item.date}</span>
                  <div className={`w-2.5 h-2.5 rounded-full mt-2 ${i <= 1 ? "bg-[#00B6C5] ring-4 ring-[#00B6C5]/20" : "bg-[#ddd]"}`} />
                  {i < roadmapItems.length - 1 && (
                    <div className="w-px flex-1 bg-[#eee] mt-1" />
                  )}
                </div>
                <div className="pb-6 flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.labelColor}`}>
                      {item.label}
                    </span>
                    <h4 className="text-[14px] font-bold text-[#111]">{item.title}</h4>
                    {item.comingSoon && (
                      <span className="text-[9px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">Coming Soon</span>
                    )}
                  </div>
                  <p className="text-[12px] text-[#888] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="mailto:contact@hanitek.kr?subject=하니에이전트 기능 제안"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#00B6C5] hover:text-[#009aa8] transition-colors"
          >
            <MessageCircle size={16} />
            기능 제안하기
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
