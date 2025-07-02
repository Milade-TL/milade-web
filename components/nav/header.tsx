"use client";

import { ChevronDown, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MiladeLogo, UserBoldIcon } from "../shared/icons";
import { HeaderMobile } from "./header-mobile";

// Mock user data - replace with your actual user data
const mockUser = {
  name: "ROSEMARY WILLIAMS",
  email: "rosemary@example.com",
  avatar: "/placeholder.svg?height=40&width=40",
};

const navigationLinks = [
  { href: "/booking", label: "Booking" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/faqs", label: "FAQs" },
];
export function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Toggle this for testing
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <header
      data-isvisible={isVisible}
      className='bg-milade-shade text-white flex flex-col justify-center items-center font-candara h-[66px] lg:h-[100px] data-[isvisible=true]:translate-y-0 -translate-y-full transition-transform duration-300 ease-in-out fixed top-0 left-0 right-0 z-50'
    >
      <nav className='milade-container'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/' className='flex items-center'>
              <MiladeLogo className='lg:w-20 lg:h-20 w-10 h-10' />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:block'>
            <div className='ml-10 flex items-baseline space-x-8'>
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='text-white hover:text-white/80 px-3 py-2 text-sm lg:text-base font-bold transition-colors'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Auth Section */}
          <div className='hidden lg:block'>
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant='ghost'
                    className='flex items-center space-x-2 text-white hover:text-green-200 hover:bg-green-700'
                  >
                    <Avatar className='h-8 w-8 bg-transparent'>
                      <AvatarImage
                        src={mockUser.avatar || "/placeholder.svg"}
                        alt={mockUser.name}
                      />
                      <AvatarFallback className='text-white bg-transparent'>
                        <UserBoldIcon />
                      </AvatarFallback>
                    </Avatar>
                    <span className='text-sm font-medium'>{mockUser.name}</span>
                    <ChevronDown className='h-4 w-4' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-56'>
                  <DropdownMenuItem>
                    <User className='mr-2 h-4 w-4' />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>My Bookings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setIsAuthenticated(false)}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className='flex items-center space-x-4'>
                <Button
                  variant='outline'
                  className='border-white text-white hover:bg-white hover:text-milade-shade-70 font-bold bg-transparent cursor-pointer'
                  // onClick={() => setIsAuthenticated(true)}
                  asChild
                >
                  <Link href='/login'>Login</Link>
                </Button>
                <Button
                  className='bg-white font-bold text-milade-shade-70 hover:bg-milade-tint-90 cursor-pointer'
                  // onClick={() => setIsAuthenticated(true)}
                  asChild
                >
                  <Link href='/signup'>Sign Up</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <HeaderMobile
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />
        </div>
      </nav>
    </header>
  );
}
