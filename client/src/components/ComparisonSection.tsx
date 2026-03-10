/*
 * Design: hanitek.kr 스타일 — 도입 전/후 비교 (압축)
 * 틸(#00B6C5) 포인트 컬러
 */
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const rows = [
  { item: "차트 작성", before: "원장이 직접 타이핑", after: "녹음 → AI 자동 생성" },
  { item: "다음 내원 관리", before: "직원이 기억에 의존", after: "시스템이 자동 추적" },
  { item: "환자 리마인드", before: "누락 빈번, 수동 연락", after: "D-1 카톡 자동 생성" },
  { item: "신입 직원 교육", before: "원장이 직접, 수 주 소요", after: "인박스 따라하면 Day 1 가능" },
  { item: "EMR 입력", before: "차트 보고 다시 타이핑", after: "복사 → 붙여넣기 1초" },
];

export default function ComparisonSection() {
  return (
    <section id="comparison" className="py-14 md:py-18 bg-[#f8f8f8]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-block text-xs font-bold text-hani bg-hani/10 px-3 py-1 rounded-full mb-3 tracking-wide">
            BEFORE & AFTER
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#333] tracking-tight">
            도입 전과 후, 이렇게 달라집니다
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-xl border border-[#eee] overflow-hidden shadow-sm">
            <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-[#eee]">
              <div className="p-3 md:p-4 text-sm font-bold text-muted-foreground" />
              <div className="p-3 md:p-4 text-center">
                <span className="text-xs font-bold text-[#999]">도입 전</span>
              </div>
              <div className="p-3 md:p-4 text-center bg-hani/5">
                <span className="text-xs font-bold text-hani">하니에이전트</span>
              </div>
            </div>

            {rows.map((row, i) => (
              <div
                key={row.item}
                className={`grid grid-cols-[1fr_1fr_1fr] ${i < rows.length - 1 ? "border-b border-[#f0f0f0]" : ""}`}
              >
                <div className="p-3 md:p-4 flex items-center">
                  <span className="text-xs md:text-sm font-semibold text-[#333]">{row.item}</span>
                </div>
                <div className="p-3 md:p-4 flex items-center gap-1.5">
                  <X className="w-3.5 h-3.5 text-[#ccc] shrink-0" />
                  <span className="text-xs md:text-sm text-muted-foreground">{row.before}</span>
                </div>
                <div className="p-3 md:p-4 flex items-center gap-1.5 bg-hani/5">
                  <Check className="w-3.5 h-3.5 text-hani shrink-0" />
                  <span className="text-xs md:text-sm text-[#333] font-medium">{row.after}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto"
        >
          {[
            { value: "+20%", label: "재진율 향상 목표" },
            { value: "Day 1", label: "신입 실장 즉시 투입" },
            { value: "<20%", label: "SOAP 수정율 목표" },
            { value: "80%+", label: "카톡 발송율 목표" },
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-white rounded-lg p-4 border border-[#eee]">
              <div className="text-xl md:text-2xl font-extrabold text-hani">{stat.value}</div>
              <div className="mt-0.5 text-[11px] text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
