import Image from "next/image";
import { AboutOurMission } from "./our-mission";

export function MissionVision() {
  return (
    <section>
      <AboutOurMission />
      <div className='bg-[radial-gradient(ellipse_at_top,white_0%,#e6f4ec_50%,white_100%)]'>
        <div className='hidden md:block relative w-full h-[260px]'>
          <Image
            fill={true}
            src='/images/milade_car_path.png'
            alt=''
            className='object-cover'
          />
        </div>

        <div className='flex flex-col gap-2 font-candara items-center text-center pt-8 pb-10 md:pb-16 milade-container'>
          <h3 className='font-extrabold text-2xl md:text-[2rem]'>
            Mission Statement
          </h3>
          <p className='max-w-[45ch] text-center'>
            Our mission is clear — to connect people, goods, and opportunities
            with reliable transport services that blend technology, comfort, and
            professionalism.
          </p>
        </div>
      </div>

      <section className='flex flex-col items-center font-candara justify-center pb-6'>
        <div className='milade-container py-10  md:py-16 flex flex-col items-center'>
          <div className=' pt-8 md:pt-14 flex flex-col max-w-5xl md:items-center gap-10 md:flex-row-reverse md:justify-between '>
            <div>
              <Image
                src='/images/milade_green_bus.png'
                alt=''
                width={400}
                height={246}
                className='object-cover'
              />
            </div>
            <ul className='max-w-[550px] text-center space-y-3'>
              <h3 className='font-extrabold text-2xl md:text-[2rem]'>
                Our Vision:
              </h3>
              <li>
                To become Africa’s most trusted and innovative transport company
                connecting people and places with ease, safety, and reliability.
              </li>
              <li>
                We envision a future where transport is no longer a barrier but
                a bridge empowering individuals, businesses, and communities to
                move freely, confidently, and affordably.
              </li>
              <li>
                Through technology, exceptional service, and continuous
                improvement, Milade strives to set new standards in mobility,
                logistics, and customer experience.
              </li>
              <li>
                We’re not just in the business of transportation, we’re building
                a smarter way to move.
              </li>
            </ul>
          </div>
        </div>
        <div className='md:block hidden relative w-full h-[260px]'>
          <Image
            fill={true}
            src='/images/milade_car_path.png'
            alt=''
            className='object-cover'
          />
        </div>
      </section>
    </section>
  );
}
