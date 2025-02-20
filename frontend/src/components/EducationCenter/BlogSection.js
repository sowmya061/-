import React, { useState } from 'react';
import { Blogs } from '../../assets/data/Blogs';
import './BlogSection.css';
import { useNavigate } from 'react-router-dom';

function BlogSection() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const blogsPerPage = 3;
  const cardWidth = 280;
  const gap = 24;
  const totalWidth = cardWidth + gap;
  const maxIndex = Math.max(Blogs.length - blogsPerPage, 0);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className='blog-section' id='blogs-section' style={{ padding: '2rem' }}>
      <h2 className='section-title' style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        Explore Our Latest Blogs
      </h2>
      <div className='carousel-container' style={{ overflow: 'hidden', width: `${totalWidth * blogsPerPage}px` }}>
        <button className='carousel-arrow left' onClick={handlePrev}>&#9664;</button>
        <div 
          className='carousel-track' 
          style={{
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(-${currentIndex * totalWidth}px)`
          }}
        >
          {Blogs.map(blog => (
            <div key={blog.id} className='blog-card' style={{ width: `${cardWidth}px`, marginRight: `${gap}px` }}>
              <img src={blog.imageUrl} alt={blog.title} className='blog-image' />
              <h3 className='blog-title'>{blog.title}</h3>
              <p className='blog-author'>By {blog.author.name} - {blog.author.specialization}</p>
              <p className='blog-description'>{blog.description}</p>
              <p className='blog-date'>Published on: {blog.publishedDate} | {blog.readTime}</p>
              <button className='read-more-btn' onClick={() => navigate(`/blogs/${blog.id}`)}>
                Read More
              </button>
            </div>
          ))}
        </div>
        <button className='carousel-arrow right' onClick={handleNext}>&#9654;</button>
      </div>
    </div>
  );
}

export default BlogSection;
