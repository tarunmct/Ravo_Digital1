import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiAlertCircle } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#fdcd2d]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-[180px] md:text-[250px] font-black leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fdcd2d] via-yellow-400 to-orange-500">
              404
            </span>
          </h1>
        </motion.div>

        {/* Error Icon */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#fdcd2d]/20 rounded-full">
            <FiAlertCircle className="w-10 h-10 text-[#fdcd2d]" />
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Oops! The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, we'll help you get back on track.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/">
            <motion.button
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#fdcd2d] hover:bg-yellow-400 text-gray-900 font-bold rounded-full transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full ease-out duration-500 transition-transform skew-x-12 origin-left" />
              <span className="relative flex items-center gap-2">
                <FiHome className="w-5 h-5" />
                Back to Home
              </span>
            </motion.button>
          </Link>

          <Link to="/contact">
            <motion.button
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#fdcd2d] text-[#fdcd2d] hover:bg-[#fdcd2d] hover:text-gray-900 font-bold rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support
            </motion.button>
          </Link>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <p className="text-gray-400 mb-4">You might be looking for:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { name: 'Digital Marketing', path: '/digital-marketing' },
              { name: 'IT Services', path: '/it-services' },
              { name: 'Event Management', path: '/event-management' },
              { name: 'About Us', path: '/about' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-300 hover:text-[#fdcd2d] transition-colors duration-300 underline"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
