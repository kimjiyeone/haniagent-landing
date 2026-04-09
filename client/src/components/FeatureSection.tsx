import { motion } from "framer-motion";
import { useState } from "react";

/*
 * FeatureSection — 깔끔한 기능 소개
 * 인라인 목업 제거, 텍스트 중심 카드 레이아웃
 */

interface Feature {
  title: string;
  desc: string;
}

interface Theme {
  id: string;
  name: string;
  subtitle: string;
  features: Feature[];
}

const themes: Theme[] = [
  {
    id: "charting",
    name: "진료 자동화",
    subtitle: "녹음만 하면 차트가 완성됩니다",
    features: [
      {
        title: "AI 음성 차팅",
        desc: "진료 중 녹음만 하면 AI가 한의학 SOAP 차트를 자동 생성합니다. 확인 후 확정 1탭이면 끝.",
      },
      {
        title: "EMR 복붙 대기열",
        desc: "확정된 차트가 대기열에 자동 정렬됩니다. 어떤 EMR에도 복사 → 붙여넣기 1초.",
      },
    ],
  },
  {
    id: "patient",
    name: "환자/직원 관리",
    subtitle: "직원이 바뀌어도 한의원이 똑같이 굴러갑니다",
    features: [
      {
        title: "실장 인박스",
        desc: "원장이 확정한 차트에서 태스크가 자동 생성됩니다. 우선순위대로 정렬되어 신입 실장도 Day 1부터 업무 가능.",
      },
      {
        title: "AI 맞춤 카톡",
        desc: "예약확인 · D-1 리마인드 · D+1 사후관리 카톡을 AI가 차트 기반으로 맞춤 생성합니다.",
      },
    ],
  },
  {
    id: "growth",
    name: "경영 인사이트",
    subtitle: "데이터로 한의원 성장을 설계합니다",
    features: [
      {
        title: "경영지표 대시보드",
        desc: "재진율, 일일 환자 수, 월 매출 변화를 실시간으로 확인합니다. 데이터 기반 의사결정이 가능해집니다.",
      },
      {
        title: "AI 상담 피드백",
        desc: "상담 내용을 바탕으로 환자 유형을 자동 분류하고, 맞춤 소통 팁을 AI가 제안합니다.",
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
          className="text-center mb-10"
        >
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#111] tracking-tight">
            한의원 운영의 모든 것을 자동화합니다
          </h2>
        </motion.div>

        {/* Theme tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {themes.map((theme, i) => (
            <button
              key={theme.id}
              onClick={() => setActiveTheme(i)}
              className={`px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-all ${
                i === activeTheme
                  ? "bg-[#111] text-white"
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
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-center text-[15px] text-[#555] font-medium mb-8">
            {themes[activeTheme].subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {themes[activeTheme].features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="bg-white rounded-xl border border-[#eee] p-6"
              >
                <h3 className="text-[17px] font-bold text-[#111] mb-3">{f.title}</h3>
                <p className="text-[13px] text-[#666] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.haniagent.kr/main"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#111] hover:bg-[#333] text-white font-semibold rounded-xl text-[14px] transition-colors"
          >
            지금 바로 시작하기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
