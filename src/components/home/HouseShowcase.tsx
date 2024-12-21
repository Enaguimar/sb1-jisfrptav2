import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, ArrowRight } from 'lucide-react';
import { houses } from '@/data/houses';

export const HouseShowcase: React.FC = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Nuestras Casas</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Dos opciones perfectas para tu escapada rural
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {houses.map((house, index) => (
          <motion.div
            key={house.id}
            initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div
              className="h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${house.mainImage})` }}
            />
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4">{house.name}</h3>
              <p className="text-gray-600 mb-6">{house.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{house.capacity}</span>
                </div>
                <Link
                  to={`/las-casas/${house.id}`}
                  className="flex items-center text-green-600 hover:text-green-700 transition-colors"
                >
                  Ver detalles
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);