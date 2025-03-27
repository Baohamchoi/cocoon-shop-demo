import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { LanguageContext } from './LanguageContext'; // Import LanguageContext
import cocoonProductsVi from '../data/products'; // Vietnamese products
import cocoonProductsEn from '../data/productsE'; // English products
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Custom navigation buttons
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-brown-600 text-white p-2 rounded-full hover:bg-brown-800 transition-colors z-10"
    onClick={onClick}
  >
    <ChevronRight size={40} color="black" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-brown-600 text-white p-2 rounded-full hover:bg-brown-800 transition-colors z-10"
    onClick={onClick}
  >
    <ChevronLeft size={40} color="black" />
  </button>
);

const FeaturedProducts = () => {
  const { language } = useContext(LanguageContext); // Get current language
  const products = language === 'vi' ? cocoonProductsVi : cocoonProductsEn; // Choose products based on language

  const translations = {
    vi: {
      title: 'Sản phẩm nổi bật',
      noProducts: 'Không có sản phẩm nào để hiển thị.',
      addToCart: 'Thêm vào giỏ',
      viewDetails: 'Xem chi tiết',
    },
    en: {
      title: 'Featured Products',
      noProducts: 'No products to display.',
      addToCart: 'Add to Cart',
      viewDetails: 'View Details',
    },
  };

  const t = translations[language]; // Choose translation based on current language

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-brown-800 text-center mb-12 animate-fade-in">{t.title}</h2>
        {products && products.length > 0 ? (
          <Slider {...settings}>
            {products.slice(0, 6).map((product) => (
              <div key={product.id} className="px-4">
                <Link to={`/product/${product.id}`}>
                  <div
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 h-[400px] flex flex-col"
                    style={{ transformOrigin: 'center' }}
                  >
                    <div className="h-48 bg-amber-100 flex items-center justify-center rounded-t-2xl">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="object-cover h-full w-full rounded-t-2xl"
                        onError={(e) => (e.target.src = 'https://via.placeholder.com/192x192')}
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-brown-800">{product.name}</h3>
                      <p className="text-brown-600 mt-2 line-clamp-2">{product.description}</p>
                      <p className="text-lg font-bold text-brown-800 mt-2">
                        {product.price.toLocaleString(language === 'vi' ? 'vi-VN' : 'en-US')} VND
                      </p>
                      <button className="mt-4 w-full bg-brown-600 text-white py-2 rounded-full hover:bg-brown-800 transition-colors duration-300">
                        {t.addToCart}
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center text-brown-600">{t.noProducts}</p>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
