import Card from './Card.js';
import '../styles/items.css';
import { useState } from 'react';
import { RightArrow, LeftArrow } from '../UI/RightArrow.js';
const ProductList = ({ toShow }) => {
    const products = [
        [{
            id: 1,
            pic: "/hoodie.jpeg", // Adjusted path
            theme: "Anime",
            type: "hoodies",
            price: "270$"
        },
        {
            id: 2,
            pic: "/hoodie1.jpeg", // Adjusted path
            theme: "Horror",
            type: "hoodies",
            price: "270$"
        },
        {
            id: 3,
            pic: "/hoodie2.jpeg", // Adjusted path
            theme: "Movie",
            type: "hoodies",
            price: "270$"
        },
        {
            id: 4,
            pic: "/hoodie3.jpeg", // Adjusted path
            theme: "Cartoon",
            type: "hoodies",
            price: "270$"
        }],
        [
            {
                id: 1,
                pic: "/shirt1.jpeg", // Adjusted path
                theme: "Anime",
                type: "shirt",
                price: "270$"
            },
            {
                id: 2,
                pic: "/shirt2.jpeg", // Adjusted path
                theme: "Movie",
                type: "shirt",
                price: "270$"
            },
            {
                id: 3,
                pic: "/shirt3.jpeg", // Adjusted path
                theme: "Cartoon",
                type: "shirt",
                price: "270$"
            },
            {
                id: 4,
                pic: "/shirt4.jpeg", // Adjusted path
                theme: "Horror",
                type: "shirt",
                price: "270$"
            },
        ], [{
            id: 1,
            pic: "/tee1.jpeg", // Adjusted path
            theme: "Anime",
            type: "tee",
            price: "270$"
        },
        {
            id: 2,
            pic: "/tee2.jpeg", // Adjusted path
            theme: "Horror",
            type: "tee",
            price: "270$"
        },
        {
            id: 3,
            pic: "/tee3.jpeg", // Adjusted path
            theme: "Cartoon",
            type: "tee",
            price: "270$"
        },
        {
            id: 4,
            pic: "/tee4.jpeg", // Adjusted path
            theme: "Horror",
            type: "tee",
            price: "270$"
        }],
        [{
            id: 13,
            pic: "/Sweat.jpeg", // Adjusted path
            theme: "Anime",
            type: "sweats",
            price: "270$"
        }]
    ];

    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        if (startIndex < products.length - 3)
            setStartIndex(startIndex + 1);
    };

    const handlePrev = () => {
        if (startIndex > 0)
            setStartIndex(startIndex - 1);
    };

    const handleProductClick = (product) => {
        sessionStorage.setItem('selectedProduct', JSON.stringify(product));
        const productUrl = `/product/${product.id}`;
        window.open(productUrl, '_blank');
    };

    // Function to get unique values of a property from products
    const getUniqueValues = (property) => {
        const uniqueValues = new Set();
        products.forEach(category => {
            category.forEach(product => uniqueValues.add(product[property]));
        });
        return Array.from(uniqueValues);
    };

    // Determine which property to show based on 'toShow'
    const propertyToShow = toShow === 'type' ? 'type' : 'theme';

    // Get unique values of the property to show
    const uniqueValuesToShow = getUniqueValues(propertyToShow);

    return (
        <div className="product-list">
            <LeftArrow handleLeftClick={handlePrev} />
            {uniqueValuesToShow.map(value => {
                const productToShow = products.find(category => category.some(product => product[propertyToShow] === value));
                return (
                    <div key={productToShow[0][propertyToShow]}>
                        <div onClick={() => handleProductClick(productToShow[0])}>
                            <Card product={productToShow[0]} />
                        </div>
                    </div>
                );
            })}
            <RightArrow handleRightClick={handleNext} />
        </div>
    );
}

export default ProductList;
    