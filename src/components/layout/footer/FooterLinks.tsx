import React from 'react';
import { Link } from 'react-router-dom';

export const FooterLinks: React.FC = () => {
  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">Enlaces Rápidos</h3>
      <div className="space-y-3">
        <Link to="/las-casas" className="block text-gray-400 hover:text-green-400 transition-colors duration-300">
          Las Casas
        </Link>
        <Link to="/que-hacer" className="block text-gray-400 hover:text-green-400 transition-colors duration-300">
          Qué Hacer
        </Link>
        <Link to="/fotografias" className="block text-gray-400 hover:text-green-400 transition-colors duration-300">
          Fotografías
        </Link>
        <Link to="/reservas" className="block text-gray-400 hover:text-green-400 transition-colors duration-300">
          Reservas
        </Link>
        <Link to="/contacto" className="block text-gray-400 hover:text-green-400 transition-colors duration-300">
          Contacto
        </Link>
      </div>
    </div>
  );
};