import Card from './Card.js'
import '../styles/items.css'

const ProductList = () => {
    return (
        <div className="product-list">
            <div className="item item1"><Card/></div>
            <div className="item item2"><Card/></div>
            <div className="item item3"><Card/></div>
            <div className="item item3"><Card/></div>

            
        </div>
    )
}

export default ProductList;