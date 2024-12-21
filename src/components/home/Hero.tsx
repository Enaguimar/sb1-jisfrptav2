import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => (
  <section className="relative h-[90vh]">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
    </div>
    
    <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white max-w-2xl text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Tu Refugio en el Valle de Ricote
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          Dos casas rurales únicas donde la tranquilidad y el confort se
          encuentran con la belleza natural del entorno.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/reservas"
            className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Reserva ahora
          </Link>
          <Link
            to="/las-casas"
            className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Ver casas
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);