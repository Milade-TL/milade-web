import { AboutContactUs } from "@/components/about/contact-us";
import { ContactHeroSection } from "@/components/contact/contact-hero-section";
import { InquiriesSection } from "@/components/contact/inquires-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact MiladeTL`,
};

export default function ContactPage() {
  return (
    <main>
      <ContactHeroSection />
      <InquiriesSection />
      <AboutContactUs />
    </main>
  );
}
