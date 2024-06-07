import React from 'react'
import Header from '../sections/Header.js'
import BackgroundMedia from './BackgroundMedia.js'
import NewFooter from '../sections/NewFooter.js';

const Account = () => {
  return (
    <>
      <Header/>
      <BackgroundMedia src={'./renamed-account-page.jpg'} type='image'>

      </BackgroundMedia>
      <NewFooter/>
    </>
  )
}

export default Account