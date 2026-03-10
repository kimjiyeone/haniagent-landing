import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import CoreLoopSection from "@/components/CoreLoopSection";
import FeatureSection from "@/components/FeatureSection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialSection from "@/components/TestimonialSection";
import PricingSection from "@/components/PricingSection";
import SecuritySection from "@/components/SecuritySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <CoreLoopSection />
        <FeatureSection />
        <ComparisonSection />
        <TestimonialSection />
        <PricingSection />
        <SecuritySection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
