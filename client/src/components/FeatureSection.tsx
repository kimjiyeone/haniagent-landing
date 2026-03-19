import { motion } from "framer-motion";
import { useState } from "react";
import { Mic, Inbox, MessageSquare, FileCheck, BarChart3, Brain, Monitor } from "lucide-react";

const MOCKUP_RECORDING = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/mockup-feature-recording-b6TpcxFp3Ew5K6bKpLcGJT.webp";
const MOCKUP_INBOX = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/mockup-feature-inbox-QkmQEAeeSthqqVFZwYqu8C.webp";
const MOCKUP_KAKAO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/mockup-feature-kakao-iQQkeGpQtQHC6LYJZ3uQ8m.webp";
const MOCKUP_EMR = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/mockup-feature-emr-ajuHnKrayGQH3fYisrANmk.webp";
const MOCKUP_DASHBOARD = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/mockup-dashboard-aKHJ343dLGuWd3TttNK5Sk.webp";
const MOCKUP_AI_FEEDBACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663418348757/9kcbZEe8LvrJVEgTARGwC2/mockup-ai-feedback-4qFzgNyPdaMeiMPFU8GH7t.webp";

/*
 * 3 테마: 진료 자동화 / 환자 관리 / 경영 인사이트
 * 각 테마 안에 2개 기능씩 배치
 */
interface Feature {
  icon: typeof Mic;
  label: string;
  title: string;
  desc: string;
  image: string;
  bullets: string[];
}

interface Theme {
  id: string;
  name: string;
  subtitle: string;
  color: string;
  lightBg: string;
  features: Feature[];
}

const themes: Theme[] = [
  {
    id: "charting",
    name: "진료 자동화",
    subtitle: "녹음만 하면 차트가 완성됩니다",
    color: "text-[#00B6C5]",
    lightBg: "bg-[#f0fafb]",
    features: [
      {
        icon: Mic,
        label: "AI 음성 차팅",
        title: "진료 중 녹음만 하세요.\nAI가 SOAP 차트를 만듭니다.",
        desc: "진료 대화를 실시간으로 텍스트로 변환하고, 한의학 SOAP 형식의 차트를 자동 생성합니다. 원장님은 확인 후 확정 1탭이면 끝.",
        image: MOCKUP_RECORDING,
        bullets: ["음성 → 텍스트 자동 변환", "SOAP 차트 자동 생성", "확정 1탭으로 완료"],
      },
      {
        icon: FileCheck,
        label: "EMR 복붙 대기열",
        title: "EMR 입력도\n복사 → 붙여넣기 1초.",
        desc: "확정된 SOAP 차트가 EMR 복붙 대기열에 자동 정렬됩니다. 어떤 EMR에도 호환되며, 이중 입력이 사라집니다.",
        image: MOCKUP_EMR,
        bullets: ["자동 대기열 정렬", "어떤 EMR에도 호환", "이중 입력 제거"],
      },
    ],
  },
  {
    id: "patient",
    name: "환자/직원 관리",
    subtitle: "리마인드부터 재방문까지 시스템이 챙깁니다",
    color: "text-blue-600",
    lightBg: "bg-blue-50/50",
    features: [
      {
        icon: Inbox,
        label: "실장 인박스",
        title: "실장은 인박스만\n따라하면 됩니다.",
        desc: "원장이 확정한 차트에서 태스크가 자동 생성됩니다. 우선순위대로 정렬되어 신입 실장도 Day 1부터 업무 가능.",
        image: MOCKUP_INBOX,
        bullets: ["태스크 자동 생성", "우선순위 정렬", "신입 Day 1 즉시 투입"],
      },
      {
        icon: MessageSquare,
        label: "AI 맞춤 카톡",
        title: "차트 기반 맞춤 카톡,\nAI가 자동 생성합니다.",
        desc: "예약 확인(T1), D-1 리마인드(T2), D+1 사후관리(T3) 카톡을 AI가 차트 내용 기반으로 맞춤 생성합니다. 추후 자동 발송 기능이 추가될 예정입니다.",
        image: MOCKUP_KAKAO,
        bullets: ["T1 예약확인 · T2 D-1 리마인드 · T3 D+1 사후관리", "차트 기반 AI 맞춤 메시지", "추후 자동 발송 업데이트 예정"],
      },
    ],
  },
  {
    id: "growth",
    name: "경영 인사이트",
    subtitle: "데이터로 한의원 성장을 설계합니다",
    color: "text-amber-600",
    lightBg: "bg-amber-50/50",
    features: [
      {
        icon: BarChart3,
        label: "경영지표 대시보드",
        title: "재진율, 매출, 환자 현황.\n숫자로 한눈에 파악합니다.",
        desc: "재진율 추이, 일일 환자 수, 환자 유형 분포, 월 매출 변화를 실시간 대시보드로 확인합니다. 데이터 기반 의사결정이 가능해집니다.",
        image: MOCKUP_DASHBOARD,
        bullets: ["재진율 · 매출 실시간 추적", "환자 유형별 분포 분석", "데이터 기반 경영 의사결정"],
      },
      {
        icon: Brain,
        label: "AI 상담 피드백",
        title: "환자 유형을 AI가 분석하고,\n맞춤 소통 팁을 제안합니다.",
        desc: "상담 내용을 바탕으로 환자 유형을 자동 분류하고, 환자별 맞춤 치료 접근법과 커뮤니케이션 팁을 AI가 제안합니다.",
        image: MOCKUP_AI_FEEDBACK,
        bullets: ["환자 유형 자동 분류", "맞춤 치료 접근법 제안", "환자 만족도 분석"],
      },
    ],
  },
];

export default function FeatureSection() {
  const [activeTheme, setActiveTheme] = useState(0);

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[13px] text-[#00B6C5] font-semibold mb-3 tracking-wide uppercase">
            Features
          </p>
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#111] tracking-tight">
            한의원 운영의 모든 것을 자동화합니다
          </h2>
        </motion.div>

        {/* Theme tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {themes.map((theme, i) => (
            <button
              key={theme.id}
              onClick={() => setActiveTheme(i)}
              className={`px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-all ${
                i === activeTheme
                  ? "bg-[#111] text-white shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
                  : "bg-[#f5f5f5] text-[#777] hover:bg-[#eee]"
              }`}
            >
              {theme.name}
            </button>
          ))}
        </div>

        {/* Active theme content */}
        <motion.div
          key={activeTheme}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Theme subtitle */}
          <p className={`text-center text-[16px] font-medium ${themes[activeTheme].color} mb-10`}>
            {themes[activeTheme].subtitle}
          </p>

          {/* Features in this theme */}
          <div className="space-y-16 md:space-y-20">
            {themes[activeTheme].features.map((f, i) => {
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
                    <div className={`rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#e8e8e8] ${themes[activeTheme].lightBg} p-2`}>
                      <img
                        src={f.image}
                        alt={f.label}
                        className="w-full rounded-xl"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* App download CTA inline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.haniagent.kr/auth/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#111] hover:bg-[#333] text-white font-semibold rounded-xl text-[14px] transition-colors shadow-[0_2px_12px_rgba(0,0,0,0.1)]"
          >
            <Monitor size={16} />
            지금 바로 시작하기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
