"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ImageCarousel from "./images";

const ScrollImage = () => {
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:['start end' ,'25% 25%']
    });
    const rotateX = useTransform(scrollYProgress,[0,1], [14, 0])
    const scale = useTransform(scrollYProgress,[0,1], [1.2, .7])
    const opacity = useTransform(scrollYProgress,[0,1], [.9, 1])
    const reverseOpacity = useTransform(scrollYProgress,[0,1], [2, 0])
    return (
 <>
   <motion.div
         ref={ref}
             style={{
             transformPerspective: '800px',
             rotateX,
             scale,
             opacity
            }}
            className="relative "
         >
            <div className="w-full h-10 bg-purple-300 absolute -top-5 blur-xl"></div>
            <motion.p
            style={{
                opacity: reverseOpacity
            }}
            className="text-center absolute z-10 bg-zinc-50 p-1 rounded-full left-2 top-2">Screenshots</motion.p>
           <ImageCarousel/>
         </motion.div>
 </>
  )
}

export default ScrollImage