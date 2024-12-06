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
     and environmental transformation. This concept highlights the importance of pushing boundaries,
      embracing new ideas, and leveraging advancements to build a better and more sustainable future. 
      With an unwavering commitment to growth, "Innovating the Future" focuses on finding solutions that
       enhance lives, create opportunities, and inspire positive change on a global scale.
</p>
                </div>
            </div>

        </section>

    </div>
  )
}

export default About