"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MiladeLogo } from "../shared/icons";

const loginSchema = z.object({
  emailOrPhone: z
    .string()
    .min(1, "Email or phone number is required")
    .refine(
      (value) => {
        // Check if it's a valid email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Check if it's a valid phone number (basic validation)
        const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      },
      {
        message: "Please enter a valid email address or phone number",
      }
    ),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Login data:", data);
      // Handle successful login here
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className='w-full max-w-lg shadow-lg border-0'>
      <CardContent className='p-8'>
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
          <h1 className='text-2xl font-semibold text-gray-900'>Login</h1>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          {/* Email or Phone */}
          <div className='space-y-2'>
            <Label htmlFor='emailOrPhone' className='text-gray-700 font-medium'>
              Email or Phone number
            </Label>
            <Input
              id='emailOrPhone'
              type='text'
              className='h-12 bg-gray-100 focus:ring-2 focus:ring-milade-accent border-0 ring-milade-accent'
              {...register("emailOrPhone")}
            />
            {errors.emailOrPhone && (
              <p className='text-sm text-milade-error'>
                {errors.emailOrPhone.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className='space-y-2'>
            <Label htmlFor='password' className='text-gray-700 font-medium'>
              Password
            </Label>
            <div className='relative'>
              <Input
                id='password'
                type={showPassword ? "text" : "password"}
                className='h-12 bg-gray-100 border-0 focus:ring-2 focus:ring-milade-accent pr-12'
                {...register("password")}
              />
              <button
                type='button'
                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className='h-5 w-5' />
                ) : (
                  <Eye className='h-5 w-5' />
                )}
              </button>
            </div>
            {errors.password && (
              <p className='text-sm text-red-600'>{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type='submit'
            disabled={isLoading}
            className='w-full h-12 bg-milade-shade hover:bg-shade-milade-20 text-white font-semibold text-base cursor-pointer'
          >
            {isLoading ? "Signing in..." : "Continue"}
          </Button>
        </form>

        {/* Footer Links */}
        <div className='mt-8 text-center space-y-4'>
          <p className='text-gray-600'>
            Don&apos;t have an account?{" "}
            <Link
              href='/signup'
              className='text-milade-shade font-semibold hover:text-shade-milade-20'
            >
              Sign Up
            </Link>
          </p>
          <p className='text-gray-600'>
            Forgot Password?{" "}
            <Link
              href='/reset-password'
              className='text-milade-shade font-semibold hover:text-shade-milade-20'
            >
              Reset
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
