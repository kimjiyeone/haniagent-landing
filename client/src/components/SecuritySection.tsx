import { motion } from "framer-motion";
import { Shield, Lock, Server, Eye, Fingerprint, FileCheck, ShieldCheck } from "lucide-react";

/*
 * SecuritySection — 사업계획서 보안 상세 기반
 * 블랙 디자인, hanitek.kr/tiro 스타일
 */

const items = [
  { icon: Lock, title: "TLS 1.3 + AES-256", desc: "전송 중·저장 시 모든 데이터를 군사급 암호화로 보호합니다." },
  { icon: Eye, title: "역할 기반 접근 통제 (RBAC)", desc: "원장/실장 권한을 분리하여 데이터 접근을 최소화합니다." },
  { icon: Server, title: "클리닉 간 완벽한 데이터 격리", desc: "각 한의원 데이터가 완전히 분리된 아키텍처로 운영됩니다." },
  { icon: Shield, title: "음성 원본 즉시 폐기", desc: "SOAP 차트 생성 후 녹음 원본은 저장하지 않고 즉시 삭제합니다." },
  { icon: Fingerprint, title: "개인별 완전 암호화", desc: "환자 개인정보는 개별 암호화 키로 보호됩니다." },
  { icon: FileCheck, title: "정보보호 배상책임보험", desc: "만일의 사태에 대비한 정보보호 배상책임보험에 가입되어 있습니다." },
];

const badges = [
  "특허 출원 완료",
  "Google Firebase (ISO 27001, HIPAA)",
  "정보보호 배상책임보험 가입",
  "상표권 출원",
];

export default function SecuritySection() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      {/* Glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00B6C5] opacity-[0.04] rounded-full blur-[120px]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <ShieldCheck size={14} className="text-[#00B6C5]" />
            <span className="text-[12px] font-semibold text-[#00B6C5] tracking-wide uppercase">Security & Privacy</span>
          </div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-extrabold tracking-tight leading-tight">
            안심하고 기록하세요.
            <br />
            <span className="text-[#00B6C5]">의료 데이터 보안</span>이 최우선입니다.
          </h2>
          <p className="mt-4 text-[15px] text-[#888] max-w-md mx-auto leading-relaxed">
            환자의 민감한 의료 정보를 다루는 만큼, 보안은 절대 타협하지 않습니다.
          </p>
        </motion.div>

        {/* 3x2 Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 hover:bg-white/[0.06] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00B6C5]/10 flex items-center justify-center mb-3">
                <item.icon size={18} className="text-[#00B6C5]" />
              </div>
              <h3 className="text-[14px] font-bold text-white mb-1">{item.title}</h3>
              <p className="text-[12px] text-[#777] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-4 md:gap-6 flex-wrap"
        >
          {badges.map((badge) => (
            <div key={badge} className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-3.5 py-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00B6C5]" />
              <span className="text-[11px] text-[#999] font-medium">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
