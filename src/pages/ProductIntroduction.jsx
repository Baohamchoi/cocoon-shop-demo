import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../components/LanguageContext'; // Import LanguageContext
import productsVi from '../data/products'; // Vietnamese products
import productsEn from '../data/productsE'; // English products
import newProductImg from '../img/sp1.jpg';
import bg from '../img/background/bg3.jpg';

const ProductIntroduction = () => {
  const { language } = useContext(LanguageContext);
  const products = language === 'vi' ? productsVi : productsEn;
  const product = products.find((p) => p.id === 1);

  const translations = {
    vi: {
      productLaunch: 'Sản Phẩm Mới Ra Mắt',
      buyNow: 'Mua Ngay',
      brandStatement: 'Cocoon – Mang thiên nhiên vào làn da bạn, thuần chay, không thử nghiệm trên động vật.',
      ingredients: 'Thành Phần',
      benefits: 'Lợi Ích',
    },
    en: {
      productLaunch: 'New Product Launch',
      buyNow: 'Buy Now',
      brandStatement: 'Cocoon – Bringing nature to your skin, vegan, cruelty-free.',
      ingredients: 'Ingredients',
      benefits: 'Benefits',
    },
  };

  const t = translations[language]; // Chọn bản dịch dựa trên ngôn ngữ

  // State for animation control
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setIsImageVisible(true);
    setTimeout(() => setIsTextVisible(true), 500); // Delay text fade-in by 500ms
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background and overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12 text-white">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              src={newProductImg}
              alt={product.name}
              className={`w-100 h-auto rounded-lg shadow-xl transition-opacity duration-1000 ${isImageVisible ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
          <div className={`md:w-1/2 p-6 md:p-10 transition-opacity duration-1000 ${isTextVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg md:text-xl mb-6">{product.description}</p>
            <span className="inline-block bg-[#8E7220] text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">{t.productLaunch}</span>
            <p className="text-2xl font-semibold">{product.price.toLocaleString(language === 'vi' ? 'vi-VN' : 'en-US')} VND</p>
          </div>
        </section>

        {/* Ingredients and Benefits */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/80 p-6 rounded-lg shadow-md text-gray-800">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">{t.ingredients}</h2>
            <ul className="list-disc pl-5 text-base md:text-lg">
              {product.ingredients.map((ingredient, index) => (
                <li key={index} className="mb-2">{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white/80 p-6 rounded-lg shadow-md text-gray-800">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">{t.benefits}</h2>
            <ul className="list-disc pl-5 text-base md:text-lg">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="mb-2">{benefit}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="text-center mb-12">
          <button className="bg-[#ECDB81] text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#A88C29] transition-colors duration-300">
            {t.buyNow}
          </button>
        </section>

        {/* Brand Statement */}
        <section className="text-center">
          <p className="text-lg italic">{t.brandStatement}</p>
        </section>
      </div>
    </div>
  );
};

export default ProductIntroduction;
