import React from 'react';
import './styles/header.css';
import test1 from "./assets/testimonial-edward-150x150.png"

const Testimonial = () => {
  return (
    <div>
      <section className="testimonal-section" id="Testimonials">
        <h1 className="about-header" style={{ marginBottom: '30px' }}>
          TESTIMONIAL SECTION
        </h1>
        <div className="testimonial-container">
          <div className="testimonial">
            <div className="profile-container">
              <img className="profile" src={test1} alt="" />
            </div>
            <div className="testimonial-text">
              <h1>Andrew Rathone</h1>
              <p style={{ color: 'rgb(121, 119, 119)' }}>Customer</p>
              <hr />
              <p style={{ fontStyle: 'italic' }}>
                "This service is amazing! It helped my business grow tremendously!"
              </p>
            </div>
          </div>

          <div className="testimonial">
            <div className="profile-container">
              <img className="profile" src={test1} alt="" />
            </div>
            <div className="testimonial-text">
              <h1>Andrew Rathone</h1>
              <p style={{ color: 'rgb(121, 119, 119)' }}>Customer</p>
              <hr />
              <p style={{ fontStyle: 'italic' }}>
                "This service is amazing! It helped my business grow tremendously!"
              </p>
            </div>
          </div>

          <div className="testimonial">
            <div className="profile-container">
              <img className="profile" src={test1} alt="" />
            </div>
            <div className="testimonial-text">
              <h1>Andrew Rathone</h1>
              <p style={{ color: 'rgb(121, 119, 119)' }}>Customer</p>
              <hr />
              <p style={{ fontStyle: 'italic' }}>
                "This service is amazing! It helped my business grow tremendously!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
