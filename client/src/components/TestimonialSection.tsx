import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "차트 쓰는 시간이 절반으로 줄었어요. 진료에만 집중할 수 있게 돼서 환자 만족도도 올라갔습니다.",
    name: "김OO 원장",
    clinic: "경희한의원",
  },
  {
    quote: "실장이 바뀌어도 인박스만 따라하면 되니까, 교육 시간이 거의 없어졌어요. 정말 편합니다.",
    name: "이OO 원장",
    clinic: "미소한의원",
  },
  {
    quote: "카톡 리마인드 도입 후 재진율이 눈에 띄게 올랐습니다. 환자분들도 좋아하세요.",
    name: "박OO 원장",
    clinic: "온누리한의원",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16 md:py-20 bg-[#fafafa]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-[13px] text-[#00B6C5] font-semibold mb-3 tracking-wide uppercase">
            Testimonials
          </p>
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#111] tracking-tight">
            원장님들의 이야기
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 border border-[#eee]"
            >
              <p className="text-[14px] text-[#444] leading-relaxed mb-5">
                "{t.quote}"
              </p>
              <div>
                <p className="text-[13px] font-bold text-[#111]">{t.name}</p>
                <p className="text-[12px] text-[#999]">{t.clinic}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
