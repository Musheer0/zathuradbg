import Links from "../home/link";
import Navbar from "../navbar";
import ScrollImage from "./scroll-image";
// import { LuGoal } from "react-icons/lu";
// import { MdArchitecture } from "react-icons/md";

const About = () => {
    return (
  <>
        <Navbar/>

    <div className="flex pt-20  overflow-x-hidden  flex-col items-center justify-center w-full py-5">
        <div className="py-2 px-5 sm:px-20 flex flex-col items-center gap-2">
        <h1 className="text-4xl font-semibold dm-sans">About Zatura Dbg</h1>
        <p className="max-w-2xl text-center text-sm text-zinc-500">ZathuraDbg is an open-source GUI emulation based debugger for assembly. The primary goal of ZathuraDbg is to make the process of learning assembly easier by having a clean UI that explains itself and works on the go.
Only x86_64 architecture is supported at the moment but we plan to support all major architectures over the time.</p>

        </div>
 <ScrollImage />
 <Links className="sm:hidden flex fixed bottom-5  left-1/2 -translate-x-1/2" side="top"/>

    </div> 
  </>
  )
}

export default About

        /* <div className="cards flex items-center gap-3 justify-center flex-wrap">
       <div className="card flex flex-col border p-10 rounded-2xl  items-center max-w-[350px] w-full">
       <div className="p-4 shadow-xl rounded-2xl my-5">
       <LuGoal size={40} />
       </div>
       <h2 className="text-xl text-center font-semibold mb-2">Our Goal</h2>          
       <p className="text-sm text-center text-zinc-500">
            The primary goal of ZathuraDbg is to make the process of learning assembly easier by having a clean UI that explains itself and works on the go. We believe that with the right tools, anyone can master assembly programming.
          </p>
       </div>
       <div className="card flex flex-col border p-10 rounded-2xl  items-center max-w-[350px] w-full">
       <div className="p-4 shadow-xl rounded-2xl my-5">
       <MdArchitecture size={40} />
       </div>
       <h2 className="text-xl text-center font-semibold mb-2">Supported Architectures</h2>          
       <p className="text-sm text-center text-zinc-500">
       Currently, ZathuraDbg supports the x86_64 architecture. However, we have ambitious plans to expand our support to all major architectures in the future, making ZathuraDbg a comprehensive tool for assembly debugging across various platforms.
       </p>
       </div>
         </div> */