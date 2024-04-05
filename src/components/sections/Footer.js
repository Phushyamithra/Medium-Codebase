import { FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="footer">
            <div className="social">
                <h4>Our Socials</h4>
                <h6><FaInstagram style={{ color: '#E1306C', fontSize: '20px' }} />Instagram</h6>
                <h6><FaYoutube style={{ color: '#FF0000', fontSize: '20px' }} />Youtube</h6>
            </div>
            <div className="support">
                <h4>Support</h4>
                <h6>FAQ's</h6>
                <h6>International Orders</h6>
                <h6>Contact us</h6>
                <h6>Refund policy</h6>
            </div>
            <div className="shop">
                <h4>Shop</h4>
                <h6>Tshirts</h6>
                <h6>Hoodies</h6>
                <h6>SweatShirts</h6>
            </div>
            <div className="about">
                <h4>About </h4>
                <h6>About Us</h6>
                <h6>Work with Us</h6>
           </div>
            <img src="logo.png" className="logofooter" alt="image" />
        </div>
    )
}
export default Footer;