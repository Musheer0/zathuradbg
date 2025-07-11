
import { CanvasRevealEffectCard } from '@/components/ui/canvas-revel-card';
import Image from 'next/image';

const TechStackCards = () => {
  return (
 <div className='w-full bg-black flex flex-col gap-10 items-center px-4 pt-20 pb-10'>
    <p className='text-xl max-w-xl text-center text-zinc-400'>Engineered with advanced  frameworks for professional-grade precision and flexibility.</p>
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
      <Image src={'/icicle.png'} title='no image found'  width={40} className='z-20 object-cover' height={40} alt='keystone engine'/>
      <p className='text-zinc-300 z-20'>Icicle Emulator</p>
      </CanvasRevealEffectCard>
      <div >
       
      </div>
      
    </div>
   </div>
  )
}

export default TechStackCards