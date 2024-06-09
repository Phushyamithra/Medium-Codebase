import ProductList from '../ProductList.js'
import React from 'react';
import '../../styles/Shop.css'
import items from '../Data/items.js';
import StandardPage from './StandardPage.js';

const Shop = () => {

    return (
        <>
            <StandardPage src={'./renamed-shop-page.jpg'} type='image'>
                    <div className="story-content">
                        <div className='titleSection'>
                            <h1>Products</h1>
                        </div>
                        <ProductList data={items} type="products" />
                    </div>
            </StandardPage>
        </>
    )
}

export default Shop;


