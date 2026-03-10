import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg mx-auto"
        >
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#111] tracking-tight leading-[1.3]">
            진료에만 집중하는
            <br />
            한의원을 만들어 보세요
          </h2>
          <p className="mt-4 text-[15px] text-[#777]">
            녹음 한 번이면 차트부터 리마인드까지 자동으로.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://www.haniagent.kr/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-7 bg-[#111] hover:bg-[#333] text-white font-semibold rounded-lg text-[15px] transition-colors"
            >
              무료로 시작하기
            </a>
            <a
              href="mailto:contact@hanitek.kr?subject=하니에이전트 도입 문의"
              className="inline-flex items-center justify-center h-12 px-6 border border-[#ddd] hover:border-[#bbb] text-[#333] font-medium rounded-lg text-[15px] transition-colors bg-white"
            >
              도입 문의하기
            </a>
          </div>

          <p className="mt-5 text-[12px] text-[#bbb]">
            설치 없이 바로 시작 · 신용카드 불필요 · 언제든 해지 가능
          </p>
        </motion.div>
      </div>
    </section>
  );
}
