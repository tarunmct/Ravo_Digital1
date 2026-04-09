import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  // Handle scroll visibility
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled past a certain point
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-[100px] right-6 z-40 bg-gradient-to-br from-gray-800/90 to-gray-700/90 hover:from-gray-700/95 hover:to-gray-600/95 backdrop-blur-md border border-white/10 hover:border-gray-500/50 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(253,205,45,0.25)] hover:-translate-y-1 transition-all duration-400 group"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <FiArrowUp className="w-5 h-5 group-hover:text-[#fdcd2d] transition-colors duration-400" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
