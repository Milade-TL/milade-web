import Image from "next/image";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Custom TikTok icon since it's not in Lucide
const TikTokIcon = () => (
  <svg viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
    <path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z' />
  </svg>
);

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: TikTokIcon, href: "https://tiktok.com", label: "TikTok" },
];

export function AboutContactUs() {
  return (
    <section className='flex relative flex-col items-center justify-center font-candara min-h-[100svh]'>
      <Image alt='' src='/images/milade_map_sketch.png' fill={true} />

      <div className='milade-container py-10 md:py-16 relative'>
        <div className='grid grid-cols-1 justify-items-center lg:grid-cols-2 gap-5'>
          {/* Visit Us Card */}
          <Card className='bg-white shadow-lg border-0 rounded-2xl max-w-[300px] sm:max-w-[432px] w-full'>
            <CardContent className='p-5 sm:p-8 lg:p-12 text-center'>
              <h2 className='text-3xl lg:text-4xl font-bold text-milade-shade-40 mb-8'>
                Visit Us
              </h2>

              <div className='space-y-6 text-milade-shade-40-80 font-semibold'>
                <p className='text-lg lg:text-xl leading-relaxed'>
                  You&apos;re welcome to visit us during our business hours.
                </p>

                <div className='space-y-2'>
                  <p className='text-lg lg:text-xl font-semibold'>
                    <span className='font-bold'>Office hours :</span> Monday to
                    Friday
                  </p>
                  <p className='text-lg lg:text-xl font-semibold'>
                    8:00a.m to 5:00p.m
                  </p>
                </div>

                <div className='pt-4'>
                  <p className='text-lg lg:text-xl leading-relaxed'>
                    <span className='font-bold'>Our address is:</span> No. 4
                    Akinleye Martins Street, Off NG Airways Akure, Ondo State.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Connect With Us Card */}
          <Card className='bg-white shadow-lg border-0 rounded-2xl max-w-[300px] sm:max-w-[432px] w-full'>
            <CardContent className='p-8 lg:p-12 text-center'>
              <h2 className='text-3xl lg:text-4xl font-bold text-milade-shade-40 mb-8'>
                Connect With Us
              </h2>

              <div className='space-y-8'>
                <p className='text-lg lg:text-xl text-milade-shade-40-80 font-semibold leading-relaxed'>
                  Stay updated with the latest MILADE news, updates, and
                  educational insights by connecting with us on social media:
                </p>

                {/* Social Media Icons */}
                <div className='flex w-full items-center justify-center space-x-3 mt-6'>
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <Link
                        key={social.label}
                        href={social.href}
                        className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-gray-700 hover:bg-green-200 transition-colors'
                        aria-label={social.label}
                      >
                        <IconComponent />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
