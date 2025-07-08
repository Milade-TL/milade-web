import { AboutContactUs } from "@/components/about/contact-us";
import { AboutHeroSection } from "@/components/about/hero-section";
import { MissionVision } from "@/components/about/mission-vision";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: `About MiladeTL`,
};

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <MissionVision />
      <WhyChooseSection />
      <AboutContactUs />
    </main>
  );
}
