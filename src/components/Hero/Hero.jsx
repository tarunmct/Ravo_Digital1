import React from 'react'
import { Link } from 'react-router-dom'
import HeroImg from '../../assets/1.png'
import {motion} from 'framer-motion'
import { slideUp } from '../../utility/animation'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () => {
  return (
    <>
      <div className="container mx-auto pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
          {/*Text Content Section */}
          <div className='space-y-5 flex flex-col justify-center
          items-center text-center md:text-left py-20 px-10 md:pr-24 md:py-0 md:px-0 md:items-start'>
            <motion.h1 
            variants={slideUp(0.2)} 
            initial="initial" 
            animate='animate'  
            className='text-4xl xl:text-5xl font-bold'>
           Grow Your Business with Smart Digital
           {" "}
            <span className='text-[#fdcd2d] 
            underline'>Solutions</span>
            </motion.h1>
            <motion.p variants={slideUp(0.4)} 
            initial="initial" 
            animate='animate'  >
             From branding to performance ads, we help you reach the right audience with measurable outcomes.
            </motion.p>
            <Link to="/about" className="inline-block">
              <motion.button
                variants={slideUp(0.6)} 
                initial="initial" 
                animate='animate'
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(253, 205, 45, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className='group relative px-8 py-4 bg-gray-900 text-white font-semibold text-lg rounded-lg
                hover:bg-[#fdcd2d] hover:text-gray-900 transition-all duration-300 ease-in-out
                shadow-lg hover:shadow-xl flex items-center gap-3 overflow-hidden
                border-2 border-transparent hover:border-[#fdcd2d]'
              >
                <span className="relative z-10">More News</span>
                <motion.span
                  className="relative z-10"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiArrowRight className="w-5 h-5" />
                </motion.span>
                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </motion.button>
            </Link>
           </div>
          {/*Hero Image Section */}
          <div className='flex justify-center
          items-center'>
            <motion.img
            initial={{
              opacity:0,
              x:100,
            }}
            animate={{
              opacity:1,
              x:0,
            }}
            transition={{duration:0.5, delay:0.5}}
            src={HeroImg} alt="" className='w-[80%]
            md:max-w-[550px] xl:w-[600px]' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
