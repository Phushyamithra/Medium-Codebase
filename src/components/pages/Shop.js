import Header from '../sections/Header.js'
import Footer from '../sections/Footer.js'
import ProductList from '../ProductList.js'
import React from 'react';
import '../../styles/Shop.css'
import items from '../Data/items.js';
import BackgroundMedia from './BackgroundMedia.js';
import NewFooter from '../sections/NewFooter.js';


const Shop = () => {

    return (
        <>
            <Header />
            <div className="story-container">
                <BackgroundMedia src={'./renamed-shop-page.jpg'} type='image'>
                    <div className="story-content">
                        <div className='titleSection'>
                            <h1>Products</h1>
                        </div>
                        <ProductList data={items} type="products" />
                    </div>
                <NewFooter />
                </BackgroundMedia>
            </div>
        </>
    )
}

export default Shop;


