import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: 'Ravo did an amazing job capturing our corporate event. The photos are stunning and the team was incredibly professional. Highly recommend!',
    name: 'John Smith',
    title: 'CEO, TechCorp',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces&q=80',
  },
  {
    quote: "We couldn't be happier with the photos from our wedding. Ravo was a pleasure to work with and they truly captured the magic of our special day.",
    name: 'Jane & Mark Doe',
    title: 'Newlyweds',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces&q=80',
  },
  {
    quote: 'Exceptional professionalism and creativity. They turned our simple product launch into a high-end experience for all attendees.',
    name: 'Michael Chen',
    title: 'Marketing Director, Zephyr',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces&q=80',
  },
  {
    quote: 'Their attention to detail is unmatched. From the lighting to the flow of the event, everything was perfect.',
    name: 'Sarah Williams',
    title: 'Event Planner',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces&q=80',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 overflow-hidden relative" style={{background: '#fcfcfc'}}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Client <span className="underline underline-offset-4 decoration-1 font-bold text-[#fdcd2d] pl-2">Testimonials</span></h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">What our clients say about our work and commitment to excellence.</p>
        </div>

        <div className="max-w-4xl mx-auto relative px-2 sm:px-14">
          {/* Slider Controls */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-[#fdcd2d] hover:scale-110 transition-all z-10 border border-gray-100"
          >
            <FaChevronLeft className="w-4 h-4 md:w-5 md:h-5 ml-[-2px]" />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-[#fdcd2d] hover:scale-110 transition-all z-10 border border-gray-100"
          >
            <FaChevronRight className="w-4 h-4 md:w-5 md:h-5 mr-[-2px]" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-[2rem] p-8 md:p-14 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-50 text-center relative mx-4 sm:mx-0 min-h-[320px] flex flex-col justify-center">
            <FaQuoteLeft className="text-[#fdcd2d] opacity-20 w-12 h-12 md:w-16 md:h-16 absolute top-6 left-6 md:top-10 md:left-10" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex flex-col items-center">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-[3px] border-[#fdcd2d] mb-4 shadow-md bg-gray-100"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">
                    {testimonials[currentIndex].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-[#fdcd2d]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
