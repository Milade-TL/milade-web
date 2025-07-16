import { BookingsHeroSection } from "@/components/bookings/hero-section";
import NewsletterSection from "@/components/home/newsletter-section";
import { ReviewsSection } from "@/components/home/reviews-section";

export default function BookingsPage() {
  return (
    <div>
      <BookingsHeroSection />
      <ReviewsSection />
      <NewsletterSection />
    </div>
  );
}
