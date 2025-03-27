import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import AllProducts from '../components/AllProducts';

const Home = () => {
  return (
    <div className="space-y-16">
      <Hero />
      <FeaturedProducts />
      <AllProducts />
    </div>
  );
};

export default Home;