import React from 'react'
import ServiceImg from '../../assets/2.png'
import DiscoverImg from '../../assets/Discover.png'
import StrategyImg from '../../assets/Strategy.png'
import LaunchImg from '../../assets/Launch.png'
import ExecuteImg from '../../assets/Execute.png'
import { motion } from 'framer-motion'

const Service = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-12 overflow-hidden">
        {/* Header Section */}
        <motion.div 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          viewport={{ once: true }}
          className='py-4 text-center mb-8'>
          <h1 className='text-4xl xl:text-5xl font-bold'>
            How to Spark Your <span className='text-[#fdcd2d]'>Brand</span>
          </h1>
        </motion.div>

        {/* Radial Layout - Desktop Only (lg and above) */}
        <div className="hidden lg:block relative max-w-7xl mx-auto py-20 lg:py-28">
          {/* Central Image */}
          <motion.div
            initial={{opacity:0, scale:0.8}}
            whileInView={{opacity:1, scale:1}}
            viewport={{ once: true }}
            transition={{duration:0.6}}
            className="relative z-10 mx-auto w-[280px] sm:w-[350px] lg:w-[450px]"
          >
            <div className="bg-white rounded-3xl p-6 shadow-2xl border-4 border-[#fdcd2d]">
              <img 
                src={ServiceImg} 
                alt="Spark Your Brand" 
                className='w-full h-auto'
              />
            </div>
          </motion.div>

          {/* Discover - Top Left */}
          <motion.div 
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:1, x:0}}
            viewport={{ once: true }}
            transition={{duration:0.5, delay:0.2}}
            className='absolute top-0 left-4 lg:left-0 max-w-[250px] lg:max-w-[300px]'>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative z-20">
              <img className='w-28 lg:w-32 -mt-2 -mb-6 lg:-mb-8 -ml-3' src={DiscoverImg} alt="Discover" />
              <p className='uppercase font-bold text-xl mb-3'>Discover</p>
              <p className='text-gray-600 text-base leading-relaxed'>
                At Ravo, discovery is where clarity begins. We dive deep into your brand, your audience, and your goals.
              </p>
            </div>
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-[60%] left-full w-24 h-0.5 bg-[#fdcd2d]/40 -ml-2"></div>
          </motion.div>

          {/* Strategy - Top Right */}
          <motion.div 
            initial={{opacity:0, x:50}}
            whileInView={{opacity:1, x:0}}
            viewport={{ once: true }}
            transition={{duration:0.5, delay:0.3}}
            className='absolute top-0 right-4 lg:right-0 max-w-[250px] lg:max-w-[300px]'>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative z-20">
              <img className='w-28 lg:w-32 -mt-2 -mb-6 lg:-mb-8 -ml-3' src={StrategyImg} alt="Strategy" />
              <p className='uppercase font-bold text-xl mb-3'>Strategy</p>
              <p className='text-gray-600 text-base leading-relaxed'>
                Strategy means clarity. We focus on understanding your goals and creating effective plans that lead to real results.
              </p>
            </div>
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-[60%] right-full w-24 h-0.5 bg-[#fdcd2d]/40 -mr-2"></div>
          </motion.div>

          {/* Launch - Bottom Left */}
          <motion.div 
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:1, x:0}}
            viewport={{ once: true }}
            transition={{duration:0.5, delay:0.4}}
            className='absolute bottom-0 left-4 lg:left-0 max-w-[250px] lg:max-w-[300px]'>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative z-20">
              <img className='w-28 lg:w-32 -mt-2 -mb-6 lg:-mb-8 -ml-3' src={LaunchImg} alt="Launch" />
              <p className='uppercase font-bold text-xl mb-3'>Launch</p>
              <p className='text-gray-600 text-base leading-relaxed'>
                Launching is delivering your brand to the world with confidence. We ensure your launch creates impact from day one.
              </p>
            </div>
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-[40%] left-full w-24 h-0.5 bg-[#fdcd2d]/40 -ml-2"></div>
          </motion.div>

          {/* Execute - Bottom Right */}
          <motion.div 
            initial={{opacity:0, x:50}}
            whileInView={{opacity:1, x:0}}
            viewport={{ once: true }}
            transition={{duration:0.5, delay:0.5}}
            className='absolute bottom-0 right-4 lg:right-0 max-w-[250px] lg:max-w-[300px]'>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative z-20">
              <img className='w-28 lg:w-32 -mt-2 -mb-6 lg:-mb-8 -ml-3' src={ExecuteImg} alt="Execute" />
              <p className='uppercase font-bold text-xl mb-3'>Execute</p>
              <p className='text-gray-600 text-base leading-relaxed'>
                Execution is where plans turn into action. We bring strategy to life with precision and attention to detail.
              </p>
            </div>
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-[40%] right-full w-24 h-0.5 bg-[#fdcd2d]/40 -mr-2"></div>
          </motion.div>
        </div>

        {/* Mobile View - Stacked Layout */}
        <div className="lg:hidden mt-12 space-y-6">
          <motion.div 
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            viewport={{ once: true }}
            transition={{duration:0.5}}
            className='max-w-[350px] mx-auto'>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <img className='w-28 lg:w-32 -mt-2 -mb-6 -ml-3' src={DiscoverImg} alt="Discover" />
              <p className='uppercase font-bold text-lg mb-2'>Discover</p>
              <p className='text-gray-600 text-sm leading-relaxed'>
                At Ravo, discovery is where clarity begins. We dive deep into your brand, your audience, and your goals to uncover meaningful insights.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            viewport={{ once: true }}
            transition={{duration:0.5, delay:0.1}}
            className='max-w-[350px] mx-auto'>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <img className='w-28 lg:w-32 -mt-2 -mb-6 -ml-3' src={StrategyImg} alt="Strategy" />
              <p className='uppercase font-bold text-lg mb-2'>Strategy</p>
              <p className='text-gray-600 text-sm leading-relaxed'>
                Strategy means clarity. We focus on understanding your goals, shaping a clear direction, and creating effective plans that lead to real results.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            viewport={{ once: true }}
            transition={{duration:0.5, delay:0.2}}
            className='max-w-[350px] mx-auto'>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <img className='w-28 lg:w-32 -mt-2 -mb-6 -ml-3' src={LaunchImg} alt="Launch" />
              <p className='uppercase font-bold text-lg mb-2'>Launch</p>
              <p className='text-gray-600 text-sm leading-relaxed'>
                Launching is more than going live, it's delivering your brand to the world with confidence. We prepare every detail for the right impact.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            viewport={{ once: true }}
            transition={{duration:0.5, delay:0.3}}
            className='max-w-[350px] mx-auto'>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <img className='w-28 lg:w-32 -mt-2 -mb-6 -ml-3' src={ExecuteImg} alt="Execute" />
              <p className='uppercase font-bold text-lg mb-2'>Execute</p>
              <p className='text-gray-600 text-sm leading-relaxed'>
                Execution is where ideas turn into action. We bring strategy to life with precision, ensuring every step delivers measurable results.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Service
