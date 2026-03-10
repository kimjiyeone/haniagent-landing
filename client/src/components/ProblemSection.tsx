import { motion } from "framer-motion";

const problems = [
  {
    emoji: "📋",
    title: "차트 작성에 매일 1시간",
    desc: "진료 끝나고 기억에 의존해 차트를 쓰면 정확도가 떨어지고, 시간은 늘어납니다.",
  },
  {
    emoji: "🔄",
    title: "직원이 바뀌면 리셋",
    desc: "새 직원 교육에 원장 시간 소모. 그동안 환자 관리 누락이 발생합니다.",
  },
  {
    emoji: "📞",
    title: "리마인드 누락 → 환자 이탈",
    desc: "\"다음 주에 오세요\" 했는데 아무도 안 챙기면, 환자는 그냥 안 옵니다.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-16 md:py-20 bg-[#fafafa]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#111] tracking-tight">
            이런 문제, 겪고 계시지 않나요?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 border border-[#eee]"
            >
              <div className="text-2xl mb-3">{p.emoji}</div>
              <h3 className="text-[15px] font-bold text-[#111] mb-2">{p.title}</h3>
              <p className="text-[13px] text-[#777] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Solution one-liner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="inline-block text-[14px] text-[#555] bg-white border border-[#e8e8e8] rounded-full px-6 py-2.5">
            <span className="text-[#00B6C5] font-bold">하니에이전트</span>가 이 모든 문제를 해결합니다
          </p>
        </motion.div>
      </div>
    </section>
  );
}
