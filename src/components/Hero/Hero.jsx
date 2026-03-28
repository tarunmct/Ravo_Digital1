import React from 'react'
import { Link } from 'react-router-dom'
import HeroImg from '../../assets/1.png'
import {motion} from 'framer-motion'
import { slideUp } from '../../utility/animation'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () => {
  return (
    <>
      <div className="container mx-auto pb-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] items-center">
          {/*Text Content Section */}
          <div className='space-y-5 flex flex-col justify-center
          items-center text-center md:text-left px-6 sm:px-8 md:px-0 md:pr-12 lg:pr-24 md:items-start'>
            <motion.h1 
            variants={slideUp(0.2)} 
            initial="initial" 
            animate='animate'  
            className='text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight'>
           Grow Your Business with Smart Digital
           {" "}
            <span className='text-[#fdcd2d] 
            underline'>Solutions</span>
            </motion.h1>
            <motion.p variants={slideUp(0.4)} 
            initial="initial" 
            animate='animate' className='text-lg md:text-xl lg:text-2xl font-normal text-gray-700 leading-relaxed' >
             From branding to performance ads, we help you reach the right audience with measurable outcomes.
            </motion.p>
            <Link to="/contact" className="inline-block">
              <motion.button
                variants={slideUp(0.6)} 
                initial="initial" 
                animate='animate'
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                style={{ willChange: 'transform' }}
                className='group relative px-8 py-4 bg-gray-900 text-white font-semibold text-lg rounded-lg
                hover:bg-[#fdcd2d] hover:text-gray-900 transition-all duration-300 ease-out
                shadow-lg hover:shadow-xl flex items-center gap-3
                border-2 border-transparent hover:border-[#fdcd2d]'
              >
                <span className="relative z-10">For More Info</span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                  <FiArrowRight className="w-5 h-5" />
                </span>
              </motion.button>
            </Link>
           </div>
          {/*Hero Image Section */}
          <div className='flex justify-center items-center'>
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -15, 0],
              }}
              transition={{ 
                opacity: { duration: 0.6, delay: 0.3, ease: "easeOut" },
                x: { duration: 0.6, delay: 0.3, ease: "easeOut" },
                y: { 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.9 
                }
              }}
              viewport={{ once: true }}
              style={{ willChange: 'transform, opacity' }}
              src={HeroImg} 
              alt="Business Growth Illustration" 
              className='w-[85%] md:max-w-[500px] lg:max-w-[550px] xl:w-[600px]'
              loading="eager"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
