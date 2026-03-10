/*
 * Design: hanitek.kr 좌우 교차 + tiro.ooo 깔끔한 카드
 * 새 목업 이미지 사용, 레이아웃 압축
 * 틸(#00B6C5) 브랜드 컬러
 */
import { motion } from "framer-motion";
import { Mic, FileCheck, Inbox, Bell } from "lucide-react";

const MOCKUP_RECORDING = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/mockup-feature-recording-b6TpcxFp3Ew5K6bKpLcGJT.webp";
const MOCKUP_INBOX = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/mockup-feature-inbox-QkmQEAeeSthqqVFZwYqu8C.webp";
const MOCKUP_KAKAO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/mockup-feature-kakao-iQQkeGpQtQHC6LYJZ3uQ8m.webp";
const MOCKUP_EMR = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/mockup-feature-emr-ajuHnKrayGQH3fYisrANmk.webp";

const features = [
  {
    icon: Mic,
    tag: "AI 녹음 차팅",
    title: "진료 중 녹음만 하세요.\nAI가 차트를 만듭니다.",
    description: "진료 대화를 실시간으로 텍스트로 변환하고, 한의학 SOAP 형식의 차트를 자동 생성합니다.",
    image: MOCKUP_RECORDING,
    highlights: ["음성 → 텍스트 자동 변환", "SOAP 차트 자동 생성", "확정 1탭으로 완료"],
  },
  {
    icon: Inbox,
    tag: "실장 인박스",
    title: "실장은 인박스만\n따라하면 됩니다.",
    description: "원장이 확정한 차트에서 태스크가 자동 생성됩니다. 신입 실장도 Day 1부터 업무 가능.",
    image: MOCKUP_INBOX,
    highlights: ["태스크 자동 생성", "우선순위 정렬", "신입 Day 1 즉시 투입"],
  },
  {
    icon: Bell,
    tag: "카카오 알림톡",
    title: "D-1 리마인드,\n시스템이 자동으로 챙깁니다.",
    description: "권장 내원일 D-1에 카카오톡 리마인드가 자동 생성됩니다. 실장은 발송 버튼만.",
    image: MOCKUP_KAKAO,
    highlights: ["D-1 자동 리마인드 생성", "카카오톡 1탭 발송", "미방문 시 2차 알림"],
  },
  {
    icon: FileCheck,
    tag: "EMR 복붙 대기열",
    title: "EMR 입력도\n복사 → 붙여넣기 1초.",
    description: "확정된 SOAP 차트가 EMR 복붙 대기열에 자동 정렬됩니다. 이중 입력이 사라집니다.",
    image: MOCKUP_EMR,
    highlights: ["자동 대기열 정렬", "어떤 EMR에도 호환", "이중 입력 제거"],
  },
];

export default function FeatureSection() {
  return (
    <section id="features" className="py-14 md:py-18">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-bold text-hani bg-hani/10 px-3 py-1 rounded-full mb-3 tracking-wide">
            FEATURES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#333] tracking-tight">
            한의원 운영의 모든 것을 자동화합니다
          </h2>
        </motion.div>

        <div className="space-y-12 md:space-y-16">
          {features.map((f, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={f.tag}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-6 md:gap-10`}
              >
                {/* Text */}
                <div className="flex-1 max-w-md">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-hani/10 flex items-center justify-center">
                      <f.icon className="w-3.5 h-3.5 text-hani" />
                    </div>
                    <span className="text-xs font-bold text-hani tracking-wide">{f.tag}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-extrabold text-[#333] leading-snug whitespace-pre-line">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {f.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-[#555]">
                        <div className="w-1.5 h-1.5 rounded-full bg-hani shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="flex-1 max-w-lg">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-[#e8e8e8]">
                    <img
                      src={f.image}
                      alt={f.tag}
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
