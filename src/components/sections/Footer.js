import { FaInstagram, FaYoutube } from 'react-icons/fa'
import '../../styles/footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="social">
                <h4>Our Socials</h4>
                <a href='#'><FaInstagram style={{ color: '#E1306C', fontSize: '20px' }} />Instagram</a>
                <a href='#'><FaYoutube style={{ color: '#FF0000', fontSize: '20px' }} />Youtube</a>
            </div>
            <div className="support">
                <h4>Support</h4>
                <a href='#'>FAQ's</a>
                <a href='#'>International Orders</a>
                <a href='#'>Contact us</a>
                <a href='#'>Refund policy</a>
            </div>
            <div className="shop">
                <h4>Shop</h4>
                <a href='#'>Tshirts</a>
                <a href='#'>Hoodies</a>
                <a href='#'>SweatShirts</a>
            </div>
            <div className="about">
                <h4>About </h4>
                <a href='#'>About Us</a>
                <a href='#'>Work with Us</a>
           </div>
            <img src="logo.png" className="logofooter" alt="image" />
        </div>
    )
}
export default Footer;