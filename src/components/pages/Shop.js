import Header from '../sections/Header.js'
import Footer from '../sections/Footer.js'
import ProductList from '../ProductList.js'
import React from 'react';

const Shop = () => {

    return (
        <>
            <Header />
            <div className='titleSection'>
                <h1>Themes</h1>
            </div>
            <img src="s2.jpg" className="samplelogo" alt="sample image" />
            <ProductList />
            <div className='titleSection'>
                <h1>Products</h1>
            </div>
            <ProductList />

            <Footer />
        </>
    )
}

export default Shop;


