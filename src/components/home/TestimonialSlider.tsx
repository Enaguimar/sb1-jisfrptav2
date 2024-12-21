import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { Testimonial, testimonials } from '@/data/testimonials';

const SLIDE_DURATION = 5000; // 5 segundos por testimonio

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % testimonials.length);
        setIsVisible(true);
      }, 500); // Duración del fade out
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTestimonial.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <Star key={i} className="h-8 w-8 text-yellow-400" fill="currentColor" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl text-gray-600 mb-8">
            "{currentTestimonial.text}"
          </blockquote>
          <div className="space-y-2">
            <p className="font-semibold text-lg">{currentTestimonial.author}</p>
            <p className="text-gray-500">{currentTestimonial.location}</p>
            <p className="text-sm text-gray-400">{currentTestimonial.date}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicadores */}
      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsVisible(true);
              }, 500);
            }}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
            }`}
            aria-label={`Ver reseña ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};