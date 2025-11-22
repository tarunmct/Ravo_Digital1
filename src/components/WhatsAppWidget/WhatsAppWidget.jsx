import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Replace this with your WhatsApp number (without + or spaces)
  const whatsappNumber = '1234567890'; // User will replace this with their number
  const message = 'Hello! I need support.';
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              onClick={() => setIsOpen(true)}
              className="group relative bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              {/* Pulsing Ring Animation */}
              <motion.div
                className="absolute inset-0 rounded-full bg-[#25D366]"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <FaWhatsapp className="w-8 h-8 relative z-10" />
              
              {/* Tooltip */}
              <motion.div
                className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={{ x: 10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
              >
                <span className="text-sm font-medium">Need Support?</span>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-8 border-transparent border-l-gray-900" />
              </motion.div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Expanded Widget */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="bg-white rounded-2xl shadow-2xl overflow-hidden w-80"
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="bg-[#25D366] p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <FaWhatsapp className="w-7 h-7 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Ravo Digitals</h3>
                    <p className="text-white/90 text-sm">Typically replies instantly</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 bg-gray-50">
                <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                  <p className="text-gray-700 text-sm mb-2">
                    👋 <strong>Hi there!</strong>
                  </p>
                  <p className="text-gray-600 text-sm">
                    How can we help you today? Click the button below to start a conversation with us on WhatsApp.
                  </p>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <motion.button
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>Start Chat</span>
                  </motion.button>
                </a>

                <p className="text-center text-gray-500 text-xs mt-3">
                  We'll respond as soon as possible
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default WhatsAppWidget;
