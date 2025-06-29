import Image from "next/image";

export function HeroSection() {
  return (
    <section className='flex flex-col items-center justify-center  text-white font-candara  relative'>
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,white_0%,#e6f4ec_50%,white_100%)] '></div>

      <div className='milade-container relative   pt-32 lg:pt-[156px] sm:pb-10'>
        <div className='w-full relative  h-[144px] sm:h-[388px] rounded-2xl overflow-clip flex p-4 items-center justify-center'>
          <Image
            src='/images/milade_hero_bg.png'
            alt='milade map'
            fill={true}
            className='object-cover rounded-2xl'
          />
          <div className='absolute left-0 top-0 bottom-0 w-1/2 bg-milade-shade-30/40'></div>
          <div className='relative'>
            <h1 className='font-bold text-lg sm:text-4xl md:text-6xl'>
              Ride Safe, Drive Smart.
            </h1>
            <p className='mt-6 text-xs sm:text-base'>
              Want to move safely from one place to another without stress?
              Milade is what you need.
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
      </div>
    </section>
  );
}
