"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  {
    id: 1,
    title: "Car Rentals",
    description:
      "Need a car for the day, weekend, or a business trip? Rent from our fleet of well-maintained vehicles.",
    image: "/images/milade_car_with_google_map_navigation.png",
    features: [
      {
        title: "Range of Vehicles",
        description:
          "Choose from sedans, SUVs, luxury options and more to fit your needs.",
      },
      {
        title: "Flexible Pricing",
        description:
          "Hourly, daily, and weekly rates available to accommodate any budget.",
      },
      {
        title: "Multiple Locations",
        description:
          "Available in major cities with convenient pickup and drop-off points.",
      },
    ],
    buttonText: "Explore Car Rental",
    href: "/services/car-rental",
  },
  {
    id: 2,
    title: "Bus Rentals",
    description:
      "Perfect for group travel, events, and corporate transportation with our modern fleet of buses.",
    image: "/images/milade_white_buses.png",
    features: [
      {
        title: "Group Capacity",
        description:
          "Buses available for 15-50 passengers with comfortable seating arrangements.",
      },
      {
        title: "Professional Drivers",
        description:
          "Experienced and licensed drivers ensure safe and smooth journeys.",
      },
      {
        title: "Event Packages",
        description:
          "Special rates for weddings, corporate events, and group outings.",
      },
    ],
    buttonText: "Explore Bus Rental",
    href: "/services/bus-rental",
  },
  {
    id: 3,
    title: "Logistics Services",
    description:
      "Reliable cargo and package delivery services for businesses and individuals across the region.",
    image: "/images/milade_black-female-courier.png",
    features: [
      {
        title: "Same-Day Delivery",
        description:
          "Express delivery options for urgent packages and documents.",
      },
      {
        title: "Cargo Handling",
        description:
          "Professional handling of goods from small packages to large cargo.",
      },
      {
        title: "Tracking System",
        description: "Real-time tracking and updates on your shipment status.",
      },
    ],
    buttonText: "Explore Logistics",
    href: "/services/logistics",
  },
  {
    id: 4,
    title: "Charter Services",
    description:
      "Premium charter services for executive travel, special events, and personalized transportation.",
    image: "/images/milade_african_woman.jpeg",
    features: [
      {
        title: "Executive Vehicles",
        description:
          "Luxury cars and premium vehicles for business and VIP travel.",
      },
      {
        title: "Custom Routes",
        description:
          "Personalized itineraries and flexible scheduling to meet your needs.",
      },
      {
        title: "Professional Service",
        description:
          "White-glove service with experienced chauffeurs and concierge support.",
      },
    ],
    buttonText: "Explore Charter Services",
    href: "/services/charter",
  },
];

export function ServicesCarouselSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className='flex flex-col justify-center items-center font-candara bg-[radial-gradient(ellipse_at_top,white_0%,#e6f4ec_50%,white_100%)]'>
      <div className='milade-container py-10 md:py-16'>
        {/* Section Title */}
        <div className='text-center mb-12'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 max-w-2xl mx-auto leading-tight'>
            Choose from the range of our services options tailored to your
            needs.
          </h2>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          className='w-full'
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {services.map((service) => (
              <CarouselItem key={service.id}>
                <div className='p-1'>
                  <div className='border-0 '>
                    <div className='lg:p-12'>
                      {/* Single responsive layout using CSS Grid */}
                      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center'>
                        {/* Image - appears first on mobile, second on desktop */}
                        <div className='order-1 lg:order-2'>
                          <div className='relative rounded-2xl overflow-hidden border-4 border-milade-shade shadow-lg'>
                            <Image
                              src={service.image || "/placeholder.svg"}
                              alt={service.title}
                              width={543}
                              height={412}
                              className='object-cover w-full h-[250px] lg:h-[300px] xl:h-[410px]'
                            />
                          </div>
                        </div>

                        {/* Content - appears second on mobile, first on desktop */}
                        <div className='order-2 lg:order-1 space-y-4 lg:space-y-6'>
                          <div>
                            <h3 className='text-xl text-center md:text-left lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3'>
                              {service.title}
                            </h3>
                            <p className='text-gray-600 text-sm lg:text-base leading-relaxed'>
                              {service.description}
                            </p>
                          </div>

                          {/* Features */}
                          <div className='space-y-3 lg:space-y-4'>
                            {service.features.map((feature, index) => (
                              <div
                                key={index}
                                className='flex items-start space-x-3'
                              >
                                <div className='flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 bg-milade-shade-50 rounded-full flex items-center justify-center mt-0.5'>
                                  <Check className='w-3 h-3 lg:w-4 lg:h-4 text-white' />
                                </div>
                                <div>
                                  <h4 className='font-semibold text-gray-900 text-sm lg:text-base'>
                                    {feature.title}
                                  </h4>
                                  <p className='text-gray-600 text-xs lg:text-sm'>
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <Button
                            asChild
                            className='w-full lg:w-auto bg-milade-shade hover:bg-green-700 text-white font-semibold px-6 py-3'
                          >
                            <Link href={service.href}>
                              {service.buttonText}
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows - Desktop Only */}
          {/* <div className='hidden lg:block'>
            <CarouselPrevious className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-gray-200 shadow-lg' />
            <CarouselNext className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-gray-200 shadow-lg' />
          </div> */}
        </Carousel>

        {/* Dots Indicator */}
        <div className='flex justify-center mt-8 space-x-2'>
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-milade-shade scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
