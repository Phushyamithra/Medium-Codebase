import React, { useState, useEffect } from 'react';
import Header from '../UI/Header.js';
import bg from '../../Assets/bg/home.jpg';
import Background from '../UI/Background.js';
import '../../styles/homepage.css';

const texts = [
  "Swagatham.",
  "స్వాగతం."
];

const HomePage = () => {
  const [index, setIndex] = useState(0);
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
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <>
      <Background src={bg} type="image">
        <Header>
        </Header>
        <div className="content">
          <div className="typewriter-container">
            <div className="typewriter">
              <p>{texts[index].substring(0, subIndex)}<span className={blink ? 'blink' : ''}>|</span></p>
            </div>
          </div>
        </div>
      </Background>
    </>
  );
}

export default HomePage;
