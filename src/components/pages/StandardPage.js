import React from 'react'
import Header from '../sections/Header.js';
import NewFooter from '../sections/NewFooter.js'
import BackgroundMedia from './BackgroundMedia.js';

const StandardPage = ({src,type,children}) => {
  return (
        <>
          <div className="main-container">
            <Header></Header>
              <BackgroundMedia src={src} type={type}>
                <div className="content">
                  {children}
                </div>
              </BackgroundMedia>
            <NewFooter />
          </div>
        </>
  );
}

export default StandardPage