import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Footer from '../footer/footer';
import About from '../about/About';
import Services from '../services/Services';
// import Properties from '../properties/properties';
import Contact from '../contact/Contact';
import './style.css';

const Home = () => {
  const [text] = useState('Real Estate');
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('all');
  const navigate = useNavigate();

  // const changeText = () => {
  //   setText('New Word');
  // };

  const handleFindProperties = () => {
    navigate('/properties', { state: { keyword, location, price, type } });
  };

  return (
    <>
      <section className="container">
        <div className="background">
          <div className="overlay"></div>
        </div>
        <div className="content">
          <div className="header">
            <h1>Find Your {text}</h1>
            <p>We are a real estate agency that will help you find the best residence you dream of. Let's discuss your dream house?</p>
          </div>
          <div className="search-section">
            <div className="buttons">
              <button className="btn-rent">FOR RENT</button>
              <button className="btn-sale">FOR SALE</button>
            </div>
            <div className="search-boxes">
              <input
                type="text"
                placeholder="Search Keyword"
                className="input-keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <input
                type="text"
                placeholder="Search Location"
                className="input-location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <input
                type="number"
                placeholder="$price"
                className="input-price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <select
                className="input-type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="all">All</option>
                <option value="HOUSE">House</option>
                <option value="OFFICE">Office</option>
                <option value="STUDIO">Studio</option>
              </select>
              <button className="btn-find" onClick={handleFindProperties}>Find Properties</button>
            </div>
          </div>
        </div>
      </section>
      <About/>
      <Services/>
      <Contact/>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
