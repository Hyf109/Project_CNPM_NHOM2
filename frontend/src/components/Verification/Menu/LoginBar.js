import React from "react";
import { Link } from "react-router-dom";
import { Element, scroller } from 'react-scroll'
import { useState, useEffect, useRef } from "react";
import { useScrollFadeOutEffect } from "components/effects/fadeEffects";

import './LoginBar.scss'

import logoImg from 'components/assets/images/logo.png'
import seclogoImg from 'components/assets/images/logo2.png'
import catAvt from 'components/assets/images/cat.png'

function LoginBar() {
    const [isMenuVisible, setIsMenuVisible] = useState(true)

    const scrollToElement = (elementName) => {
        scroller.scrollTo(elementName, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    return (
        <>
            {isMenuVisible && (
                <nav class="login-menu">
                    <div className="menu-img-button">
                        <span class="menu--item">
                            <span class="menu--icon">
                                <Link to="/"><img src={logoImg} className="logo-image" alt="" onClick={() => scrollToElement('home')}></img></Link>
                            </span>
                        </span>
                        <span class="menu--item">
                            <span class="menu--icon">
                                <Link to="/"><img src={seclogoImg} className="sec-logo-image" alt="" onClick={() => scrollToElement('home')}></img></Link>
                            </span>
                        </span>
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
                                <Link to="/signin"><button>Log in</button></Link>
                            </span>
                        </span>
                    </div>
                </nav >
            )}
        </>
    )
}

export default LoginBar