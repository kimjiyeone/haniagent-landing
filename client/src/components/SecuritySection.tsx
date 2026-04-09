import { motion } from "framer-motion";

/*
 * SecuritySection — 보안 섹션 (간결 버전)
 * 아이콘 제거, 텍스트 중심
 */

const items = [
  { title: "TLS 1.3 + AES-256", desc: "전송 중·저장 시 모든 데이터를 군사급 암호화로 보호합니다." },
  { title: "역할 기반 접근 통제", desc: "원장/실장 권한을 분리하여 데이터 접근을 최소화합니다." },
  { title: "클리닉 간 데이터 격리", desc: "각 한의원 데이터가 완전히 분리된 아키텍처로 운영됩니다." },
  { title: "음성 원본 즉시 폐기", desc: "SOAP 차트 생성 후 녹음 원본은 저장하지 않고 즉시 삭제합니다." },
  { title: "개인별 완전 암호화", desc: "환자 개인정보는 개별 암호화 키로 보호됩니다." },
  { title: "정기 보안 감사", desc: "정기적인 보안 감사와 취약점 점검을 통해 안전성을 유지합니다." },
];

export default function SecuritySection() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-extrabold tracking-tight leading-tight">
            안심하고 기록하세요.
            <br />
            <span className="text-[#00B6C5]">의료 데이터 보안</span>이 최우선입니다.
          </h2>
          <p className="mt-4 text-[15px] text-[#888] max-w-md mx-auto leading-relaxed">
            환자의 민감한 의료 정보를 다루는 만큼, 보안은 절대 타협하지 않습니다.
          </p>
        </motion.div>

        {/* 3x2 Grid - 아이콘 없이 텍스트만 */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5"
            >
              <h3 className="text-[14px] font-bold text-white mb-2">{item.title}</h3>
              <p className="text-[12px] text-[#777] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust badges - 간결하게 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-6 flex-wrap"
        >
          <span className="text-[12px] text-[#666]">특허 출원 완료</span>
          <span className="text-[12px] text-[#666]">Google Firebase (ISO 27001, HIPAA)</span>
        </motion.div>
      </div>
    </section>
  );
}
