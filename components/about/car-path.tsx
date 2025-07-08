import Image from "next/image";

export function CarPath() {
  return (
    <div className='relative w-full h-[260px]'>
      <Image fill={true} src='/images/milade_car_path.png' alt='' />
    </div>
  );
}
