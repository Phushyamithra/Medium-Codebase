import { FaCartPlus } from "react-icons/fa";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { MdClear } from "react-icons/md";
import { useState } from "react";
import Modal from "./Modal.js";

const Card = ({ index, product }) => {

    const [buyClass, setbuyClass] = useState("bottom");
    // when user clicks buy 
    const handleBuyClick = () => {
        setbuyClass("bottom clicked");
    };
    // when user clicks delete 
    const handleRemoveClick = () => {
        setbuyClass("bottom");
    };

    const handleWishlistClick = () => {
        // Add your wishlist logic here
        console.log("Added to Wishlist");
    };
        // display modal logic
    const[modal,setShowModal] = useState(false);

    const openModal=() => {
      setShowModal(true);
    }
    const closeModal=() => {
      setShowModal(false);
    }
    // ends here 


     return (
        <div className="card">
            <div className="wrapper" onClick={openModal}>
                <div className="container">
                    <div className="top">
                        <img src={product.pic} alt="image" />
                    </div>
                    <div className={buyClass}>
                        <div className="left">
                            <div className="details">
                                <h1>{product.title}</h1>
                                <p>{product.subtitle}</p>
                                <p>{product.price}</p>
                            </div>
                            <div className="buy" onClick={handleBuyClick}><FaCartPlus size={23} /></div>
                            <div className="wishlist" onClick={handleWishlistClick}><FaHeartCirclePlus size={23} /></div>
                        </div>
                        <div className="right">
                            <div className="done" onClick={handleRemoveClick}><MdClear size={23} /></div>
                            <div className="details">
                                <h1>{product.subtitle}</h1>
                                <p>Added to your cart</p>
                            </div>
                            {/* <div className="remove" onClick={handleRemoveClick}><MdClear size={23} /></div> */}
                        </div>
                    </div>
                </div>
            </div>
            {modal && <Modal closeModal={closeModal}>
                Hello World in Popup !!

            </Modal>}
        </div>
    )
}

export default Card;












// info part if needed take it above
{/* <div class="inside">
    <div class="icon"><RiInformationFill size={25} /></div>
    <div class="contents">
        <table>
            <tr>
                <th>Width</th>
                <th>Height</th>
            </tr>
            <tr>
                <td>3000mm</td>
                <td>4000mm</td>
            </tr>
            <tr>
                <th>Something</th>
                <th>Something</th>
            </tr>
            <tr>
                <td>200mm</td>
                <td>200mm</td>
            </tr>
            <tr>
                <th>Something</th>
                <th>Something</th>
            </tr>
            <tr>
                <td>200mm</td>
                <td>200mm</td>
            </tr>
            <tr>
                <th>Something</th>
                <th>Something</th>
            </tr>
            <tr>
                <td>200mm</td>
                <td>200mm</td>
            </tr>
        </table>
    </div>
</div> */}