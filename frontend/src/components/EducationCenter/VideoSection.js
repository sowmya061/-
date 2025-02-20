import React, { useState, useEffect } from 'react';
import { Videos } from '../../assets/data/Videos';
import './VideoSection.css';

function VideoSection() {
  const [category, setCategory] = useState('Wellness');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (Array.isArray(Videos)) {
      setVideos(Videos.filter(video => video.category === category));
    } else {
      console.error('Error: Videos data is not an array.');
    }
  }, [category]);

  return (
    <div className='video-section' id='video-section'>
      <div className='video-heading'>
        Videos
      </div>
      <div className='video-tabs'>
        {['Wellness', 'Nutrition', 'First Aid', 'Mental Health'].map(tab => (
          <button 
            key={tab} 
            className={`tab ${category === tab ? 'active' : ''}`} 
            onClick={() => setCategory(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className='video-grid'>
        {videos.length > 0 ? (
          videos.map(video => (
            <div key={video.id} className='video-card'>
              <iframe
                className='video-frame'
                width='100%'
                height='200'
                src={video.youtubeLink.replace('watch?v=', 'embed/')}
                title={video.title}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
              <div className='video-overlay'>
                <p>{video.description}</p>
                <small>Duration: {video.duration}</small>
              </div>
              <div className='video-expert'>
                <strong>{video.expert?.name || 'Expert not listed'}</strong>
                <p>{video.expert?.specialization || 'Specialization unavailable'}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No videos found for {category}.</p>
        )}
      </div>
    </div>
  );
}

export default VideoSection;