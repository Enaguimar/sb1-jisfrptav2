import React from 'react';
import { Photo } from '@/types';
import { Calendar } from 'lucide-react';

interface PhotoCardProps {
  photo: Photo;
  onClick: () => void;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onClick }) => {
  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
      onClick={onClick}
    >
      <img
        src={photo.url}
        alt={photo.title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-lg font-semibold mb-2">{photo.title}</p>
          <div className="flex items-center justify-center text-sm">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{photo.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};