import React from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '../utility/animation';
import { Link } from 'react-router-dom';

const DigitalMarketing = () => {
  const services = [
    {
      title: 'Search Engine Optimization (SEO)',
      description: 'Boost your website visibility and rank higher on search engines with our proven SEO strategies.',
      icon: '🔍',
    },
    {
      title: 'Social Media Marketing',
      description: 'Engage your audience across all platforms with compelling content and strategic campaigns.',
      icon: '📱',
    },
    {
      title: 'Pay-Per-Click (PPC) Advertising',
      description: 'Maximize ROI with targeted PPC campaigns that drive qualified leads to your business.',
      icon: '📊',
    },
    {
      title: 'Content Marketing',
      description: 'Create valuable, engaging content that attracts and converts your target audience.',
      icon: '✍️',
    },
    {
      title: 'Email Marketing',
      description: 'Build lasting relationships with automated email campaigns that nurture leads.',
      icon: '📧',
    },
    {
      title: 'Analytics & Reporting',
      description: 'Track performance with detailed analytics and actionable insights for continuous improvement.',
      icon: '📈',
    },
  ];

  const benefits = [
    'Increased brand visibility',
    'Higher conversion rates',
    'Better ROI tracking',
    'Expert team guidance',
    'Customized strategies',
    '24/7 campaign monitoring',
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={slideUp(0.2)}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <h1 className="text-4xl xl:text-5xl font-bold">
              Digital <span className="text-gray-400 underline">Marketing</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Elevate your brand's online presence and reach your target audience effectively. 
              Our comprehensive digital marketing services are designed to drive growth, increase 
              engagement, and maximize your ROI.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From search engine optimization to social media management, we create data-driven 
              strategies that deliver measurable results for your business.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gray-900 hover:bg-[#fdcd2d] text-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Get Started Today
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center items-center"
          >
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl p-8 w-full max-w-lg relative overflow-hidden">
              <svg viewBox="0 0 400 500" className="w-full h-full">
                {/* Paper Airplanes */}
                <g opacity="0.8">
                  <path d="M80 60 L95 80 L80 85 Z" fill="#87CEEB" stroke="#4682B4" strokeWidth="1"/>
                  <path d="M110 50 L125 70 L110 75 Z" fill="#E0F2F1" stroke="#87CEEB" strokeWidth="1"/>
                  <path d="M70 80 L85 100 L70 105 Z" fill="#87CEEB" stroke="#4682B4" strokeWidth="1"/>
                </g>

                {/* Purple Gear Icon - Top Right */}
                <g transform="translate(280, 50)">
                  <circle cx="0" cy="0" r="25" fill="#7B2CBF" opacity="0.9"/>
                  <circle cx="0" cy="0" r="15" fill="#FFFFFF"/>
                  <path d="M0,-25 L0,-20 M0,20 L0,25 M-25,0 L-20,0 M20,0 L25,0 M-17.7,-17.7 L-14.1,-14.1 M14.1,14.1 L17.7,17.7 M-17.7,17.7 L-14.1,14.1 M17.7,-17.7 L14.1,-14.1" stroke="#7B2CBF" strokeWidth="2"/>
                  <circle cx="0" cy="0" r="8" fill="#7B2CBF"/>
                </g>

                {/* Video/Content Card - Middle Right */}
                <g transform="translate(290, 200)">
                  <rect x="0" y="0" width="60" height="45" rx="5" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="2"/>
                  <polygon points="20,15 20,30 30,22.5" fill="#3B82F6"/>
                  <line x1="35" y1="12" x2="50" y2="12" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="35" y1="18" x2="50" y2="18" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="35" y1="24" x2="50" y2="24" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
                </g>

                {/* Image/Gallery Card - Bottom Left */}
                <g transform="translate(30, 380)">
                  <rect x="0" y="0" width="50" height="40" rx="5" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="2"/>
                  <path d="M15,15 L25,10 L35,15 L35,30 L25,35 L15,30 Z" fill="#FFA500" opacity="0.6"/>
                  <circle cx="25" cy="18" r="3" fill="#FFD700"/>
                </g>

                {/* Male Figure - Left Side */}
                <g transform="translate(50, 250)">
                  {/* Body */}
                  <rect x="15" y="80" width="25" height="40" rx="3" fill="#FF6B35"/>
                  <rect x="20" y="75" width="15" height="15" rx="7" fill="#FFE5D9"/>
                  {/* Arms */}
                  <rect x="10" y="85" width="8" height="25" rx="4" fill="#FFE5D9"/>
                  <rect x="37" y="85" width="8" height="25" rx="4" fill="#FFE5D9"/>
                  {/* Legs */}
                  <rect x="18" y="120" width="8" height="35" rx="4" fill="#7B2CBF"/>
                  <rect x="29" y="120" width="8" height="35" rx="4" fill="#7B2CBF"/>
                  {/* Pointer Stick */}
                  <line x1="50" y1="100" x2="120" y2="140" stroke="#333" strokeWidth="3" strokeLinecap="round"/>
                  <polygon points="115,137 120,140 117,145" fill="#333"/>
                </g>

                {/* Female Figure - Right Side */}
                <g transform="translate(290, 250)">
                  {/* Body */}
                  <rect x="10" y="80" width="25" height="40" rx="3" fill="#87CEEB"/>
                  <rect x="15" y="75" width="15" height="15" rx="7" fill="#FFE5D9"/>
                  {/* Arms - Raised */}
                  <g transform="translate(9, 90) rotate(-20)">
                    <rect x="-4" y="-10" width="8" height="20" rx="4" fill="#FFE5D9"/>
                  </g>
                  <g transform="translate(36, 90) rotate(20)">
                    <rect x="-4" y="-10" width="8" height="20" rx="4" fill="#FFE5D9"/>
                  </g>
                  {/* Legs */}
                  <rect x="13" y="120" width="8" height="35" rx="4" fill="#DC2626"/>
                  <rect x="24" y="120" width="8" height="35" rx="4" fill="#DC2626"/>
                </g>

                {/* Dark Purple Smartphone - Center */}
                <g transform="translate(150, 100)">
                  {/* Phone Body */}
                  <rect x="0" y="0" width="100" height="200" rx="12" fill="#4A148C" stroke="#333" strokeWidth="3"/>
                  <rect x="5" y="25" width="90" height="165" rx="8" fill="#E8F4F8"/>
                  
                  {/* Screen Content - Bar Chart */}
                  <g transform="translate(15, 40)">
                    {/* Bar Chart Bars */}
                    <rect x="0" y="40" width="12" height="40" fill="#3B82F6" rx="2"/>
                    <rect x="15" y="25" width="12" height="55" fill="#FBBF24" rx="2"/>
                    <rect x="30" y="20" width="12" height="60" fill="#F97316" rx="2"/>
                    <rect x="45" y="35" width="12" height="45" fill="#7B2CBF" rx="2"/>
                    
                    {/* Line Graph Overlay */}
                    <polyline points="6,60 21,45 36,40 51,55" fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="6" cy="60" r="3" fill="#3B82F6"/>
                    <circle cx="21" cy="45" r="3" fill="#3B82F6"/>
                    <circle cx="36" cy="40" r="3" fill="#3B82F6"/>
                    <circle cx="51" cy="55" r="3" fill="#3B82F6"/>
                  </g>

                  {/* Circular Charts Below Bar Chart */}
                  <g transform="translate(20, 130)">
                    {/* Chart 1 - Blue */}
                    <circle cx="10" cy="10" r="8" fill="none" stroke="#3B82F6" strokeWidth="4" strokeDasharray="20 15" transform="rotate(-90 10 10)"/>
                    <circle cx="10" cy="10" r="8" fill="none" stroke="#E0E0E0" strokeWidth="4" strokeDasharray="15 20" transform="rotate(70 10 10)"/>
                    
                    {/* Chart 2 - Yellow */}
                    <circle cx="35" cy="10" r="8" fill="none" stroke="#FBBF24" strokeWidth="4" strokeDasharray="18 17" transform="rotate(-90 35 10)"/>
                    <circle cx="35" cy="10" r="8" fill="none" stroke="#E0E0E0" strokeWidth="4" strokeDasharray="17 18" transform="rotate(72 35 10)"/>
                    
                    {/* Chart 3 - Orange */}
                    <circle cx="60" cy="10" r="8" fill="none" stroke="#F97316" strokeWidth="4" strokeDasharray="22 13" transform="rotate(-90 60 10)"/>
                    <circle cx="60" cy="10" r="8" fill="none" stroke="#E0E0E0" strokeWidth="4" strokeDasharray="13 22" transform="rotate(68 60 10)"/>
                  </g>
                </g>

                {/* Megaphone - Bottom Center */}
                <g transform="translate(180, 340)">
                  <path d="M0,0 L20,10 L20,30 L0,40 Z" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="2"/>
                  <path d="M0,10 Q-10,15 -10,20 Q-10,25 0,30" fill="#DC2626" stroke="#B91C1C" strokeWidth="2"/>
                  <ellipse cx="10" cy="20" rx="8" ry="15" fill="#FFFFFF" opacity="0.3"/>
                  
                  {/* Bar Chart Coming Out */}
                  <g transform="translate(25, 15)">
                    <rect x="0" y="8" width="6" height="12" fill="#3B82F6" rx="1"/>
                    <rect x="8" y="5" width="6" height="15" fill="#FBBF24" rx="1"/>
                    <rect x="16" y="3" width="6" height="17" fill="#F97316" rx="1"/>
                  </g>
                </g>
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl xl:text-5xl font-bold mb-4">
              Our Digital Marketing <span className="text-gray-400 underline">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to boost your online presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl xl:text-5xl font-bold mb-6">
                Why Choose Our <span className="text-gray-400 underline">Services</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We combine creativity with data-driven strategies to deliver exceptional results 
                that drive growth and engagement for your business.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-[#fdcd2d] rounded-full"></div>
                  <p className="text-lg font-medium text-gray-800">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-4xl xl:text-5xl font-bold">
              Ready to Grow Your <span className="text-[#fdcd2d] underline">Digital Presence</span>?
            </h2>
            <p className="text-xl text-gray-300">
              Let's work together to create a digital marketing strategy that drives real results 
              for your business.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#fdcd2d] hover:bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 mt-6"
            >
              Contact Us for a Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
