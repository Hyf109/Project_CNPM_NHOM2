import React, { useState, useEffect } from "react";
import Appbar from "components/HomePage/Menu/Appbar";
import Horizontal from "components/HomePage/Horizontal/Horizontal";
import { Link } from "react-router-dom";

// scss components
import './HomePage.scss'
import './App.scss'

// components
import Footer from "components/HomePage/Footer/Footer";
import aboutUs from 'components/assets/images/about-us.png'
import Feature from "components/HomePage/Feature/Feature";

function HomePage() {
    return (
        <>
            <Appbar />
            <div className="home-page">
                <div className="home-page-background"></div>
                <div className="get-start-items">
                    <div className="get-start-welcome">
                        <h1>
                            Welcome to Finder!
                        </h1>
                    </div>
                    <div className="get-start-button">
                        <Link to="/signin">
                            <button>
                                Create account
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="about-us">
                    <div className="about-us-text">
                        <h1>
                            About Us
                        </h1>
                        <p>
                            Welcome to Finder, the innovative solution for organizing offline meetings with ease and efficiency. Finder empowers users to orchestrate gatherings effortlessly, ensuring seamless coordination and collaboration among participants.
                        </p>
                        <Horizontal />
                        <h2>
                            Features
                        </h2>
                        <Feature />

                        <Horizontal />

                    </div>
                    <div className="about-us-pic">
                        <img src={aboutUs}></img>
                    </div>
                </div>

                <div className="contact-us">
                    <h1>
                        Follow & Contact Us
                    </h1>
                    <ul>
                        <li><i class="fa-brands fa-facebook"></i></li>
                        <li><i class="fa-solid fa-envelope"></i></li>
                        <li><i class="fa-brands fa-github"></i></li>
                    </ul>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default HomePage