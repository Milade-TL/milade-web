import { MiladeMessageIcon, MiladePhoneIcon } from "../shared/icons";

export function NeedHelpSection() {
  return (
    <section className='bg-white font-candara flex justify-center items-center md:h-[80svh]'>
      <div className='milade-container flex flex-col   items-center justify-center py-16 md:py-24'>
        <div className='max-w-4xl flex flex-col items-center gap-5 md:flex-row md:justify-between w-full'>
          <div className='text-center md:text-left'>
            <p className='text-milade-shade-70 text-2xl md:text-4xl'>
              Need help choosing a service?
            </p>
            <p className='text-2xl font-bold md:font-normal md:text-4xl text-milade-shade-70'>
              Talk to an agent
            </p>
          </div>

          <div className='flex flex-col gap-2 items-center'>
            <p className='flex gap-1 items-center'>
              <span>
                <MiladePhoneIcon />
              </span>
              <span className='md:text-2xl'>+234-490-9256-657</span>
            </p>
            <p className='text-center text-sm md:text-base'>or</p>
            <div className='w-[70px] h-[70px] bg-black flex flex-col items-center justify-center'>
              <MiladeMessageIcon className='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
