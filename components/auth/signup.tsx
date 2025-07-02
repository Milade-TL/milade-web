"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MiladeLogo } from "../shared/icons";

const signupSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number"),
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name is too long"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  gender: z.string().min(1, "Please select your gender"),
  nextOfKin: z
    .string()
    .min(2, "Next of kin name must be at least 2 characters")
    .max(50, "Name is too long"),
});

type SignupFormData = z.infer<typeof signupSchema>;

export function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Signup data:", data);
      // Handle successful signup here
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className='w-full max-w-lg shadow-lg border-0'>
      <CardContent className='md:p-8 py-5 px-3'>
        {/* Logo */}
        <div className='text-center mb-8'>
          <div className='inline-flex items-center justify-center bg-milade-shade text-white px-6 py-3 rounded-2xl mb-6'>
            <div className=' flex items-center justify-center mr-3'>
              <Link href='/'>
                <MiladeLogo className='w-6 h-6' />
              </Link>
            </div>
            <span className='text-xl font-bold'>MILADE</span>
          </div>
          <h1 className='text-2xl font-semibold text-gray-900'>
            Create an Account
          </h1>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          {/* Phone Number */}
          <div className='space-y-2'>
            <Label htmlFor='phoneNumber' className='text-gray-700 font-medium'>
              Phone number
            </Label>
            <Input
              id='phoneNumber'
              type='tel'
              className='h-12 bg-gray-100 border-0 focus-ring-2 focus-visible:ring-milade-shade focus:ring-milade-shade'
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && (
              <p className='text-sm text-red-600'>
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* Full Name */}
          <div className='space-y-2'>
            <Label htmlFor='fullName' className='text-gray-700 font-medium'>
              Full Name
            </Label>
            <Input
              id='fullName'
              type='text'
              className='h-12 bg-gray-100 border-0 focus-ring-2 focus-visible:ring-milade-shade focus:ring-milade-shade'
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className='text-sm text-red-600'>{errors.fullName.message}</p>
            )}
          </div>

          {/* Email Address */}
          <div className='space-y-2'>
            <Label htmlFor='email' className='text-gray-700 font-medium'>
              Email Address
            </Label>
            <Input
              id='email'
              type='email'
              className='h-12 bg-gray-100 border-0 focus-ring-2 focus-visible:ring-milade-shade focus:ring-milade-shade'
              {...register("email")}
            />
            {errors.email && (
              <p className='text-sm text-red-600'>{errors.email.message}</p>
            )}
          </div>

          {/* Gender */}
          <div className='space-y-2 w-full'>
            <Label className='text-gray-700 font-medium'>Select Gender</Label>
            <Select onValueChange={(value) => setValue("gender", value)}>
              <SelectTrigger className='h-14 bg-gray-100 border-0 focus-ring-2 focus-visible:ring-milade-shade focus:ring-milade-shade w-full'>
                <SelectValue placeholder='Select Gender' />
              </SelectTrigger>
              <SelectContent className='w-full'>
                <SelectItem value='male'>Male</SelectItem>
                <SelectItem value='female'>Female</SelectItem>
                <SelectItem value='other'>Other</SelectItem>
                <SelectItem value='prefer-not-to-say'>
                  Prefer not to say
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.gender && (
              <p className='text-sm text-red-600'>{errors.gender.message}</p>
            )}
          </div>

          {/* Next of Kin */}
          <div className='space-y-2'>
            <Label htmlFor='nextOfKin' className='text-gray-700 font-medium'>
              Next of Kin Name
            </Label>
            <Input
              id='nextOfKin'
              type='text'
              className='h-12 bg-gray-100 border-0 focus-ring-2 focus-visible:ring-milade-shade focus:ring-milade-shade'
              {...register("nextOfKin")}
            />
            {errors.nextOfKin && (
              <p className='text-sm text-red-600'>{errors.nextOfKin.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type='submit'
            disabled={isLoading}
            className='w-full h-12 bg-milade-shade hover:bg-green-700 text-white font-semibold text-base'
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </Button>
        </form>

        {/* Footer Link */}
        <div className='mt-8 text-center'>
          <p className='text-gray-600'>
            Already have an account?{" "}
            <Link
              href='/login'
              className='text-milade-shade font-semibold hover:text-green-700'
            >
              Sign In
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
