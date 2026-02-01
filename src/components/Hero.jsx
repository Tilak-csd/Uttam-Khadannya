import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    subtitle: "DISCOVER 100% ORGANIC",
    title: "DRY FRUITS",
    highlight: "UP TO 75% OFF",
    image: "./hero section bg 1.svg", 
  },
  {
    id: 2,
    subtitle: "FRESH FROM THE FARM",
    title: "PREMIUM CASHEWS",
    highlight: "FLAT 20% OFF",
    image: "https://images.unsplash.com/photo-1509912747193-47098e98625e?q=80&w=1600&auto=format&fit=crop",
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000); 
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section 
      className="relative w-full h-[500px] md:h-[650px] flex items-center overflow-hidden transition-all duration-1000 bg-cover bg-center"
      style={{ backgroundImage: `url('${slides[current].image}')` }} // Dynamic BG Image
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 z-20 p-2 rounded-full bg-white/30 hover:bg-white transition-all cursor-pointer">
        <ChevronLeft size={24} className="text-gray-800" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 z-20 p-2 rounded-full bg-white/30 hover:bg-white transition-all cursor-pointer">
        <ChevronRight size={24} className="text-gray-800" />
      </button>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="md:w-2/3 lg:w-1/2"
          >
            <p className="text-[#8cc63f] font-bold tracking-widest mb-4 drop-shadow-md">
              {slides[current].subtitle}
            </p>
            <h1 className="text-5xl md:text-8xl font-extrabold text-white leading-tight drop-shadow-lg">
              {slides[current].title}
            </h1>
            <h2 className="text-2xl md:text-4xl font-black text-gray-100 mt-2 mb-8 drop-shadow-md">
              {slides[current].highlight}
            </h2>
            <button className="bg-[#8cc63f] text-white px-10 py-4 rounded-full cursor-pointer font-bold shadow-xl hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
              SHOP NOW
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 transition-all cursor-pointer ${index === current ? 'w-8 bg-[#8cc63f]' : 'w-2 bg-white/50 hover:bg-white'}`}
            style={{ borderRadius: '1rem' }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;