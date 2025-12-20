import React from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '../utility/animation';
import { Link } from 'react-router-dom';
import ITServicesImage from '../assets/IT Services.jpg';
import { FiCode, FiLayout, FiTrendingUp, FiRefreshCw } from 'react-icons/fi';
import MongoDBLogo from '../assets/MongoDB.png';
import ExpressLogo from '../assets/Express.png';
import ReactLogo from '../assets/React.png';
import NodeLogo from '../assets/Node.js.png';
import JavaLogo from '../assets/Java.png';
import AWSLogo from '../assets/AWS.png';

const ITServices = () => {
  const pillars = [
    {
      title: 'Custom Solutions',
      description: 'Tailored software solutions designed specifically for your business needs and requirements.',
      icon: FiCode,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'UI/UX Design',
      description: 'Intuitive and engaging user interfaces that provide exceptional user experiences.',
      icon: FiLayout,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Scalable Architecture',
      description: 'Build applications that grow with your business, ensuring performance at any scale.',
      icon: FiTrendingUp,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Agile Methodology',
      description: 'Flexible development processes that adapt to changes and deliver value quickly.',
      icon: FiRefreshCw,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    },
  ];

  const mernStack = [
    {
      name: 'MongoDB',
      logo: MongoDBLogo,
    },
    {
      name: 'Express.js',
      logo: ExpressLogo,
    },
    {
      name: 'React',
      logo: ReactLogo,
    },
    {
      name: 'Node.js',
      logo: NodeLogo,
    },
    {
      name: 'Java',
      logo: JavaLogo,
    },
    {
      name: 'AWS',
      logo: AWSLogo,
    },
  ];

  const industries = [
    {
      name: 'Retail',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 14v2m6-2v2" />
        </svg>
      ),
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      name: 'Healthcare & Fitness',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m-3-3h6" />
        </svg>
      ),
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Education',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        </svg>
      ),
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Real Estate & Hospitality',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50'
    },
    {
      name: 'Technology & SaaS',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50'
    },
    {
      name: 'Finance & Banking',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white text-gray-900 pt-20 pb-20">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            {/* Left Content */}
            <motion.div
              variants={slideUp(0.2)}
              initial="initial"
              animate="animate"
              className="space-y-6"
            >
              <h1 className="text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Innovative Web & App</span>{' '}
                <span className="text-[#fdcd2d]">Development</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
                We build custom digital solutions that drive growth and efficiency for your business.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                We craft high-performance websites and applications tailored to your business needs. By combining modern design, robust development, and scalable architecture, we deliver digital solutions that are fast, secure, and user-focused. From concept to launch and beyond, our team ensures every product is built to perform, adapt, and grow alongside your business goals.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-[#fdcd2d] hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </Link>
            </motion.div>

            {/* Right Side - IT Services Image with Optimized Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex justify-center items-center"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse"
                }}
                style={{ willChange: 'transform' }}
                className="relative w-full max-w-lg"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700">
                  <img 
                    src={ITServicesImage}
                    alt="IT Services - Web and Mobile Development" 
                    className="w-full h-auto rounded-xl shadow-lg"
                    loading="eager"
                  />
                </div>
                
                {/* Floating badges - Optimized */}
                <div className="absolute -top-3 -right-3 bg-[#fdcd2d] text-gray-900 px-4 py-2 rounded-lg font-bold shadow-lg z-10 animate-pulse">
                  🚀 Innovative
                </div>
                <div className="absolute -bottom-3 -left-3 bg-blue-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg z-10">
                  ⚡ Fast
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Pillars of Development Section - Updated Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
              Pillars of Our Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building excellence through proven methodologies and cutting-edge technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                style={{ willChange: 'transform' }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Icon Container */}
                <div className={`w-20 h-20 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <pillar.icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#fdcd2d] transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
                
                {/* Yellow Underline */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-[#fdcd2d] to-orange-500 group-hover:w-full transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Technology Stack Section with New Icons */}
      <section className="py-20 bg-white text-gray-900">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl xl:text-5xl font-bold text-gray-900 mb-3">
              Our Technology Stack
            </h2>
            <p className="text-lg text-gray-600">
              Building on modern technologies and robust frameworks for scalable, high-performance solutions.
            </p>
            <p className="text-lg text-gray-600 mt-1">
              We work with modern, robust frameworks and languages to ensure performance, security, and scalability.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto mb-8">
            {mernStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                style={{ willChange: 'transform' }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#fdcd2d] hover:border-4 transition-all duration-300 flex flex-col items-center justify-center aspect-square group cursor-pointer shadow-md hover:shadow-lg"
              >
                <div className="mb-3 transition-transform group-hover:scale-110 w-16 h-16 flex items-center justify-center">
                  <img 
                    src={tech.logo} 
                    alt={`${tech.name} Logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 text-center">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Industries We Serve Section - Updated Design */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl xl:text-5xl font-bold text-gray-900">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We craft custom digital solutions for businesses across industries. From startups to enterprises, our services cater to every unique domain.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We also deliver tailored digital solutions designed to meet the unique needs of every industry we serve. By combining strategy, design, and technology, we help businesses streamline operations, enhance customer experiences, and achieve sustainable growth—whether you're a startup building from scratch or an enterprise scaling for the future.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our approach is rooted in understanding your business goals, target audience, and industry challenges. We focus on creating scalable, secure, and performance-driven solutions that adapt as your business evolves. With a commitment to quality and innovation, we ensure every solution delivers real value and measurable results.
              </p>
            </motion.div>

            {/* Right - Industry Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
            >
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  style={{ willChange: 'transform' }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Icon Container */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <div className="text-white">
                      {industry.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-normal text-gray-900 mb-4 group-hover:text-[#fdcd2d] transition-colors duration-300">
                    {industry.name}
                  </h3>
                  
                  {/* Yellow Underline */}
                  <div className="mt-4 h-1 w-0 bg-gradient-to-r from-[#fdcd2d] to-orange-500 group-hover:w-full transition-all duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-4xl xl:text-5xl font-bold text-gray-900">
              Ready to Build Your Vision?
            </h2>
            <p className="text-xl text-gray-600">
              Let's turn your idea into a reality. Contact us today to discuss your project and get a free quote.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#fdcd2d] hover:bg-yellow-400 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 mt-6"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ITServices;
