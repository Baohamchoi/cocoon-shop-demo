import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LanguageContext } from '../components/LanguageContext'; // Import LanguageContext
import productsVi from '../data/products'; // Vietnamese products
import productsEn from '../data/productsE'; // English products

const ProductDetail = () => {
  const { language } = useContext(LanguageContext); // Lấy ngôn ngữ hiện tại
  const { id } = useParams();
  
  // Lấy sản phẩm từ file dữ liệu phù hợp với ngôn ngữ
  const products = language === 'vi' ? productsVi : productsEn;
  const product = products.find((p) => p.id === parseInt(id));

  const translations = {
    vi: {
      notFound: 'Sản phẩm không tồn tại.',
      addToCart: 'Thêm vào giỏ hàng',
      viewCart: 'Xem giỏ hàng',
      ingredients: 'Thành phần',
      benefits: 'Lợi ích',
    },
    en: {
      notFound: 'Product not found.',
      addToCart: 'Add to Cart',
      viewCart: 'View Cart',
      ingredients: 'Ingredients',
      benefits: 'Benefits',
    },
  };

  const t = translations[language]; // Chọn bản dịch dựa trên ngôn ngữ

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
  };

  if (!product) return <p className="text-center text-brown-600 py-16">{t.notFound}</p>;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/384x384')}
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-brown-800 mb-4">{product.name}</h1>
            <p className="text-brown-600 mb-6">{product.description}</p>
            <p className="text-2xl font-bold text-brown-800 mb-6">
              {product.price.toLocaleString(language === 'vi' ? 'vi-VN' : 'en-US')} VND
            </p>
            <button
              onClick={addToCart}
              className="w-full bg-[#8E7220] text-white py-3 rounded-full hover:bg-brown-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              {t.addToCart}
            </button>
            <Link
              to="/cart"
              className="block mt-4 text-center text-brown-600 hover:text-brown-800 underline"
            >
              {t.viewCart}
            </Link>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-brown-800 mb-4">{t.ingredients}</h2>
          <ul className="list-disc list-inside text-brown-600">
            {product.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold text-brown-800 mt-8 mb-4">{t.benefits}</h2>
          <ul className="list-disc list-inside text-brown-600">
            {product.benefits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
