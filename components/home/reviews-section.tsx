"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const reviews = [
  {
    id: 1273642,
    name: "James Okafor",
    service: "Abuja to Lagos Ride",
    rating: 5,
    review:
      "MiladeTL made my interstate trip so smooth. The booking process was quick, and the ride was super comfortable. I arrived safely and on time!",
    avatar: "/images/milade_man_with_arms_crossed.png",
    bgColor: "bg-red-500",
  },

  {
    id: 366255243,
    name: "Amaka E.",
    service: "Bus Rental for Wedding",
    rating: 5,
    review: "Clean, spacious bus and the driver was very professional.",
    avatar: "/images/milade_african_woman_crossed.png",
    bgColor: "bg-yellow-500",
  },
  //   {
  //     id: 439033535,
  //     name: "Sarah Johnson",
  //     service: "Airport Transfer",
  //     rating: 5,
  //     review:
  //       "Punctual pickup and smooth ride to the airport. Driver was courteous and the vehicle was clean and comfortable.",
  //     avatar: "/placeholder.svg?height=120&width=120",
  //     bgColor: "bg-blue-500",
  //   },
  {
    id: 210298,
    name: "David King",
    service: "Charter Service (Executive Ride)",
    rating: 5,
    review:
      "Very professional service. I booked a charter ride for my business meeting and everything went smoothly. Top-notch experience.",
    avatar: "/images/milade-smiley-male_1.png",
    bgColor: "bg-gray-400",
  },
  //   {
  //     id: 6,
  //     name: "Fatima Al-Rashid",
  //     service: "City Tour",
  //     rating: 5,
  //     review:
  //       "Amazing experience exploring the city. The driver was knowledgeable and made great recommendations.",
  //     avatar: "/placeholder.svg?height=120&width=120",
  //     bgColor: "bg-green-500",
  //   },
];

export function ReviewsSection() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);

  const goToPrevious = () => {
    api?.scrollPrev();
  };

  const goToNext = () => {
    api?.scrollNext();
  };

  return (
    <section className='font-candara bg-white flex flex-col items-center justify-center'>
      <div className='milade-container py-10 md:py-16 relative'>
        {/* Section Title */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900'>
            <span className='text-milade-shade'>Reviews</span> from our Users
          </h2>
        </div>

        {/* Carousel */}
        <div className='mt-12'>
          <Carousel
            setApi={setApi}
            className='w-full'
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className='-ml-2 md:-ml-4 items-stretch'>
              {reviews.map((review) => (
                <CarouselItem
                  key={review.id}
                  className='pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3'
                >
                  <div className='p-1 flex flex-col w-full'>
                    <ReviewCard review={review} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Controls */}
        <div className='flex items-center justify-end mt-8'>
          {/* Navigation Arrows - Mobile */}
          <div className='flex space-x-2'>
            <Button
              variant='outline'
              size='icon'
              onClick={goToPrevious}
              className='rounded-full border-gray-300 hover:border-gray-400 bg-transparent'
            >
              <ChevronLeft className='h-4 w-4' />
            </Button>
            <Button
              variant='default'
              size='icon'
              onClick={goToNext}
              className='rounded-full bg-milade-shade hover:bg-green-700'
            >
              <ChevronRight className='h-4 w-4 text-white' />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <Card className='rounded-3xl h-full shadow-sm hover:shadow-md transition-shadow duration-300 mt-[228px] grow min-h-[246px]'>
      <CardContent className='p-6 h-full pt-16 text-center relative'>
        <div className='absolute -top-[170px] left-1/2 transform -translate-x-1/2'>
          <div className='relative w-[228px] h-[228px]'>
            <div
              className={`absolute inset-0 rounded-full ${review.bgColor}`}
            />
            <div className='relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg'>
              <Image
                src={review.avatar || "/placeholder.svg"}
                alt={review.name}
                fill
                className='object-cover'
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <h3 className='text-xl font-bold text-gray-900 mb-2'>{review.name}</h3>

        {/* Rating */}
        <div className='flex justify-center mb-3'>
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className='w-5 h-5 fill-yellow-400 text-yellow-400' />
          ))}
        </div>

        {/* Service */}
        <h4 className='text-lg font-semibold text-gray-800 mb-4'>
          {review.service}
        </h4>

        {/* Review Text */}
        <p className='text-gray-600 leading-relaxed'>{review.review}</p>
      </CardContent>
    </Card>
  );
}
