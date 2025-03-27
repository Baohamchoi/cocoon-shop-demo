import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import bg from '../img/background/bg2.webp';

const Hero = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    vi: {
      welcome: 'Chào mừng đến với Cocoon Shop',
      subtitle: 'Mỹ phẩm thuần chay từ thiên nhiên - Đẹp bền vững, dịu nhẹ cho làn da.',
      explore: 'Khám phá ngay',
    },
    en: {
      welcome: 'Welcome to Cocoon Shop',
      subtitle: 'Vegan cosmetics from nature - Sustainable beauty, gentle on your skin.',
      explore: 'Explore Now',
    },
  };

  const t = translations[language];

  return (
    <section
      id="home"
      className="relative h-[88vh] flex items-center justify-center bg-gradient-to-r from-coffee-dark/80 via-coffee-default/60 to-coffee-light/40 overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-down drop-shadow-lg">
          {t.welcome}
        </h1>
        <p className="text-xl md:text-3xl text-[#f9e6d4] mb-8 animate-fade-in-up drop-shadow-md">
          {t.subtitle}
        </p>
        <a
          href="#products"
          className="inline-block text-[#f9e6d4] px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {t.explore}
        </a>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;