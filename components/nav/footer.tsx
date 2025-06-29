import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { MiladeLogo } from "../shared/icons";

// Custom TikTok icon since it's not in Lucide
const TikTokIcon = () => (
  <svg viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
    <path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z' />
  </svg>
);

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of services" },
  { href: "/security", label: "Security" },
];

export function Footer() {
  const serviceLinks = [
    { href: "/car-rental", label: "Car Rental" },
    { href: "/bus-rental", label: "Bus Rental" },
    { href: "/logistics", label: "Logistics" },
    { href: "/charter-services", label: "Charter Services" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: TikTokIcon, href: "https://tiktok.com", label: "TikTok" },
  ];

  return (
    <footer className='flex flex-col items-center justify-center font-candara'>
      <div className='milade-container py-12 '>
        {/* Desktop Layout */}
        <div className='hidden lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start'>
          {/* Left Section - Brand Card */}
          <div className='lg:col-span-4 max-w-[269px]'>
            <div className='bg-[#45A96E] rounded-3xl p-8 text-white shadow-lg'>
              <div className='flex items-center space-x-3 mb-6'>
                <div className='flex items-center justify-center'>
                  <Link href='/' className='flex items-center'>
                    <MiladeLogo />
                  </Link>
                </div>
                <span className='text-2xl font-bold'>Milade</span>
              </div>
              <p className='text-green-100'>©2024 MiladeTI Tech.</p>
            </div>

            {/* Social Media Icons */}
            <div className='flex space-x-3 mt-6'>
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

          {/* Right Section - Links */}
          <div className='lg:col-span-8 lg:pl-8'>
            <div className='grid grid-cols-3 gap-8'>
              {/* Company Links */}
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                  Company
                </h3>
                <ul className='space-y-3'>
                  {companyLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className='text-gray-600 hover:text-green-600 transition-colors'
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Links */}
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                  Services
                </h3>
                <ul className='space-y-3'>
                  {serviceLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className='text-gray-600 hover:text-green-600 transition-colors'
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                  Contact Us
                </h3>
                <div className='space-y-3'>
                  <Link
                    href='mailto:Support@miladetl.com'
                    className='block text-gray-600 hover:text-green-600 transition-colors'
                  >
                    Support@miladetl.com
                  </Link>
                  <Link
                    href='https://wa.me/234705342743'
                    className='block text-gray-600 hover:text-green-600 transition-colors'
                  >
                    WhatsApp +234705342743
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className='lg:hidden space-y-8'>
          {/* Brand Card */}
          <div className='bg-[#45A96E] rounded-3xl p-6 text-white shadow-lg text-center'>
            <div className='flex items-center justify-center space-x-3 mb-4'>
              <div className=' flex items-center justify-center'>
                <MiladeLogo />
              </div>
              <div className='text-left'>
                <div className='text-xl font-bold'>MILADE TAXICAB</div>
                <div className='text-xl font-bold'>& LOGISTICS</div>
              </div>
            </div>
            <p className='text-green-100'>©2024 MiladeTI Tech.</p>
          </div>

          {/* Links Grid */}
          <div className='grid grid-cols-2 gap-8'>
            {/* Company Links */}
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                Company
              </h3>
              <ul className='space-y-3'>
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='text-gray-600 hover:text-green-600 transition-colors'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products/Services Links */}
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                Products
              </h3>
              <ul className='space-y-3'>
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='text-gray-600 hover:text-green-600 transition-colors'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold text-gray-900 mb-4'>
              Contact Us
            </h3>
            <div className='space-y-3'>
              <Link
                href='mailto:Support@miladetl.com'
                className='block text-gray-600 hover:text-green-600 transition-colors'
              >
                Support@miladetl.com
              </Link>
              <Link
                href='https://wa.me/234705464352'
                className='block text-gray-600 hover:text-green-600 transition-colors'
              >
                WhatsApp +234705464352
              </Link>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className='flex justify-center space-x-3'>
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
      </div>
    </footer>
  );
}
