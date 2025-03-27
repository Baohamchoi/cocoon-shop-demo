import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import logo from '../img/logo1.png';
import { LanguageContext } from './LanguageContext';

const Header = () => {
  const [cartItemCount, setCartItemCount] = React.useState(0);
  const { language, toggleLanguage } = useContext(LanguageContext);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const uniqueItemCount = new Set(cart.map(item => item.id)).size;
    setCartItemCount(uniqueItemCount);
  };

  React.useEffect(() => {
    updateCartCount();
  }, []);

  React.useEffect(() => {
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cartUpdated', updateCartCount);
    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  const translations = {
    vi: {
      home: 'Trang chủ',
      products: 'Sản phẩm',
      about: 'Giới thiệu',
      newProducts: 'Sản phẩm mới',
      contact: 'Liên hệ',
      switchLang: 'English',
    },
    en: {
      home: 'Home',
      products: 'Products',
      about: 'About',
      newProducts: 'New Product',
      contact: 'Contact',
      switchLang: 'Vietnamese',
    },
  };

  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 bg-[#E6D29E] text-black shadow-md">
      <nav className="container px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="font-bold tracking-tight relative flex items-center text-2xl">
            <img src={logo} alt="Cocoon Logo" className="w-16 h-16" />
            <div className="mt-4">
              <h3 className="text-sm top-2 absolute">the</h3>
              <div className="flex flex-col items-center h-14">
                <h2 className="text-2xl font-extrabold tracking-widest">COCOON</h2>
                <h6 className="text-xs">ORIGINAL VIETNAM</h6>
              </div>
            </div>
          </h1>
        </Link>

        <ul className="flex space-x-10 justify-center flex-grow">
          <li>
            <Link to="/" className="text-2xl hover:text-white transition-colors hover:font-bold">
              {t.home}
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-2xl hover:text-white transition-colors hover:font-bold">
              {t.products}
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-2xl hover:text-white transition-colors hover:font-bold">
              {t.about}
            </Link>
          </li>
          <li>
            <Link to="/product introduction" className="text-2xl hover:text-white transition-colors hover:font-bold">
              {t.newProducts}
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-2xl hover:text-white transition-colors hover:font-bold">
              {t.contact}
            </Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            {t.switchLang}
          </button>
          <Link to="/cart" className="flex items-center space-x-2 hover:text-gray-200 transition-colors relative">
            <ShoppingCart size={40} className="mr-10" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 right-4 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;