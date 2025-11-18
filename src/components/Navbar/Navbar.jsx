import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/0.png';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (isDropdownOpen) {
      const handleClickOutside = (e) => {
        if (!e.target.closest('.relative')) {
          setIsDropdownOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isDropdownOpen]);

  const navLinks = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'About', path: '/about' },
    { id: 3, title: 'Services', path: '#' },
    { id: 4, title: 'Contact', path: '/contact' },
  ];

  const serviceLinks = [
    { path: '/digital-marketing', title: 'Digital Marketing' },
    { path: '/it-services', title: 'IT Services' },
    { path: '/event-management', title: 'Event Management' },
  ];

  const isActive = (path) => location.pathname === path;
  const isServiceActive = serviceLinks.some(link => isActive(link.path));

  return (
    <motion.nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg backdrop-blur-xl border-b border-gray-100'
          : 'bg-white/95 backdrop-blur-xl'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center group"
          >
            <motion.img 
              src={Logo} 
              alt="Ravo Digitals Logo" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <li key={link.id} className="relative">
                {link.title === 'Services' ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button
                      className={`px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 rounded-lg ${
                        isServiceActive
                          ? 'text-[#fdcd2d]'
                          : 'text-gray-700 hover:text-[#fdcd2d]'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {link.title}
                        <motion.span
                          animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-xs"
                        >
                          ▼
                        </motion.span>
                      </span>
                    </button>

                    {/* Active indicator for Services */}
                    {isServiceActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#fdcd2d] rounded-full"
                      />
                    )}

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden py-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {serviceLinks.map((service, index) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              onClick={() => setIsDropdownOpen(false)}
                              className={`block px-4 py-3 text-sm font-medium transition-all duration-200 relative group ${
                                isActive(service.path)
                                  ? 'text-[#fdcd2d] bg-yellow-50'
                                  : 'text-gray-700 hover:text-[#fdcd2d] hover:bg-gray-50'
                              }`}
                            >
                              <motion.span
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-2"
                              >
                                <span className={`w-1.5 h-1.5 rounded-full ${
                                  isActive(service.path) ? 'bg-[#fdcd2d]' : 'bg-gray-300 group-hover:bg-[#fdcd2d]'
                                } transition-colors`}></span>
                                {service.title}
                              </motion.span>
                              {isActive(service.path) && (
                                <motion.div
                                  layoutId="serviceActive"
                                  className="absolute left-0 top-0 bottom-0 w-1 bg-[#fdcd2d]"
                                />
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="relative px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 rounded-lg group"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive(link.path)
                          ? 'text-[#fdcd2d]'
                          : 'text-gray-700 group-hover:text-[#fdcd2d]'
                      }`}
                    >
                      {link.title}
                    </span>
                    
                    {/* Active underline */}
                    {isActive(link.path) && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#fdcd2d] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover underline effect */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#fdcd2d] rounded-full origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#fdcd2d] focus:ring-offset-2"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <ul className="py-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.title === 'Services' ? (
                      <div>
                        <button
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className={`w-full flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-lg transition-colors ${
                            isServiceActive
                              ? 'text-[#fdcd2d] bg-yellow-50'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <span>{link.title}</span>
                          <motion.span
                            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-xs"
                          >
                            ▼
                          </motion.span>
                        </button>
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <ul className="pl-4 mt-1 space-y-1">
                                {serviceLinks.map((service) => (
                                  <li key={service.path}>
                                    <Link
                                      to={service.path}
                                      onClick={() => {
                                        setIsDropdownOpen(false);
                                        setIsMobileMenuOpen(false);
                                      }}
                                      className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                                        isActive(service.path)
                                          ? 'text-[#fdcd2d] bg-yellow-50'
                                          : 'text-gray-600 hover:text-[#fdcd2d] hover:bg-gray-50'
                                      }`}
                                    >
                                      {service.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-3 text-sm font-semibold rounded-lg transition-colors ${
                          isActive(link.path)
                            ? 'text-[#fdcd2d] bg-yellow-50'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#fdcd2d]'
                        }`}
                      >
                        {link.title}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
