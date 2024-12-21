import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { PageHeader } from '@/components/shared/PageHeader';
import { CategoryFilter } from '@/components/photos/CategoryFilter';
import { PhotoGrid } from '@/components/photos/PhotoGrid';
import { photos } from '@/data/photos';

const Photos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categories = Array.from(new Set(photos.map(photo => photo.category)));
  
  const filteredPhotos = selectedCategory === 'todos'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  const slides = filteredPhotos.map(photo => ({
    src: photo.url,
    title: photo.title,
    description: `Fecha: ${photo.date}`
  }));

  const handlePhotoClick = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Galería de Fotos - Valle de Chicote</title>
        <meta
          name="description"
          content="Explora nuestra galería de fotos y descubre todos los rincones de nuestras casas rurales."
        />
      </Helmet>

      <PageHeader
        title="Galería de Fotos"
        description="Descubre todos los rincones de nuestras casas"
        image="https://images.unsplash.com/photo-1455587734955-081b22074882"
      />

      <div className="container mx-auto px-4 py-16">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <PhotoGrid
          photos={filteredPhotos}
          onPhotoClick={handlePhotoClick}
        />
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={slides}
        render={{
          slide: ({ slide }) => (
            <div className="relative">
              <img
                src={slide.src}
                alt={slide.title}
                className="max-h-[80vh] w-auto mx-auto"
              />
              {(slide.title || slide.description) && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  {slide.title && <h3 className="text-lg font-semibold">{slide.title}</h3>}
                  {slide.description && <p className="text-sm">{slide.description}</p>}
                </div>
              )}
            </div>
          ),
        }}
      />
    </>
  );
};

export default Photos;