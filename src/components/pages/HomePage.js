import React, { useState, useEffect } from 'react';
import Header from '../sections/Header';
import '../../styles/Homepage.css';
// import BackgroundMedia from './BackgroundMedia';

const texts = [
  "Swagatham.   ",
  "స్వాగతం.   "
];

const HomePage = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && forward) {
      setForward(false);
      setTimeout(() => {
        setForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
        setSubIndex(0);
      }, 1000);
      return;
    }

    if (subIndex === 0 && !forward) {
      setForward(true);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
    }, forward ? 100 : 50);

    return () => clearTimeout(timeout);
  }, [subIndex, forward, index]);

  useEffect(() => {
    setDisplayText(texts[index].substring(0, subIndex));
  }, [subIndex, index]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <>
    <div className="container">
    <Header />
  
      {/* <div className="video-background">
        <video autoPlay loop muted>
          <source src="Lowell.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
        <div className="image-background">
          <img src="renamed-homepage.jpg" alt="spidey" />
        </div>
      <div className="content">
        <div className="typewriter-container">
          <div className="typewriter">
            <p>{displayText}<span className={blink ? 'blink' : ''}>|</span></p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;
