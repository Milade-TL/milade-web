"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { BookingForm } from "../home/booking-form";
import { BookingResults } from "./booking-results";
import { SeatSelection } from "./seat-selection";
import { PassengerDetailsForm } from "./passenger-details-form";
import { TermsAndConditions } from "./terms-condtions";
import { BookingHeader } from "./booking-header";

export function BookingsHeroSection() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const step = searchParams.get("step") || "search";
  const isModifying = searchParams.get("modify") === "true";

  const bookingData = {
    from: searchParams.get("from") || "AKURE",
    to: searchParams.get("to") || "LAGOS",
    adults: Number.parseInt(searchParams.get("adults") || "1"),
    children: Number.parseInt(searchParams.get("children") || "2"),
    date: searchParams.get("date") || "2025-04-25",
    tripType: searchParams.get("tripType") || "local",
    journeyType: searchParams.get("journeyType") || "oneWay",
  };

  const handleModify = () => {
    const params = new URLSearchParams(searchParams);
    params.set("modify", "true");
    params.set("step", "search");
    router.push(`?${params.toString()}`);
  };

  const renderStep = () => {
    switch (step) {
      case "search":
        return (
          <div className='space-y-8 flex flex-col items-center'>
            <div className='flex justify-center milade-container  items-center'>
              <div className='flex justify-center items-center w-full shadow rounded-xl'>
                <BookingForm />
              </div>
            </div>
            {isModifying && <BookingResults />}
          </div>
        );
      case "seat":
        return <SeatSelection />;
      case "passenger":
        return <PassengerDetailsForm />;
      case "terms":
        return <TermsAndConditions />;
      default:
        return (
          <div className='space-y-8'>
            <BookingForm />
            <BookingResults />
          </div>
        );
    }
  };

  return (
    <section className='bg-[radial-gradient(ellipse_at_top,white_0%,#e6f4ec_50%,white_100%)]'>
      <div className='min-h-screen py-10 pt-20 md:py-16 md:pt-32'>
        <BookingHeader
          bookingData={bookingData}
          onModify={handleModify}
          showModify={step !== "search"}
        />
        <section className='pt-8 md:pt-12'>{renderStep()}</section>
      </div>
    </section>
  );
}
