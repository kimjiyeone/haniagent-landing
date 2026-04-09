import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import TestimonialSection from "@/components/TestimonialSection";
import CoreLoopSection from "@/components/CoreLoopSection";
import FeatureSection from "@/components/FeatureSection";
import ComparisonSection from "@/components/ComparisonSection";
import UpdateRoadmapSection from "@/components/UpdateRoadmapSection";
import SecuritySection from "@/components/SecuritySection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

/*
 * Home page layout
 * 1. Hero (슬로건 + 데모 애니메이션 + 앱다운 + 한의원 마퀴)
 * 2. Problem (문제 제기 — 직원 관리 페인포인트)
 * 3. Testimonials (리뷰 캐러셀)
 * 4. Core Loop (시각적 루프)
 * 5. Features (테마별 소개)
 * 6. Comparison (Before & After)
 * 7. Update Roadmap (함께 만들어가는 시스템)
 * 8. Security (블랙 디자인)
 * 9. Pricing (3열: 무료체험/방문진료/프로)
 * 10. FAQ
 * 11. CTA (최종)
 * 12. Footer
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemSection />
      <TestimonialSection />
      <CoreLoopSection />
      <FeatureSection />
      <ComparisonSection />
      <UpdateRoadmapSection />
      <SecuritySection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
