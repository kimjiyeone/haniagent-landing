import { motion } from "framer-motion";
import { X, Check, TrendingUp, Award, FileCheck, Users } from "lucide-react";

const rows = [
  { item: "차트 작성", before: "원장이 직접 타이핑", after: "녹음 → AI 자동 생성" },
  { item: "다음 내원 관리", before: "직원이 기억에 의존", after: "시스템이 자동 추적" },
  { item: "환자 리마인드", before: "누락 빈번, 수동 연락", after: "D-1/D+1카톡 자동 생성" },
  { item: "신입 직원 교육", before: "원장이 직접, 수 주 소요", after: "인박스 따라하면 Day 1" },
  { item: "EMR 입력", before: "환자 눈맞춤 없이 타이핑, 야근", after: "복사 → 붙여넣기 1초" },
];

const stats = [
  { icon: TrendingUp, value: "88%+", label: "차팅 시간 단축", color: "text-[#00B6C5]" },
  { icon: Users, value: "Day 1", label: "신입 즉시 투입", color: "text-blue-600" },
  { icon: FileCheck, value: "3,000+", label: "누적 차트 생성", color: "text-amber-600" },
  { icon: Award, value: "장관상", label: "보건복지부 수상", color: "text-green-600" },
];

export default function ComparisonSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-[13px] text-[#00B6C5] font-semibold mb-3 tracking-wide uppercase">
            Before & After
          </p>
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#111] tracking-tight">
            도입 전과 후, 이렇게 달라집니다
          </h2>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-xl border border-[#e8e8e8] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-[#eee]">
              <div className="p-3 md:p-4" />
              <div className="p-3 md:p-4 text-center">
                <span className="text-[11px] font-bold text-[#aaa] uppercase tracking-wider">Before</span>
              </div>
              <div className="p-3 md:p-4 text-center bg-[#f0fafb]">
                <span className="text-[11px] font-bold text-[#00B6C5] uppercase tracking-wider">After</span>
              </div>
            </div>

            {rows.map((row, i) => (
              <div
                key={row.item}
                className={`grid grid-cols-[1.2fr_1fr_1fr] ${i < rows.length - 1 ? "border-b border-[#f0f0f0]" : ""}`}
              >
                <div className="p-3 md:p-4 flex items-center">
                  <span className="text-[12px] md:text-[13px] font-semibold text-[#333]">{row.item}</span>
                </div>
                <div className="p-3 md:p-4 flex items-center gap-2">
                  <X className="w-3.5 h-3.5 text-[#ccc] shrink-0" />
                  <span className="text-[11px] md:text-[12px] text-[#999]">{row.before}</span>
                </div>
                <div className="p-3 md:p-4 flex items-center gap-2 bg-[#f0fafb]">
                  <Check className="w-3.5 h-3.5 text-[#00B6C5] shrink-0" />
                  <span className="text-[11px] md:text-[12px] text-[#333] font-medium">{row.after}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats - 사업계획서 실제 수치 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="bg-white rounded-xl border border-[#e8e8e8] p-4 text-center">
                <Icon className={`w-5 h-5 mx-auto mb-2 ${s.color}`} />
                <div className="text-[24px] md:text-[28px] font-extrabold text-[#111]">{s.value}</div>
                <div className="text-[11px] text-[#999] mt-0.5">{s.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
