import React from 'react'
import { Link } from 'react-router-dom'
import HeroImg from '../../assets/Home Page 1st pic.png'
import RocketImg from '../../assets/Rocket.png'
import {motion} from 'framer-motion'
import { slideUp } from '../../utility/animation'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 pb-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] items-center">
          {/*Text Content Section */}
          <div className='space-y-5 flex flex-col justify-center
          items-center text-center md:text-left md:pl-4 lg:pl-5 md:pr-12 lg:pr-24 md:items-start'>
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
          <div className='flex justify-center md:justify-end lg:justify-end items-center'>
            <div className='relative w-[85%] md:max-w-[500px] lg:max-w-[550px] xl:w-[600px]'>
              <motion.img
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.3, ease: "easeOut" },
                  x: { duration: 0.6, delay: 0.3, ease: "easeOut" }
                }}
                viewport={{ once: true }}
                style={{ willChange: 'transform, opacity' }}
                src={HeroImg} 
                alt="Business Growth Illustration" 
                className='w-full relative z-10'
                loading="eager"
              />
              {/* Rocket Image */}
              <motion.img
                src={RocketImg}
                alt="Rocket"
                initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -15, 0],
                  rotate: [15, 17, 15]
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.8 },
                  scale: { duration: 0.5, delay: 0.8 },
                  y: {
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.3
                  },
                  rotate: {
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.3
                  }
                }}
                className='absolute top-12 -right-1 md:top-16 md:right-1 lg:top-20 lg:right-4 w-[235px] md:w-[340px] lg:w-[425px] xl:w-[485px] z-20 pointer-events-none'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Hero
