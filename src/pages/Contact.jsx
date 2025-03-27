import React, { useContext } from 'react';
import { LanguageContext } from '../components/LanguageContext'; // Import LanguageContext
import bgImage from '../img/background/bg2.webp'; // Add background image (optional, replace with actual image)

const Contact = () => {
  const { language } = useContext(LanguageContext); // Get the current language

  const translations = {
    vi: {
      title: 'Liên hệ với chúng tôi',
      description: 'Bạn có câu hỏi hay cần hỗ trợ? Đừng ngần ngại liên hệ với Cocoon Shop qua các kênh dưới đây.',
      name: 'Họ và tên',
      email: 'Email',
      message: 'Tin nhắn của bạn',
      sendMessage: 'Gửi tin nhắn',
      successMessage: 'Tin nhắn của bạn đã được gửi! Chúng tôi sẽ liên hệ sớm.',
      contactInfo: 'Thông tin liên hệ',
      hotline: 'Hotline',
      address: 'Địa chỉ',
      workingHours: 'Giờ làm việc',
    },
    en: {
      title: 'Contact Us',
      description: 'Have any questions or need support? Don\'t hesitate to reach out to Cocoon Shop through the channels below.',
      name: 'Name',
      email: 'Email',
      message: 'Your message',
      sendMessage: 'Send Message',
      successMessage: 'Your message has been sent! We will contact you soon.',
      contactInfo: 'Contact Information',
      hotline: 'Hotline',
      address: 'Address',
      workingHours: 'Working Hours',
    },
  };

  const t = translations[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t.successMessage);
    e.target.reset(); // Reset form after submission
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background and overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* This is the dark overlay */}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4 animate-fade-in">{t.title}</h2>
          <p className="text-xl text-white max-w-2xl mx-auto animate-fade-in-up">{t.description}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Information */}
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold text-brown-800 mb-6">{t.contactInfo}</h3>
            <div className="space-y-6 text-brown-600">
              <p>
                <span className="font-semibold text-brown-800">{t.email}: </span>
                <a
                  href="mailto:support@cocoonshop.vn"
                  className="underline hover:text-brown-800 transition-colors"
                >
                  support@cocoonshop.vn
                </a>
              </p>
              <p>
                <span className="font-semibold text-brown-800">{t.hotline}: </span>
                <span className="font-semibold">0909 123 456</span>
              </p>
              <p>
                <span className="font-semibold text-brown-800">{t.address}: </span>
                50A Đ. số 182, Tăng Nhơn Phú A, Thủ Đức, TP. Hồ Chí Minh
              </p>
              <p>
                <span className="font-semibold text-brown-800">{t.workingHours}: </span>
                Thứ 2 - Thứ 6, 9:00 - 17:00
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 space-y-6"
            >
              <h3 className="text-2xl font-semibold text-brown-800 mb-2">{t.name}</h3>
              <input
                type="text"
                placeholder={t.name}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-600 transition-all duration-200"
                required
              />
              <h3 className="text-2xl font-semibold text-brown-800 mb-2">{t.email}</h3>
              <input
                type="email"
                placeholder={t.email}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-600 transition-all duration-200"
                required
              />
              <h3 className="text-2xl font-semibold text-brown-800 mb-2">{t.message}</h3>
              <textarea
                placeholder={t.message}
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-600 transition-all duration-200"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-brown-600 text-white bg-[#8E7220] py-3 rounded-full hover:bg-brown-800 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                {t.sendMessage}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
