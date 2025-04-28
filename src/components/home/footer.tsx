import { FaXTwitter } from "react-icons/fa6";
import { BsGithub } from 'react-icons/bs'
import { TextHoverEffect } from "../ui/text-hover-effect";
import Image from "next/image";

const Footer = () => {
  const socials = [
    {
      icon:FaXTwitter,
      href: 'https://x.com/ZathuraDbg'
    },
    {
      icon:BsGithub,
      href:'https://github.com/ZathuraDbg'
    }
  ]
  return (
    <div className=" w-full h-[400px] relative border-t border-zinc-900">
      <div className="links pt-10 gap-10 flex items-center justify-between px-4 flex-wrap">
     <div className="logo flex items-center gap-2">
     <Image src={'/logo.webp'} width={35} height={35} alt="logo"/>
     <p className="font-black text-lg">Zathura</p>
     </div>
 
    <div className="flex items-center gap-2">
    <div className="socials flex px-1 items-center gap-5">
      <p>Follow us on</p>
    {socials.map((social)=>{
      return(
        <a href={social.href}
        className="hover:opacity-70 cursor-pointer"
        key={social.href}>
          <social.icon/>
        </a>
      )
    })}
     </div>
     &middot;
     <div className="creator flex items-center justify-center ">
      <a href="https://x.com/rcx86" className="hover:underline text-xs text-zinc-400">Contact the developer</a>
     </div>
    </div>
     </div>
     <div className="h-full w-full  ">
     <TextHoverEffect text="ZATHURA"/>
     </div>
    
     <p className="text-center text-sm text-zinc-300">&copy; ZathuraDbg 2025</p>
    </div>
  )
}

export default Footer