import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Bed, Bath, Users, Check } from 'lucide-react';
import { houses } from '@/data/houses';

const HouseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const house = houses.find(h => h.id === id);

  if (!house) {
    return <Navigate to="/las-casas" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{house.name} - Valle de Ricote</title>
        <meta
          name="description"
          content={`Descubre ${house.name}, ${house.description}`}
        />
      </Helmet>

      <div className="relative h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${house.mainImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{house.name}</h1>
            <p className="text-xl">{house.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-semibold mb-8">Características principales</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                <Users className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Capacidad</p>
                  <p className="font-semibold">{house.capacity}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                <Bed className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Dormitorios</p>
                  <p className="font-semibold">{house.bedrooms} habitaciones</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                <Bath className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Baños</p>
                  <p className="font-semibold">{house.bathrooms} baños</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-6">Servicios y comodidades</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {house.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">¿Te interesa esta casa?</h3>
              <p className="text-gray-600 mb-6">
                Puedes realizar tu reserva a través de Booking.com o contactarnos 
                directamente por WhatsApp.
              </p>
              <div className="space-y-4">
                <a
                  href="https://www.booking.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 text-white text-center px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Reservar en Booking.com
                </a>
                <a
                  href="https://wa.me/34XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-green-600 text-center px-6 py-3 rounded-lg border-2 border-green-600 hover:bg-green-50 transition-colors"
                >
                  Contactar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseDetail;