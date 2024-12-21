import { useState, useEffect, useCallback } from 'react';
import { testimonials } from '@/data/testimonials';

const SLIDE_DURATION = 5000;
const FADE_DURATION = 500;

export const useTestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % testimonials.length);
        setIsVisible(true);
      }, FADE_DURATION);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  const handleIndicatorClick = useCallback((index: number) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsVisible(true);
    }, FADE_DURATION);
  }, []);

  return {
    currentIndex,
    isVisible,
    handleIndicatorClick,
  };
};