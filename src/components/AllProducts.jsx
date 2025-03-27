import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';
import productsVi from '../data/products';
import productsEn from '../data/productsE';

const AllProducts = () => {
  const { language } = useContext(LanguageContext);
  const products = language === 'vi' ? productsVi : productsEn;

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const translations = {
    vi: {
      title: 'Tất cả sản phẩm',
      addToCart: 'Thêm vào giỏ',
      viewDetails: 'Xem chi tiết',
    },
    en: {
      title: 'All Products',
      addToCart: 'Add to Cart',
      viewDetails: 'View Details',
    },
  };

  const t = translations[language];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-brown-800 text-center mb-12 animate-fade-in">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <Link to={`/product/${product.id}`}>
                <div className="h-48 bg-amber-100 flex items-center justify-center">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => (e.target.src = 'https://via.placeholder.com/192x192')}
                  />
                </div>
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-brown-800">{product.name}</h3>
                <p className="text-brown-600 mt-2 line-clamp-2">{product.description}</p>
                <p className="text-lg font-bold text-brown-800 mt-2">
                  {product.price.toLocaleString(language === 'vi' ? 'vi-VN' : 'en-US')} {language === 'vi' ? 'VND' : 'VND'}
                </p>
                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-[#ECDB81] text-black py-2 rounded-full hover:bg-[#706942] hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    {t.addToCart}
                  </button>
                  <Link
                    to={`/product/${product.id}`}
                    className="flex-1 bg-[#F8F6F1] text-black py-2 rounded-full hover:text-white hover:bg-[#635b41] text-center transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    {t.viewDetails}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;