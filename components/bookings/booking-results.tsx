"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Menu, Search } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const busResults = [
  {
    id: 1,
    route: "Akure to Lagos",
    busType: "HIACE - 1ST BUS",
    availableSeats: 12,
    duration: "5hours",
    terminal: "Isolo Terminal",
    adultPrice: 48925,
    childPrice: 38625,
    ac: "Available",
    departureTime: "6:00a.m",
    busFare: 38625,
    image: "/images/milade_green_bus_no_bg.png",
  },
  {
    id: 2,
    route: "Akure to Lagos",
    busType: "HIACE - 1ST BUS",
    availableSeats: 12,
    duration: "5hours",
    terminal: "Isolo Terminal",
    adultPrice: 48925,
    childPrice: 38625,
    ac: "Available",
    departureTime: "6:00a.m",
    busFare: 38625,
    image: "/images/milade_white_bus_no_bg.png",
  },
];

export function BookingResults() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSelectSeat = (busId: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("step", "seat");
    params.set("busId", busId.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <section className='flex justify-center items-center w-full'>
      <div className='space-y-6 milade-container max-w-6xl font-candara bg-white shadow rounded-xl pt-6'>
        <div className='flex justify-between items-center gap-4 w-full'>
          <Button
            variant='outline'
            className='bg-green-600 text-white hover:bg-green-700 gap-2'
          >
            <Filter className='w-4 h-4' />
            Filter
          </Button>

          <div className='relative flex-1 max-w-md'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
            <Input placeholder='Search for Class...' className='pl-10' />
          </div>

          <Button variant='outline' className='gap-2 bg-transparent'>
            Sort
            <Menu className='w-4 h-4' />
          </Button>
        </div>

        <div className='space-y-4 divide-y'>
          {busResults.map((bus) => (
            <div key={bus.id} className='overflow-hidden sm:py-6'>
              <div className='p-6'>
                <div className='flex gap-6'>
                  <div className='w-48 h-32 relative'>
                    <Image
                      src={bus.image || "/placeholder.svg"}
                      alt='Bus'
                      fill
                      className='object-cover rounded-lg'
                    />
                  </div>

                  <div className='flex-1 grid grid-cols-2 gap-6'>
                    <div className='space-y-3'>
                      <h3 className='text-lg font-semibold'>{bus.route}</h3>
                      <div className='space-y-1 text-sm sm:text-base'>
                        <p>
                          <span className='font-bold text-xl'>Bus Type :</span>{" "}
                          {bus.busType}
                        </p>
                        <p>
                          <span className='font-bold text-xl'>
                            Available Seats :
                          </span>{" "}
                          {bus.availableSeats} seats
                        </p>
                        <p>
                          <span className='font-bold text-xl'>
                            Estimated Duration :
                          </span>{" "}
                          {bus.duration}
                        </p>
                        <p>
                          <span className='font-bold text-xl'>
                            Terminal Location:
                          </span>{" "}
                          {bus.terminal}
                        </p>
                        <p>
                          <span className='font-bold text-xl'>Price :</span>{" "}
                          Adult ₦{bus.adultPrice.toLocaleString()} Child ₦
                          {bus.childPrice.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className='space-y-3'>
                      <div className='space-y-1 text-sm sm:text-base'>
                        <p>
                          <span className='font-bold text-xl'>A/C :</span>{" "}
                          {bus.ac}
                        </p>
                        <p>
                          <span className='font-bold text-xl'>
                            Departure Time :
                          </span>{" "}
                          {bus.departureTime}
                        </p>
                        <p>
                          <span className='font-bold text-xl'>Bus Fare :</span>{" "}
                          ₦{bus.busFare.toLocaleString()}
                        </p>
                      </div>
                      <Button
                        className='bg-milade-shade h-10 font-bold font-candara hover:bg-green-700 w-fit'
                        onClick={() => handleSelectSeat(bus.id)}
                      >
                        Select Seat
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
