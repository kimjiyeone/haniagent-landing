/*
 * Design: hanitek.kr + tiro.ooo 스타일
 * 히어로: 메인 카피 + 데모 영상/제품 목업
 * 틸(#00B6C5) 브랜드 컬러, 레이아웃 압축
 */
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const DEMO_VIDEO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/demo-full_dc9a2224.mp4";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/mockup-hero-soap-Vh9hWeMEGNYxEwmZzcvZDy.webp";

const badges = ["설치 없이 바로 시작", "어떤 EMR에도 호환", "의료 데이터 암호화"];

const clinics = [
  "경희한의원", "수한의원", "미소한의원", "온한의원", "참좋은한의원",
  "해맑은한의원", "하나한의원", "보령한의원", "청담한의원", "우리한의원",
  "동의한의원", "한사랑한의원"
];

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative pt-24 pb-8 md:pt-28 md:pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-hani-light/40 via-white to-white pointer-events-none" />

      <div className="container relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm md:text-base text-muted-foreground mb-2 italic">
            녹음 한 번이면 차트부터 리마인드까지.
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-[3.25rem] font-extrabold text-[#222] leading-[1.15] tracking-tight">
            직원이 바뀌어도
            <br />
            <span className="text-hani">한의원은 그대로</span> 운영됩니다
          </h1>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            녹음 한 번으로 차트 작성, 내원 알림, 환자 안내까지 자동으로 처리하여,
            직원의 역량에 대한 의존도를 낮추고 안정적인 환자 관리를 돕습니다.
          </p>

          {/* CTA */}
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              className="bg-hani hover:bg-hani-dark text-white font-bold px-7 h-11 rounded-full shadow-lg shadow-hani/20"
              onClick={() => window.open("https://www.haniagent.kr/auth/login", "_blank")}
            >
              무료 체험하기
              <ArrowRight className="ml-1.5 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#ddd] text-[#555] hover:border-hani hover:text-hani font-medium px-7 h-11 rounded-full bg-transparent"
              onClick={() => setShowVideo(true)}
            >
              <Play className="mr-1.5 w-4 h-4" />
              데모 영상 보기
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            {badges.map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <CheckCircle2 className="w-3.5 h-3.5 text-hani" />
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Demo Video / Product Image */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-b from-hani/8 via-hani/3 to-transparent rounded-3xl blur-2xl" />
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/10 border border-[#e0e0e0] bg-white">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-2 bg-[#f5f5f5] border-b border-[#e5e5e5]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded-md px-3 py-0.5 text-[11px] text-[#999] text-center border border-[#e5e5e5]">
                    haniagent.kr
                  </div>
                </div>
              </div>

              {showVideo ? (
                <video
                  src={DEMO_VIDEO}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full aspect-video object-cover"
                />
              ) : (
                <div className="relative group cursor-pointer" onClick={() => setShowVideo(true)}>
                  <img
                    src={HERO_IMG}
                    alt="하니에이전트 SOAP 차트 화면"
                    className="w-full"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-hani ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                    30초 데모 영상 보기
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Marquee — clinic names */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10"
        >
          <p className="text-center text-xs text-muted-foreground mb-3 tracking-wide">
            하니에이전트를 사용하는 한의원
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex items-center gap-5 px-2.5">
                  {clinics.map((name) => (
                    <span
                      key={`${setIdx}-${name}`}
                      className="text-sm font-medium text-[#999] px-3 py-1 rounded-full border border-[#eee] bg-[#fafafa] whitespace-nowrap"
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
