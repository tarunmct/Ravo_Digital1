import React from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '../utility/animation';
import { Link } from 'react-router-dom';
import ashokLeyland from '../assets/ashokleyland.png';
import blackThunder from '../assets/black thunder.png';
import carCare from '../assets/car care.png';
import greenTrends from '../assets/greentrends.png';
import khalids from '../assets/khalids.png';
import lmw from '../assets/lmw.png';
import max from '../assets/max.png';
import thalappakati from '../assets/thalappakati.jpeg';

const EventManagement = () => {
  const services = [
    {
      title: 'Event Photography',
      description: 'Capturing the energy and emotion of your special occasions.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Corporate Headshots',
      description: 'Professional headshots that reflect your brand\'s identity.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: 'Product Shoots',
      description: 'Showcasing your products in the best possible light.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      title: 'Video Production',
      description: 'Bringing your brand\'s story to life through compelling video content.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const portfolioImages = [
    {
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=1200&fit=crop&q=80',
      alt: 'Corporate networking event',
    },
    {
      url: 'https://images.unsplash.com/photo-1519167758481-83f29da8b1d1?w=1200&h=1200&fit=crop&q=80',
      alt: 'Outdoor wedding ceremony',
    },
    {
      url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=1200&fit=crop&q=80',
      alt: 'Conference stage setup',
    },
    {
      url: 'https://images.unsplash.com/photo-1478146897153-7e3ab1f55e4e?w=1200&h=1200&fit=crop&q=80',
      alt: 'Large conference hall',
    },
    {
      url: 'https://images.unsplash.com/photo-1517456837005-d757b959ae2b?w=1200&h=1200&fit=crop&q=80',
      alt: 'Elegant dinner table setting',
    },
    {
      url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=1200&fit=crop&q=80',
      alt: 'Team building activity',
    },
  ];

  const testimonials = [
    {
      quote: 'Ravo Digitals did an amazing job capturing our corporate event. The photos are stunning and the team was incredibly professional. Highly recommend!',
      name: 'John Smith',
      title: 'CEO, TechCorp',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces&q=80',
    },
    {
      quote: 'We couldn\'t be happier with the photos from our wedding. Ravo Digitals was a pleasure to work with and they truly captured the magic of our special day.',
      name: 'Jane & Mark Doe',
      title: 'Newlyweds',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces&q=80',
    },
  ];

  return (
    <div className="bg-black min-h-screen overflow-hidden">
      {/* Hero Section with Background Image */}
      <section 
        className="relative pt-20 min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content */}
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40 max-w-5xl text-center relative z-10 py-20">
          <motion.div
            variants={slideUp(0.2)}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            {/* Main Heading - Elegant Serif Font */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold text-white mb-8 leading-tight tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Your Vision,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fdcd2d] to-yellow-200">Our Expertise</span>
            </motion.h1>
            
            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light tracking-wide"
            >
              We turn moments into masterpieces. From intimate celebrations to grand corporate affairs, experience flawless event management.
            </motion.p>

            {/* Call to Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="pt-4"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-full overflow-hidden hover:bg-[#fdcd2d] hover:text-gray-900 hover:border-[#fdcd2d] hover:scale-105 hover:shadow-[0_0_40px_rgba(253,205,45,0.6)]"
              >
                <span className="relative flex items-center gap-2">
                  Plan Your Event Now
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Seamlessly Executed Events Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 font-semibold rounded-full text-sm uppercase tracking-wide"
              >
                Our Expertise
              </motion.span>

              {/* Heading */}
              <div>
                <h2 className="text-4xl xl:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
                  Seamlessly Executed <br />
                  <span className="text-[#fdcd2d] relative">
                    Events
                    <motion.span
                      className="absolute -bottom-2 left-0 right-0 h-3 bg-[#fdcd2d]/30 -z-10"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />
                  </span>
                </h2>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-700 leading-relaxed font-light"
              >
                We offer end-to-end management, covering everything from conceptual design to on-site coordination, ensuring a stress-free experience for you.
              </motion.p>

              {/* Three Service Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                {[
                  {
                    title: 'Weddings & Celebrations',
                    description: 'Crafting timeless, magical moments tailored exactly to your dream day.',
                    icon: (
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    ),
                    color: '#EC4899',
                    gradient: 'from-pink-500 to-rose-500',
                    bgGradient: 'from-pink-50 to-rose-50',
                  },
                  {
                    title: 'Corporate Events',
                    description: 'Seamless, professional execution for conferences, launches, and galas.',
                    icon: (
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    ),
                    color: '#14B8A6',
                    gradient: 'from-teal-500 to-cyan-500',
                    bgGradient: 'from-teal-50 to-cyan-50',
                  },
                  {
                    title: 'Personalized Parties',
                    description: 'From intimate gatherings to milestone birthdays, designed with flair.',
                    icon: (
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    ),
                    color: '#F97316',
                    gradient: 'from-orange-500 to-amber-500',
                    bgGradient: 'from-orange-50 to-amber-50',
                  },
                ].map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    style={{ willChange: 'transform' }}
                    className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                  >
                    {/* Background Gradient on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0`}></div>
                    
                    {/* Icon Container */}
                    <motion.div
                      className={`relative z-10 w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-all duration-300`}
                      style={{ willChange: 'transform' }}
                    >
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>

                    {/* Animated Underline */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center items-center"
            >
              <div className="relative w-full max-w-lg">
                <motion.img
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=1000&fit=crop&q=80"
                  alt="Event management"
                  className="rounded-2xl shadow-2xl w-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
              Our Portfolio
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-xl shadow-lg cursor-pointer group"
              >
                <div className="aspect-square overflow-hidden bg-gray-200">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=1200&fit=crop&q=80`;
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40">
          {/* Main Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl xl:text-5xl font-bold italic text-gray-900">
              Where Creativity Meets Professionalism.
            </h2>
          </motion.div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              {
                number: '1000+',
                label: 'EVENTS DONE',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                color: '#14B8A6',
              },
              {
                number: '600+',
                label: 'HAPPY CLIENTS',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                color: '#3B82F6',
              },
              {
                number: '250+',
                label: 'WEDDINGS DONE',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                color: '#EC4899',
              },
              {
                number: '230+',
                label: 'CORPORATE EVENTS',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                color: '#14B8A6',
              },
              {
                number: '80',
                label: 'HAPPY EMPLOYEES',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
                color: '#F97316',
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <p className="text-3xl xl:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </p>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Clients Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#fdcd2d]/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-5 py-2 bg-[#fdcd2d]/10 text-[#d4a017] font-bold rounded-full text-sm uppercase tracking-wider mb-6 shadow-sm border border-[#fdcd2d]/20"
            >
              OUR PARTNERS & CLIENTS
            </motion.span>
            <h2 className="text-4xl xl:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
              Together, We Create{' '}
              <span className="text-[#fdcd2d] relative inline-block">
                Magic
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-[#fdcd2d]/30 -z-10 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </span>
              .
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
            >
              Trusted by leading brands and organizations worldwide
            </motion.p>
          </motion.div>



          {/* Clients Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto items-center">
            {[
              { name: 'Ashok Leyland', logo: ashokLeyland },
              { name: 'Black Thunder', logo: blackThunder },
              { name: 'Car Care', logo: carCare },
              { name: 'Green Trends', logo: greenTrends },
              { name: 'Khalids', logo: khalids },
              { name: 'LMW', logo: lmw },
              { name: 'Max', logo: max },
              { name: 'Thalappakati', logo: thalappakati },
            ].map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                }}
                className="group relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 text-center flex items-center justify-center h-40 border border-gray-100 cursor-pointer overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#fdcd2d]/10 via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#fdcd2d]/50 transition-all duration-300"></div>
                
                {/* Logo Image */}
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="w-full h-full object-contain p-2 filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10 transform group-hover:scale-110"
                />
                
                {/* Decorative Corner Elements */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[3px] border-l-[3px] border-[#fdcd2d] rounded-tl-lg opacity-0 group-hover:opacity-100 group-hover:w-6 group-hover:h-6 transition-all duration-300"></div>
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[3px] border-r-[3px] border-[#fdcd2d] rounded-br-lg opacity-0 group-hover:opacity-100 group-hover:w-6 group-hover:h-6 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-[#fdcd2d]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&size=150&background=fdcd2d&color=000`;
                    }}
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-40 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-4xl xl:text-5xl font-bold text-[#fdcd2d] mb-4">
              Ready to Capture Your Story?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Contact us today to discuss your event and get a free quote.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#fdcd2d] hover:bg-yellow-400 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get a Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventManagement;
