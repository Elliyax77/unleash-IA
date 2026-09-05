import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Masterclass from '../components/Masterclass';
import Catalog from '../components/Catalog';

const Home = () => {
  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
      <Hero />
      <About />
      <Masterclass />
      <Catalog />
    </main>
  );
};

export default Home;
