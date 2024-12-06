import React from 'react'
import "./styles/header.css"
import image1 from "./assets/tadas-sar-T01GZhBSyMQ-unsplash.jpg";

const About = () => {
  return (
    <div>
        <section className="section-2" id="About">
            <h1 className="about-header">ABOUT SECTION</h1>
            <div className="about-section">
                
                <div className="about-image">
<img src={image1} alt=""/>
                </div>

                <div className="innovate">
<p>
    "Innovating the Future" represents a forward-thinking mindset dedicated to shaping 
    tomorrow through creativity, technology, and progress. It embodies the belief that 
    continuous innovation is the key to overcoming challenges and driving societal, technological,
     and environmental transformation.
</p>
                </div>
            </div>

        </section>

    </div>
  )
}

export default About