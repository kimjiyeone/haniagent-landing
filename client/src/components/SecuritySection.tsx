import { motion } from "framer-motion";
import { Shield, Lock, Server, Eye } from "lucide-react";

const items = [
  { icon: Lock, title: "AES-256 암호화", desc: "모든 데이터 전송·저장 시 암호화" },
  { icon: Server, title: "국내 서버", desc: "의료 데이터 국내에서만 처리" },
  { icon: Eye, title: "권한 분리", desc: "원장/실장 역할별 접근 제어" },
  { icon: Shield, title: "녹음 원본 삭제", desc: "차트 생성 후 즉시 자동 삭제" },
];

export default function SecuritySection() {
  return (
    <section className="py-14 md:py-16 border-t border-[#eee]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-8 max-w-3xl mx-auto"
        >
          <div className="shrink-0 text-center md:text-left">
            <p className="text-[13px] text-[#00B6C5] font-semibold mb-1 uppercase tracking-wide">Security</p>
            <h3 className="text-[20px] md:text-[22px] font-extrabold text-[#111]">
              의료 데이터,
              <br />
              안전하게 보호합니다
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-3 flex-1">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-[#fafafa] border border-[#eee]"
              >
                <item.icon className="w-4 h-4 text-[#00B6C5] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[12px] font-bold text-[#111]">{item.title}</p>
                  <p className="text-[11px] text-[#999]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
