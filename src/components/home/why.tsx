"use client"
import { motion} from 'framer-motion';
import Features from './features';
import {useRef } from 'react';

const WhyZatura = () => {
  const ref = useRef(null)
  const containerVariants = {
    hidden:{opactiy:0},
    show:{
      opacity:1,
      transition:{
        duration:.2,
        staggerChildren: 0.007
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };
  const descVariants = {
    hidden: { opacity: 0, },
    show: { opacity: 1, transition: { duration: 0.2 } }
  }
  return (

    <motion.div
    
    ref={ref}
    className='w-full relative sm:px-20 px-5 py-20 flex flex-col justify-center items-center'>
      <motion.div
        className='absolute hidden lg:flex w-[200px] h-fit   -rotate-12 top-40 left-40'
        drag
        dragSnapToOrigin
        style={{
          rotate: '-12deg'
        }}
        animate={{
          y: [0, -10, 0, 10, 0],       
          rotate: [13, 12, -12, 12, -10], 
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity
        }}
      >
        <img src="./bento/bento(1).png" alt="bento" className='w-[200px] pointer-events-none'  draggable='false'/>
      </motion.div>

      <motion.div
        className='absolute hidden lg:flex w-[200px] rotate-12 top-[6rem] right-40'
        drag
        dragSnapToOrigin
        style={{
          rotate: '12deg'
        }}
        animate={{
          y: [0, -10, 0, 10, 0],       
          rotate: [12, -12, 12, -12, 8], 
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity
        }}
        
      >
        <img src="./bento/bento(2).png" alt="bento" className='w-[200px]'   draggable='false'/>
      </motion.div>

      <motion.div
        className='absolute hidden lg:flex w-[200px] rotate-6 bottom-20 left-40'
        drag
        dragSnapToOrigin
        style={{
          rotate: '6deg'
        }}
        animate={{
          y: [0, -10, 0, 10, 0],       
          rotate: [3, 6, -6, 6, -5], 
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity
        }}
      >

        <img src="./bento/bento(3).png" alt="bento" className='w-[200px]'  draggable='false'/>
      </motion.div>

      <motion.div
        className='absolute hidden lg:flex w-[200px] -rotate-12 bottom-20 right-[7rem]'
        drag
        dragSnapToOrigin
        style={{
          rotate: '-12deg'
        }}
        animate={{
          y: [0, -10, 0, 10, 0],       
          rotate: [13, 12, -12, 12, -10], 
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity
        }}
      >
        <img src="./bento/bento(4).png" alt="bento" className='w-[200px]'  draggable='false'/>
      </motion.div>
      <motion.h1
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}

      className='sm:text-[4vw] text-4xl text-start dm-sans'>
        {Array.from('Why use ZathuraDbg?').map((e,i)=>{
          return <motion.span
          key={i}
           variants={itemVariants}
           >{e}</motion.span>
        })}
      </motion.h1>
      
      <div className="flex flex-col relative items-start justify-center">
        <motion.p
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='max-w-xl text-sm text-zinc-500 py-4 text-center'>
          {Array.from('ZathuraDbg is a versatile, friendly and easy-to-use tool to learn and debug assembly on the go, without having to setup multiple tools just to get started!').map((e,i)=>{
            return <motion.span
            variants={descVariants}
            key={i}>
              {e}
            </motion.span>
          })}
        </motion.p>
      </div>

      <Features />
    </motion.div>
  );
};

export default WhyZatura;
