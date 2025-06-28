
import { links } from '@/components/navbar';
import Link from 'next/link';

const MobileNav = () => {
  return (
   <div className='fixed bottom-4 z-10 px-2 w-full'>
<div className="  mx-auto  w-full overflow-hidden border-t border-zinc-800 bg-black/70 backdrop-blur-lg p-2 flex justify-between items-center md:hidden z-50 rounded-2xl shadow-lg">
  {links.map((link) => (
    <Link href={link.href} key={link.href} className="flex flex-col items-center text-xs text-zinc-400 hover:text-zinc-100">
      <link.icon size={15} />
      <span className='text-xs'>{link.name}</span>
    </Link>
  ))}
</div> 
</div>
  )
}

export default MobileNav