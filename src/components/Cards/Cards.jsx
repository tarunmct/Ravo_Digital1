import React from 'react';
import { Link } from 'react-router-dom';
import Img1 from '../../assets/icon/1.png';
import Img2 from '../../assets/icon/2.png';
import Img3 from '../../assets/icon/3.png';
import { slideUp } from '../../utility/animation';
import { motion } from 'framer-motion';

const Cards = () => {
  return (
    <div className='bg-gray-50'>
      <div className='container mx-auto py-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>

          {/* Card 1 */}
          <motion.div
            variants={slideUp(0.2)}
            initial="initial"
            whileInView='animate'
            className='bg-white shadow-xl rounded-xl px-6 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[300px] mx-auto transition-transform duration-300 hover:scale-105'
          >
            <div className='w-24 h-24 bg-black rounded-full flex items-center justify-center'>
              {/* === FIX: Increased icon size from w-10 h-10 to w-14 h-14 === */}
              <img src={Img1} alt="Digital Marketing" className='w-100 h-109 object-contain' />
            </div>
            <p className='text-xl font-semibold'>Digital Marketing</p>
            <p className='text-sm text-black/80 leading-relaxed'>
            We have done the practice of promoting products or services using digital channels like social media, search engines, websites, email, and online advertising.
            We focuse on reaching the right audience at the right time,through data-driven strategies.
            </p>
            <Link to="/digital-marketing" className='hover:text-[#fdcd2d] font-medium transition-colors'>Learn More</Link>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={slideUp(0.4)}
            initial="initial"
            whileInView='animate'
            className='bg-white shadow-xl rounded-xl px-6 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[300px] mx-auto transition-transform duration-300 hover:scale-105'
          >
            <div className='w-24 h-24 bg-black rounded-full flex items-center justify-center'>
              {/* === FIX: Increased icon size from w-10 h-10 to w-14 h-14 === */}
              <img src={Img2} alt="IT Services" className='w-100 h-100 object-contain' />
            </div>
            <p className='text-xl font-semibold'>IT Services</p>
            <p className='text-sm text-black/80 leading-relaxed'>
            We provide Services refer to the planning, implementation, management, and support of technology systems that help businesses run efficiently.
            We ensure smooth operations, secure data handling, and continuous business growth through reliable tech solutions.
            </p>
            <Link to="/it-services" className='hover:text-[#fdcd2d] font-medium transition-colors'>Learn More</Link>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={slideUp(0.6)}
            initial="initial"
            whileInView='animate'
            className='bg-white shadow-xl rounded-xl px-6 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[300px] mx-auto transition-transform duration-300 hover:scale-105'
          >
            <div className='w-24 h-24 bg-black rounded-full flex items-center justify-center'>
              {/* === FIX: Increased icon size from w-10 h-10 to w-14 h-14 === */}
              <img src={Img3} alt="Branding" className='w-100 h-100 object-contain' />
            </div>
            <p className='text-xl font-semibold'>Event Management</p>
            <p className='text-sm text-black/80 leading-relaxed'>
            We are hero of planning, organizing, and executing events such as corporate meetings, weddings, parties, conferences, and brand activations.
            We  involves coordinating logistics, design, vendors, budgeting, timelines, and overall event experience.
            </p>
            <Link to="/event-management" className='hover:text-[#fdcd2d] font-medium transition-colors'>Learn More</Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Cards;