"use client";

import { Mail, Phone } from "lucide-react";
import Image from "next/image";

export function InquiriesSection() {
  //   const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className='min-h-screen w-full flex justify-center items-center flex-col relative  font-candara'>
      <div className='pt-10 pb-[100px] mb-[314px] md:mb-0 milade-container md:py-16 relative z-10'>
        <p className='text-center sm:text-2xl font-bold mx-auto max-w-[594px] mb-40 sm:mb-14'>
          Thank you for choosing Milade TL as your trusted transport partner.
          Our dedicated support team is always here to ensure your journey is
          smooth, safe, and stress-free — every step of the way.
        </p>

        <div className='w-full  relative isolate flex justify-end sm:pr-12'>
          <div className=' bg-gradient-to-br from-[#1FA2551A] via-10% to-[#045927] rounded-md md:rounded-2xl w-full md:w-[85%] h-[340px] md:h-[680px]'></div>
          <div className='absolute z-2 -top-12  md:top-0 right-0 left-0 bottom-0 flex flex-col md:flex-row gap-6 md:justify-between items-center'>
            <div>
              <Image
                width={568}
                height={368}
                src='/images/milade_representative.png'
                alt='Customer support representative'
                className='md:w-[568px] w-[248px] h-[166px] md:h-[368px] object-cover rounded-md md:rounded-2xl'
              />
            </div>
            <div
              className={`w-[90%] md:w-1/2 bg-white p-4 sm:p-6 md:p-10 max-h-[700px] rounded-md md:rounded-2xl`}
            >
              <div className='space-y-5 md:space-y-10'>
                {/* General Inquiries Section */}
                <section className='text-center'>
                  <h2 className='text-2xl md:text-4xl font-bold mb-4'>
                    General Inquiries
                  </h2>
                  <p className='text-gray-700 mb-4 md:mb-6'>
                    For general inquiries about MILADE, our services, or
                    partnerships,
                    <br />
                    don&apos;t hesitate to get in touch with us at
                  </p>
                  <div className='space-y-4 '>
                    <div className='flex items-center justify-center gap-3'>
                      <div className='md:w-10 md:h-10 w-8 h-8 bg-black rounded-full flex items-center justify-center'>
                        <Phone className='text-white w-4 h-4 md:h-5 md:w-5' />
                      </div>
                      <span className='text-xl font-medium'>
                        +234-490-9256-657
                      </span>
                    </div>
                    <div className='flex items-center justify-center gap-3'>
                      <div className='md:w-10 md:h-10 w-8 h-8 bg-black rounded-full flex items-center justify-center'>
                        <Mail className='text-white w-4 h-4 md:h-5 md:w-5' />
                      </div>
                      <span className='text-xl font-medium'>
                        Contact@milade.com
                      </span>
                    </div>
                  </div>
                </section>

                {/* Customer Support Section */}
                <section className='text-center'>
                  <h2 className='text-2xl md:text-4xl font-bold mb-4'>
                    Customer Support
                  </h2>
                  <p className='text-gray-700 mb-4 md:mb-6'>
                    Our customer support team assist you with technical issues,
                    <br />
                    account inquiries and other support-related questions.
                    <br />
                    You can reach our support:
                  </p>
                  <div className='space-y-4'>
                    <div className='flex items-center justify-center gap-3'>
                      <div className='md:w-10 md:h-10 w-8 h-8 bg-black rounded-full flex items-center justify-center'>
                        <Phone className='text-white w-4 h-4 md:h-5 md:w-5' />
                      </div>
                      <span className='md:text-xl font-medium'>
                        +234-490-9256-657
                      </span>
                    </div>
                    <div className='flex items-center justify-center gap-3'>
                      <div className='md:w-10 md:h-10 w-8 h-8 bg-black rounded-full flex items-center justify-center'>
                        <Mail className='text-white w-4 h-4 md:h-5 md:w-5' />
                      </div>
                      <span className='md:text-xl font-medium'>
                        Contact@milade.com
                      </span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
