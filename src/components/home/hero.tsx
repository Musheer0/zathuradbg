import GitHubStars from "../stars"

const Hero = () => {
  return (
    <div className='w-full relative flex items-center justify-center pt-20 gap-2 sm:h-screen '>
      <div className="left sticky top-0 h-full flex-1 flex flex-col sm:pl-20 px-5 gap-3">
       <div className='logo w-[90px]  h-[90px] mb-3 rounded-xl'
            style={{
              boxShadow: '-4px 15px 20px rgb(0,0,0,.2)'
             }}
       >
          <img src="./logo.webp" alt="logo" />
       </div>
       <GitHubStars/>
       <h1 className='text-[10vw]  sm:text-[6vw] md:text-[5vw] lg:text-[4vw] font-semibold leading-none dm-sans'>
       The easiest GUI tool to learn and debug assembly
       </h1>
       <p className='text-sm text-zinc-500'>
       ZathuraDbg is a fully open source emulation-based debugger powered by capstone, icicle and keystone engine.
       </p>
     <div className="actions flex items-center gap-2">
     
     <div className="relative  rounded-full hover:p-[2.4px] p-[2.3px]  transition-all duration-300 ease-in-outrounded-full bg-gradient-to-r from-[#AC56C1]  to-[#2D85CB]">
  <a href="https://github.com/ZathuraDbg/ZathuraDbg/releases">
  <button
      className='relative bg-gradient-to-b w-fit group  overflow-hidden from-zinc-950 to-zinc-900 font-semibold shadow-xl shadow-transparent transition-all duration-300 ease-in-out hover:shadow-zinc-950/15   capitalize  px-5 py-3 rounded-full'
      >      
        <div className="blur-lg mix-blend-lighten opacity-70 bg-[linear-gradient(25deg,#AC56C1,#2D85CB)] left-1/2 -translate-x-1/2  top-2/3 group-hover:top-1/2 group-hover:opacity-90 transition-all duration-300 ease-in-out w-full rounded-full h-10 absolute"></div>
         <p className='font-semibold  hover:underline cursor-pointer bg-gradient-to-t  from-zinc-50 transition-all duration-300 ease-in-out to-[#2D85CB]   bg-clip-text text-transparent'>
          Download
         </p>
      </button>
  </a>
      </div>
      <a href="https://github.com/ZathuraDbg">
      <button
      className='border  w-fit  font-semibold shadow-xl shadow-transparent transition-all duration-300 ease-in-out    capitalize  px-5 py-3 rounded-full'
      >
         <p className='font-semibold  hover:underline cursor-pointer bg-gradient-to-t from-zinc-950  to-zinc-800 bg-clip-text text-transparent'>
         Contribute
         </p>
      </button>
      </a>
     </div>
      </div>
      <div className="right relative h-full flex-1 hidden md:flex  rounded-l-3xl "
           style={{
            boxShadow: '-4px 10px 25px rgb(0,0,0,.4)'
           }}
      >
        <img src="./backdrop.png" alt="" className='absolute w-[300px] -left-20 -top-20 opacity-5 ' />
        <img src="./screenshot2-cropped.png" alt="hero-img" className='relative   rounded-l-lg w-full h-full  object-left-top object-cover ' />
      </div>
    </div>
  )
}

export default Hero