import Header from '../sections/Header.js'
import Footer from '../sections/Footer.js'
import ProductList from '../ProductList.js'
import React from 'react';
import '../../styles/Shop.css'
import items from '../Data/items.js';

const Shop = () => {

    return (
        <>
            <Header />
            <div className="story-container">
                <video autoPlay muted loop className="background-video">
                    <source src="Shop_bg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="story-content">
                    <div className='titleSection'>
                        <h1>Products</h1>
                    </div>
                    <ProductList data={items} type="products"/>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Shop;


