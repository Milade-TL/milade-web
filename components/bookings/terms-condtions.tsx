"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const termsSchema = z.object({
  departureTerminal: z
    .boolean()
    .refine(
      (val) => val === true,
      "You must agree to the departure terminal terms"
    ),
  luggageTerms: z
    .boolean()
    .refine((val) => val === true, "You must agree to the luggage terms"),
  generalTerms: z
    .boolean()
    .refine(
      (val) => val === true,
      "You must agree to the general terms and conditions"
    ),
  couponCode: z.string().optional(),
});

export function TermsAndConditions() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const form = useForm<z.infer<typeof termsSchema>>({
    resolver: zodResolver(termsSchema),
    defaultValues: {
      departureTerminal: false,
      luggageTerms: false,
      generalTerms: false,
      couponCode: "",
    },
  });

  const handleCancel = () => {
    const params = new URLSearchParams(searchParams);
    params.set("step", "passenger");
    router.push(`?${params.toString()}`);
  };

  function onSubmit(values: z.infer<typeof termsSchema>) {
    console.log(values);
    // Handle form submission - could redirect to payment or confirmation
    alert("Booking confirmed!");
  }

  return (
    <section className='flex flex-col items-center font-candara'>
      <div className='milade-container font-candara grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='lg:col-span-2'>
          <Card>
            <CardHeader>
              <CardTitle>Terms And Condition</CardTitle>
            </CardHeader>
            <CardContent className='space-y-6'>
              <p className='text-gray-600'>
                Need a car for the day, weekend, or a business trip? Rent from
                our fleet of well-maintained vehicles.
              </p>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-6'
                >
                  <FormField
                    control={form.control}
                    name='departureTerminal'
                    render={({ field }) => (
                      <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className='space-y-1 leading-none'>
                          <FormLabel className='text-sm font-normal'>
                            You must be at the departure terminal at least 30
                            minutes before the bus departure time, else you lose
                            your right to your selected seat(s)
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='luggageTerms'
                    render={({ field }) => (
                      <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className='space-y-1 leading-none'>
                          <FormLabel className='text-sm font-normal'>
                            Hourly, daily, and weekly rates available to
                            accommodate luggage that exceeds the standard 10kg
                            free luggage limit is classified as excess luggage.
                            Excess luggage attracts charges based on the
                            prevailing excess luggage rates per kg. If there is
                            no available space in the vehicle, the excess
                            luggage may be carried as unaccompanied baggage.
                            Items that are larger than the standard size limits
                            will also be considered as unaccompanied luggage and
                            should be sent through GUO logistics at any budget.
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='generalTerms'
                    render={({ field }) => (
                      <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className='space-y-1 leading-none'>
                          <FormLabel className='text-sm font-normal'>
                            Agree to terms and conditions
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <div className='pt-4'>
                    <p className='font-medium mb-4'>Terms and Condition</p>
                    <div className='flex gap-4'>
                      <Button
                        type='button'
                        variant='outline'
                        className='border-red-500 text-red-500 hover:bg-red-50 bg-transparent'
                        onClick={handleCancel}
                      >
                        Cancel
                      </Button>
                      <Button
                        type='submit'
                        className='bg-green-600 hover:bg-green-700'
                      >
                        Proceed to Pay
                      </Button>
                    </div>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        <div className='space-y-6'>
          <Card>
            <CardContent className='p-6 space-y-4'>
              <div className='flex justify-between'>
                <span>Departure Trip</span>
                <span className='font-semibold'>₦38,625</span>
              </div>
              <div className='flex justify-between'>
                <span>Adult</span>
                <span className='font-semibold'>₦38,625</span>
              </div>
              <div className='flex justify-between'>
                <span>Child</span>
                <span className='font-semibold'>₦38,625</span>
              </div>
              <div className='bg-green-700 text-white p-3 rounded flex justify-between items-center'>
                <span className='font-semibold'>Total</span>
                <span className='font-bold text-lg'>₦38,625</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6 space-y-4'>
              <Input placeholder='Enter code' className='w-full' />
              <Button className='w-full bg-green-800 hover:bg-green-900'>
                Apply Coupon
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
