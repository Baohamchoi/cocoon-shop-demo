import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from './LanguageContext'; // Import LanguageContext
import { PlusIcon, MinusIcon } from 'lucide-react'; // Import icon nếu cần

const Cart = () => {
  const { language } = useContext(LanguageContext); // Lấy ngôn ngữ từ context
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const updateQuantity = (id, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated')); // Cập nhật Header
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated')); // Cập nhật Header
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
    window.dispatchEvent(new Event('cartUpdated')); // Cập nhật Header
  };

  const handleCheckout = () => {
    setIsModalOpen(true); // Mở modal
    // Xóa giỏ hàng sau khi đặt hàng
    setTimeout(() => {
      setCart([]);
      localStorage.removeItem('cart');
      window.dispatchEvent(new Event('cartUpdated')); // Cập nhật Header
    }, 1200); // Delay nhẹ để modal hiển thị trước khi xóa giỏ
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const translations = {
    vi: {
      emptyCart: 'Giỏ hàng của bạn đang trống.',
      continueShopping: 'Tiếp tục mua sắm',
      total: 'Tổng cộng',
      checkout: 'Thanh toán',
      remove: 'Xóa',
      successOrder: 'Đặt hàng thành công!',
      thankYou: 'Cảm ơn bạn đã mua sắm tại Cocoon Shop.',
    },
    en: {
      emptyCart: 'Your cart is empty.',
      continueShopping: 'Continue shopping',
      total: 'Total',
      checkout: 'Checkout',
      remove: 'Remove',
      successOrder: 'Order Successful!',
      thankYou: 'Thank you for shopping at Cocoon Shop.',
    },
  };

  const t = translations[language];

  if (cart.length === 0) {
    return (
      <section className="py-16 bg-gray-50 text-center h-130">
        <p className="text-brown-600 text-lg">{t.emptyCart}</p>
        <Link to="/products" className="mt-4 inline-block text-brown-600 hover:text-brown-800 underline">
          {t.continueShopping}
        </Link>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-brown-800 mb-8 text-center">{t.total}</h1>
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-xl font-semibold text-brown-800">{item.name}</h3>
                <p className="text-brown-600">
                  {item.price.toLocaleString(language === 'vi' ? 'vi-VN' : 'en-US')} VND x {item.quantity}
                </p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-brown-600 text-white px-2 py-1 rounded-l hover:bg-brown-800"
                  >
                    <MinusIcon size={16} color='black'/> {/* Minus Icon */}
                  </button>
                  <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-brown-600 text-white px-2 py-1 rounded-r hover:bg-brown-800"
                  >
                    <PlusIcon size={16} color='black'/> {/* Plus Icon */}
                  </button>
                </div>
              </div>
              <p className="text-lg font-bold text-brown-800">
                {(item.price * item.quantity).toLocaleString(language === 'vi' ? 'vi-VN' : 'en-US')} VND
              </p>
              <button
                onClick={() => removeItem(item.id)}
                className="ml-4 text-red-600 hover:text-red-800"
              >
                {t.remove}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={clearCart}
            className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-800 transition-colors duration-300"
          >
            {t.remove}
          </button>
          <div className="text-right">
            <p className="text-2xl font-bold text-brown-800">
              {t.total}: {totalPrice.toLocaleString(language === 'vi' ? 'vi-VN' : 'en-US')} VND
            </p>
            <button
              onClick={handleCheckout}
              className="mt-4 bg-[#8E7220] text-white px-6 py-3 rounded-2xl hover:bg-brown-800 transition-colors duration-300"
            >
              {t.checkout}
            </button>
          </div>
        </div>
        <Link to="/products" className="mt-4 block text-center text-brown-600 hover:text-brown-800 underline">
          {t.continueShopping}
        </Link>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold text-brown-800 mb-4">{t.successOrder}</h2>
              <p className="text-brown-600 mb-6">{t.thankYou}</p>
              <Link
                to="/products"
                onClick={closeModal}
                className="bg-[#8E7220] text-white px-6 py-2 rounded-full hover:bg-brown-800 transition-colors duration-300"
              >
                {t.continueShopping}
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
