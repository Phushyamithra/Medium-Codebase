import React from 'react'
import '../../styles/Story.css';
import Header from '../sections/Header.js';
import Footer from '../sections/Footer.js';

const Story = () => {
  return (
    <div className="story-container">
      <Header></Header>
       <video autoPlay muted loop className="background-video">
        <source src="Homepage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="story-content">
        <h1>Fixed Background Video Effect</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae libero a augue tincidunt feugiat. Quisque non nisi id est vehicula euismod non ac purus. Integer posuere metus eu augue vehicula cursus. Fusce non fermentum felis, eget scelerisque dui. Donec nec consequat justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In eu enim dolor. Cras eget metus a libero sollicitudin accumsan.</p>
        <p>Ut id volutpat lacus. Nam sodales dolor vitae neque feugiat, in tristique urna molestie. Curabitur a tortor sed justo finibus auctor. Suspendisse potenti. Sed at nisi felis. In vel arcu cursus, iaculis urna ac, tincidunt lorem. Duis non venenatis nisi. Proin tincidunt, leo non fermentum egestas, libero justo dapibus ex, eu varius odio orci sit amet enim.</p>
        <p>Morbi a cursus leo. Ut tempus nisi ac nisl feugiat, in luctus velit bibendum. Proin viverra ut sapien sit amet cursus. Curabitur tincidunt, sapien a facilisis aliquet, nulla elit pulvinar odio, et porttitor odio turpis ac nulla. Curabitur ultrices suscipit ex, id sagittis lorem ultricies a. Nulla feugiat diam quam, vel pulvinar felis porttitor at. Vestibulum volutpat condimentum diam et ultricies. Suspendisse id mollis odio, ac volutpat lorem. Suspendisse potenti.</p>
        {/* Add more content as needed */}<h1>Fixed Background Video Effect</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae libero a augue tincidunt feugiat. Quisque non nisi id est vehicula euismod non ac purus. Integer posuere metus eu augue vehicula cursus. Fusce non fermentum felis, eget scelerisque dui. Donec nec consequat justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In eu enim dolor. Cras eget metus a libero sollicitudin accumsan.</p>
        <p>Ut id volutpat lacus. Nam sodales dolor vitae neque feugiat, in tristique urna molestie. Curabitur a tortor sed justo finibus auctor. Suspendisse potenti. Sed at nisi felis. In vel arcu cursus, iaculis urna ac, tincidunt lorem. Duis non venenatis nisi. Proin tincidunt, leo non fermentum egestas, libero justo dapibus ex, eu varius odio orci sit amet enim.</p>
        <p>Morbi a cursus leo. Ut tempus nisi ac nisl feugiat, in luctus velit bibendum. Proin viverra ut sapien sit amet cursus. Curabitur tincidunt, sapien a facilisis aliquet, nulla elit pulvinar odio, et porttitor odio turpis ac nulla. Curabitur ultrices suscipit ex, id sagittis lorem ultricies a. Nulla feugiat diam quam, vel pulvinar felis porttitor at. Vestibulum volutpat condimentum diam et ultricies. Suspendisse id mollis odio, ac volutpat lorem. Suspendisse potenti.</p>
        {/* Add more content as needed */}
    
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Story;