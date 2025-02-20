import React, { useRef } from 'react';
import './Hero.css';
import sampleImage from '../../assets/eduhub.png';
import VideoSection from './VideoSection';
import BlogSection from './BlogSection';
import Guidelines from './Guidelines';

function Main() {
  const videoRef = useRef(null);
  const blogRef = useRef(null);
  const guideRef = useRef(null);


  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="hero-container">
        <div className="hero-left">
          <img src={sampleImage} alt="Healthcare" className="hero-image" />
        </div>
        <div className="hero-right">
          <div className="hero-tagline">
            <h1 className="tagline-big">Welcome to Education Center</h1>
            <p className="tagline-small">
              Explore expert-led videos, insightful blogs, and valuable resources 
              to enhance your medical knowledge and skills.
            </p>
          </div>
          <div className="button-group">
            <button className="edu-btn" onClick={() => scrollToSection(videoRef)}>
              Watch Videos
            </button>
            <button className="edu-btn" onClick={() => scrollToSection(blogRef)}>
              Read Blogs
            </button>
            <button className="edu-btn" onClick={() => scrollToSection(guideRef)}>
              Basic Guidelines
            </button>
          </div>
        </div>
      </div>

      <div ref={videoRef}>
        <VideoSection />
      </div>

      <div ref={blogRef}>
        <BlogSection />
      </div>

      <div ref={guideRef}>
        <Guidelines />
      </div>
    </>
  );
}

export default Main;
