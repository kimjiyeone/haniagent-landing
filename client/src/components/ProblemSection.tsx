/*
 * Design: hanitek.kr 스타일 — 문제 인식 섹션 (압축)
 * 틸(#00B6C5) 포인트, 깔끔한 카드 레이아웃
 */
import { motion } from "framer-motion";
import { UserX, RefreshCw, Eye } from "lucide-react";

const problems = [
  {
    icon: UserX,
    title: "직원이 까먹는다",
    description: "\"1주 뒤에 오세요\" 했는데 아무도 안 챙기면 환자는 안 옵니다. 리마인드 누락이 곧 매출 누락입니다.",
  },
  {
    icon: RefreshCw,
    title: "직원이 바뀌면 리셋",
    description: "새 직원 교육에 원장님 시간이 소모됩니다. 환자 관리 품질이 사람에 따라 달라집니다.",
  },
  {
    icon: Eye,
    title: "원장이 다 봐야 한다",
    description: "교육, 점검, 확인을 원장이 직접 해야 합니다. 진료에 집중할 여력이 없고, 성장이 멈춥니다.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-14 md:py-18">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-bold text-hani bg-hani/10 px-3 py-1 rounded-full mb-3 tracking-wide">
            PROBLEM
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#333] tracking-tight">
            직원 역량에 의존하는 한의원 운영,
            <br className="hidden sm:block" />
            이 문제를 겪고 계시지 않나요?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-xl p-5 border border-[#eee] hover:border-hani/30 transition-all hover:shadow-md group"
            >
              <div className="w-10 h-10 rounded-lg bg-hani/10 flex items-center justify-center mb-3 transition-transform group-hover:scale-110">
                <p.icon className="w-5 h-5 text-hani" />
              </div>
              <h3 className="text-base font-bold text-[#333] mb-1.5">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Solution teaser */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-hani/5 rounded-xl px-5 py-3.5 border border-hani/15">
            <div className="w-8 h-8 rounded-full bg-hani/10 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-hani" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-[#333] text-left">
              <span className="text-hani font-bold">하니에이전트:</span>{" "}
              원장이 말한 다음 방문 시점을 시스템이 자동으로 챙겨, 직원이 바뀌어도 환자가 다시 옵니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
