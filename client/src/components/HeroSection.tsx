import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

const DEMO_VIDEO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/demo-full_dc9a2224.mp4";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/mockup-hero-soap-Vh9hWeMEGNYxEwmZzcvZDy.webp";

const clinics = [
  "미소한의원", "수한의원", "경희한의원", "온누리한의원",
  "참좋은한의원", "한마음한의원", "동의보감한의원", "청아한의원",
  "하나한의원", "보령한의원", "청담한의원", "우리한의원",
];

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fffe] to-white -z-10" />

      <div className="container">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-[15px] text-[#00B6C5] font-semibold mb-4 tracking-wide">
            한의원 전용 AI 어시스턴트
          </p>
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-extrabold text-[#111] leading-[1.15] tracking-tight">
            진료 끝나면{" "}
            <br className="hidden sm:block" />
            차트부터 환자 관리까지{" "}
            <br className="hidden sm:block" />
            <span className="text-[#00B6C5]">다 해놓겠습니다</span>
          </h1>
          <p className="mt-5 text-[16px] md:text-[17px] text-[#666] leading-relaxed max-w-lg mx-auto">
            녹음 한 번이면 SOAP 차트 작성, 내원 안내, 예약 리마인드까지.
            <br />
            원장님은 환자만 보세요. 나머지는 하니가 합니다.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://www.haniagent.kr/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-7 bg-[#111] hover:bg-[#333] text-white font-semibold rounded-lg text-[15px] transition-colors"
            >
              무료로 시작하기
            </a>
            <button
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center justify-center gap-2 h-12 px-6 border border-[#ddd] hover:border-[#bbb] text-[#333] font-medium rounded-lg text-[15px] transition-colors bg-white"
            >
              <Play size={16} className="text-[#00B6C5]" />
              데모 영상 보기
            </button>
          </div>
        </motion.div>

        {/* Product image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 max-w-3xl mx-auto"
        >
          <div className="relative rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-[#e8e8e8]">
            <img
              src={HERO_IMG}
              alt="HaniAgent SOAP 차트 화면"
              className="w-full"
            />
          </div>
        </motion.div>

        {/* Trust marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14"
        >
          <p className="text-center text-[13px] text-[#999] font-medium mb-5">
            전국 한의원에서 사용 중
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...clinics, ...clinics].map((name, i) => (
                <div
                  key={i}
                  className="shrink-0 mx-5 px-5 py-2 bg-[#f8f8f8] rounded-full text-[13px] text-[#888] font-medium whitespace-nowrap"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-3xl rounded-xl overflow-hidden bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full text-white text-sm transition-colors"
            >
              ✕
            </button>
            <video
              src={DEMO_VIDEO}
              controls
              autoPlay
              className="w-full aspect-video"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
}
