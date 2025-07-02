import Image from "next/image";

export function ContactHeroSection() {
  return (
    <section className='md:flex md:flex-col md:items-center md:justify-center bg-gray-100 font-candara relative h-[400px] pt-[60px] md:pt-0 md:h-[100svh]'>
      <div className='bg-[#1FA255]/30 absolute inset-0 z-2' />
      <div className='w-full h-full relative flex justify-center items-center'>
        <Image
          src='/images/milade_travellers.png'
          alt='A group of Milade travellers'
          fill={true}
          className='object-cover'
        />
        <div className='milade-container z-3 text-center relative text-white'>
          <h1 className='text-2xl md:text-[4rem] font-bold'>Contact us</h1>
        </div>
      </div>
    </section>
  );
}
