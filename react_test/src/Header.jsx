import React, { useState } from 'react';
import "./styles/header.css";
import logo from "./assets/alexander-shatov-Cys3W7_MXDU-unsplash-removebg-preview.png";

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  // Function to toggle the sidebar visibility
  const handleToggle = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <div>
      <header className="header-section">
        <div className="image-container">
          <img className="logo" src={logo} alt="" />
        </div>

        <nav>
          <ul className="nav-bar">
            <li>
              <a href="#home">Home </a>
            </li>
            <li>
              <a href="#About">About </a>
            </li>
            <li>
              <a href="#Features">Features</a>
            </li>
            <li>
              <a href="#Testimonials">Testimonials </a>
            </li>
            <li>
              <a href="#Blog">Blog </a>
            </li>
            <li>
              <a href="#Contact">Contact </a>
            </li>
          </ul>
        </nav>

        <div className="mobileicon" onClick={handleToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
      </header>

      {/* Mobile sidebar */}
      <nav className={`mobile-view ${isNavActive ? 'active' : ''}`}>
        <div >
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          height="32px" 
          viewBox="0 -960 960 960" 
          width="32px" 
          fill="white"
          onClick={handleToggle}
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </div>

        <ul>
          <li><a href="#home">Home </a></li>
          <li><a href="#About">About </a></li>
          <li><a href="#Features">Features</a></li>
          <li><a href="#Testimonials">Testimonials </a></li>
          <li><a href="#Blog">Blog </a></li>
          <li><a href="#Contact">Contact </a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
