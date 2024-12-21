import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/shared/PageHeader';
import { HouseCard } from '../components/houses/HouseCard';
import { houses } from '../data/houses';

const Houses = () => {
  return (
    <>
      <Helmet>
        <title>Nuestras Casas - Valle de Chicote</title>
        <meta
          name="description"
          content="Descubre nuestras dos casas rurales en Valle de Chicote. Espacios acogedores y completamente equipados para tu estancia perfecta."
        />
      </Helmet>

      <PageHeader
        title="Nuestras Casas"
        description="Dos opciones perfectas para tu escapada rural"
        image="https://images.unsplash.com/photo-1542718610-a1d656d1884c"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {houses.map((house) => (
            <HouseCard key={house.id} {...house} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Houses;