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
    <div className="container mx-auto py-6 overflow-hidden">
        {/*Header Section*/}
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        className='py-6 flex justify-between items-center'>
            <h1 className='text-4xl xl:text-5xl font-bold
            max-w-[550px]'>How to Spark Your <br /> <span className='text-[#fdcd2d]  
            underline'>Brand</span>
            </h1>
        </motion.div>
        {/*Cards Section*/}

        <div className='grid grid-cols-1
        sm:grid-cols-2 gap-8'>
          <motion.div
          initial={{opacity:0,x:100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.5,delay:0.2}}
          className='sm:row-span-2'>
            <img src={ServiceImg} alt="Digital marketing services illustration" className='w-[300px] mx-auto sm:w-full'/>
          </motion.div>
          <motion.div 
          initial={{opacity:0,x:100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.5,delay:0.4}}
          className='max-w-[300px] mx-auto pt-10'>
            <img className='w-24 mb-[-10px]' src={DiscoverImg} alt="Discover phase icon" />
            <p className='uppercase font-semibold
            text-lg'>Discover</p>
            <p className='text-gray-500 pl-6 border-l-2'>
            At Ravo, discovery is where clarity begins. We dive deep into your brand, your audience, and your goals to uncover meaningful insights. This foundation helps us create strategies and solutions that truly align with your vision.
            </p>
            </motion.div>
            <motion.div 
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.5,delay:0.4}}
            className='max-w-[300px] mx-auto pt-10'>
            <img className='w-24 mb-[-10px]' src={StrategyImg} alt="Strategy phase icon" />
            <p className='uppercase font-semibold
            text-lg'>Strategy</p>
            <p className='text-gray-500 pl-6 border-l-2'>
            strategy means clarity. We focus on understanding your goals, shaping a clear direction, and creating simple, effective plans that lead to real results. Every move is intentional, every idea has purpose, and every decision pushes your brand forward with confidence.
            </p>
            </motion.div>
            <motion.div 
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.5,delay:0.5}}
            className='max-w-[300px] mx-auto'>
            <img className='w-24 mb-[-10px]' src={LaunchImg} alt="Launch phase icon" />
            <p className='uppercase font-semibold
            text-lg'>Launch</p>
            <p className='text-gray-500 pl-6 border-l-2'>
            launching is more than going live, it’s delivering your brand to the world with confidence. We prepare every detail, refine every touchpoint, and ensure your launch creates the right impact from day one.
            </p>
            </motion.div>
            <motion.div 
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.5,delay:0.7}}
            className='max-w-[300px] mx-auto'>
            <img className='w-24 mb-[-10px]' src={ExecuteImg} alt="Execute phase icon" />
            <p className='uppercase font-semibold
            text-lg'>Execute</p>
            <p className='text-gray-500 pl-6 border-l-2'>
            Execution is where ideas turn into action. We bring strategy to life with precision, consistency, and attention to detail ensuring every step delivers real, measurable results for your brand.
            </p>
            </motion.div>

          </div>
        </div>
    </>
  )
}

export default Service
