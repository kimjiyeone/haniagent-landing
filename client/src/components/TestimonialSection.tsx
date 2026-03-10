/*
 * Design: hanitek.kr + tiro.ooo 스타일 — 원장님 리뷰 (압축)
 */
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "직원이 바뀔 때마다 환자 관리가 리셋되는 게 가장 큰 스트레스였는데, 하니에이전트 도입 후 시스템이 다 챙겨주니까 마음이 편해졌습니다.",
    name: "김O원 원장",
    role: "서울 OO한의원",
    avatar: "K",
  },
  {
    quote: "녹음만 하면 차트가 나오니까 진료에만 집중할 수 있어요. 예전에는 진료 끝나고 차트 쓰느라 30분씩 더 있었는데, 이제 바로 퇴근합니다.",
    name: "이O석 원장",
    role: "경기 OO한의원",
    avatar: "L",
  },
  {
    quote: "신입 실장이 와도 인박스만 따라하면 되니까, 교육 시간이 거의 없어졌어요. 환자 리마인드 누락도 0건입니다.",
    name: "박O진 원장",
    role: "부산 OO한의원",
    avatar: "P",
  },
];

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="py-14 md:py-18">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-block text-xs font-bold text-hani bg-hani/10 px-3 py-1 rounded-full mb-3 tracking-wide">
            REVIEWS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#333] tracking-tight">
            원장님들의 이야기
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-xl p-5 border border-[#eee] hover:shadow-md transition-all"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-[#555] leading-relaxed mb-4">"{t.quote}"</p>
              <div className="flex items-center gap-2.5 pt-3 border-t border-[#f0f0f0]">
                <div className="w-8 h-8 rounded-full bg-hani/10 text-hani font-bold text-xs flex items-center justify-center">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#333]">{t.name}</div>
                  <div className="text-[11px] text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
