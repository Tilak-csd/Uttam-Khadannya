import React, { useState } from 'react';
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const itemsPerPage = 3;

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

  // Animation variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-12 py-20 bg-white overflow-hidden">
      <div className="flex flex-row justify-between gap-8 h-[400px]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          {testimonials.slice(currentIndex, currentIndex + itemsPerPage).map((item) => (
            <motion.div
              key={item.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="flex-1 flex flex-col items-center text-center px-4"
            >
              <div className="mb-6">
                <Quote size={48} className="text-gray-200 rotate-180 fill-gray-100" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-6">{item.title}</h3>
              <p className="text-gray-500 italic leading-relaxed mb-8 min-h-[100px]">
                {item.content}
              </p>
              <span className="text-green-500 font-bold text-lg">{item.author}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className={`absolute left-0 top-1/2 -translate-y-1/2 p-2 transition-colors ${
          currentIndex === 0 ? "text-gray-200 cursor-not-allowed" : "text-gray-400 hover:text-black"
        }`}
      >
        <ChevronLeft size={48} strokeWidth={1} />
      </button>

      <button
        onClick={nextSlide}
        disabled={currentIndex + itemsPerPage >= testimonials.length}
        className={`absolute right-0 top-1/2 -translate-y-1/2 p-2 transition-colors ${
          currentIndex + itemsPerPage >= testimonials.length ? "text-gray-200 cursor-not-allowed" : "text-gray-400 hover:text-black"
        }`}
      >
        <ChevronRight size={48} strokeWidth={1} />
      </button>
    </div>
  );
};

export default TestimonialCarousel;