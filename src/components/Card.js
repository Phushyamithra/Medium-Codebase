import { RiInformationFill } from "react-icons/ri";
import { FaCartPlus } from "react-icons/fa";

const Card = ({ index }) => {

    return (
            <div className="card">
            <div class="wrapper">
                <div class="container">
                    <div class="top">
                        <img src="Krishna.jpeg" alt="image" />
                    </div>
                    <div class="bottom">
                        <div class="left">
                            <div class="details">
                                <h1>Chair</h1>
                                <p>£250</p>
                            </div>
                            <div class="buy"><FaCartPlus size={30} /></div>
                        </div>
                        <div class="right">
                            <div class="done"><i class="material-icons">done</i></div>
                            <div class="details">
                                <h1>Chair</h1>
                                <p>Added to your cart</p>
                            </div>
                            <div class="remove"><i class="material-icons">clear</i></div>
                        </div>
                    </div>
                </div>
                <div class="inside">
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
                </div>
            </div>
        </div>
    )
}

export default Card;