"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const passengerSchema = z.object({
  adultName: z.string().min(2, "Full name is required"),
  adultGender: z.string().min(1, "Please select gender"),
  adultEmail: z.string().email("Please enter a valid email"),
  adultPhone: z.string().min(10, "Please enter a valid phone number"),
  nextOfKinName: z.string().min(2, "Next of kin name is required"),
  nextOfKinPhone: z.string().min(10, "Please enter a valid phone number"),
  childName: z.string().optional(),
  childGender: z.string().optional(),
  childAge: z.string().optional(),
  childPhone: z.string().optional(),
});

export function PassengerDetailsForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const form = useForm<z.infer<typeof passengerSchema>>({
    resolver: zodResolver(passengerSchema),
    defaultValues: {
      adultName: "",
      adultGender: "",
      adultEmail: "",
      adultPhone: "",
      nextOfKinName: "",
      nextOfKinPhone: "",
      childName: "",
      childGender: "",
      childAge: "",
      childPhone: "",
    },
  });

  const handleCancel = () => {
    const params = new URLSearchParams(searchParams);
    params.set("step", "seat");
    router.push(`?${params.toString()}`);
  };

  function onSubmit(values: z.infer<typeof passengerSchema>) {
    console.log(values);
    const params = new URLSearchParams(searchParams);
    params.set("step", "terms");
    router.push(`?${params.toString()}`);
  }

  return (
    <section className='flex flex-col items-center justify-center'>
      <div className='milade-container font-candara '>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8'
          >
            {/* LEFT SIDE (adult & child cards) */}
            <div className='lg:col-span-2 space-y-8'>
              {/* Adult card stays unchanged (remove its nested <Form> tags) */}
              <Card>
                <CardHeader>
                  <CardTitle>Adult Passenger Details</CardTitle>
                </CardHeader>
                <CardContent className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <FormField
                      control={form.control}
                      name='adultName'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder='eg: John Doe' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='adultGender'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gender</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder='Select Gender' />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value='male'>Male</SelectItem>
                              <SelectItem value='female'>Female</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <FormField
                      control={form.control}
                      name='adultEmail'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder='eg: john@email.com'
                              type='email'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='nextOfKinName'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name of Next of Kin</FormLabel>
                          <FormControl>
                            <Input placeholder='eg: John Doe' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <FormField
                      control={form.control}
                      name='adultPhone'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <div className='flex'>
                            <div className='bg-gray-100 px-3 py-2 border border-r-0 rounded-l-md text-sm'>
                              +234
                            </div>
                            <FormControl>
                              <Input
                                placeholder='543210987'
                                className='rounded-l-none'
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='nextOfKinPhone'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Next of Kin Phone Number</FormLabel>
                          <div className='flex'>
                            <div className='bg-gray-100 px-3 py-2 border border-r-0 rounded-l-md text-sm'>
                              +234
                            </div>
                            <FormControl>
                              <Input
                                placeholder='543210987'
                                className='rounded-l-none'
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Child card (its FormField items now live inside the same provider) */}
              <Card>
                <CardHeader>
                  <CardTitle>Child Passenger Details</CardTitle>
                </CardHeader>
                <CardContent className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <FormField
                      control={form.control}
                      name='childName'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder='eg: John Doe' {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='childGender'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gender</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder='Select Gender' />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value='male'>Male</SelectItem>
                              <SelectItem value='female'>Female</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='childAge'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age</FormLabel>
                          <FormControl>
                            <Input
                              placeholder='eg: john@email.com'
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='childPhone'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <div className='flex'>
                            <div className='bg-gray-100 px-3 py-2 border border-r-0 rounded-l-md text-sm'>
                              +234
                            </div>
                            <FormControl>
                              <Input
                                placeholder='543210987'
                                className='rounded-l-none'
                                {...field}
                              />
                            </FormControl>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Footer buttons */}
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
                  Confirm
                </Button>
              </div>
            </div>

            {/* RIGHT SIDE (summary & coupon) */}
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
          </form>
        </Form>
      </div>
    </section>
  );
}
