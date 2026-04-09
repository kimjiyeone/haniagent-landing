import { motion } from "framer-motion";
import { RefreshCw, UserX, ClipboardList } from "lucide-react";

const problems = [
  {
    icon: RefreshCw,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
    title: "직원이 바뀔 때마다 다시 시작되는 교육",
    desc: "원장님이 직접 알려주고, 다시 맞추고, 또 반복됩니다.",
  },
  {
    icon: UserX,
    iconColor: "text-rose-500",
    iconBg: "bg-rose-50",
    title: "직원마다 다른 응대와 놓치는 환자 관리",
    desc: "꼼꼼하게 챙겨야 하는 후속 관리를 자주 놓칩니다.",
  },
  {
    icon: ClipboardList,
    iconColor: "text-[#00B6C5]",
    iconBg: "bg-[#e8f7f8]",
    title: "결국 다시 원장님이 챙기게 되는 운영",
    desc: "진료가 끝났는데도, 신경 써야 할 일이 너무 많습니다.",
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
          className="text-center mb-4"
        >
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#111] tracking-tight leading-snug">
            결국, 직원 관리 때문에
            <br />
            더 바빠지고 계시진 않나요?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto mt-10">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 border border-[#eee]"
            >
              <div className={`w-10 h-10 rounded-lg ${p.iconBg} flex items-center justify-center mb-3`}>
                <p.icon size={20} className={p.iconColor} />
              </div>
              <h3 className="text-[15px] font-bold text-[#111] mb-2">{p.title}</h3>
              <p className="text-[13px] text-[#777] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-[15px] sm:text-[16px] text-[#555] font-medium leading-relaxed">
            직원이 잘해야 돌아가는 구조라면,
            <br />
            <span className="text-[#111] font-bold">원장님은 계속 바쁠 수밖에 없습니다.</span>
          </p>
          <div className="mt-6">
            <p className="inline-block text-[14px] text-[#555] bg-white border border-[#e8e8e8] rounded-full px-6 py-2.5">
              <span className="text-[#00B6C5] font-bold">하니에이전트</span>가 이 구조를 바꿉니다
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
