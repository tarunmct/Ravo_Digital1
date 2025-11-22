// src/App.jsx
import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import WhatsAppWidget from './components/WhatsAppWidget/WhatsAppWidget'

// Lazy load page components for better performance
const Hero = lazy(() => import('./components/Hero/Hero'))
const Service = lazy(() => import('./components/Service/Service'))
const Banner = lazy(() => import('./components/Banner/Banner'))
const Cards = lazy(() => import('./components/Cards/Cards'))
const Banner2 = lazy(() => import('./components/Banner/Banner2'))
const Email = lazy(() => import('./components/Email/Email'))
const AboutUs = lazy(() => import('./components/About/AboutUs'))
const DigitalMarketing = lazy(() => import('./pages/DigitalMarketing'))
const ITServices = lazy(() => import('./pages/ITServices'))
const EventManagement = lazy(() => import('./pages/EventManagement'))
const NotFound = lazy(() => import('./pages/NotFound'))

const App = () => {
  return (
    <Router>
      <main className="overflow-x-hidden">
        <Navbar />
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#fdcd2d] border-t-transparent"></div>
              <p className="mt-4 text-gray-600 font-medium">Loading...</p>
            </div>
          </div>
        }>
          <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <Hero />
            <Cards />
            <Banner />
            <Service />
            <Banner2 />
            <Email />
          </>
        } />

        {/* About Page */}
        <Route path="/about" element={<AboutUs />} />
        
        {/* Contact Page: This is the route you asked for */}
        <Route path="/contact" element={<Banner2/>} />
        
        {/* Service Dropdown Pages and Frames (Event Management) */}
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/it-services" element={<ITServices />} />
        <Route path="/event-management" element={<EventManagement />} />
        {/* Note: The 'Frames' link in Navbar also uses '/event-management' path. */}
        
        {/* 404 Catch-all Route */}
        <Route path="*" element={<NotFound />} />
        
          </Routes>
        </Suspense>
        <Footer />
        <WhatsAppWidget />
      </main>
    </Router>
  )
}

export default App