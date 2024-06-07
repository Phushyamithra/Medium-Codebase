import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../styles/footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="social">
                <h4>Our Socials</h4>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram style={{ color: '#E1306C', fontSize: '20px' }} />Instagram
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube style={{ color: '#FF0000', fontSize: '20px' }} />Youtube
                </a>
            </div>
            <div className="support">
                <h4>Support</h4>
                <Link to="/faqs">FAQ's</Link>
                <Link to="/international-orders">International Orders</Link>
                <Link to="/contact-us">Contact us</Link>
                <Link to="/refund-policy">Refund policy</Link>
            </div>
            <div className="shop">
                <h4>Shop</h4>
                <a href="/perproduct.js" target="_blank" rel="noopener noreferrer">Tshirts</a>
                <a href="/perproduct.js" target="_blank" rel="noopener noreferrer">Hoodies</a>
                <a href="/perproduct.js" target="_blank" rel="noopener noreferrer">SweatShirts</a>
            </div>
            <div className="about">
                <h4>About </h4>
                <Link to="/about-us">About Us</Link>
                <Link to="/work-with-us">Work with Us</Link>
           </div>
            <img src="/logo.png" className="logofooter" alt="Logo" />
        </div>
    )
}

export default Footer;
