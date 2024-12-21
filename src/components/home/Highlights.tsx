import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Coffee, Sun } from 'lucide-react';

const highlights = [
  {
    icon: <Mountain className="h-8 w-8 text-green-600" />,
    title: 'Entorno Natural',
    description: 'Rodeado de paisajes espectaculares y rutas de senderismo',
  },
  {
    icon: <Coffee className="h-8 w-8 text-green-600" />,
    title: 'Gastronomía Local',
    description: 'Descubre los sabores tradicionales de la región',
  },
  {
    icon: <Sun className="h-8 w-8 text-green-600" />,
    title: 'Clima Ideal',
    description: 'Disfruta de un clima perfecto durante todo el año',
  },
];

export const Highlights: React.FC = () => (
  <section className="py-20 bg-green-50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">
          ¿Por qué elegirnos?
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Descubre lo que hace especial al Valle de Ricote
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);