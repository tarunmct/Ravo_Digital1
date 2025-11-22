import React from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '../utility/animation';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiTrendingUp, FiBarChart2, FiUsers, FiTarget, FiClock, FiSearch, FiSmartphone, FiDollarSign, FiEdit, FiMail, FiPieChart } from 'react-icons/fi';
import DigitalMarketingImg from '../assets/dm3.jpeg';

const DigitalMarketing = () => {
  const services = [
    {
      title: 'Search Engine Optimization (SEO)',
      description: 'Boost your website visibility and rank higher on search engines with our proven SEO strategies.',
      icon: FiSearch,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      title: 'Social Media Marketing',
      description: 'Engage your audience across all platforms with compelling content and strategic campaigns.',
      icon: FiSmartphone,
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-50 to-rose-50',
    },
    {
      title: 'Pay-Per-Click (PPC) Advertising',
      description: 'Maximize ROI with targeted PPC campaigns that drive qualified leads to your business.',
      icon: FiDollarSign,
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
    },
    {
      title: 'Content Marketing',
      description: 'Create valuable, engaging content that attracts and converts your target audience.',
      icon: FiEdit,
      gradient: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-50 to-indigo-50',
    },
    {
      title: 'Email Marketing',
      description: 'Build lasting relationships with automated email campaigns that nurture leads.',
      icon: FiMail,
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50',
    },
    {
      title: 'Analytics & Reporting',
      description: 'Track performance with detailed analytics and actionable insights for continuous improvement.',
      icon: FiPieChart,
      gradient: 'from-[#fdcd2d] to-yellow-500',
      bgGradient: 'from-yellow-50 to-amber-50',
    },
  ];

  const benefits = [
    { text: 'Increased brand visibility', icon: FiTrendingUp, color: 'from-blue-500 to-blue-600' },
    { text: 'Higher conversion rates', icon: FiBarChart2, color: 'from-green-500 to-green-600' },
    { text: 'Better ROI tracking', icon: FiTarget, color: 'from-purple-500 to-purple-600' },
    { text: 'Expert team guidance', icon: FiUsers, color: 'from-orange-500 to-orange-600' },
    { text: 'Customized strategies', icon: FiCheckCircle, color: 'from-pink-500 to-pink-600' },
    { text: '24/7 campaign monitoring', icon: FiClock, color: 'from-cyan-500 to-cyan-600' },
  ];

  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Hero Section */}
      <section className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={slideUp(0.2)}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <h1 className="text-4xl xl:text-5xl font-bold">
              Digital <span className="text-[#fdcd2d]  underline">Marketing</span>
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
            className="flex justify-center items-center relative w-full"
          >
            <motion.div
              className="relative group w-full max-w-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Decorative Background */}
              <div className="absolute -inset-6 bg-gradient-to-br from-[#fdcd2d]/20 to-blue-200/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              <motion.div
                className="relative bg-white rounded-3xl p-8 shadow-2xl overflow-hidden border border-gray-100"
                animate={{ 
                  rotate: [0, 2, -2, 1.5, -1.5, 0],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <motion.img 
                    src={DigitalMarketingImg} 
                    alt="Digital Marketing" 
                    className="w-full h-auto object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            </motion.div>
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
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0`}></div>
                
                {/* Icon Container */}
                <motion.div
                  className={`relative z-10 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                </div>
                
                {/* Animated Bottom Border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#fdcd2d]/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-2 bg-[#fdcd2d]/20 text-[#fdcd2d] font-semibold rounded-full text-sm uppercase tracking-wide"
              >
                Why Choose Us
              </motion.span>
              <h2 className="text-4xl xl:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Why Choose Our <br />
                <span className="text-[#fdcd2d] relative">
                  Services
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-3 bg-[#fdcd2d]/30 -z-10"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </span>
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed font-light">
                We combine creativity with data-driven strategies to deliver exceptional results 
                that drive growth and engagement for your business.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#fdcd2d] to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiCheckCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Proven Results</h3>
                  <p className="text-gray-600">Track record of success with measurable outcomes</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Image and Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Image */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Decorative Background */}
                <div className="absolute -inset-6 bg-gradient-to-br from-[#fdcd2d]/20 to-blue-200/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <motion.div
                  className="relative bg-white rounded-3xl p-6 shadow-2xl overflow-hidden border border-gray-100"
                  animate={{ 
                    rotate: [0, 2, -2, 1.5, -1.5, 0],
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <motion.img 
                      src={DigitalMarketingImg} 
                      alt="Digital Marketing" 
                      className="w-full h-auto object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-base font-semibold text-gray-900 group-hover:text-[#fdcd2d] transition-colors duration-300">
                      {benefit.text}
                    </p>
                    <div className="mt-2 h-1 w-0 bg-gradient-to-r from-[#fdcd2d] to-orange-500 group-hover:w-full transition-all duration-300"></div>
                  </motion.div>
                ))}
              </div>
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
