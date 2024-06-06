import React from 'react'
import Header from '../sections/Header.js'
import Footer from '../sections/Footer.js'
import BackgroundMedia from './BackgroundMedia.js'

const Account = () => {
  return (
    <>
      <Header/>
      <BackgroundMedia src={'./renamed-account-page.png'} type='image'>

      </BackgroundMedia>
      <Footer/>
    </>
  )
}

export default Account