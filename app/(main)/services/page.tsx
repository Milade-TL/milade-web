import { ReviewsSection } from "@/components/home/reviews-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { ServicesCarouselSection } from "@/components/services/carousel-section";
import { ServiceHeroSection } from "@/components/services/hero-section";
import { NeedHelpSection } from "@/components/services/need-help-section";

export default function ServicePage() {
  return (
    <main>
      <ServiceHeroSection />
      <ServicesCarouselSection />
      <NeedHelpSection />
      <WhyChooseSection />
      <ReviewsSection />
    </main>
  );
}
