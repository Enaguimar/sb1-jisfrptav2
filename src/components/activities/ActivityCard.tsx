import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail } from 'lucide-react';

interface ActivityCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
  email?: string;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  description,
  image,
  category,
  link,
  email,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-6">
        <span className="inline-block px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 mb-2">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {(link || email) && (
          <div className="flex flex-wrap gap-3 mt-4">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-600 hover:text-green-700"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Visitar web
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center text-green-600 hover:text-green-700"
              >
                <Mail className="h-4 w-4 mr-1" />
                Contactar
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};