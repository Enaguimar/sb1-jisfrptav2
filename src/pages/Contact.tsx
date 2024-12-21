import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/shared/PageHeader';
import { ContactForm } from '../components/shared/ContactForm';
import { Map } from '../components/shared/Map';
import { CONTACT_INFO } from '@/utils/constants';

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contacto - Valle de Ricote</title>
        <meta
          name="description"
          content="Contacta con nosotros para reservar tu estancia o resolver cualquier duda sobre nuestras casas rurales."
        />
      </Helmet>

      <PageHeader
        title="Contacto"
        description="Estamos aquí para ayudarte"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Información de contacto</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Dirección</h3>
                    <p className="text-gray-600">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Teléfono</h3>
                    <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-600 hover:text-green-600">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Horario</h3>
                    <p className="text-gray-600">{CONTACT_INFO.schedule}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <ContactForm />
            </div>
          </motion.div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Nuestra ubicación</h2>
          <Map />
        </div>
      </div>
    </>
  );
};

export default Contact;