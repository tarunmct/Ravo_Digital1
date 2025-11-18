import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.1 
      } 
    },
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/digital-marketing' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ];

  const services = [
    { name: 'Digital Marketing', href: '/digital-marketing' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Event Management', href: '/event-management' },
    { name: 'Web Development', href: '#' },
    { name: 'App Development', href: '#' },
    { name: 'SEO Optimization', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* Company Info */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#fdcd2d] to-yellow-400 bg-clip-text text-transparent">
                Ravo Digitals
              </h3>
            </motion.div>
            
            <p className="text-gray-300 leading-relaxed mb-6 text-balance">
              Transforming businesses through innovative digital solutions. We specialize in cutting-edge 
              technology services that drive growth and success in the digital age.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <FaPhone className="w-4 h-4 text-[#fdcd2d]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <FaEnvelope className="w-4 h-4 text-[#fdcd2d]" />
                <span>hello@ravodigitals.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <FaMapMarkerAlt className="w-4 h-4 text-[#fdcd2d]" />
                <span>123 Business Ave, Suite 100</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-[#fdcd2d] transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#fdcd2d] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href}
                    className="text-gray-300 hover:text-[#fdcd2d] transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#fdcd2d] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">Stay Updated</h4>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-gray-300 mb-4 text-sm">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <div className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#fdcd2d] focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400"
                />
                <button className="bg-[#fdcd2d] hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-300 mb-4 text-sm">Follow us on social media</p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-700 hover:bg-[#fdcd2d] rounded-lg flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-gray-300 group-hover:text-gray-900 transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Ravo Digitals. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="#" className="hover:text-[#fdcd2d] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-[#fdcd2d] transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="#" className="hover:text-[#fdcd2d] transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-[#fdcd2d] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;