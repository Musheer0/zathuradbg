import Features from '@/components/home/features';
import Home from '@/components/home/home'
import AboutZatura from '@/components/home/about';
import GitHubStars from '@/components/stars';
import { CanvasRevealEffectCard } from '@/components/ui/canvas-revel-card';
import Image from 'next/image';
import Footer from '@/components/home/footer';
import FAQSection from '@/components/home/faqs';
import { links } from '@/components/navbar';
import Link from 'next/link';

export default function page() {
  return (
   <>

   <Home/>
   <GitHubStars/>
   <div className='w-full bg-black flex flex-col gap-10 items-center px-4 pt-20 pb-10'>
    <p className='text-xl max-w-xl text-center text-zinc-400'>Engineered with advanced disassembly frameworks for professional-grade precision and flexibility.</p>
    <div className="cards  flex flex-wrap items-center justify-center gap-2">
      <CanvasRevealEffectCard className="card relative p-10 border cursor-pointer border-zinc-800 rounded-xl flex items-center gap-4"> 
      <Image src={'/keystone.png'} width={40} className='z-20' height={40} alt='keystone engine'/>
      <p className='text-zinc-300 z-20'>Keystone Engine</p>
      </CanvasRevealEffectCard>
      <CanvasRevealEffectCard colors={[
               [255, 0, 0],
               [210, 105, 30],
              ]} className="card relative p-10 border cursor-pointer border-zinc-800 rounded-xl flex items-center gap-4"> 
      <Image src={'/capstone.png'} width={40} className='z-20' height={40} alt='keystone engine'/>
      <p className='text-zinc-300 z-20'>Capstone Engine</p>
      </CanvasRevealEffectCard>
      <CanvasRevealEffectCard colors={[
               [255, 255, 255],
               [210, 255, 255],
              ]} className="card relative p-10 border cursor-pointer border-zinc-800 rounded-xl flex items-center gap-4"> 
      <Image src={'/placeholder.png'} title='no image found' width={50} className='z-20 object-cover' height={50} alt='keystone engine'/>
      <p className='text-zinc-300 z-20'>Icicle Engine</p>
      </CanvasRevealEffectCard>
      <div >
       
      </div>
      
    </div>
   </div>
   <Features/>
   <AboutZatura/>
   <FAQSection/>
   <div className="fixed bottom-4 left-4 right-4 mx-auto max-w-md border-t border-zinc-800 bg-black/70 backdrop-blur-lg p-2 flex justify-around items-center md:hidden z-50 rounded-2xl shadow-lg">
  {links.map((link) => (
    <Link href={link.href} key={link.href} className="flex flex-col items-center text-xs text-zinc-400 hover:text-zinc-100">
      <link.icon size={20} />
      <span>{link.name}</span>
    </Link>
  ))}
</div>

   <Footer/>
   </>
  );
}
