import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/layout/navbar/Navbar';
import Home from './component/layout/home/home';
import About from './component/layout/about/About';
import Services from './component/layout/services/Services';
import Contact from './component/layout/contact/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
