/*
 * Design: hanitek.kr 스타일 — 중앙 정렬 히어로, 틸 브랜드 컬러
 * tiro.ooo 참고: 이탤릭 서브헤드 + 볼드 메인 헤드 + 제품 스크린샷
 * 핵심 메시지: "직원이 바뀌어도 한의원은 그대로 운영됩니다"
 */
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/hero-product-mockup-QMWWMqVSqvgssme2UVW2ok.png";

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-20 overflow-hidden">
      {/* Subtle teal gradient background — like hanitek.kr */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00B6C5]/5 via-transparent to-transparent pointer-events-none" />

      <div className="container relative">
        {/* Sub-headline — tiro.ooo style italic */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-base md:text-lg text-muted-foreground italic mb-3"
        >
          녹음 한 번이면 차트부터 리마인드까지.
        </motion.p>

        {/* Main Headline — bold, hanitek.kr style */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-tight tracking-tight text-[#333] max-w-3xl mx-auto"
        >
          직원이 바뀌어도
          <br />
          <span className="text-hani">한의원은 그대로</span> 운영됩니다
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-sm md:text-base text-muted-foreground max-w-xl mx-auto mt-5 leading-relaxed"
        >
          녹음 한 번으로 차트 작성, 내원 알림, 환자 안내까지 자동으로 처리하여,
          <br className="hidden sm:block" />
          직원의 역량에 대한 의존도를 낮추고 안정적인 환자 관리를 돕습니다.
        </motion.p>

        {/* CTA Buttons — tiro.ooo style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8"
        >
          <Button
            size="lg"
            className="bg-hani hover:bg-hani-dark text-white font-semibold px-7 py-3 h-12 rounded-full shadow-none transition-all"
            onClick={() => window.open("https://www.haniagent.kr/auth/login", "_blank")}
          >
            무료 체험하기
            <ArrowRight className="ml-1.5 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-medium px-7 py-3 h-12 rounded-full border-[#ddd] text-[#333] hover:bg-[#f8f8f8]"
            onClick={() => {
              const el = document.getElementById("features");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            기능 살펴보기
          </Button>
        </motion.div>

        {/* Trust badges — like hanitek.kr check marks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-5 mt-8 text-xs text-muted-foreground"
        >
          {["설치 없이 바로 시작", "어떤 EMR에도 호환", "의료 데이터 암호화"].map((text) => (
            <span key={text} className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-hani" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {text}
            </span>
          ))}
        </motion.div>

        {/* Hero Product Image — large screenshot like tiro.ooo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 md:mt-18 relative"
        >
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-4 bg-gradient-to-b from-[#00B6C5]/8 via-[#00B6C5]/3 to-transparent rounded-3xl blur-2xl" />
            <img
              src={HERO_IMAGE}
              alt="하니에이전트 제품 화면 — 환자 관리 대시보드와 녹음 기능"
              className="relative w-full rounded-2xl shadow-2xl shadow-black/10 border border-[#e5e5e5]"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* Marquee — hanitek.kr style clinic names */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-14 md:mt-16"
        >
          <p className="text-center text-xs text-muted-foreground mb-5 tracking-wide">
            하니에이전트를 사용하는 한의원
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex items-center gap-8 px-4">
                  {[
                    "경희한의원", "수한의원", "미소한의원", "온한의원", "참좋은한의원",
                    "해맑은한의원", "하나한의원", "보령한의원", "청담한의원", "우리한의원",
                    "동의한의원", "한사랑한의원"
                  ].map((name) => (
                    <span
                      key={`${setIdx}-${name}`}
                      className="text-sm font-medium text-[#999] px-4 py-2 rounded-full border border-[#eee] bg-[#fafafa] whitespace-nowrap"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
