import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const CallToAction: React.FC = () => (
  <section className="py-20 bg-green-600 text-white">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4">
          ¿Listo para vivir una experiencia única?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Reserva tu estancia en Valle de Ricote y descubre todo lo que
          tenemos para ofrecerte.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/reservas"
            className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Reservar ahora
          </Link>
          <Link
            to="/contacto"
            className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Contactar
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);