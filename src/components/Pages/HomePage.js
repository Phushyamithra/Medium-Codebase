import React from 'react';
import Header from '../UI/Header.js';
import bg from '../../Assets/bg/home.jpg';
import Background from '../UI/Background.js'
import Footer from '../UI/Footer.js';

const HomePage = () => {
  return (
    <div>
      <Background src={bg} type='image'>
        <Header></Header>
        <Footer></Footer>
      </Background>
    </div>
  )
}

export default HomePage