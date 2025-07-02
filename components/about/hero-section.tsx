import Image from "next/image";

export function AboutHeroSection() {
  return (
    <section className='md:flex md:flex-col md:items-center md:justify-center bg-gray-100 font-candara relative h-[400px] pt-[60px] md:pt-0 md:h-[100svh]'>
      <div className='bg-[#1FA255]/40 absolute inset-0 z-2' />
      <div className='w-full h-full relative flex justify-center items-center'>
        <Image
          src='/images/milade_african_man_suits_desktop.png'
          alt='An african man in suits seated at the back of a car'
          fill={true}
          className='object-cover'
        />
        <div className='milade-container z-3 text-center relative text-white'>
          <h1 className='text-2xl md:text-[4rem] font-bold'>About us</h1>
          <p className='md:text-2xl font-bold mt-6 md:mt-12 max-w-[30ch] mx-auto'>
            Our Mission, Vision And Who We Are Our mission
          </p>
        </div>
      </div>
    </section>
  );
}
