import { AboutContactUs } from "@/components/about/contact-us";
import { AboutHeroSection } from "@/components/about/hero-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <WhyChooseSection />
      <AboutContactUs />
    </main>
  );
}
