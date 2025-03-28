import React from 'react';
import '../styles/ImageTextSection.css';

const ImageTextSection = ({ image, title, text, reverse = false }) => {
  return (
    <section className={`image-text-section ${reverse ? 'reverse' : ''}`}>
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div className="text-container">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default ImageTextSection;