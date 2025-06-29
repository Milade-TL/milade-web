import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { XIcon } from "lucide-react";
import Link from "next/link";
import { Dispatch } from "react";
import { MiladeLogo, UserBoldIcon } from "../shared/icons";
import { Button } from "../ui/button";

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

export function HeaderMobile({
  isMobileMenuOpen,
  isAuthenticated,
  setIsAuthenticated,
  setIsMobileMenuOpen,
}: {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<React.SetStateAction<boolean>>;
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className='lg:hidden'>
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            className='text-white hover:text-green-200 hover:bg-green-700'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M22 9.66667H1M22 5H1M22 14.3333H1M22 19H1'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            <span className='sr-only'>Open main menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side='right'
          className='w-80 bg-white p-0 [&>button:first-of-type]:hidden overflow-y-auto'
        >
          <SheetTitle className='sr-only'>Menu Links</SheetTitle>
          <SheetDescription className='sr-only'>Menu Links</SheetDescription>
          <div className='flex flex-col h-full'>
            {/* Mobile Header */}
            <div className='bg-milade-shade text-white p-4'>
              <div className='flex items-center justify-between'>
                <div className='  rounded-lg flex items-center justify-center'>
                  <Link href='/' className='flex items-center'>
                    <MiladeLogo className='w-10 h-10' />
                  </Link>
                </div>
                <SheetClose asChild>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='text-white hover:text-green-200 hover:bg-green-700'
                  >
                    <XIcon className='h-6 w-6' />
                  </Button>
                </SheetClose>
              </div>

              {/* Mobile User Profile Section */}
              {isAuthenticated && (
                <div className='mt-4 pt-4 border-t border-milade-shade'>
                  <div className='flex items-center space-x-3'>
                    <Avatar className='h-12 w-12 bg-transparent'>
                      <AvatarImage
                        src={mockUser.avatar || "/placeholder.svg"}
                        alt={mockUser.name}
                      />
                      <AvatarFallback className=' text-white bg-transparent text-lg'>
                        <UserBoldIcon className='h-6 w-6' />
                      </AvatarFallback>
                    </Avatar>
                    <div className='flex-1 min-w-0'>
                      <p className='text-sm font-medium text-white truncate'>
                        {mockUser.name}
                      </p>
                      <p className='text-xs text-green-200 truncate'>
                        {mockUser.email}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Navigation Links */}
            <div className='flex-1 py-6'>
              <div className='px-4 space-y-1'>
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className='block px-3 py-3 text-base font-medium text-milade-neutral hover:text-milade-shade-70 hover:bg-milade-tint-90 rounded-md transition-colors'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Auth Section */}
              <div className='mt-8 px-4'>
                {isAuthenticated ? (
                  <div className='space-y-2'>
                    <Link
                      href='/profile'
                      className='block px-3 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      href='/settings'
                      className='block px-3 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Settings
                    </Link>
                    <Link
                      href='/bookings'
                      className='block px-3 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      My Bookings
                    </Link>
                    <hr className='my-4' />
                    <button
                      onClick={() => {
                        setIsAuthenticated(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className='block w-full text-left px-3 py-3 text-base font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors'
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className='space-y-3'>
                    <Button
                      variant='outline'
                      className='w-full border-milade-shade-70 text-milade-shade-70 hover:bg-milade-shade-70  font-bold hover:text-white bg-transparent'
                      // onClick={() => {
                      //   setIsAuthenticated(true);
                      //   setIsMobileMenuOpen(false);
                      // }}
                      asChild
                    >
                      <Link href='/login'>Login</Link>
                    </Button>
                    <Button
                      className='w-full bg-milade-shade text-white hover:bg-milade-shade-70 font-bold hover:text-white'
                      // onClick={() => {
                      //   setIsAuthenticated(true);
                      //   setIsMobileMenuOpen(false);
                      // }}
                      asChild
                    >
                      <Link href='/signup'>Sign Up</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
