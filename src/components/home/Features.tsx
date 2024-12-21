import React from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Utensils, Wifi } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Capacidad',
    description: 'Dos casas con capacidad para 6-8 personas cada una',
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: 'Ubicación Privilegiada',
    description: 'En pleno corazón del Valle de Ricote',
  },
  {
    icon: <Utensils className="h-6 w-6" />,
    title: 'Cocinas Equipadas',
    description: 'Todo lo necesario para una estancia perfecta',
  },
  {
    icon: <Wifi className="h-6 w-6" />,
    title: 'WiFi Gratuito',
    description: 'Conectividad en todas las instalaciones',
  },
];

export const Features: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Una Experiencia Única</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Descubre todo lo que nuestras casas rurales tienen para ofrecer
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md text-center"
          >
            <div className="text-green-600 mb-4 flex justify-center">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);