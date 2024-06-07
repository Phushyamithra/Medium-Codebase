import React from 'react'
import '../../styles/Story.css';
import Header from '../sections/Header.js';
import BackgroundMedia from './BackgroundMedia.js';
import NewFooter from '../sections/NewFooter.js';

const Story = () => {
  return (
    <>
      <div className="story-main-container">
        <Header></Header>
          <BackgroundMedia src={'/renamed-our-story.jpg'} type='image'>
            <div className="story-content">
              <h1>Our Story</h1>
              <p>Story started in the streets of Nagole, Hyderabad,
                before life took Gopal to the shores of America.
                Playing rough in the streets of my colony, runnings free in the wind.
                That`s the Hyderabad story. One day, a thought struck as we looked at the world around us.
                Every where we saw, we were looking at the vestiges of a foreign culture that was given to us to embrace. And we thought, what about the rest of us who didn’t live that foreign world? what about those of us who grew up truly Telugu, truly Bhāratiya, truly belonging to the gallies of every city, town, and village in India? What represents those of us who are living first world lives all across the planet, despite our humble beginnings, studying in our mother tongues, and not Angrezi?
                The world needs to see our desi fashion too. So let`s go make a splash.
              </p>
              <p>And we decided, Telugu Medium, if it were to be a success,
                would be dedicated to not only a Telugu,
                but to every Bhārtiyan who lives the true Bhārtiyan way of life.
                It is a tribute to our parents who made it so far in this world,
                despite their percived cultural shortcomings. We are Desi,
                and we`re gonna show off every bit of it. Wherever you are,
                whatever corner you are in, your love of Bhāratiyan culture is what will
                make this project a success.
              </p>

            </div>
          </BackgroundMedia>
        <NewFooter />
      </div>
    </>
  );
}

export default Story;