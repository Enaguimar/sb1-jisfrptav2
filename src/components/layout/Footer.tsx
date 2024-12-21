import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { FooterLinks } from './footer/FooterLinks';
import { FooterContact } from './footer/FooterContact';
import { FooterSocial } from './footer/FooterSocial';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand and Description */}
          <div>
            <Link to="/" className="flex items-center space-x-2 text-white mb-4">
              <Home className="h-8 w-8 text-green-500" />
              <span className="text-xl font-semibold">Valle de Ricote</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Tu refugio perfecto en el corazón de la naturaleza. Descubre la tranquilidad
              y el confort en nuestras casas rurales.
            </p>
          </div>

          {/* Quick Links */}
          <FooterLinks />

          {/* Contact Info */}
          <FooterContact />

          {/* Social Media */}
          <FooterSocial />
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Casa Rural Valle de Ricote. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;