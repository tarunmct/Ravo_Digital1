import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiUsers, FiCalendar, FiAward, FiCode, FiSmartphone, FiTarget, FiSettings } from 'react-icons/fi';
import AboutImg from '../../assets/about.jpeg';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-yellow-50 via-white to-blue-50 overflow-hidden">
        {/* Decorative Background Elements - Simplified */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-[#fdcd2d]/20 text-[#fdcd2d] font-semibold rounded-full text-sm uppercase tracking-wide">
                Our Story
              </span>
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              About <span className="text-[#fdcd2d] relative">
                Ravo-Digitals
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-[#fdcd2d]/30 -z-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light">
              Empowering businesses through innovative digital solutions and transformative technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-[#fdcd2d] font-semibold text-sm uppercase tracking-wider mb-4 block"
                >
                  Our Journey
                </motion.span>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
                  The Tale of Our<br />
                  <span className="text-[#fdcd2d]">Achievement Story</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-xl font-medium text-gray-900"
                >
                  <span className="text-[#fdcd2d] font-bold">Ravo-Digitals</span>, founded in December 2025, is a dynamic and forward-thinking company focused on delivering comprehensive IT services, software development, mobile app development, and digital marketing solutions.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Our story is built on the pillars of <strong>teamwork, innovation, and client success</strong>. What began as a vision has quickly grown into a trusted name in the technology and digital transformation industry.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  With a passion for solving complex business challenges, we've helped numerous clients achieve success through innovative billing solutions, impactful SEO strategies, and high-performance web development projects.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  We believe in creating technology that transforms ideas into digital experiences that drive measurable results. Our dedicated team combines technical expertise with creative thinking to ensure every project exceeds expectations.
                </motion.p>
              </div>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-12 grid grid-cols-2 gap-6"
              >
                {[
                  { icon: FiAward, number: '50+', label: 'Projects Completed', color: 'from-blue-500 to-blue-600' },
                  { icon: FiUsers, number: '25+', label: 'Happy Clients', color: 'from-green-500 to-green-600' },
                  { icon: FiCalendar, number: '2025', label: 'Founded', color: 'from-purple-500 to-purple-600' },
                  { icon: FiCheckCircle, number: '15+', label: 'Team Members', color: 'from-orange-500 to-orange-600' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -3 }}
                    style={{ willChange: 'transform' }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative group"
              >
                {/* Decorative Background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#fdcd2d]/20 to-blue-200/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <motion.div 
                  className="relative bg-white rounded-3xl p-6 shadow-2xl overflow-hidden border border-gray-100"
                  style={{ willChange: 'transform' }}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <motion.img 
                      src={AboutImg} 
                      alt="Ravo Digitals Team" 
                      className="w-full h-auto object-cover"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                    />
                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Service Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8 grid grid-cols-2 gap-4"
              >
                {[
                  { icon: FiCode, title: 'IT Services', color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50' },
                  { icon: FiSettings, title: 'Software Dev', color: 'from-green-500 to-green-600', bgColor: 'bg-green-50' },
                  { icon: FiSmartphone, title: 'Mobile Apps', color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-50' },
                  { icon: FiTarget, title: 'Digital Marketing', color: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-50' }
                ].map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    style={{ willChange: 'transform' }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#fdcd2d] transition-colors duration-300">{service.title}</h3>
                    <div className="mt-2 h-1 w-0 bg-gradient-to-r from-[#fdcd2d] to-orange-500 group-hover:w-full transition-all duration-300"></div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-[#fdcd2d]/20 text-[#fdcd2d] font-semibold rounded-full text-sm uppercase tracking-wide mb-6"
            >
              Let's Work Together
            </motion.span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join the growing list of successful businesses that trust Ravo-Digitals for their digital transformation journey.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(253, 205, 45, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-5 bg-[#fdcd2d] text-gray-900 font-bold text-lg rounded-xl transition-all duration-300 overflow-hidden shadow-2xl"
              >
                  <span className="relative z-10 flex items-center gap-3">
                    Start Your Project Today
                    <span>→</span>
                  </span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;