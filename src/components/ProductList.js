import Card from './Card.js'
import '../styles/items.css'

const ProductList = () => {
    const products = [{
        pic : "Krishna.jpeg",
        title : "Krishna ",
        subtitle : "tshirt",
        price : "250$"
    },
    {
        pic : "Hanuman.jpeg",
        title : "Hanuman ",
        subtitle : "tshirt",
        price : "260$"
    },
    {
        pic : "Ram.jpeg",
        title : "Ram ",
        subtitle : "tshirt",
        price : "270$"
    }];
    return (
        <div className="product-list">
            
            {
                products.map((product) =>{ return(<div className="item item1"><Card product ={product} /></div>)})
            }
            
        </div>
    )
}

export default ProductList;