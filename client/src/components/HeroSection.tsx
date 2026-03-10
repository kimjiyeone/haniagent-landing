/*
 * Design: Clinical Dashboard — Modern SaaS
 * Hero: 중앙 정렬 헤드라인 + 제품 UI 모형
 * 핵심 메시지: "직원이 바뀌어도 한의원은 그대로 운영됩니다"
 */
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/hero-product-mockup-QMWWMqVSqvgssme2UVW2ok.png";

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-hani-green-light/30 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-hani-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-hani-green/10 text-hani-green text-xs font-semibold tracking-wide border border-hani-green/20">
            <span className="w-1.5 h-1.5 rounded-full bg-hani-green animate-pulse" />
            한의원 운영 자동화 시스템
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight tracking-tight text-hani-slate max-w-3xl mx-auto"
        >
          직원이 바뀌어도
          <br />
          <span className="text-hani-green">한의원은 그대로</span> 운영됩니다
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-base md:text-lg text-muted-foreground max-w-xl mx-auto mt-5 leading-relaxed"
        >
          녹음 한 번이면 — 차트 자동 작성, 다음 방문 자동 알림,
          <br className="hidden sm:block" />
          환자 안내 자동 발송. 신입 실장도 Day 1부터 가능합니다.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8"
        >
          <Button
            size="lg"
            className="bg-hani-green hover:bg-hani-green-dark text-white font-semibold px-7 py-3 h-12 rounded-xl shadow-lg shadow-hani-green/20 transition-all hover:shadow-xl hover:shadow-hani-green/30"
            onClick={() => window.open("https://www.haniagent.kr/auth/login", "_blank")}
          >
            무료로 시작하기
            <ArrowRight className="ml-1.5 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-medium px-7 py-3 h-12 rounded-xl border-border/60 text-foreground hover:bg-muted/50"
            onClick={() => {
              const el = document.getElementById("features");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Play className="mr-1.5 w-4 h-4 text-hani-green" />
            기능 살펴보기
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6 mt-8 text-xs text-muted-foreground"
        >
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-hani-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            설치 없이 바로 시작
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-hani-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            어떤 EMR에도 호환
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-hani-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            의료 데이터 암호화
          </span>
        </motion.div>

        {/* Hero Product Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 md:mt-18 relative"
        >
          <div className="relative mx-auto max-w-4xl">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-b from-hani-green/10 via-hani-green/5 to-transparent rounded-3xl blur-2xl" />
            <img
              src={HERO_IMAGE}
              alt="하니에이전트 제품 화면 — 환자 관리 대시보드와 녹음 기능"
              className="relative w-full rounded-2xl shadow-2xl shadow-black/10 border border-border/40"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
