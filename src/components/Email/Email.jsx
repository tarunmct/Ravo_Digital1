import React from 'react'

import FooterImg from '../../assets/5.png'
import { motion } from 'framer-motion';

const bgStyle = {
    backgroundImage: `url(${FooterImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
}
const Email = () => {
  return (
    <div style={bgStyle}>
      <motion.div 
      initial={{opacity:0, scale:0.5}}
      whileInView={{opacity:1,scale:1}}
      className="container mx-auto text-center space-y-6
      py-5">
        <div className='space-y-4'>
            <p className='text-3xl md:text-4xl font-bold'>Don't Miss Out</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Email
