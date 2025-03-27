import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Copyright } from 'lucide-react';
import { LanguageContext } from './LanguageContext';

const Footer = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    vi: {
      copyright: 'Bản quyền',
      facebook: 'Facebook',
      instagram: 'Instagram',
      email: 'Email',
      description: 'Mỹ phẩm thuần chay từ thiên nhiên - Đẹp bền vững, dịu nhẹ cho làn da.',
    },
    en: {
      copyright: 'Copyright',
      facebook: 'Facebook',
      instagram: 'Instagram',
      email: 'Email',
      description: 'Vegan cosmetics from nature - Sustainable beauty, gentle on your skin.',
    },
  };

  const t = translations[language];

  return (
    <footer className="bg-[#1d1a11] text-[#D4A373] py-12 fixed-bottom w-full">
      {/* Đường viền trên */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Logo và bản quyền */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">Cocoon Shop</span>
            <Copyright size={18} />
            <span>{`2025. ${t.copyright} all rights reserved.`}</span>
          </div>

          {/* Liên kết mạng xã hội */}
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-white transition-colors"
            >
              <Facebook size={20} />
              <span>{t.facebook}</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-white transition-colors"
            >
              <Instagram size={20} />
              <span>{t.instagram}</span>
            </a>
            <Link
              to="/contact"
              className="flex items-center space-x-1 hover:text-white transition-colors"
            >
              <Mail size={20} />
              <span>{t.email}</span>
            </Link>
          </div>
        </div>

        {/* Đường phân cách */}
        <hr className="my-8 border-coffee-light/20" />

        {/* Thông tin bổ sung */}
        <div className="text-center text-sm">
          <p>{t.description}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
