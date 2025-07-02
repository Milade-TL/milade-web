"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const services = [
  {
    id: 1,
    title: "Bus Rental",
    description:
      "When traveling together matters, rent a bus with ease and enjoy your trip in comfort.",
    image: "/images/milade_white_buses.png",
    href: "/bus-rental",
    alt: "Milade white buses parked in a garage",
  },
  {
    id: 2,
    title: "Car Rental",
    description:
      "From city runs to road trips? We've got the perfect car. Rent a ride that fits your lifestyle.",
    image: "/images/milade_car_with_google_map_navigation.png",
    href: "/car-rental",
    alt: "A Milade car with Google map navigation on the dashboard",
  },
  {
    id: 3,
    title: "Logistics",
    description:
      "From packages to pallets, your goods is our responsibility. We are safe and we deliver with speed and care.",
    image: "/images/milade_black-female-courier.png",
    href: "/logistics",
    alt: "A black woman courier delivering packages",
  },
  {
    id: 4,
    title: "Charter Services",
    description:
      "Premium charter services for your special events and corporate transportation needs.",
    image: "/images/milade_african_woman.jpeg",
    href: "/charter-services",
    alt: "A black woman sitting in a milade service car with dark glasses on",
  },
];

export function ServicesSection() {
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
    <section className='py-16 bg-white overflow-x-hidden'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Title - maintains normal spacing */}
        <div className='text-center mb-12 px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl lg:text-[2rem] font-bold text-black'>
            Browse other <span className='text-milade-shade-30'>Services</span>
          </h2>
        </div>

        {/* Carousel Container - left aligned, right overflow */}
        <div className='pl-4 sm:pl-6 lg:pl-8'>
          <Carousel
            setApi={setApi}
            className='w-full overflow-hidden'
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className='-ml-2 md:-ml-4'>
              {services.map((service, index) => (
                <CarouselItem
                  key={service.id}
                  className='pl-2 md:pl-4 basis-[85%] sm:basis-[70%] md:basis-[45%] lg:basis-[32%]'
                >
                  <div className='p-1'>
                    <Card
                      className={`overflow-hidden py-0 border-0 shadow-lg transition-all duration-500 ease-in-out ${
                        current === index
                          ? "scale-100 shadow-2xl ring-2 ring-milade-shade-20"
                          : "scale-90 hover:scale-100"
                      }`}
                    >
                      <div className='relative'>
                        {/* Service Image */}
                        <div className='relative h-48 md:h-56 lg:h-64 overflow-hidden'>
                          <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            fill
                            className='object-cover transition-transform duration-500 hover:scale-110'
                          />
                          {/* Service Label */}
                          <div className='absolute top-4 left-4'>
                            <span className='bg-milade-shade-30 text-white px-4 py-2 rounded-lg font-semibold text-sm'>
                              {service.title}
                            </span>
                          </div>
                        </div>

                        {/* Card Content */}
                        <CardContent className='md:p-6 p-4 bg-milade-shade-30 text-white'>
                          <p className='text-white/90 mb-3 md:mb-6 leading-relaxed'>
                            {service.description}
                          </p>
                          <Button
                            variant='secondary'
                            className='bg-white text-milade-shade hover:bg-gray-100 font-semibold'
                            asChild
                          >
                            <a href={service.href}>Explore</a>
                          </Button>
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows - Desktop Only */}
            <div className='hidden lg:block'>
              <CarouselPrevious className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-gray-200 shadow-lg' />
              <CarouselNext className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-gray-200 shadow-lg' />
            </div>
          </Carousel>

          {/* Dots Indicator */}
          <div className='flex justify-start mt-8 space-x-2'>
            {services.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-green-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
