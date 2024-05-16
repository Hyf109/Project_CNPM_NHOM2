import React from "react";
import { Link } from "react-router-dom";
import { scroller } from 'react-scroll'
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

import './LoginBar.scss'

import logoImg from 'components/assets/images/logo.png'
import seclogoImg from 'components/assets/images/logo2.png'


function LoginBar() {
    const [isMenuVisible, setIsMenuVisible] = useState(true)

    const scrollToElement = (elementName) => {
        scroller.scrollTo(elementName, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    const navigate = useNavigate();
    const handleLinkClick = (url) => {
        navigate(url);
    }
    return (
        <>
            {isMenuVisible && (
                <nav class="login-menu">
                    <div className="menu-img-button">
                        <img src={logoImg} class="logo-image" alt="logo"
                            onClick={() => handleLinkClick('/')} />
                        <img src={seclogoImg} class="logo-image logo-text" alt="logo"
                            onClick={() => handleLinkClick('/')} />
                    </div>
                    <div className="menu-text-button">
                        <span class="menu--item">
                            <span className="menu--button">
                                <button onClick={() => scrollToElement('aboutUs')}>About us</button>
                            </span>
                        </span>
                        <span class="menu--item">
                            <span className="menu--button">
                                <button onClick={() => scrollToElement('contactUs')}>Contact</button>
                            </span>
                        </span>
                        <span class="menu--item">
                            <span className="menu--button">
                                <button onClick={() => scrollToElement('donateUs')}>Donate</button>
                            </span>
                        </span>
                    </div>
                    <div className="menu-login-button">
                        <span class="menu--item">
                            <span className="login--button">
                                <button onClick={() => handleLinkClick('/signin')}
                                    className="signin-button">Sign in</button>
                            </span>
                        </span>
                    </div>
                </nav >
            )}
        </>
    )
}

export default LoginBar