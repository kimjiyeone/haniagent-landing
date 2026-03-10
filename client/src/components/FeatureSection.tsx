/*
 * Design: hanitek.kr 스타일 — 좌우 교차 기능 소개
 * 틸(#00B6C5) 배경 카드 + 실제 서비스 스크린샷
 * tiro.ooo 참고: 큰 이미지 + 체크리스트 + 브라우저 프레임
 */
import { motion } from "framer-motion";

// 실제 서비스 스크린샷 CDN URLs
const RECORDING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/screenshot-charttool-full_7b65099f.webp";
const SOAP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/screenshot-soap-chart_1de1545c.webp";
const INBOX_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/screenshot-main-inbox_98a48e28.webp";
const KAKAO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/screenshot-main-reservation_45ee2c59.webp";

const features = [
  {
    tag: "AI 녹음 차팅",
    title: "진료하면서 말하면,\nAI가 차트를 씁니다",
    description: "녹음 버튼 하나로 진료 내용을 실시간 텍스트로 변환합니다. 의료 용어 인식률을 높인 하니에이전트만의 기술력으로, SOAP 양식에 맞춰 정확한 차트가 자동 생성됩니다.",
    highlights: ["실시간 STT 변환", "의료 용어 특화 인식", "SOAP 자동 구조화"],
    image: RECORDING_IMG,
    imageAlt: "하니에이전트 실제 녹음 기능 화면 — 환자 목록과 실장 상담 녹음",
    hasTealBg: false,
  },
  {
    tag: "AI SOAP 차트",
    title: "확인하고 확정만 하세요.\n나머지는 시스템이 합니다",
    description: "AI가 생성한 SOAP 차트를 원장님이 확인하고 확정 버튼을 누르면, EMR 복붙 대기열이 자동 생성되고, 실장에게 태스크가 전달됩니다.",
    highlights: ["원장 확정 후 실장 전달", "EMR 복붙 대기열 자동 생성", "S/O/A/P 구조 완벽 지원"],
    image: SOAP_IMG,
    imageAlt: "하니에이전트 실제 SOAP 차트 화면 — S/O/A/P 자동 생성 결과",
    hasTealBg: true,
  },
  {
    tag: "실장 인박스",
    title: "신입 실장도 Day 1부터\n실수 없이 일합니다",
    description: "체크인, 예약 안내, 리마인드 카톡, EMR 복붙 — 모든 업무가 인박스에 태스크로 정리됩니다. 실장은 순서대로 처리하기만 하면 됩니다.",
    highlights: ["태스크 자동 생성 (T1~T4)", "퀵 체크인으로 자동 해소", "지연 태스크 자동 알림"],
    image: INBOX_IMG,
    imageAlt: "하니에이전트 실제 인박스 화면 — 태스크 카드와 처리 버튼",
    hasTealBg: false,
  },
  {
    tag: "카카오 알림톡",
    title: "환자에게 딱 맞는 시점에\n리마인드가 갑니다",
    description: "원장님이 설정한 권장 내원일 전날, 시스템이 자동으로 카카오톡 리마인드 태스크를 생성합니다. 실장은 템플릿을 확인하고 발송 버튼만 누르면 됩니다.",
    highlights: ["D-1 자동 리마인드 생성", "환자 정보 자동 치환", "실장 수정 후 발송 가능"],
    image: KAKAO_IMG,
    imageAlt: "하니에이전트 실제 예약 현황 화면 — 카톡 발송 대기 환자 목록",
    hasTealBg: true,
  },
];

function BrowserFrame({ children, isDark }: { children: React.ReactNode; isDark?: boolean }) {
  return (
    <div className={`rounded-xl overflow-hidden shadow-xl ${isDark ? "shadow-black/20 border border-white/15" : "shadow-black/8 border border-[#e0e0e0]"} bg-white`}>
      {/* Browser top bar */}
      <div className={`flex items-center gap-2 px-3 py-2 ${isDark ? "bg-[#2a2a2a] border-b border-white/10" : "bg-[#f5f5f5] border-b border-[#e5e5e5]"}`}>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 mx-3">
          <div className={`rounded-md px-2.5 py-0.5 text-[10px] text-center ${isDark ? "bg-white/10 text-white/50 border border-white/10" : "bg-white text-[#999] border border-[#e5e5e5]"}`}>
            haniagent.kr
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default function FeatureSection() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold text-hani bg-hani/10 px-3 py-1 rounded-full mb-4 tracking-wide">
            FEATURES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#333] tracking-tight">
            한의원 운영, 이렇게 바뀝니다
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            원장님은 진료에만 집중하고, 나머지는 하니에이전트가 처리합니다.
          </p>
        </motion.div>

        {/* Feature blocks — hanitek.kr 스타일 좌우 교차 */}
        <div className="space-y-12 md:space-y-0">
          {features.map((f, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={f.tag}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`rounded-3xl ${f.hasTealBg ? "bg-[#00B6C5]" : "bg-[#f3f3f3]"} p-8 md:p-12 mb-6`}
              >
                <div className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-12`}>
                  {/* Text */}
                  <div className="flex-1 max-w-lg">
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${
                      f.hasTealBg
                        ? "bg-white/20 text-white"
                        : "bg-hani/10 text-hani"
                    }`}>
                      {f.tag}
                    </span>
                    <h3 className={`text-xl sm:text-2xl md:text-[1.75rem] font-extrabold leading-snug whitespace-pre-line ${
                      f.hasTealBg ? "text-white" : "text-[#333]"
                    }`}>
                      {f.title}
                    </h3>
                    <p className={`mt-4 leading-relaxed ${
                      f.hasTealBg ? "text-white/85" : "text-muted-foreground"
                    }`}>
                      {f.description}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {f.highlights.map((h) => (
                        <li key={h} className={`flex items-center gap-2.5 text-sm ${
                          f.hasTealBg ? "text-white/90" : "text-[#555]"
                        }`}>
                          <svg className={`w-4 h-4 shrink-0 ${f.hasTealBg ? "text-white" : "text-hani"}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image — 실제 서비스 스크린샷을 브라우저 프레임 안에 */}
                  <div className="flex-1 w-full max-w-lg">
                    <div className="relative group">
                      <BrowserFrame isDark={f.hasTealBg}>
                        <img
                          src={f.image}
                          alt={f.imageAlt}
                          className="w-full transition-transform duration-500 group-hover:scale-[1.01]"
                          loading="lazy"
                        />
                      </BrowserFrame>
                    </div>
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
