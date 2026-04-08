import React from 'react'

import BannerImg from '../../assets/Ravo.png'
import {motion} from 'framer-motion'
import { slideUp } from '../../utility/animation'

const Banner = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 py-10 lg:pt-20 lg:pb-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/*Text Content Section */}
          <div className='flex-1 space-y-8 flex flex-col justify-center
          items-center text-center md:text-left py-10 md:py-0 md:items-start'>
            <motion.h1 
            variants={slideUp(0.2)} 
            initial="initial" 
            whileInView='animate'  
            viewport={{ once: true }}
            className='text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight
            text-black/80'>
            Be like a sparrow and get out from the{" "}
            <span className='text-[#fdcd2d]  
            underline'>trap</span>
            </motion.h1>
            
            <motion.p 
            variants={slideUp(0.4)} 
            initial="initial" 
            whileInView='animate'
            viewport={{ once: true }}
            className='text-xl text-gray-600 leading-relaxed'
            >
              Step out of boundaries that hold you back. <br />
              Take the leap, trust your wings, and rise with purpose with Ravo by your side.
            </motion.p>
            <motion.p 
            variants={slideUp(0.6)} 
            initial="initial" 
            whileInView='animate'
            viewport={{ once: true }}
            className='text-xl text-gray-600 leading-relaxed'
            >
              Break free from the patterns that limit your vision. Every bold step begins with the decision to move beyond comfort. Rise above doubts, embrace clarity, and chase the heights waiting for you. With Ravo, every idea finds direction, every move gains momentum, and every vision turns into purposeful progress.
            </motion.p>
           </div>
          {/*Hero Image Section */}
          <div className='flex justify-center items-center'>
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              style={{ willChange: 'transform, opacity' }}
              src={BannerImg} 
              alt="Ravo - Success and Innovation" 
              className='w-[85%] md:max-w-[500px] lg:max-w-[550px] xl:w-[600px]' 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
