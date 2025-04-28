import { announcment, contribute, download_url, main_title, main_title_sub } from "@/cms"
const Home = () => {
  return (
   <div className="w-full h-full min-h-screen flex items-center justify-center p-2  flex-col relative">
   <p className="text-sm text-indigo-200 px-4  rounded-full py-3 mb-5 mt-20 border border-zinc-900 bg-zinc-950">
    <span className="p-1 relative rounded-full bg-indigo-700 text-black font-semibold text-xs mr-2">NEW</span>
     {announcment}</p>
    <h1
    dangerouslySetInnerHTML={{__html:main_title}}
    className="text-[9vw] relative sm:text-[7vw] md:text-[6.5vw] lg:text-[5.5vw] text-transparent bg-clip-text bg-gradient-to-b from-white via-indigo-50 py-2 to-indigo-500 leading-none  text-center"/>

    <p className="max-w-xl text-sm pt-3 text-center text-zinc-300" >
{main_title_sub}
    </p>
   <div className="ACTIONS relative z-10 flex items-center gap-3 pt-4">
   <div className="p-1 rounded-xl  bg-zinc-100/10  transition-all duration-300 hover:scale-105   ">
    <a href={download_url}>
    <button className="shadow-inner cursor-pointer shadow-zinc-300 text-black bg-white or-pointer px-5 py-2 rounded-xl">Download</button>
    </a>
    </div>
    <a href={contribute}>
    <button className="  shadow-inner cursor-pointer border border-transparent hover:border-zinc-300/30 transition-all duration-300 shadow-zinc-300/20  or-pointer px-5 py-2 rounded-xl">Contribute</button>
    </a>
   </div>
   <div className="absolute w-full h-1/2 top-0 rounded-full  -translate-x-1/2 left-1/2 blur-3xl mix-blend-lighten bg-indigo-600/5"></div>


   <div className="image pointer-events-none max-w-[95%] mx-auto pt-5 mt-10 relative">
   <div className="circle absolute w-[900px] h-[900px] scale-[1.4] -top-1/3 opacity-5 -translate-x-1/2 left-1/2   border rounded-full "></div>
   <div className="circle absolute w-[900px] h-[900px] -top-1/3 opacity-5 -translate-x-1/2 left-1/2   border rounded-full "></div>
   <div className="circle absolute w-[900px] h-[900px] -top-1/3 scale-75 opacity-5 -translate-x-1/2 left-1/2   border rounded-full "></div>
    <div className="absolute w-full h-full top-0 rounded-full -translate-y-1/2 -translate-x-1/2 left-1/2 blur-3xl bg-indigo-600/10"></div>
    <div className="absolute w-1/2 h-1/2 top-0 rounded-full -translate-y-1/2 -translate-x-1/2 left-1/2 blur-3xl mix-blend-lighten bg-indigo-600/20"></div>
    <div className="absolute w-full h-full top-0 blur-3xl bg-indigo-600/40"></div>
    <div className="p-2 bg-zinc-950/70 scale-125 sm:scale-110 md:scale-100 relative border border-zinc-900 rounded-2xl">
    <div className="absolute w-1/2 h-full -translate-x-1/2 left-1/2 top-0 blur-3xl bg-indigo-600/30 "></div>
    <img src="/noise.png" className='absolute opacity-[0.01]  z-10 [mask-image:radial-gradient(#fff,transparent,75%)] top-0 left-0 w-full h-full object-cover' alt="" />

    <img src="/screenshot2.webp" alt=""  className="rounded-xl relative "/>
    <div className="absolute w-1/2   rounded-full -translate-x-1/2 left-1/2 h-1/2 top-0 blur-3xl bg-indigo-600/20"></div>

    </div>
   </div>
   </div>
)
}

export default Home