import React from 'react';
import './Main.css';
import sampleImage from '../../assets/landingpage.png';
import { ArrowRight } from 'lucide-react';

function Main() {
  return (
    <div className="main-container">
      <div className="main-left">
        <img src={sampleImage} alt="Healthcare" className="main-image" />
      </div>
      <div className="main-right">
        <div className="main-tagline">
          <h1 className="tagline-big">Providing healthcare without boundaries</h1>
          <p className="tagline-small">Get instant medical assistance anytime, anywhere.</p>
        </div>
        <div className="button-group">
          <button className="learn-more">Learn More</button>
          <button className="book-call" variant="secondary">Book a Call <ArrowRight size={16} /></button>
        </div>
      </div>
    </div>
  );
}

export default Main;

