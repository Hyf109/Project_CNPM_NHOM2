import React, { useState, useEffect } from "react";
import Horizontal from "components/HomePage/Horizontal/Horizontal";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import FadeInSection from "components/effects/fadeEffects";

// scss components
import './pagestyle/HomePage.scss'

// components
import Footer from "components/HomePage/Footer/Footer";
import aboutUs from 'components/assets/images/about-us.png'
import Feature from "components/HomePage/Feature/Feature";
import LoginBar from "components/Verification/Menu/LoginBar";
import Donate from "components/HomePage/Donate/Donate";



function HomePage() {
    return (
        <>
            <LoginBar />
            <Element name="home" className="home-page">
                <div className="home-page-background"></div>
                <div className="get-start-items">
                    <div className="get-start-welcome">
                        <h1>
                            Welcome to Finder!
                        </h1>
                    </div>
                    <div className="get-start-button">
                        <Link to="/signup">
                            <button>
                                Create account
                            </button>
                        </Link>
                    </div>
                </div>
                <Element name="aboutUs" className="about-us">
                    <div className="about-us-text">
                        <FadeInSection>
                            <h1>
                                About Us
                            </h1>
                        </FadeInSection>
                        <FadeInSection>
                            <p>
                                Welcome to Finder, the innovative solution for organizing offline meetings with ease and efficiency. Finder empowers users to orchestrate gatherings effortlessly, ensuring seamless coordination and collaboration among participants.
                            </p>
                        </FadeInSection>
                        <FadeInSection>
                            <Horizontal />
                        </FadeInSection>
                        <FadeInSection>
                            <h2>
                                Features
                            </h2>
                        </FadeInSection>
                        <Feature />
                        <Horizontal />

                    </div>
                    <div className="about-us-pic">
                        <img src={aboutUs}></img>
                    </div>
                </Element>
                <Element name="contactUs" className="contact-us">

                    <h1>
                        Follow & Contact Us
                    </h1>

                    <ul>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i class="fa-solid fa-envelope"></i></a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i class="fa-brands fa-youtube"></i></a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i class="fa-brands fa-instagram"></i></a>
                    </ul>

                </Element>
                <Donate />
            </Element>
            <Footer />
        </>
    )
}

export default HomePage
