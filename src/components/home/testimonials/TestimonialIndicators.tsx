import React from 'react';

interface TestimonialIndicatorsProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
}

export const TestimonialIndicators: React.FC<TestimonialIndicatorsProps> = ({
  total,
  current,
  onChange,
}) => (
  <div className="flex justify-center space-x-2 mt-6 mb-20">
    {[...Array(total)].map((_, index) => (
      <button
        key={index}
        onClick={() => onChange(index)}
        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
          index === current ? 'bg-green-600' : 'bg-gray-300'
        }`}
        aria-label={`Ver reseña ${index + 1}`}
      />
    ))}
  </div>
);