"use client";
import { useInView, motion } from 'framer-motion';
import { Button } from '../ui/moving-border';
import { useRef } from 'react';

const Features = () => {
  const l1ref = useRef<HTMLDivElement>(null);
  const l2ref = useRef<HTMLDivElement>(null);
  const l3ref = useRef<HTMLDivElement>(null);
  const l1 = useInView(l1ref,{once:true});
  const l2 = useInView(l2ref,{once:true});
  const l3 = useInView(l3ref,{once:true});

  const fadeInWithScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
  };

  return (
    <div id='features' className='flex items-center flex-col gap-10 pt-20 w-full pb-10 h-full'>
      <p className='text-2xl text-center max-w-2xl'>
        An all-in-one lightweight debugger for learning, editing, and mastering assembly — beginner-friendly, no setup required
      </p>
      <div className="bento gap-10 flex-1 w-[90%] flex flex-col max-w-[1100px]">
        {/* l1 section */}
        <motion.div
          ref={l1ref}
          initial="hidden"
          animate={l1? "visible" : "hidden"}
          variants={fadeInWithScale}
          className="l1 flex lg:flex-row flex-col items-stretch justify-items-stretch flex-wrap gap-2 flex-1"
        >
          <Button duration={4000} as={'div'} className="No Setup Needed px-5 py-10 rounded-xl border-zinc-800 border">
            <img src="/bolt.png" className='w-full mx-auto h-[260px] object-contain lg:object-cover max-w-md mix-blend-screen' alt="" />
            <p className='text-lg font-semibold pt-2'>
              No Setup Needed
            </p>
            <p className='text-sm text-zinc-400'>
              Works out of the box — just launch and debug.
            </p>
          </Button>

          <div className="hex-editor min-h-[400px] h-full flex-1 items-end flex justify-start rounded-xl overflow-hidden bg-gradient-to-t from-indigo-700/70 to-transparent p-2 relative">
            <img src="/memory-editor.png" alt="memory" className='absolute object-cover w-[90%] p-1 bg-indigo-900/30 pr-0 pb-0 h-[90%] object origin-left border border-indigo-950 shadow-md shadow-indigo-950 border-r-0 rounded-tl-xl bottom-0 right-0' />
            <div className='absolute w-full h-2/3 left-0 bottom-0 opacity-70 bg-gradient-to-t from-indigo-700 to-transparent'></div>
            <div className='absolute w-full h-2/3 left-0 bottom-0 opacity-70 bg-gradient-to-t from-indigo-950 to-transparent'></div>
            <div className="info p-5 self-baseline relative mt-auto">
              <p className='drop-shadow-lg font-semibold'>
                Hex Editor Built-In
              </p>
              <p className='text-sm w-2/3 text-zinc-300'>
                Edit memory live as code runs, enabling real-time updates to variables and memory, improving debugging and allowing for immediate feedback during development.
              </p>
            </div>
          </div>
        </motion.div>

        {/* l2 section */}
        <motion.div
          ref={l2ref}
          initial="hidden"
          animate={l2 ? "visible" : "hidden"}
          variants={fadeInWithScale}
          className="l2 flex lg:flex-row flex-col-reverse gap-2 flex-wrap flex-1"
        >
          <div className="Beginner-Friendly Interface h-full min-h-[400px] flex-1 items-end flex justify-start rounded-xl overflow-hidden bg-gradient-to-t from-indigo-700/70 to-transparent p-2 relative">
            <img src="/console.png" alt="memory" className='absolute w-[90%] p-1 bg-indigo-900/30 pl-0 pb-0 h-[90%] object-cover origin-left border border-indigo-950 shadow-md shadow-indigo-950 border-r-0 rounded-tr-xl bottom-0 left-0' />
            <div className='absolute w-full h-2/3 left-0 bottom-0 opacity-70 bg-gradient-to-t from-indigo-700 to-transparent'></div>
            <div className='absolute w-full h-2/3 left-0 bottom-0 opacity-70 bg-gradient-to-t from-indigo-950 to-transparent'></div>
            <div className="info p-5 self-baseline relative mt-auto">
              <p className='drop-shadow-lg font-semibold'>
                Beginner-Friendly Interface
              </p>
              <p className='text-sm w-2/3 text-zinc-300'>
                Commands explained clearly — smooth learning curve.
              </p>
            </div>
          </div>
          <Button duration={5000} as={'div'} className="No Setup Needed px-5 py-10 rounded-xl border-zinc-800 border">
            <img src="/cpu.png" className='w-full h-[260px] mx-auto object-contain lg:object-cover max-w-md mix-blend-screen' alt="" />
            <p className='text-lg font-semibold pt-2'>
              Intel x86_64 Support
            </p>
            <p className='text-sm text-zinc-400'>
              ZathuraDbg supports x86_64, ARM32, Thumbv7m, and AArch64—with more architectures coming soon.
            </p>
          </Button>
        </motion.div>

        {/* l3 section */}
        <motion.div
          ref={l3ref}
          initial="hidden"
          animate={l3 ? "visible" : "hidden"}
          variants={fadeInWithScale}
          className="l3 w-fit group md:hover:to-transparent hover:h-[470px] md:hover:h-[690px] h-[420px] transition-all duration-200 p-2 relative bg-gradient-to-b from-transparent to-indigo-700 rounded-xl overflow-hidden"
        >
          <div className="info group-hover:left-0 pointer-events-none absolute top-0 p-3 pl-5 w-full flex flex-col pt-10 h-1/2">
            <p className='text-2xl font-semibold leading-none max-w-2xl'>
              Time Travel Debugging with ZathuraDbg: Step Back Instantly with Minimal Overhead
            </p>
            <p className='text-sm max-w-3xl text-zinc-300'>
              ZathuraDbg introduces full time travel debugging, allowing developers to step backward through execution while preserving memory and stack integrity. All with just a few megabytes of overhead.
            </p>
          </div>

          <div className='relative translate-x-5 group transition-all duration-300 ease-in-out hover:translate-x-0 md:hover:translate-y-0 delay-1 translate-y-[35vh] sm:translate-y-[40%] md:translate-y-1/3 lg:translate-y-1/4 rounded-lg overflow-hidden'>
            <div className="overlay hidden sm:flex absolute top-0 left-0 w-full h-full bg-black/50 pt-20 group-hover:opacity-0 pointer-events-none transition-all duration-300 ease-in-out justify-center">
              <p className='bg-white h-fit text-black px-4 py-1 rounded-full'>Hover/Tap to watch demo</p>
            </div>

            <video src="/timetravel2.mp4" muted autoPlay loop className='rounded-xl h-full overflow-hidden p-0.5 bg-indigo-950 '></video>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
