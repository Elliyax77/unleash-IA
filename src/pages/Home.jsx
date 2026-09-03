import React from 'react';
import Hero from '../components/Hero';
import Masterclass from '../components/Masterclass';
import Catalog from '../components/Catalog';

const Home = () => {
  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
      <Hero />
      <Masterclass />
      <Catalog />
    </main>
  );
};

export default Home;
