import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, MessageCircle } from 'lucide-react';
import { PageHeader } from '../components/shared/PageHeader';

const Booking = () => {
  return (
    <>
      <Helmet>
        <title>Reservas - Valle de Chicote</title>
        <meta
          name="description"
          content="Reserva tu estancia en nuestras casas rurales. Disponible a través de Booking.com o contacto directo por WhatsApp."
        />
      </Helmet>

      <PageHeader
        title="Reservas"
        description="Reserva tu escapada rural de forma fácil y segura"
        image="https://images.unsplash.com/photo-1551927336-09d50efd69cd"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Reserva a través de Booking.com</h2>
            <p className="text-gray-600 mb-6">
              Realiza tu reserva de forma segura a través de Booking.com. Podrás ver la disponibilidad
              en tiempo real y gestionar tu reserva fácilmente.
            </p>
            <a
              href="https://www.booking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Reservar ahora
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Contacto directo por WhatsApp</h2>
            <p className="text-gray-600 mb-6">
              También puedes contactarnos directamente por WhatsApp para consultar disponibilidad
              y realizar tu reserva.
            </p>
            <a
              href="https://wa.me/34XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg border-2 border-green-600 hover:bg-green-50 transition-colors"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;