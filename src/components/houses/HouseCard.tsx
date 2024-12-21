import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Bath, Bed } from 'lucide-react';
import { HouseCardProps } from '@/types';

export const HouseCard: React.FC<HouseCardProps> = ({
  id,
  name,
  capacity,
  bedrooms,
  bathrooms,
  description,
  mainImage,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${mainImage})` }}
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
        <div className="flex space-x-4 mb-4 text-gray-600">
          <div className="flex items-center">
            <Users className="h-5 w-5 mr-1" />
            <span>{capacity}</span>
          </div>
          <div className="flex items-center">
            <Bed className="h-5 w-5 mr-1" />
            <span>{bedrooms} hab.</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-5 w-5 mr-1" />
            <span>{bathrooms} baños</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={`/las-casas/${id}`}
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Ver detalles
        </Link>
      </div>
    </motion.div>
  );
};

export default HouseCard;