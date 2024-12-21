import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTestimonialSlider } from '@/hooks/useTestimonialSlider';
import { TestimonialCard } from './TestimonialCard';
import { TestimonialIndicators } from './TestimonialIndicators';
import { testimonials } from '@/data/testimonials';

export const TestimonialSlider: React.FC = () => {
  const { currentIndex, isVisible, handleIndicatorClick } = useTestimonialSlider();
  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <TestimonialCard
          testimonial={currentTestimonial}
          isVisible={isVisible}
        />
      </AnimatePresence>

      <TestimonialIndicators
        total={testimonials.length}
        current={currentIndex}
        onChange={handleIndicatorClick}
      />
    </div>
  );
};