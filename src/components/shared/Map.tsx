import React from 'react';
import { motion } from 'framer-motion';

export const Map: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50123.80224121567!2d-1.3768842239257812!3d38.14876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd647b9e7fc92a85%3A0x403d278a576e680!2sValle%20de%20Ricote%2C%20Murcia!5e0!3m2!1ses!2ses!4v1709669153774!5m2!1ses!2ses"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación Casa Rural Valle de Ricote"
      />
    </motion.div>
  );
};