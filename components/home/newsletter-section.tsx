"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail("");

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className='flex flex-col items-center justify-center font-candara bg-[radial-gradient(ellipse_at_top,white_0%,#e6f4ec_50%,white_100%)]'>
      <div className='milade-container py-10 md:py-16'>
        {/* Section Title */}
        <div className='text-center mb-12'>
          <h2 className='text-2xl md:text-[2rem]  font-bold text-black'>
            Stay-Up-To-Date On The Latest
          </h2>
        </div>

        {/* Newsletter Card */}
        <div className='bg-milade-shade-20 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl'>
          {/* Desktop Layout */}
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 lg:items-center'>
            {/* Left Content */}
            <div className='space-y-8 order-2 md:order-1'>
              <h3 className='md:text-2xl xl:text-3xl font-bold text-white leading-relaxed'>
                Sign up to receive news, updates, special events & more
              </h3>

              <form onSubmit={handleSubmit} className='space-y-4'>
                <Input
                  type='email'
                  placeholder='Enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full h-14 px-6 text-lg bg-transparent border-2 border-white text-white placeholder:text-green-200 focus:border-green-200 focus:ring-0'
                  required
                />
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full h-14 bg-milade-tint-10 cursor-pointer hover:bg-milade-tint text-white text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed focus:ring-white'
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>

              {isSubscribed && (
                <div className='text-green-200 font-medium'>
                  ✓ Successfully subscribed! Thank you for joining us.
                </div>
              )}
            </div>

            {/* Right Image */}
            <div className='flex order-1 md:order-2 justify-center lg:justify-end'>
              <div className='relative'>
                <Image
                  src='/images/milade_young_adult_travelling.png'
                  alt='Young milade adult leaning out of vehicle window'
                  width={350}
                  height={400}
                  className='rounded-2xl object-cover shadow-lg w-[280px] h-[300px] md:w-[350px] md:h-[400px]'
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
