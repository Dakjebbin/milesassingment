import React from 'react'
import "./styles/header.css"
import img1 from "./assets/html_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png"
import img2 from "./assets/javascript_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png"
import img3 from "./assets/css_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png"
import img4 from "./assets/php_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png"

const Feature = () => {
  return (
    <div>
        <section id="Features">
            <h1 className="about-header">FEATURE SECTION</h1>
            <div className="features-grid">
                <div className="feature">
                    <img src={img1}
                     alt="Feature 1" className="feature-icon"/>
                    <h3>HTML</h3>
                    <p>HTML (HyperText Markup Language) is the standard language used to create and structure 
                        content on the web. It provides a set of elements (tags) that define the structure and layout of a webpage, 
                        such as headings, paragraphs, images, links, lists, and more.</p>
                </div>
                <div className="feature">
                    <img src={img2} 
                    alt="Feature 2" className="feature-icon"/>
                    <h3>CSS</h3>
                    <p>CSS (Cascading Style Sheets) is a stylesheet language used to control the appearance and
                         layout of web pages. It defines how HTML elements should be displayed,
                         including aspects such as colors, fonts, spacing, positioning, and responsiveness. </p>
                </div>
                <div className="feature">
                    <img src={img3} alt="Feature 3" 
                    className="feature-icon"/>
                    <h3>JS</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo labore libero eligendi error facilis expedita doloribus, architecto eum, iure quod culpa dicta illum,
                         alias sequi beatae fuga consequuntur voluptatibus aliquid.</p>
                </div>
                <div className="feature">
                    <img src={img4} alt="Feature 4" className="feature-icon"/>
                    <h3>php</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore cum deserunt aperiam doloribus dignissimos! Eveniet dolore ex in, aliquam eligendi numquam consectetur,
                         ipsum doloribus dolorum animi quaerat culpa iste. Doloremque.</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Feature