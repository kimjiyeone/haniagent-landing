import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TestimonialSection from "@/components/TestimonialSection";
import CoreLoopSection from "@/components/CoreLoopSection";
import FeatureSection from "@/components/FeatureSection";
import ComparisonSection from "@/components/ComparisonSection";
import SecuritySection from "@/components/SecuritySection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

/*
 * Home page layout — tiro/mediark inspired
 * 1. Hero (슬로건 + 데모 애니메이션 + 앱다운 + 한의원 마퀴)
 * 2. Testimonials (리뷰 캐러셀 — 마퀴 바로 아래)
 * 3. Core Loop (시각적 루프)
 * 4. Features (테마별 소개)
 * 5. Comparison (Before & After)
 * 6. Security (블랙 디자인)
 * 7. Pricing (가격 문의)
 * 8. FAQ
 * 9. CTA (최종)
 * 10. Footer
 *
 * ProblemSection 제거됨
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TestimonialSection />
      <CoreLoopSection />
      <FeatureSection />
      <ComparisonSection />
      <SecuritySection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
