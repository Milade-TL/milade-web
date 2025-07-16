"use client";

import { Bus, User, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookingHeaderProps {
  bookingData: {
    from: string;
    to: string;
    adults: number;
    children: number;
    date: string;
  };
  onModify: () => void;
  showModify: boolean;
}

export function BookingHeader({
  bookingData,
  onModify,
  showModify,
}: BookingHeaderProps) {
  return (
    <header className='flex justify-center items-center'>
      <div className='milade-container text-white py-4 bg-milade-shade-50  flex items-center justify-between '>
        <div className='flex items-center gap-6'>
          <div className='flex items-center gap-2'>
            <Bus className='w-5 h-5' />
            <span className='font-semibold'>
              {bookingData.from} → {bookingData.to}
            </span>
          </div>

          <div className='flex items-center gap-2'>
            <User className='w-4 h-4' />
            <span>ADULT: {bookingData.adults}</span>
          </div>

          <div className='flex items-center gap-2'>
            <Users className='w-4 h-4' />
            <span>NO OF CHILDREN: {bookingData.children}</span>
          </div>

          <div className='flex items-center gap-2'>
            <Calendar className='w-4 h-4' />
            <span>{bookingData.date}</span>
          </div>
        </div>

        {!showModify && (
          <Button
            variant='outline'
            className='bg-transparent border-white text-white hover:bg-white hover:text-green-700'
            onClick={onModify}
          >
            Modify
          </Button>
        )}
      </div>
    </header>
  );
}
