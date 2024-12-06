import React from 'react';
import './styles/header.css';
import art1 from "./assets/artem-sapegin-b18TRXc8UPQ-unsplash.jpg"

const Articles = () => {
  return (
    <div>
      <section id="Blog">
        <h1 className="about-header" style={{ marginBottom: '20px' }}>
          ARTICLES PREVIEW
        </h1>
        <div className="container">
          <div className="card">
            <img
              src={art1}
              alt="Article Image"
              className="card-img"
            />
            <div className="card-content">
              <h2 className="card-title">Article Title 1</h2>
              <p className="card-description">
                This is a short description of the article. It gives a brief overview of what the article is about.
                <span className="more-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore minima dolore, alias fuga cum
                  nihil quod ad, dolores libero rem dolorum! Unde architecto quis veniam aperiam ipsam consectetur
                  voluptate?
                </span>
              </p>
              <button style={{ padding: '6px' }}>View All</button>
            </div>
          </div>

          <div className="card">
            <img
              src={art1}
              alt="Article Image"
              className="card-img"
            />
            <div className="card-content">
              <h2 className="card-title">Article Title 2</h2>
              <p className="card-description">
                This is a short description of another article. It provides an introduction to the content.
                <span className="more-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore minima dolore, alias fuga cum
                  nihil quod ad, dolores libero rem dolorum! Unde architecto quis veniam aperiam ipsam consectetur
                  voluptate?
                </span>
              </p>
              <button style={{ padding: '6px' }}>View All</button>
            </div>
          </div>

          <div className="card">
            <img
              src={art1}
              alt="Article Image"
              className="card-img"
            />
            <div className="card-content">
              <h2 className="card-title">Article Title 3</h2>
              <p className="card-description">
                Here’s a description for a third article. It summarizes the key points of the blog post.
                <span className="more-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore minima dolore, alias fuga cum
                  nihil quod ad, dolores libero rem dolorum! Unde architecto quis veniam aperiam ipsam consectetur
                  voluptate?
                </span>
              </p>
              <button style={{ padding: '6px' }}>View All</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
