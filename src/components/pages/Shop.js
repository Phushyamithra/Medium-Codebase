import Header from '../sections/Header.js'
import Footer from '../sections/Footer.js'
import ProductList from '../ProductList.js'
import React from 'react';
import '../../styles/Shop.css'

const Shop = () => {

    return (
        <>
            <div className="story-container">
                <Header />
                <video autoPlay muted loop className="background-video">
                    <source src="Shop_bg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="story-content">
                    <div className='titleSection'>
                        <h1>Themes</h1>
                    </div>
                    {/* <img src="s2.jpg" className="samplelogo" alt="sample image" /> */}
                    <ProductList />
                    <div className='titleSection'>
                        <h1>Products</h1>
                    </div>
                    <ProductList />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Shop;


