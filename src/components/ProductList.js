import Card from './Card.js'
import '../styles/items.css'
import { useState } from 'react';
import { RightArrow,LeftArrow } from '../UI/RightArrow.js';
const ProductList = ({ index }) => {
    const products = [{
        id: 1,
        pic: "Krishna.jpeg",
        title: "Krishna 1",
        subtitle: "tshirt",
        price: "250$"
    },
    {
        id: 2,
        pic: "Hanuman.jpeg",
        title: "Hanuman 2",
        subtitle: "tshirt",
        price: "260$"
    },
    {
        id: 3,
        pic: "Ram.jpeg",
        title: "Ram 3",
        subtitle: "tshirt",
        price: "270$"
    },
    {
        id: 4,
        pic: "Krishna.jpeg",
        title: "Krishna 4",
        subtitle: "tshirt",
        price: "250$"
    },
    {
        id: 5,
        pic: "Hanuman.jpeg",
        title: "Hanuman 5",
        subtitle: "tshirt",
        price: "260$"
    },
    {
        id: 6,
        pic: "Ram.jpeg",
        title: "Ram 6",
        subtitle: "tshirt",
        price: "270$"
    }];

    //  arrow marks logic

    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        if (startIndex < products.length - 3)
            setStartIndex(startIndex + 1);
    };

    const handlePrev = () => {
        if (startIndex > 0)
            setStartIndex(startIndex - 1);
    };

    //ends here
    return (
        <div className="product-list">
            <LeftArrow handleLeftClick={handlePrev}/>
            {
                products.slice(startIndex, startIndex + 3).map((product) => (
                    <div className="item" key={product.id}>
                        <Card product={product} />
                    </div>
                ))
            }
            <RightArrow handleRightClick={handleNext}/>
        </div>

    );
}

export default ProductList;