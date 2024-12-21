import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialStarsProps {
  rating: number;
}

export const TestimonialStars: React.FC<TestimonialStarsProps> = ({ rating }) => (
  <div className="flex justify-center mb-6">
    {[...Array(rating)].map((_, i) => (
      <Star key={i} className="h-8 w-8 text-yellow-400" fill="currentColor" />
    ))}
  </div>
);