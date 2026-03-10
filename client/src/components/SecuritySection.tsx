/*
 * Design: hanitek.kr 스타일 — 보안 섹션 (다크 배경, 압축)
 */
import { motion } from "framer-motion";
import { Shield, Lock, Server, Eye } from "lucide-react";

const items = [
  { icon: Lock, title: "데이터 암호화", desc: "AES-256 암호화로 전송 및 저장" },
  { icon: Server, title: "국내 서버 운영", desc: "의료 데이터 국내 서버에서만 처리" },
  { icon: Eye, title: "접근 권한 분리", desc: "원장/실장 역할별 권한 분리" },
  { icon: Shield, title: "녹음 원본 자동 삭제", desc: "차트 생성 후 원본 즉시 삭제" },
];

export default function SecuritySection() {
  return (
    <section className="py-14 md:py-18 bg-[#333]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-block text-xs font-bold text-[#00B6C5] bg-[#00B6C5]/15 px-3 py-1 rounded-full mb-3 tracking-wide">
            SECURITY
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            의료 데이터, 안전하게 보호합니다
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#00B6C5]/30 transition-all group text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-[#00B6C5]/15 flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                <item.icon className="w-5 h-5 text-[#00B6C5]" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
