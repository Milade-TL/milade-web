import { HeroSection } from "@/components/home/hero-section";
import NewsletterSection from "@/components/home/newsletter-section";
import { ReviewsSection } from "@/components/home/reviews-section";
import { ServicesMarqueeSection } from "@/components/home/services-marquee-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <ServicesMarqueeSection />
        {/* <ServicesSection /> */}
        <WhyChooseSection />
        <ReviewsSection />
        <NewsletterSection />
      </main>
    </div>
  );
}
