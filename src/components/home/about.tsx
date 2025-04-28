"use client"
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '../ui/moving-border';
import AboutVideo from './about-video';
import { about } from '@/cms';

const AboutZatura = () => {

  return (

  <div id='about' className='w-full relative  flex flex-col items-center mt-10 p-7  h-full min-h-screen'>
     <div
        className={cn(
          "absolute w-full pointer-events-none  h-full",
        "opacity-10",
        "[background-size:40px_40px]",
        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
       <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
  <div className="content flex flex-col w-full flex-1 items-center pt-10 relative">
    <Button as={'div'} duration={5000} className='p-1' containerClassName='shadow-xl shadow-indigo-700/30 overflow-hidded bg-transparent  rounded-3xl'>
    <Image src={'/logo.webp'} width={100} height={100} alt='logo'/>
    </Button>
  <h2 className='text-[8.2vw]  mx-auto relative sm:text-[7vw] md:text-[6vw] lg:text-[3.7vw]'>About ZathuraDbg</h2>
  <p className='mx-auto max-w-3xl text-sm text-zinc-300 text-center'>
{about}
  </p>

  <AboutVideo/>
  <div className='pt-10'>
  <video src="timetravel.mp4" className='rounded-2xl md:hidden' autoPlay loop muted></video>

  </div>
  </div>
 
  </div>
  );
};

export default AboutZatura;
