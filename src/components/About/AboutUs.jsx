import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCode, FiMonitor, FiTarget, FiCalendar } from 'react-icons/fi';
import AboutImg from '../../assets/Abt us_updated.jpeg';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* About Us Heading */}
      <section className="pt-12 md:pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-4"
          >
            About <span className="text-[#fdcd2d]">Us</span>
          </motion.h1>
        </div>
      </section>

      {/* Main Content Section - Two Column Layout */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-block px-4 py-1.5 bg-[#fdcd2d]/10 text-[#fdcd2d] font-bold rounded-full text-sm uppercase tracking-wider"
                >
                  Our Foundation
                </motion.span>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight"
                >
                  Driving <span className="text-gray-900">Innovation</span> & Digital Excellence Since 2025.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg text-gray-600 leading-relaxed"
                >
                  <span className="text-gray-900 font-semibold">Ravofy</span> is a dynamic power-house focused on delivering comprehensive IT services, software development, and strategic digital marketing solutions.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-3 text-[#fdcd2d]">
                    <FiTarget className="w-6 h-6" />
                    <h3 className="text-xl font-bold text-gray-900">Our Strategy</h3>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Our story is built on the pillars of teamwork and innovation. What began as a vision has quickly grown into a trusted name in digital transformation.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-3 text-blue-500">
                    <FiMonitor className="w-6 h-6" />
                    <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed">
                    We've helped numerous clients achieve success through innovative billing solutions and high-performance web development.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="p-6 bg-white rounded-2xl border-l-4 border-[#fdcd2d] shadow-sm italic text-gray-700 text-lg"
              >
                "We believe in creating technology that transforms ideas into digital experiences that drive measurable results and exceed expectations."
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-gray-600 space-y-4"
              >
                <p>
                  Over the years, we've earned the trust of a diverse customer base, partnering with businesses across industries to elevate their presence and accelerate growth.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
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
                      alt="Ravo Team" 
                      className="w-full h-auto object-cover"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                    />
                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Cards Section - Four Cards in a Row */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: FiCode, title: 'IT Services', color: 'from-blue-500 to-blue-600' },
              { icon: FiMonitor, title: 'Software & App Dev', color: 'from-green-500 to-green-600' },
              { icon: FiTarget, title: 'Digital Marketing', color: 'from-purple-500 to-purple-600' },
              { icon: FiCalendar, title: 'Event Management', color: 'from-orange-500 to-orange-600' }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{ willChange: 'transform' }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#fdcd2d] transition-colors duration-300">{service.title}</h3>
                <div className="mt-3 h-1 w-0 bg-gradient-to-r from-[#fdcd2d] to-orange-500 group-hover:w-full transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom Text Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-base text-gray-700 leading-relaxed bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Digital Commitment</h3>
              <p>
                At Ravofy, we don't just build software—we create digital experiences that transform businesses. Our comprehensive approach ensures that every solution we deliver is tailored to meet your unique challenges and objectives.
              </p>

              <p>
                Whether you're looking to enhance your online presence, streamline operations with custom software, or reach your audience through strategic digital marketing, our team has the expertise and passion to bring your vision to life.
              </p>
            </motion.div>

            {/* Right Content - Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Partner With Us?</h3>
              <div className="space-y-4">
                {[
                  { title: 'Client-Centric Approach', desc: 'Your success is our top priority.' },
                  { title: 'Innovation Driven', desc: 'We stay ahead of technology trends.' },
                  { title: 'Transparent Communication', desc: 'Clear updates every step of the way.' },
                  { title: 'Results Oriented', desc: 'Measuring success by your growth.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-[#fdcd2d] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, gray 1px, transparent 0)`,
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join the growing list of successful businesses that trust Ravofy for their digital transformation journey.
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