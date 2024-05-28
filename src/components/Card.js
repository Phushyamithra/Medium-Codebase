import { useState } from "react";
import '../styles/Card.css';

const Card = ({ product }) => {
    return (
        <div className="card">
            <div className="wrapper">
                <div className="container">
                    <div className="top">
                        <img src={product.pic} alt={product.title} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
