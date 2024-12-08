import React from 'react';
import './FreelanceAdvertisement.css';
import uiDesignerImage from '../../src/assets/logo1.png'; // Replace with the actual path to your image

const FreelanceAdvertisement = () => {
  return (
    <div className="freelance-container">
      <div className="header">
        <h1>FREELANCE FREEDOM AT YOUR FINGERTIPS</h1>
        <p>
          Find skilled freelancers for your projects, from writing to web development on our platform - where talent meets opportunity!
        </p>
        <button className="cta-button">UI Designer</button>
      </div>
      <div className="benefits-section">
        <div className="benefit">
          <h2>Diverse Talent Pool</h2>
          <p>Access a global network of skilled professionals spanning various industries and expertise areas.</p>
        </div>
        <div className="benefit">
          <h2>Cost-Effectiveness</h2>
          <p>Save on overhead costs associated with full-time employees by hiring freelancers on a project basis.</p>
        </div>
        <div className="benefit">
          <h2>Specialized Expertise</h2>
          <p>Tap into specialized skills and niche expertise that may not be available in-house.</p>
        </div>
        <div className="benefit">
          <h2>Access to Global Markets</h2>
          <p>Expand your reach and tap into new markets by working with freelancers around the world.</p>
        </div>
      </div>
      <div className="image-section">
        <img src={uiDesignerImage} alt="UI Designer" />
      </div>
    </div>
  );
};

export default FreelanceAdvertisement;
