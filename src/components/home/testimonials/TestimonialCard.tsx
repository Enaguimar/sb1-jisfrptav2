import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialStars } from './TestimonialStars';
import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  isVisible: boolean;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isVisible,
}) => (
  <motion.div
    key={testimonial.id}
    initial={{ opacity: 0 }}
    animate={{ opacity: isVisible ? 1 : 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col items-center justify-center max-w-4xl mx-auto"
  >
    <TestimonialStars rating={testimonial.rating} />
    <blockquote className="text-xl md:text-2xl text-gray-600 mb-8 text-center">
      "{testimonial.text}"
    </blockquote>
    <div className="space-y-2 text-center">
      <p className="font-semibold text-lg">{testimonial.author}</p>
      <p className="text-gray-500">{testimonial.location}</p>
      <p className="text-sm text-gray-400">{testimonial.date}</p>
    </div>
  </motion.div>
);