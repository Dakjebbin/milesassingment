import React from 'react';
import './styles/header.css';
import foot from './assets/alexander-shatov-Cys3W7_MXDU-unsplash-removebg-preview.png';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-image">
          <img src={foot} alt="" />
        </div>
        <nav className="footer-nav">
          <h3
            style={{
              fontWeight: 'bold',
              color: 'rgb(196, 195, 195)',
              fontSize: '20px',
              fontFamily: 'Poppins',
            }}
          >
            QUICK LINKS
          </h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#About">About</a>
            </li>

            <li>
              <a href="#Blog">Blog</a>
            </li>

            <li>
              <a href="#Contact">Contact</a>
            </li>

            <li>
              <a href="#Home">Privacy Policy</a>
            </li>

            <li>
              <a href="#Home">Terms And Condition</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
