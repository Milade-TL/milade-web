import Image from "next/image";

export function ServiceHeroSection() {
  return (
    <section className='md:flex md:flex-col md:items-center md:justify-center bg-gray-100 font-candara relative h-[400px] pt-[60px] md:pt-0 md:h-[100svh]'>
      <div className='w-full h-full relative flex justify-center items-center'>
        <Image
          src='/images/milade_driver.png'
          alt='A black female milade driver'
          fill={true}
          className='object-cover'
        />
        <div className='milade-container text-center relative text-white'>
          <h1 className='text-2xl md:text-[4rem] font-bold'>Services</h1>
          <p className='md:text-2xl font-bold mt-6 md:mt-12 max-w-[30ch] mx-auto'>
            Flexible Transport Solutions, On Your Terms
          </p>
        </div>
      </div>
    </section>
  );
}
