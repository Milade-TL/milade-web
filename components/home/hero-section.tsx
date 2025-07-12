import Image from "next/image";
import { BookingForm } from "./booking-form";

export function HeroSection() {
  return (
    <section className='flex flex-col items-center justify-center  text-white font-candara  relative min-h-[100svh]'>
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,white_0%,var(--milade-tint-20)_50%,white_100%)] blur-2xl '></div>

      <div className='milade-container relative pt-14 lg:pt-[200px] sm:pb-10'>
        <div className='w-full relative h-[580px] rounded-2xl overflow-x-clip md:overflow-clip px-4 isolate'>
          <Image
            src='/images/milade_map_icon.png'
            width={48}
            height={48}
            alt=''
            className='absolute w-6 h-6 md:w-12 md:h-12 z-1 -top-3 md:top-5 left-1/2 -translate-x-1/2'
          />
          <Image
            src='/images/milade_map_icon.png'
            width={48}
            height={48}
            alt=''
            className='absolute w-6 h-6 md:w-12 md:h-12 z-5 top-36 left-[80%] md:left-[80%] -translate-x-[70%]'
          />
          <Image
            src='/images/milade_map_icon.png'
            width={48}
            height={48}
            alt=''
            className='absolute w-6 h-6 md:w-12 md:h-12 z-1 left-[40%] -translate-x-[40%] md:top-52 top-28'
          />
          <div className='flex flex-col relative pt-4 md:pt-0 z-2 justify-between md:flex-row md:items-center md:px-6'>
            <div className='md:pb-8'>
              <h1 className='font-bold text-xl sm:text-4xl md:text-6xl'>
                Ride Safe, <br /> Drive Smart.
              </h1>
              <p className='md:mt-6 mt-3  sm:text-2xl max-w-[40ch]'>
                Want to move safely from one place to another without stress?
                MiladeTL is what you need.
              </p>
            </div>
            <div className='hidden md:block relative'>
              <Image
                width={454}
                height={460}
                src='/images/milade_hero_path.png'
                alt='milade road path with green background color'
                className=''
              />
            </div>
          </div>
          <div className='w-full h-full overflow-clip rounded-2xl'>
            <Image
              src='/images/milade_hero_bg.png'
              alt='milade map'
              fill={true}
              className='object-cover rounded-2xl'
            />
          </div>
          <div
            className='absolute left-0 top-0 bottom-0 right-0 rounded-2xl bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--milade-shade-10)_50%,transparent_100%)] opacity-70

'
          ></div>
          <div className='absolute z-3 left-0 right-0 -bottom-24 md:bottom-0'>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
