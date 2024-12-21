import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '@/utils/constants';

export const FooterContact: React.FC = () => {
  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">Contacto</h3>
      <div className="space-y-4">
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-green-500 mr-3" />
          <span className="text-gray-400">{CONTACT_INFO.phone}</span>
        </div>
        <div className="flex items-center">
          <Mail className="h-5 w-5 text-green-500 mr-3" />
          <a 
            href={`mailto:${CONTACT_INFO.email}`} 
            className="text-gray-400 hover:text-green-400 transition-colors duration-300"
          >
            {CONTACT_INFO.email}
          </a>
        </div>
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-green-500 mr-3 mt-1" />
          <span className="text-gray-400">{CONTACT_INFO.address}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-green-500 mr-3" />
          <span className="text-gray-400">{CONTACT_INFO.schedule}</span>
        </div>
      </div>
    </div>
  );
};