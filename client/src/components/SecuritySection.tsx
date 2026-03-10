/*
 * Design: hanitek.kr 스타일 — 보안 섹션 (다크 배경 #333)
 * 의료 데이터 보안 강조
 */
import { motion } from "framer-motion";
import { Shield, Lock, Server, Eye } from "lucide-react";

const securityItems = [
  {
    icon: Lock,
    title: "데이터 암호화",
    description: "모든 음성·차트 데이터는 AES-256 암호화로 전송 및 저장됩니다.",
  },
  {
    icon: Server,
    title: "국내 서버 운영",
    description: "의료 데이터는 국내 클라우드 서버에서만 처리되며, 해외 반출되지 않습니다.",
  },
  {
    icon: Eye,
    title: "접근 권한 분리",
    description: "원장/실장 역할별 접근 권한이 분리되어, 민감 정보는 원장만 확인할 수 있습니다.",
  },
  {
    icon: Shield,
    title: "녹음 원본 자동 삭제",
    description: "녹음 원본은 차트 생성 후 자동 삭제됩니다. 텍스트 변환본만 암호화 저장됩니다.",
  },
];

export default function SecuritySection() {
  return (
    <section className="py-20 md:py-28 bg-[#333]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold text-[#00B6C5] bg-[#00B6C5]/15 px-3 py-1 rounded-full mb-4 tracking-wide">
            SECURITY
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            의료 데이터, 안전하게 보호합니다
          </h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            하니에이전트는 의료 데이터 보안을 최우선으로 설계되었습니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {securityItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#00B6C5]/30 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#00B6C5]/15 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <item.icon className="w-5 h-5 text-[#00B6C5]" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
