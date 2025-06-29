import { HeroSection } from "@/components/home/hero-section";
import NewsletterSection from "@/components/home/newsletter-section";
import { ReviewsSection } from "@/components/home/reviews-section";
import { ServicesSection } from "@/components/home/services-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseSection />
        <ReviewsSection />
        <NewsletterSection />
      </main>
    </div>
  );
}
