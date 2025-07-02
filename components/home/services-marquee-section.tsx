import Marquee from "react-fast-marquee";
import { Button } from "../ui/button";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Bus Rental",
    description:
      "When traveling together matters, rent a bus with ease and enjoy your trip in comfort.",
    image: "/images/milade_white_buses.png",
    href: "/bus-rental",
    alt: "Milade white buses parked in a garage",
  },
  {
    id: 2,
    title: "Car Rental",
    description:
      "From city runs to road trips? We've got the perfect car. Rent a ride that fits your lifestyle.",
    image: "/images/milade_car_with_google_map_navigation.png",
    href: "/car-rental",
    alt: "A Milade car with Google map navigation on the dashboard",
  },
  {
    id: 3,
    title: "Logistics",
    description:
      "From packages to pallets, your goods is our responsibility. We are safe and we deliver with speed and care.",
    image: "/images/milade_black-female-courier.png",
    href: "/logistics",
    alt: "A black woman courier delivering packages",
  },
  {
    id: 4,
    title: "Charter Services",
    description:
      "Premium charter services for your special events and corporate transportation needs.",
    image: "/images/milade_african_woman.jpeg",
    href: "/charter-services",
    alt: "A black woman sitting in a milade service car with dark glasses on",
  },
];

export function ServicesMarqueeSection() {
  return (
    <section className='flex flex-col justify-center items-center font-candara bg-white overflow-x-hidden'>
      <div className='milade-container pt-24 pb-10 md:pb-16'>
        {/* Section Title - maintains normal spacing */}
        <div className='text-center mb-12 px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900'>
            Browse other <span className='text-green-600'>Services</span>
          </h2>
        </div>

        {/* Marquee Container */}
        <div className='relative py-8'>
          <Marquee
            pauseOnHover={true}
            speed={50}
            gradient={true}
            gradientColor='white'
            gradientWidth={50}
          >
            {services.map((service) => (
              <div key={service.id} className='mx-4 w-80 flex-shrink-0 pb-10'>
                <ServiceCard service={service} />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Call to Action */}
        <div className='text-center mt-12 px-4 sm:px-6 lg:px-8'>
          <Button
            asChild
            className='bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 text-lg'
          >
            <Link href='/services'>View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <Card className='overflow-x-hidden border-0 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 py-0 hover:shadow-2xl group'>
      <div className='relative'>
        {/* Service Image */}
        <div className='relative h-48 md:h-56 lg:h-64 overflow-clip'>
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-110'
          />
          {/* Service Label */}
          <div className='absolute top-4 left-4'>
            <span className='bg-milade-shade text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg'>
              {service.title}
            </span>
          </div>
          {/* Overlay on hover */}
          <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
        </div>

        {/* Card Content */}
        <CardContent className='md:p-6 p-4 bg-milade-shade-30 text-white'>
          <p className='text-white/90 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300'>
            {service.description}
          </p>
          <Button
            variant='secondary'
            className=' bg-white text-milade-shade hover:bg-gray-100 font-semibold transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg'
            asChild
          >
            <Link href={service.href}>Explore</Link>
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}
