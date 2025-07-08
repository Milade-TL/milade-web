"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

const faqData = [
  {
    id: "item-1",
    question: "Can I book a ride and travel same day?",
    answer:
      "Yes, you can book a ride for the same day. We offer instant booking for immediate travel needs. However, availability may vary depending on your location and the time of booking. We recommend booking at least 30 minutes in advance for better availability.",
  },
  {
    id: "item-2",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, PayPal, Apple Pay, Google Pay, and cash payments. You can securely save your preferred payment method in your account for faster checkout.",
  },
  {
    id: "item-3",
    question: "How can I cancel or modify my booking?",
    answer:
      "You can cancel or modify your booking through our mobile app or website up to 1 hour before your scheduled ride time. Cancellations made within 1 hour may incur a small fee. To modify your booking, go to 'My Rides' section and select the booking you want to change.",
  },
  {
    id: "item-4",
    question: "Is there a luggage limit for rides?",
    answer:
      "Standard rides accommodate up to 2 medium-sized suitcases and 2 carry-on bags. For larger luggage or multiple bags, we recommend booking our XL or Premium vehicles. Additional luggage fees may apply for oversized items.",
  },
  {
    id: "item-5",
    question: "How do I track my ride?",
    answer:
      "Once your ride is confirmed, you'll receive real-time tracking information via our app. You can see your driver's location, estimated arrival time, and vehicle details. We also send SMS updates if you prefer text notifications.",
  },
  {
    id: "item-6",
    question: "What safety measures are in place?",
    answer:
      "All our drivers undergo thorough background checks and vehicle inspections. Our vehicles are equipped with GPS tracking, and we provide 24/7 customer support. We also offer ride sharing options and emergency contact features for added safety.",
  },
];

export function FAQSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className='font-candara flex flex-col items-center justify-center'>
      <div className='milade-container pt-20 pb-10 md:pb-16 md:pt-52'>
        {/* Header Section */}
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-bold text-milade-shade-90 mb-6'>
            Frequently Asked Questions(FAQS)
          </h1>
          {/* Search Bar */}
          <div className='relative max-w-md mx-auto'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
            <Input
              type='text'
              placeholder='Search for Class...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='pl-10 h-12 bg-gray-50 border-gray-200 rounded-lg'
            />
          </div>
        </div>
        {/* FAQ Accordion */}
        <div className='space-y-4'>
          {filteredFAQs.length > 0 ? (
            <Accordion type='single' collapsible className='w-full'>
              {filteredFAQs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className='border-b border-gray-200 py-2'
                >
                  <AccordionTrigger className='text-left text-lg font-semibold text-milade-shade-90 hover:text-gray-700 py-4'>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className='text-gray-600 pb-4 pt-2 leading-relaxed'>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className='text-center py-8'>
              <p className='text-gray-500 text-lg'>
                No FAQs found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
