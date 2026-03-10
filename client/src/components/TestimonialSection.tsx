/*
 * Design: Clinical Dashboard — Modern SaaS
 * Testimonials: 한의원 원장님들의 후기 (예상 시나리오 기반)
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
    <section id="testimonials" className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-hani-green tracking-wide uppercase">Testimonials</span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-hani-slate tracking-tight">
            원장님들의 이야기
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            하니에이전트를 도입한 한의원 원장님들의 실제 경험입니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 border border-border/50 hover:shadow-lg hover:shadow-black/5 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                <div className="w-9 h-9 rounded-full bg-hani-green/10 text-hani-green font-bold text-sm flex items-center justify-center">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-hani-slate">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
