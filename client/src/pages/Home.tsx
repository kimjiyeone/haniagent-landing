import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
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
 * 2. Testimonials (리뷰 캐러셀)
 * 3. Core Loop (시각적 루프)
 * 4. Features (테마별 소개)
 * 5. Comparison (Before & After)
 * 6. Update Roadmap (함께 만들어가는 시스템)
 * 7. Security (블랙 디자인)
 * 8. Pricing (3열: 무료체험/방문진료/프로)
 * 9. FAQ
 * 10. CTA (최종)
 * 11. Footer
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
      <UpdateRoadmapSection />
      <SecuritySection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
