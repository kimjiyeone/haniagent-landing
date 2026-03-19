import { motion } from "framer-motion";
import { MessageCircle, Zap, RefreshCw, ArrowRight, Rocket } from "lucide-react";

/*
 * UpdateRoadmapSection
 * "함께 만들어가는 시스템" — 원장님 피드백 기반 빠른 업데이트 약속
 * 3-column 프로세스 + 최근 업데이트 타임라인
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
    desc: "전담 개발팀이 피드백을 분석하고, 우선순위에 따라 즉시 개발에 착수합니다.",
  },
  {
    icon: RefreshCw,
    step: "03",
    title: "매주 업데이트",
    desc: "새로운 기능과 개선 사항이 매주 자동으로 적용됩니다. 별도 설치 없이.",
  },
];

const recentUpdates = [
  {
    date: "2025.03",
    label: "NEW",
    labelColor: "bg-[#00B6C5] text-white",
    title: "AI 상담 피드백 기능",
    desc: "환자 유형 자동 분류 및 맞춤 소통 팁 제안",
  },
  {
    date: "2025.02",
    label: "개선",
    labelColor: "bg-blue-100 text-blue-700",
    title: "SOAP 차트 정확도 향상",
    desc: "한의학 전문 용어 인식률 30% 개선",
  },
  {
    date: "2025.02",
    label: "NEW",
    labelColor: "bg-[#00B6C5] text-white",
    title: "경영지표 대시보드",
    desc: "재진율, 매출, 환자 현황 실시간 모니터링",
  },
  {
    date: "2025.01",
    label: "개선",
    labelColor: "bg-blue-100 text-blue-700",
    title: "방문진료 상병코드 추천 고도화",
    desc: "진료 내용 기반 상병코드 자동 추천 정확도 향상",
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
              {/* Connector arrow (desktop only) */}
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

        {/* Recent updates timeline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-[16px] font-bold text-[#111] mb-6 text-center">
            최근 업데이트
          </h3>
          <div className="space-y-0">
            {recentUpdates.map((update, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="flex gap-4 relative"
              >
                {/* Timeline line */}
                <div className="flex flex-col items-center shrink-0 w-16">
                  <span className="text-[11px] text-[#999] font-medium whitespace-nowrap">{update.date}</span>
                  <div className="w-2 h-2 rounded-full bg-[#00B6C5] mt-2" />
                  {i < recentUpdates.length - 1 && (
                    <div className="w-px flex-1 bg-[#eee] mt-1" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-6 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${update.labelColor}`}>
                      {update.label}
                    </span>
                    <h4 className="text-[14px] font-bold text-[#111]">{update.title}</h4>
                  </div>
                  <p className="text-[12px] text-[#888] leading-relaxed">{update.desc}</p>
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
