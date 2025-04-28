"use client"
import React, {  useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';

const AboutVideo = () => {
    const videoRef = useRef<HTMLDivElement|null>(null);
   const videoScrollProgress = useScroll({
    target:videoRef,
    offset:["start end", "start start"]
   })
   const scale = useTransform(videoScrollProgress.scrollYProgress, [0, 1],[0.5,1])
   const scalereverse = useTransform(videoScrollProgress.scrollYProgress, [0, 1],[1,0])
   const paddingtop = useTransform(videoScrollProgress.scrollYProgress, [0, 1],[2,40])
  return (
   <div className=''>
     <motion.div 
     transition={{
        duration: 2, 
        repeat: Infinity, 
        repeatType: "mirror",
      }}
      animate={{
       rotate: ["12deg", "10deg", "8deg"]
      }}
     dragSnapToOrigin
           drag 
     style={{scale:scalereverse}}
     className="floatingcard absolute top-1/8 right-20 rotate-12">
            <Image      draggable={false}
 src={'/bento/bento(2)dark.png'} width={150} height={100} alt='bento'/>
        </motion.div>
     <motion.div 
      transition={{
        duration: 2, 
        repeat: Infinity, 
        repeatType: "mirror",
      }}
      animate={{
       rotate: ["-12deg", "-10deg", "-8deg"]
      }}
     dragSnapToOrigin
           drag 
     style={{scale:scalereverse}}
     className="floatingcard absolute top-1/7 left-20 -rotate-12">
            <Image 
             draggable={false}
            src={'/bento/bento(4)dark.png'} width={150} height={100} alt='bento'/>
        </motion.div>
     <div 
    style={{paddingTop:paddingtop+'px'}}
    className='w-full hidden pointer-events-none relative mx-auto  items-center  justify-center md:flex '>
     <motion.div
     ref={videoRef}
    style={{scale:scale}}

     >
       
     <video src="timetravel.mp4" className='rounded-2xl ' autoPlay loop muted></video>
     </motion.div>
    </div>
   </div>
  )
}

export default AboutVideo
