import { motion } from "framer-motion";
import { Monitor, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg mx-auto"
        >
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-extrabold text-[#111] tracking-tight leading-[1.2]">
            성장에만 집중할 수 있는
            <br />
            <span className="text-[#00B6C5]">한의원 시스템</span>을 만나보세요
          </h2>
          <p className="mt-4 text-[15px] text-[#777] leading-relaxed">
            녹음 한 번이면 차트부터 환자 관리까지.
            <br />
            원장님은 진료에만 집중하세요.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://www.haniagent.kr/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 bg-[#111] hover:bg-[#333] text-white font-semibold rounded-xl text-[15px] transition-colors shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
            >
              <Monitor size={18} />
              Windows 앱 다운로드
            </a>
            <a
              href="mailto:contact@hanitek.kr?subject=하니에이전트 도입 문의"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 border-2 border-[#e0e0e0] hover:border-[#bbb] text-[#555] font-medium rounded-xl text-[15px] transition-colors bg-white"
            >
              도입 문의하기
              <ArrowRight size={16} />
            </a>
          </div>

          <p className="mt-5 text-[12px] text-[#bbb]">
            2주 무료 체험 · 신용카드 불필요 · 언제든 해지 가능
          </p>
        </motion.div>
      </div>
    </section>
  );
}
