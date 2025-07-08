import { AboutContactUs } from "@/components/about/contact-us";
import { FAQSection } from "@/components/faq/faq-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Fequently asked questions about MiladeTL`,
};

export default function FAQPage() {
  return (
    <main>
      <FAQSection />
      <AboutContactUs />
    </main>
  );
}
