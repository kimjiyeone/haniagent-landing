import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "차트 쓰는 시간이 절반으로 줄었어요. 진료에만 집중할 수 있게 돼서 환자 만족도도 올라갔습니다.",
    name: "김OO 원장",
    clinic: "경희아양한의원",
    role: "원장",
    stars: 5,
  },
  {
    quote: "실장이 바뀌어도 인박스만 따라하면 되니까, 교육 시간이 거의 없어졌어요. 정말 편합니다.",
    name: "이OO 원장",
    clinic: "청원한의원",
    role: "원장",
    stars: 5,
  },
  {
    quote: "카톡 리마인드 도입 후 재진율이 눈에 띄게 올랐습니다. 환자분들도 좋아하세요.",
    name: "박OO 원장",
    clinic: "운정중앙한의원",
    role: "원장",
    stars: 5,
  },
  {
    quote: "녹음만 하면 차트가 나오니까 진료 끝나고 30분씩 차트 쓰던 게 사라졌어요. 퇴근이 빨라졌습니다.",
    name: "최OO 원장",
    clinic: "위례하늘애한의원",
    role: "원장",
    stars: 5,
  },
  {
    quote: "신입 실장도 첫날부터 인박스 보고 바로 업무 시작했어요. 교육 스트레스가 없어졌습니다.",
    name: "정OO 원장",
    clinic: "아현재한의원",
    role: "원장",
    stars: 5,
  },
  {
    quote: "D-1 리마인드 카톡 보내기 시작하고 노쇼가 확 줄었어요. 환자분들이 잊지 않고 오십니다.",
    name: "한OO 원장",
    clinic: "경희일생한의원",
    role: "원장",
    stars: 5,
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const itemsPerView = typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1;
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const next = useCallback(() => {
    setCurrent(prev => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent(prev => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [autoPlay, next]);

  return (
    <section className="py-16 md:py-20 bg-[#fafafa]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="text-[13px] text-[#00B6C5] font-semibold mb-3 tracking-wide uppercase">
              Testimonials
            </p>
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#111] tracking-tight">
              원장님들의 이야기
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => { prev(); setAutoPlay(false); }}
              className="w-10 h-10 rounded-full border border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={18} className="text-[#555]" />
            </button>
            <button
              onClick={() => { next(); setAutoPlay(false); }}
              className="w-10 h-10 rounded-full border border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] flex items-center justify-center transition-colors"
            >
              <ChevronRight size={18} className="text-[#555]" />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="overflow-hidden" onMouseEnter={() => setAutoPlay(false)} onMouseLeave={() => setAutoPlay(true)}>
          <motion.div
            className="flex gap-5"
            animate={{ x: `-${current * (100 / itemsPerView + 1.5)}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="shrink-0 w-full md:w-[calc(33.333%-14px)]"
              >
                <div className="bg-white rounded-2xl p-6 border border-[#eee] h-full flex flex-col hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-[14px] text-[#444] leading-relaxed flex-1 mb-5">
                    "{t.quote}"
                  </p>
                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[#f5f5f5]">
                    <div className="w-9 h-9 rounded-full bg-[#f0f0f0] flex items-center justify-center">
                      <span className="text-[12px] font-bold text-[#999]">{t.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-[#111]">{t.name}</p>
                      <p className="text-[11px] text-[#999]">{t.clinic}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-1.5 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setAutoPlay(false); }}
              className={`h-1.5 rounded-full transition-all ${
                i === current ? "w-6 bg-[#00B6C5]" : "w-1.5 bg-[#ddd]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
