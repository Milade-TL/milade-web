"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const formSchema = z.object({
  tripType: z.enum(["local", "international"]),
  flightType: z.enum(["one-way", "round-trip"]),
  departure1: z.string().min(1, "Please select departure location"),
  departure2: z.string().min(1, "Please select departure location"),
  departure3: z.string().min(1, "Please select departure location"),
  passengers: z.object({
    adults: z.number().min(1, "At least 1 adult required"),
    children: z.number().min(0),
  }),
});

const departureOptions = [
  { value: "nyc", label: "New York City (NYC)" },
  { value: "lax", label: "Los Angeles (LAX)" },
  { value: "chi", label: "Chicago (CHI)" },
  { value: "mia", label: "Miami (MIA)" },
  { value: "sea", label: "Seattle (SEA)" },
];

export function BookingForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tripType: "local",
      flightType: "one-way",
      departure1: "",
      departure2: "",
      departure3: "",
      passengers: {
        adults: 1,
        children: 0,
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
  }

  return (
    <div className='w-full  p-6 bg-white shadow-md md:shadow-none rounded-2xl'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          {/* Trip Type Tabs */}
          <FormField
            control={form.control}
            name='tripType'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Tabs value={field.value} onValueChange={field.onChange}>
                    <TabsList className='grid w-full max-w-md grid-cols-2 bg-green-50'>
                      <TabsTrigger
                        value='local'
                        className='data-[state=active]:bg-white data-[state=active]:text-black'
                      >
                        Local
                      </TabsTrigger>
                      <TabsTrigger
                        value='international'
                        className='data-[state=active]:bg-white data-[state=active]:text-black'
                      >
                        International
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Flight Type Radio Group */}
          <FormField
            control={form.control}
            name='flightType'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className='flex items-center space-x-6'
                  >
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem
                        value='one-way'
                        id='one-way'
                        className='border-milade-shade text-milade-shade'
                      />
                      <FormLabel
                        htmlFor='one-way'
                        className='font-normal text-black'
                      >
                        One Way
                      </FormLabel>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem
                        value='round-trip'
                        id='round-trip'
                        className='border-milade-shade text-milade-shade'
                      />
                      <FormLabel
                        htmlFor='round-trip'
                        className='font-normal text-black'
                      >
                        Round Trip
                      </FormLabel>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Departure Fields Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {/* First Departure */}
            <FormField
              control={form.control}
              name='departure1'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-gray-700 font-medium'>
                    Departure
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className='h-12 w-full text-[#303030]'>
                        <SelectValue
                          placeholder='Select Departure'
                          className='text-[#303030]'
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {departureOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Second Departure */}
            <FormField
              control={form.control}
              name='departure2'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-gray-700 font-medium'>
                    Departure
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className='h-12 w-full text-[#303030]'>
                        <SelectValue
                          placeholder='Select Departure'
                          className='text-[#303030]'
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {departureOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          className='text-[#303030]'
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Third Departure */}
            <FormField
              control={form.control}
              name='departure3'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-gray-700 font-medium'>
                    Departure
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className='h-12 w-full text-[#303030]'>
                        <SelectValue
                          placeholder='Select Departure'
                          className='text-[#303030]'
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {departureOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Passengers */}
            <FormField
              control={form.control}
              name='passengers'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-gray-700 font-medium'>
                    Departure
                  </FormLabel>
                  <Select
                    value={`${field.value.adults}-${field.value.children}`}
                    onValueChange={(value) => {
                      const [adults, children] = value.split("-").map(Number);
                      field.onChange({ adults, children });
                    }}
                  >
                    <FormControl>
                      <SelectTrigger className='h-12 w-full text-[#303030]'>
                        <SelectValue>{`Adult: ${field.value.adults}    Children: ${field.value.children}`}</SelectValue>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='1-0'>Adult: 1 Children: 0</SelectItem>
                      <SelectItem value='1-1'>Adult: 1 Children: 1</SelectItem>
                      <SelectItem value='1-2'>Adult: 1 Children: 2</SelectItem>
                      <SelectItem value='2-0'>Adult: 2 Children: 0</SelectItem>
                      <SelectItem value='2-1'>Adult: 2 Children: 1</SelectItem>
                      <SelectItem value='2-2'>Adult: 2 Children: 2</SelectItem>
                      <SelectItem value='3-0'>Adult: 3 Children: 0</SelectItem>
                      <SelectItem value='4-0'>Adult: 4 Children: 0</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Search Button */}
          <div className='pt-4'>
            <Button
              type='submit'
              className='bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium'
            >
              Search Availability
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
