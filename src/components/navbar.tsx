import { download_url } from "@/cms";
import Image from "next/image"
import Link from "next/link";
import { socials } from "./home/footer";
import {
  Home,
  Sparkles,
  Info,
  HelpCircle,
} from 'lucide-react';
export const links = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'Features', href: '#features', icon: Sparkles },
  { name: 'About', href: '#about', icon: Info },
  { name: 'FAQs', href: '#faq', icon: HelpCircle },
];
const Navbar = () => {

  return (
   <nav className="w-full sticky top-0 z-[9999] bg-black/50 sm:overflow-visible overflow-hidden backdrop-blur-lg p-2 flex border-b items-center gap-5 px-3 sm:px-10 justify-between border-zinc-900">
    <div className="ray absolute -top-10 left-[47%] -translate-x-1/2">
    <div className="big-glow w-7 h-[500px] -translate-y-1/2 -rotate-90 bg-indigo-600 absolute blur-3xl"></div>
    <div className="big-glow w-6 h-[200px] -translate-y-1/2 -rotate-90 bg-indigo-500 absolute blur-3xl"></div>
    <div className="big-glow w-8 h-[200px] -translate-y-1/2 -rotate-90 bg-indigo-50 absolute blur-2xl"></div>
    <div className="big-glow w-8 h-[100px] -translate-y-1/2 -rotate-90 bg-indigo-50 absolute blur-xl"></div>
    </div>
    <div className="logo p-1 bg-zinc-950/10 border border-zinc-900 relative overflow-hidden rounded-lg">
    <Image src={'/logo.webp'} width={30} height={30} alt="logo" className=""/>
    <Image src={'/logo.webp'} width={30} height={30} alt="logo" className="absolute top-0 left-0 blur-xl mix-blend-color-dodge "/>
    </div>
    <div className="links ml-auto p-2 px-10 border rounded-xl hidden md:flex items-center gap-10 border-zinc-900 ">
      {links.map((link)=><Link href={link.href} key={link.href} className="text-zinc-600 text-sm hover:underline hover:text-zinc-100">{link.name}</Link>)}
     <div className="group relative">
     <p className="text-zinc-600 cursor-pointer text-sm hover:underline hover:text-zinc-100">Socials</p>
     <div className="absolute origin-top-left scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-in-out  w-fit z-[999] top-[120%] left-0 p-2 rounded-lg border border-zinc-900 bg-black/60 backdrop-blur-lg">
     <p className="text-sm text-zinc-200">Follow us on</p>
   <div className="flex items-center gap-2">
   {socials.map((socials)=>{
      return(
      <a href={socials.href} key={socials.href} className="hover:opacity-70 cursor-pointer">
      <div className="p-2 rounded-lg flex items-center gap-1 hover:bg-zinc-900/50 cursor-pointer">
      <socials.icon className="text-zinc-400 hover:text-zinc-100"/>
      <p className="text-xs text-zinc-400">{socials.name}</p>
      </div>

      </a>
      )
     })}
   </div>
     </div>
     </div>
    </div>
 
    <div className="p-1  border border-zinc-900 relative overflow-hidden rounded-xl">
<a href={download_url}>
<button className="text-sm font-semibold tracking-wide bg-indigo-700 shadow-inner  shadow-white/50 hover:bg-indigo-600 cursor-pointer px-5 py-2 rounded-xl">Download</button>
</a>
    </div>
   </nav>
  )
}

export default Navbar