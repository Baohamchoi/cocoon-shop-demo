import React, { useContext } from 'react';
import { LanguageContext } from '../components/LanguageContext'; // Import LanguageContext
import bgImage from '../img/background/background.png'; // Current background image
import bg4 from '../img/background/bg4.jpg'; // New background image

const About = () => {
  const { language } = useContext(LanguageContext); // Get the current language

  const translations = {
    vi: {
      title: 'Về Cocoon Shop',
      description: 'Mỹ phẩm thuần chay từ thiên nhiên Việt Nam - Đẹp bền vững, dịu nhẹ cho làn da.',
      whoWeAre: 'Chúng tôi là ai?',
      whoWeAreText: 'Cocoon Shop tự hào là thương hiệu mỹ phẩm thuần chay tiên phong tại Việt Nam, khai thác vẻ đẹp từ thiên nhiên với các nguyên liệu như cà phê Đắk Lắk, bí đao Đồng Nai và mật ong Tây Nguyên. Mỗi sản phẩm là tâm huyết của chúng tôi để mang đến sự dịu nhẹ, an toàn cho làn da và thân thiện với môi trường.',
      mission: 'Sứ mệnh của chúng tôi',
      missionText: 'Chúng tôi tin rằng vẻ đẹp không chỉ nằm ở bề ngoài mà còn ở sự hài hòa với thiên nhiên. Cocoon Shop cam kết mang đến những sản phẩm làm đẹp bền vững, không thử nghiệm trên động vật, giúp bạn tự tin tỏa sáng theo cách tự nhiên nhất.',
      commitment1: 'Thuần chay 100%',
      commitment1Text: 'Không sử dụng thành phần từ động vật, không thử nghiệm trên động vật.',
      commitment2: 'Thiên nhiên Việt Nam',
      commitment2Text: 'Nguyên liệu từ nông sản Việt như bí đao, cà phê, nghệ, mật ong.',
      commitment3: 'Bền vững',
      commitment3Text: 'Bao bì thân thiện môi trường, giảm thiểu tác động đến hệ sinh thái.',
    },
    en: {
      title: 'About Cocoon Shop',
      description: 'Vegan cosmetics from Vietnam\'s nature - Sustainable beauty, gentle on your skin.',
      whoWeAre: 'Who we are?',
      whoWeAreText: 'Cocoon Shop is proud to be the first vegan cosmetics brand in Vietnam, drawing beauty from nature with ingredients like Dak Lak coffee, Dong Nai gourd, and Central Highlands honey. Each product is our passion to bring gentle, safe skincare while being environmentally friendly.',
      mission: 'Our Mission',
      missionText: 'We believe that beauty lies not only in appearance but also in harmony with nature. Cocoon Shop is committed to bringing sustainable beauty products, cruelty-free, helping you shine in the most natural way.',
      commitment1: '100% Vegan',
      commitment1Text: 'No animal-derived ingredients, cruelty-free.',
      commitment2: 'Vietnamese Nature',
      commitment2Text: 'Ingredients from Vietnamese crops like gourd, coffee, turmeric, honey.',
      commitment3: 'Sustainable',
      commitment3Text: 'Eco-friendly packaging, reducing ecological impact.',
    },
  };

  const t = translations[language];

  return (
    <section id="about" className="py-16 bg-gray-50 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${bg4})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 animate-fade-in">{t.title}</h2>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in-up">{t.description}</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2">
            <img
              src={bgImage}
              alt="Cocoon Nature"
              className="w-full h-96 object-cover rounded-lg shadow-lg animate-fade-in"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/600x400')}
            />
          </div>
          <div className="md:w-1/2 text-left">
            <h3 className="text-3xl font-semibold mb-4">{t.whoWeAre}</h3>
            <p className="text-lg leading-relaxed">{t.whoWeAreText}</p>
          </div>
        </div>

        <div className="bg-white/80 py-12 rounded-lg shadow-md mb-16 text-gray-800">
          <div className="text-center">
            <h3 className="text-3xl font-semibold mb-6 animate-fade-in">{t.mission}</h3>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed animate-fade-in-up">{t.missionText}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/80 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in text-gray-800">
            <h4 className="text-xl font-semibold mb-2">{t.commitment1}</h4>
            <p>{t.commitment1Text}</p>
          </div>
          <div className="text-center p-6 bg-white/80 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in text-gray-800">
            <h4 className="text-xl font-semibold mb-2">{t.commitment2}</h4>
            <p>{t.commitment2Text}</p>
          </div>
          <div className="text-center p-6 bg-white/80 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in text-gray-800">
            <h4 className="text-xl font-semibold mb-2">{t.commitment3}</h4>
            <p>{t.commitment3Text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
