import { motion } from "framer-motion";
import { Shield, Lock, Server, Eye, Fingerprint } from "lucide-react";

const items = [
  { icon: Lock, title: "AES-256 암호화", desc: "모든 데이터 전송 및 저장 시 군사급 암호화 적용" },
  { icon: Server, title: "국내 서버 운영", desc: "의료 데이터는 국내 서버에서만 처리·보관" },
  { icon: Eye, title: "역할별 접근 제어", desc: "원장/실장 권한 분리로 데이터 접근 최소화" },
  { icon: Shield, title: "녹음 원본 자동 삭제", desc: "SOAP 차트 생성 후 녹음 원본 즉시 파기" },
  { icon: Fingerprint, title: "개인정보보호법 준수", desc: "의료 개인정보 처리 기준 준수 및 정기 감사" },
];

export default function SecuritySection() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <Shield size={14} className="text-[#00B6C5]" />
            <span className="text-[12px] font-semibold text-[#00B6C5] tracking-wide uppercase">Security & Privacy</span>
          </div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-extrabold tracking-tight leading-tight">
            의료 데이터,
            <br />
            <span className="text-[#00B6C5]">안전하게</span> 보호합니다
          </h2>
          <p className="mt-4 text-[15px] text-[#888] max-w-md mx-auto leading-relaxed">
            환자의 민감한 의료 정보를 다루는 만큼, 보안은 타협하지 않습니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 hover:bg-white/[0.06] transition-colors ${
                i >= 3 ? "md:col-span-1 md:last:col-start-2" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#00B6C5]/10 flex items-center justify-center mb-3">
                <item.icon size={18} className="text-[#00B6C5]" />
              </div>
              <h3 className="text-[14px] font-bold text-white mb-1">{item.title}</h3>
              <p className="text-[12px] text-[#777] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-6 flex-wrap"
        >
          {["ISMS 인증 준비 중", "SSL/TLS 적용", "정기 보안 감사"].map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00B6C5]" />
              <span className="text-[12px] text-[#666] font-medium">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
