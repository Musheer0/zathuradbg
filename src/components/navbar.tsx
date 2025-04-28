import { download_url } from "@/cms";
import Image from "next/image"
import Link from "next/link";
const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    // maybe add Docs, Contact, etc later
  ];
  
  return (
   <nav className="w-full sticky top-0 z-[9999] bg-black/50 backdrop-blur-lg p-2 flex border-b items-center gap-5 px-10 justify-between border-zinc-900">
    {/* <div className="ray absolute -top-10 left-[47%] -translate-x-1/2">
    <div className="big-glow w-7 h-[500px] -translate-y-1/2 -rotate-90 bg-indigo-600 absolute blur-3xl"></div>
    <div className="big-glow w-6 h-[200px] -translate-y-1/2 -rotate-90 bg-indigo-500 absolute blur-3xl"></div>
    <div className="big-glow w-8 h-[200px] -translate-y-1/2 -rotate-90 bg-indigo-50 absolute blur-2xl"></div>
    <div className="big-glow w-8 h-[100px] -translate-y-1/2 -rotate-90 bg-indigo-50 absolute blur-xl"></div>
    </div> */}
    <div className="logo p-1 bg-zinc-950/10 border border-zinc-900 relative overflow-hidden rounded-lg">
    <Image src={'/logo.webp'} width={30} height={30} alt="logo" className=""/>
    <Image src={'/logo.webp'} width={30} height={30} alt="logo" className="absolute top-0 left-0 blur-xl mix-blend-color-dodge "/>
    </div>
    <div className="links ml-auto p-2 px-10 border rounded-xl hidden sm:flex items-center gap-10 border-zinc-900 ">
      {links.map((link)=><Link href={link.href} key={link.href} className="text-zinc-600 text-sm hover:underline hover:text-zinc-100">{link.name}</Link>)}
      <p className="text-zinc-600 text-sm hover:underline hover:text-zinc-100">Socials</p>
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