import React from 'react';
import '../../styles/NewFooter.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';

const NewFooter = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={'footer-container'}>
      <div className="footer-links">
        {/* <div className="footer-item">
          <a href="#">
            <i
              // className={`fas fa-home ${isHovered ? 'fa-bounce' : ''}`}
              className='fas fa-home'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            ></i>
          </a>
        </div> */}
        <div className="footer-item">
          <a href="#">
            <i
              // className={`fa-brands fa-instagram ${isHovered ? 'fa-bounce' : ''}`}
              className='fa-brands fa-instagram'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            ></i>
          </a>
        </div>
        <div className="footer-item">
          <a href="#">
            <i
              // className={`fa-brands fa-youtube ${isHovered ? 'fa-bounce' : ''}`}
              className='fa-brands fa-youtube'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            ></i>
          </a>
        </div>
        <div className="footer-item">
          <a href="#">
            <i
              // className={`fa-brands fa-tiktok ${isHovered ? 'fa-bounce' : ''}`}
              className='fa-brands fa-tiktok'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            ></i>
          </a>
        </div>
        <div className="footer-item">
          <a href="#">
            <i
              // className={`fa-solid fa-phone ${isHovered ? 'fa-bounce' : ''}`}
              className='fa-solid fa-phone'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            ></i>
          </a>
        </div>
      </div>
      <img src="/logo.png" className="logofooter" alt="Logo" />
    </div>
  );
};

export default NewFooter;