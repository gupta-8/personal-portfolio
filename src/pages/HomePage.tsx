import React from 'react';
import { Hero } from '../components/home/Hero';
import { HighlightsRow } from '../components/home/HighlightsRow';
import { FeaturedProjects } from '../components/home/FeaturedProjects';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <HighlightsRow />
      <FeaturedProjects />
    </>
  );
};
