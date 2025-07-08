import Image from "next/image";

export function AboutOurMission() {
  return (
    <section className='flex flex-col items-center font-candara justify-center'>
      <div className='milade-container py-10  md:py-16 flex flex-col items-center'>
        <div className='space-y-2'>
          <h2 className='font-extrabold text-2xl md:text-[2rem] text-center'>
            Welcome to Milade TL
          </h2>
          <p className='max-w-[45ch] text-center'>
            At MiladeTL, we’re more than just a transport company, we’re your
            trusted partner for safe, reliable, and comfortable travel.
          </p>
        </div>

        <div className=' pt-8 md:pt-14 flex flex-col max-w-5xl md:items-center gap-10 md:flex-row md:justify-between '>
          <div>
            <Image
              src='/images/milade_yellow_car.png'
              alt=''
              width={400}
              height={246}
              className='object-cover'
            />
          </div>
          <ul className='max-w-[550px] text-center'>
            <p>At Milade, we are driven by a bold vision:</p>
            <li>
              To redefine modern transport by delivering seamless, safe, and
              accessible mobility solutions across Africa and beyond.”
            </li>
            <li>
              Whether it’s interstate travel, vehicle rentals, or logistics, we
              aim to make movement simple, stress-free, and efficient for
              everyone.
            </li>
            <li>
              We don’t just move people — we move trust, comfort, and progress.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
