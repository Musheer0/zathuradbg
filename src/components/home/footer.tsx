import { FaXTwitter } from "react-icons/fa6";
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='w-full py-10 pb-20  px-5 sm:px-20 justify-between flex items-center gap-2 border-t'>
      <img src="./zatura-text-light.png" alt=""  className='h-5'/>
      <div className="links flex items-center gap-3">
      <a
      aria-label="github"
      href="https://github.com/ZathuraDbg/ZathuraDbg"
      className='bg-zinc-100 p-2 rounded-md '
      >
      <BsGithub/>
      </a>
      <a
      aria-label="x"
      href="https://x.com/ZathuraDbg"
      className='bg-zinc-100 p-2 rounded-md '
      >
  <FaXTwitter />
      </a>
      </div>
    </div>
  )
}

export default Footer