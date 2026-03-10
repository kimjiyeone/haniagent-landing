/*
 * Design: Clinical Dashboard — Modern SaaS
 * Features: 좌우 교차 배치로 주요 기능 4가지를 이미지와 함께 소개
 */
import { motion } from "framer-motion";

const RECORDING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/feature-recording-4BZRwrZ3xb7tB5QY7huc45.webp";
const SOAP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/feature-soap-chart-f5Y4TqV6XUc7hYojiPK7qW.webp";
const INBOX_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/feature-task-inbox-MhZe5ZmYHrur5ddcmT29tq.webp";
const KAKAO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/feature-kakao-notification-o6zRXMEwZZH8hHgVdhnHaf.webp";

const features = [
  {
    tag: "AI 녹음 차팅",
    title: "진료하면서 말하면,\nAI가 차트를 씁니다",
    description: "녹음 버튼 하나로 진료 내용을 실시간 텍스트로 변환합니다. 의료 용어 인식률을 높인 하니에이전트만의 기술력으로, SOAP 양식에 맞춰 정확한 차트가 자동 생성됩니다.",
    highlights: ["실시간 STT 변환", "의료 용어 특화 인식", "SOAP 자동 구조화"],
    image: RECORDING_IMG,
    imageAlt: "하니에이전트 녹음 기능 — 실시간 음성 텍스트 변환",
  },
  {
    tag: "AI SOAP 차트",
    title: "확인하고 확정만 하세요.\n나머지는 시스템이 합니다",
    description: "AI가 생성한 SOAP 차트를 원장님이 확인하고 확정 버튼을 누르면, EMR 복붙 대기열이 자동 생성되고, 실장에게 태스크가 전달됩니다. 확정 전까지 실장에게 보이지 않아 미수정 차트 복붙을 방지합니다.",
    highlights: ["원장 확정 후 실장 전달", "EMR 복붙 대기열 자동 생성", "S/O/A/P 구조 완벽 지원"],
    image: SOAP_IMG,
    imageAlt: "하니에이전트 AI SOAP 차트 — 자동 생성 및 확정",
  },
  {
    tag: "실장 인박스",
    title: "신입 실장도 Day 1부터\n실수 없이 일합니다",
    description: "체크인, 예약 안내, 리마인드 카톡, EMR 복붙 — 모든 업무가 인박스에 태스크로 정리됩니다. 실장은 순서대로 처리하기만 하면 됩니다. 교육이 필요 없습니다.",
    highlights: ["태스크 자동 생성 (T1~T4)", "퀵 체크인으로 자동 해소", "지연 태스크 자동 알림"],
    image: INBOX_IMG,
    imageAlt: "하니에이전트 실장 인박스 — 태스크 관리 화면",
  },
  {
    tag: "카카오 알림톡",
    title: "환자에게 딱 맞는 시점에\n리마인드가 갑니다",
    description: "원장님이 설정한 권장 내원일 전날, 시스템이 자동으로 카카오톡 리마인드 태스크를 생성합니다. 실장은 템플릿을 확인하고 발송 버튼만 누르면 됩니다. 환자 이름, 주증, 날짜가 자동으로 채워집니다.",
    highlights: ["D-1 자동 리마인드 생성", "환자 정보 자동 치환", "실장 수정 후 발송 가능"],
    image: KAKAO_IMG,
    imageAlt: "하니에이전트 카카오 알림톡 — 템플릿 편집 및 발송",
  },
];

export default function FeatureSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-hani-green tracking-wide uppercase">Features</span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-hani-slate tracking-tight">
            한의원 운영, 이렇게 바뀝니다
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            원장님은 진료에만 집중하고, 나머지는 하니에이전트가 처리합니다.
          </p>
        </motion.div>

        {/* Feature blocks */}
        <div className="space-y-20 md:space-y-28">
          {features.map((f, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={f.tag}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-14`}
              >
                {/* Text */}
                <div className="flex-1 max-w-lg">
                  <span className="inline-block text-xs font-semibold text-hani-green bg-hani-green/10 px-3 py-1 rounded-full mb-4">
                    {f.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-[1.75rem] font-extrabold text-hani-slate leading-snug whitespace-pre-line">
                    {f.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {f.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2.5 text-sm text-foreground/80">
                        <svg className="w-4 h-4 text-hani-green shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="flex-1 w-full max-w-lg">
                  <div className="relative group">
                    <div className="absolute -inset-3 bg-gradient-to-br from-hani-green/8 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={f.image}
                      alt={f.imageAlt}
                      className="relative w-full rounded-2xl shadow-xl shadow-black/8 border border-border/40 transition-transform duration-500 group-hover:scale-[1.02]"
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
