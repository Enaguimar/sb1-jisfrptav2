import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  image?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description, image }) => {
  return (
    <div className="relative py-24 bg-gray-900">
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
      )}
      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl max-w-2xl mx-auto">{description}</p>
      </div>
    </div>
  );
};