import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { SOCIAL_LINKS } from '@/utils/constants';

export const FooterSocial: React.FC = () => {
  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">Síguenos</h3>
      <div className="flex space-x-4">
        <a 
          href={SOCIAL_LINKS.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors duration-300"
        >
          <Facebook className="h-5 w-5 text-gray-400 hover:text-white" />
        </a>
        <a 
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors duration-300"
        >
          <Instagram className="h-5 w-5 text-gray-400 hover:text-white" />
        </a>
      </div>
    </div>
  );
};