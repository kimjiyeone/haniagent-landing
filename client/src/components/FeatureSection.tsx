import { motion } from "framer-motion";
import { Mic, Inbox, Bell, FileCheck } from "lucide-react";

const MOCKUP_RECORDING = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/mockup-feature-recording-b6TpcxFp3Ew5K6bKpLcGJT.webp";
const MOCKUP_INBOX = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/mockup-feature-inbox-QkmQEAeeSthqqVFZwYqu8C.webp";
const MOCKUP_KAKAO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/mockup-feature-kakao-iQQkeGpQtQHC6LYJZ3uQ8m.webp";
const MOCKUP_EMR = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/mockup-feature-emr-ajuHnKrayGQH3fYisrANmk.webp";

const features = [
  {
    icon: Mic,
    label: "AI 녹음 차팅",
    title: "진료 중 녹음만 하세요.\nAI가 차트를 만듭니다.",
    desc: "진료 대화를 실시간으로 텍스트로 변환하고, 한의학 SOAP 형식의 차트를 자동 생성합니다. 원장님은 확인 후 확정 1탭이면 끝.",
    image: MOCKUP_RECORDING,
    bullets: ["음성 → 텍스트 자동 변환", "SOAP 차트 자동 생성", "확정 1탭으로 완료"],
  },
  {
    icon: Inbox,
    label: "실장 인박스",
    title: "실장은 인박스만\n따라하면 됩니다.",
    desc: "원장이 확정한 차트에서 태스크가 자동 생성됩니다. 우선순위대로 정렬되어 신입 실장도 Day 1부터 업무 가능.",
    image: MOCKUP_INBOX,
    bullets: ["태스크 자동 생성", "우선순위 정렬", "신입 Day 1 즉시 투입"],
  },
  {
    icon: Bell,
    label: "카카오 알림톡",
    title: "D-1 리마인드,\n시스템이 자동으로 챙깁니다.",
    desc: "권장 내원일 D-1에 카카오톡 리마인드가 자동 생성됩니다. 실장은 확인 후 발송 버튼만 누르면 됩니다.",
    image: MOCKUP_KAKAO,
    bullets: ["D-1 자동 리마인드 생성", "카카오톡 1탭 발송", "미방문 시 2차 알림"],
  },
  {
    icon: FileCheck,
    label: "EMR 복붙 대기열",
    title: "EMR 입력도\n복사 → 붙여넣기 1초.",
    desc: "확정된 SOAP 차트가 EMR 복붙 대기열에 자동 정렬됩니다. 어떤 EMR에도 호환되며, 이중 입력이 사라집니다.",
    image: MOCKUP_EMR,
    bullets: ["자동 대기열 정렬", "어떤 EMR에도 호환", "이중 입력 제거"],
  },
];

export default function FeatureSection() {
  return (
    <section id="features" className="py-16 md:py-20 bg-[#fafafa]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-[13px] text-[#00B6C5] font-semibold mb-3 tracking-wide uppercase">
            Features
          </p>
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#111] tracking-tight">
            한의원 운영의 모든 것을 자동화합니다
          </h2>
        </motion.div>

        <div className="space-y-20 md:space-y-28">
          {features.map((f, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-14`}
              >
                {/* Text */}
                <div className="flex-1 max-w-md">
                  <div className="flex items-center gap-2 mb-3">
                    <f.icon className="w-4 h-4 text-[#00B6C5]" />
                    <span className="text-[12px] font-bold text-[#00B6C5] tracking-wide uppercase">{f.label}</span>
                  </div>
                  <h3 className="text-[22px] md:text-[26px] font-extrabold text-[#111] leading-[1.3] whitespace-pre-line">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-[14px] text-[#666] leading-relaxed">
                    {f.desc}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-[13px] text-[#555]">
                        <svg className="w-4 h-4 text-[#00B6C5] shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="flex-1 max-w-lg">
                  <div className="rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#e8e8e8]">
                    <img
                      src={f.image}
                      alt={f.label}
                      className="w-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
