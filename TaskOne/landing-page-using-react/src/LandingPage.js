/* src/LandingPage.js */
import React from 'react';
import './LandingPage.css';
import RbBikeImg from "./assets/RbBikeImg.png";

const LandingPage = () => (
  <div className="container">
    <h1 className="title">Welcome to Ashish 's Bike Shop</h1>
    <p className="subtitle"> This is simple landing page for Bike Shop</p>
    <button className="button">Get Started</button>
    <img src={ RbBikeImg } alt="Landing" className="image" />
    <svg className="svg-wave" viewBox="0 0 1440 320">
      <path fill="#007bff" fillOpacity="1" d="M0,224L48,234.7C96,245,192,267,288,261.3C384,256,480,224,576,208C672,192,768,192,864,186.7C960,181,1056,171,1152,192C1248,213,1344,267,1392,293.3L1440,320L1440,320L1392,320C1248,320,1152,320,1056,320C960,320,864,320,768,320C672,320,576,320,480,320C384,320,288,320,192,320C96,320,48,320,24,320L0,320Z"></path>
    </svg>
  </div>
);

export default LandingPage;
