import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/shared/PageHeader';
import { ActivityCard } from '../components/activities/ActivityCard';
import { activities } from '../data/activities';

const Activities: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Qué Hacer - Valle de Chicote</title>
        <meta
          name="description"
          content="Descubre todas las actividades y experiencias que puedes disfrutar durante tu estancia en Valle de Chicote."
        />
      </Helmet>

      <PageHeader
        title="Qué Hacer"
        description="Explora las múltiples actividades y experiencias que te esperan"
        image="https://images.unsplash.com/photo-1533392151650-269f96231f65"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} {...activity} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Activities;