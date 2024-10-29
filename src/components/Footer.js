// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer({ isDarkMode }) {
    return (
        <footer className={`footer ${isDarkMode ? 'footer--dark' : ''}`}>
            <h2 className="footer__title">Mohit Shah</h2>
            <div className="footer__social">
                <a 
                    href="https://www.facebook.com/?ref=tn_tnmn" 
                    className="footer__icon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                >
                    <i className='bx bxl-facebook'></i>
                </a>
                <a 
                    href="https://www.instagram.com/mohit__shahh/" 
                    className="footer__icon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <i className='bx bxl-instagram'></i>
                </a>
                <a 
                    href="https://x.com/home" 
                    className="footer__icon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                >
                    <i className='bx bxl-twitter'></i>
                </a>
                <a 
                    href="https://www.linkedin.com/in/mohitshah7/" 
                    className="footer__icon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <i className='bx bxl-linkedin'></i>
                </a>
            </div>
            <p className="footer__copy">&#169; caspermohit. All rights reserved</p>
        </footer>
    );
}

export default Footer;
