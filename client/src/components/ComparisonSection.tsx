/*
 * Design: Clinical Dashboard — Modern SaaS
 * Comparison: 하니에이전트 도입 전/후 비교
 */
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const rows = [
  { item: "차트 작성", before: "원장이 직접 타이핑", after: "녹음 → AI 자동 생성" },
  { item: "다음 내원 관리", before: "직원이 기억에 의존", after: "시스템이 자동 추적" },
  { item: "환자 리마인드", before: "누락 빈번, 수동 연락", after: "D-1 카톡 자동 생성" },
  { item: "신입 직원 교육", before: "원장이 직접, 수 주 소요", after: "인박스 따라하면 Day 1 가능" },
  { item: "EMR 입력", before: "차트 보고 다시 타이핑", after: "복사 → 붙여넣기 1초" },
  { item: "환자 이탈 방지", before: "원장이 일일이 점검", after: "미방문 시 2차 알림 자동" },
];

export default function ComparisonSection() {
  return (
    <section id="comparison" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-hani-green tracking-wide uppercase">Before & After</span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-hani-slate tracking-tight">
            도입 전과 후, 이렇게 달라집니다
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl border border-border/50 overflow-hidden shadow-sm">
            {/* Table header */}
            <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-border/50">
              <div className="p-4 md:p-5 text-sm font-bold text-muted-foreground" />
              <div className="p-4 md:p-5 text-center">
                <span className="text-sm font-bold text-red-500/80">도입 전</span>
              </div>
              <div className="p-4 md:p-5 text-center bg-hani-green/5">
                <span className="text-sm font-bold text-hani-green">하니에이전트</span>
              </div>
            </div>

            {/* Table rows */}
            {rows.map((row, i) => (
              <div
                key={row.item}
                className={`grid grid-cols-[1fr_1fr_1fr] ${i < rows.length - 1 ? "border-b border-border/30" : ""} hover:bg-muted/20 transition-colors`}
              >
                <div className="p-4 md:p-5 flex items-center">
                  <span className="text-sm font-semibold text-hani-slate">{row.item}</span>
                </div>
                <div className="p-4 md:p-5 flex items-center gap-2">
                  <X className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="text-sm text-muted-foreground">{row.before}</span>
                </div>
                <div className="p-4 md:p-5 flex items-center gap-2 bg-hani-green/5">
                  <Check className="w-4 h-4 text-hani-green shrink-0" />
                  <span className="text-sm text-foreground font-medium">{row.after}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { value: "+20%", label: "재진율 향상 목표" },
            { value: "Day 1", label: "신입 실장 즉시 투입" },
            { value: "<20%", label: "SOAP 수정율 목표" },
            { value: "80%+", label: "카톡 발송율 목표" },
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-white rounded-xl p-5 border border-border/50">
              <div className="text-2xl md:text-3xl font-extrabold text-hani-green">{stat.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
