import Links from "./home/link"

const Navbar = () => {
  return (
    <nav className='md:px-20 px-5 sticky top-0  bg-zinc-50/20 backdrop-blur-xl z-10 border-b  flex items-center w-full justify-between py-5'>
      <div className="logo flex items-center gap-2">
      <img src="./zatura-text-light.png" alt="logo" className='h-5' />
      </div>
   <Links/>
   <a href="https://github.com/ZathuraDbg/ZathuraDbg/releases">
      <button
      className='t bg-gradient-to-b from-zinc-950 to-zinc-900 font-semibold shadow-xl shadow-transparent transition-all duration-300 ease-in-out hover:shadow-zinc-950/15   capitalize  px-4 py-2 rounded-full'
      > 
         <p className='font-semibold  hover:underline cursor-pointer bg-gradient-to-t from-zinc-50  to-zinc-100 bg-clip-text text-transparent'>
          Download
         </p>
      </button>
      </a>
    </nav>
  )
}

export default Navbar