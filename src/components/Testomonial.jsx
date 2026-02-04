import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialCarousel = () => {
  const testimonials = [
    { id: 1, title: "Eat More Healthily", content: "Having produce delivered to your home or office on a set frequency is essential.", author: "Sandy Wilcke" },
    { id: 2, title: "Customize Your Box", content: "Each delivery comes with the option to view and make changes to the items.", author: "Marcosinacioluz" },
    { id: 3, title: "Convenience Food Store", content: "Save time going to the grocery store or remembering to pick up your produce.", author: "Aussiemines" },
    { id: 4, title: "Freshness Guaranteed", content: "Our farm-to-table approach ensures you get the crispest greens every time.", author: "John Doe" },
    { id: 5, title: "Sustainable Living", content: "Reduce your carbon footprint by supporting local farmers and minimizing plastic.", author: "Jane Smith" },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex + itemsPerPage < testimonials.length) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Enhanced Animation Variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95, // Subtle scale-in
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95, // Subtle scale-out
    }),
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-8 md:px-16 py-12 md:py-24 bg-white overflow-hidden">
      <div className="relative flex flex-col md:flex-row justify-between gap-8 min-h-[400px]">
        {/* popLayout prevents the layout jumping during entrance/exit */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          {testimonials.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
            <motion.div
              key={item.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 260, damping: 28 }, // Silky spring
                opacity: { duration: 0.3, ease: "easeInOut" },
                scale: { duration: 0.4 },
                // Stagger the items slightly so they don't move as one rigid block
                delay: index * 0.05 
              }}
              className="flex-1 flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50/50 border border-transparent hover:border-green-100 transition-colors"
            >
              <div className="mb-8 transform transition-transform group-hover:scale-110">
                <Quote size={40} className="text-green-500/20 fill-green-500/10 rotate-180" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600 italic leading-relaxed mb-8 flex-grow">
                "{item.content}"
              </p>
              <div className="mt-auto">
                <div className="w-8 h-1 bg-green-500 mx-auto mb-4 rounded-full" />
                <span className="text-gray-900 font-bold uppercase tracking-wider text-sm">
                  {item.author}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 pointer-events-none">
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`pointer-events-auto p-3 rounded-full bg-white shadow-lg border border-gray-100 transition-all ${
            currentIndex === 0 
            ? "opacity-0 scale-75 cursor-not-allowed" 
            : "opacity-100 hover:bg-green-500 hover:text-white text-gray-400"
          }`}
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentIndex + itemsPerPage >= testimonials.length}
          className={`pointer-events-auto p-3 rounded-full bg-white shadow-lg border border-gray-100 transition-all ${
            currentIndex + itemsPerPage >= testimonials.length 
            ? "opacity-0 scale-75 cursor-not-allowed" 
            : "opacity-100 hover:bg-green-500 hover:text-white text-gray-400"
          }`}
        >
          <ChevronRight size={28} />
        </button>
      </div>
      
      {/* Visual Progress Indicator */}
      <div className="mt-12 flex justify-center gap-2">
        {Array.from({ length: testimonials.length - (itemsPerPage - 1) }).map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 transition-all duration-300 rounded-full ${i === currentIndex ? "w-8 bg-green-500" : "w-2 bg-gray-200"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;