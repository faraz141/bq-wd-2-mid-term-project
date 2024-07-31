import React, { useState } from 'react';
import './style.css';

const Home = () => {
  const [text, setText] = useState('Real Estate');

  const changeText = () => {
    setText('New Word');
  };

  return (
    <div className="container">
      <div className="background">
        <div className="overlay"></div>
      </div>
      <div className="content">
        <div className="header">
          <h1>Find Your {text}</h1>
          <p>We are a real estate agency that will help you find the best residence you dream of, let's discuss for your dream house?</p>
        </div>
        <div className="search-section">
          <div className="buttons">
            <button className="btn-rent">FOR RENT</button>
            <button className="btn-sale">FOR SALE</button>
          </div>
          <div className="search-boxes">
            <input type="text" placeholder="Search Keyword" className="input-keyword" />
            <input type="text" placeholder="Search Location" className="input-location" />
            <select className="input-type">
              <option value="all">All</option>
            </select>
            <button className="btn-advanced">Advanced</button>
            <button className="btn-find" onClick={changeText}>Find Properties</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
