import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { HouseShowcase } from '@/components/home/HouseShowcase';
import { Highlights } from '@/components/home/Highlights';
import { TestimonialSlider } from '@/components/home/testimonials';
import { CallToAction } from '@/components/home/CallToAction';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Casa Rural Valle de Chicote - Tu refugio en la naturaleza</title>
        <meta
          name="description"
          content="Descubre nuestras acogedoras casas rurales en el Valle de Chicote. El lugar perfecto para desconectar y disfrutar de la naturaleza en familia o con amigos."
        />
      </Helmet>

      <Hero />
      <Features />
      <HouseShowcase />
      <Highlights />
      <TestimonialSlider />
      <CallToAction />
    </>
  );
};

export default Home;