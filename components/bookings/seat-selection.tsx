"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const seatLayout = [
  [
    { id: "1A", status: "available" },
    { id: "1B", status: "booked" },
    { id: "1C", status: "booked" },
    { id: "1D", status: "available" },
  ],
  [
    { id: "2A", status: "available" },
    { id: "2B", status: "booked" },
    { id: "2C", status: "booked" },
    { id: "2D", status: "available" },
  ],
  [
    { id: "3A", status: "booked" },
    { id: "3B", status: "booked" },
    { id: "3C", status: "booked" },
    { id: "3D", status: "available" },
  ],
];

export function SeatSelection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

  const handleBack = () => {
    const params = new URLSearchParams(searchParams);
    params.set("step", "search");
    params.delete("busId");
    router.push(`?${params.toString()}`);
  };

  const handleSeatSelect = (seatId: string, status: string) => {
    if (status === "available") {
      setSelectedSeat(seatId);
    }
  };

  const handleBookSeat = () => {
    if (selectedSeat) {
      const params = new URLSearchParams(searchParams);
      params.set("step", "passenger");
      params.set("selectedSeat", selectedSeat);
      router.push(`?${params.toString()}`);
    }
  };

  const getSeatColor = (seatId: string, status: string) => {
    if (selectedSeat === seatId) return "bg-yellow-400";
    if (status === "booked") return "bg-red-500";
    return "bg-[#E1DADA]";
  };

  return (
    <section className='flex flex-col items-center'>
      <div className='milade-container font-candara space-y-6'>
        <Button variant='ghost' onClick={handleBack} className='gap-2'>
          <ArrowLeft className='w-4 h-4' />
          Back
        </Button>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <Card>
            <CardHeader>
              <CardTitle className='text-center'>Front of Bus</CardTitle>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='bg-gray-200 text-center py-2 rounded'>Driver</div>

              <div className='space-y-3'>
                {seatLayout.map((row, rowIndex) => (
                  <div key={rowIndex} className='flex justify-center gap-5'>
                    {row.map((seat) => (
                      <button
                        key={seat.id}
                        onClick={() => handleSeatSelect(seat.id, seat.status)}
                        disabled={seat.status === "booked"}
                        className={`w-12 h-12 border-2 border-gray-400 rounded ${getSeatColor(
                          seat.id,
                          seat.status
                        )} ${
                          seat.status === "booked"
                            ? "cursor-not-allowed"
                            : "cursor-pointer hover:opacity-80"
                        }`}
                      />
                    ))}
                  </div>
                ))}
              </div>

              <div className='text-center text-sm font-medium'>Back of Bus</div>
            </CardContent>
          </Card>

          <div className='space-y-6'>
            <Card>
              <CardContent className='p-6'>
                <div className='space-y-4 flex flex-col md:flex-row md:items-center md:justify-between'>
                  <div className='flex flex-col items-center gap-4'>
                    <span className='font-medium'>Available</span>
                    <div className='w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded'></div>
                  </div>
                  <div className='flex flex-col items-center gap-4'>
                    <span className='font-medium'>Selected</span>
                    <div className='w-10 h-10 md:w-20 md:h-20 bg-yellow-400 rounded '></div>
                  </div>
                  <div className='flex flex-col items-center gap-4'>
                    <span className='font-medium'>Booked</span>
                    <div className='w-8 h-8 md:w-10 md:h-10 bg-red-500 rounded'></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {selectedSeat && (
              <Card>
                <CardContent className='p-6 space-y-4'>
                  <div className='p-3 bg-green-50 border border-green-200 rounded'>
                    {"You've selected: Seat " +
                      selectedSeat +
                      " (Window seat, extra legroom)"}
                  </div>
                  <Button
                    onClick={handleBookSeat}
                    className='w-full bg-green-600 hover:bg-green-700'
                  >
                    Book this seat
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
