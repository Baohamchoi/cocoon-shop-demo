import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllProducts from './components/AllProducts';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Contact from './pages/Contact';
import About from './pages/About';
import ProductIntroduction from './pages/ProductIntroduction';
import { LanguageProvider } from './components/LanguageContext';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<AllProducts />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/product introduction' element={<ProductIntroduction/>} />
              <Route path='/about' element={<About/>} />
              <Route path="*" element={<div className="text-center text-2xl py-16 text-red-600 h-130">404 - Trang không tìm thấy</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;