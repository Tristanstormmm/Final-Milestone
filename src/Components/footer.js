import React from "react";
import Facebook from '../Icons/Facebook.png';
import Twitter from '../Icons/Twitter.png';
import Instagram from '../Icons/Instagram.png';

function Footer() {

    return (
        <footer>
            <div className="footer-left">
                <a href="#"><img src={Facebook} alt="Facebook" /></a>
                <a href="#"><img src={Twitter} alt="Twitter" /></a>
                <a href="#"><img src={Instagram} alt="Instagram" /></a>
            </div>
            <div className="footer-right">
                <p>&copy; 2023 Crypto Compare</p>
            </div>
        </footer>
    )
}

export default Footer;