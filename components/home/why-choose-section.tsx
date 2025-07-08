import Image from "next/image";
import {
  MiladeGlobeIcon,
  MiladeLocationIcon,
  MiladeSettingsIcon,
  MiladeShieldIcon,
} from "../shared/icons";

const features = [
  {
    icon: MiladeShieldIcon,
    title: "Safety First",
    description:
      "Every ride is secured with strict safety checks and professional drivers",
  },
  {
    icon: MiladeLocationIcon,
    title: "Reliable",
    description:
      "With Milade, you can count on dependable pickups, clear communication, and on-time arrivals.",
  },
  {
    icon: MiladeSettingsIcon,
    title: "Excellence",
    description:
      "We deliver top-tier service with professionalism, care, and attention to every detail.",
  },
  {
    icon: MiladeGlobeIcon,
    title: "Accessibility",
    description:
      "We believe great service should also be simple and easily accessed with our user-friendly website for booking.",
  },
];

export function WhyChooseSection() {
  return (
    <section className='bg-[radial-gradient(ellipse_at_top,white_0%,#e6f4ec_50%,white_100%)] flex flex-col justify-center items-center font-candara'>
      <div className='py-10 md:py-16 flex flex-col lg:flex-row lg:justify-between milade-container text-center lg:items-center'>
        <div className='lg:max-w-[540px]'>
          {/* Section Header */}
          <div className='mb-12'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6'>
              Why <span className='text-milade-shade-20'>Choose</span> MiladeTL?
            </h2>
            <p className='text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
              At MiladeTL, we&apos;re more than just a transport company,
              we&apos;re your trusted partner for safe, reliable, and
              comfortable travel.
            </p>
          </div>

          {/* Features Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className='flex flex-col items-center text-center space-y-4'
                >
                  {/* Icon */}
                  <div className='w-16 h-16  rounded-full flex items-center justify-center mb-2'>
                    <IconComponent className='w-8 h-8 text-white' />
                  </div>

                  {/* Title */}
                  <h3 className='text-xl md:text-2xl font-bold text-milade-shade-20'>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className='text-gray-600 leading-relaxed max-w-sm'>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className='hidden lg:block'>
          <Image
            alt=''
            width={482}
            height={539}
            src='/images/milade_happy_couple.png'
          />
        </div>
      </div>
    </section>
  );
}
