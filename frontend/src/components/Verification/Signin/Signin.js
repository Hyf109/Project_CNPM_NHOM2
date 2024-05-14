import React from "react";
import { Link } from "react-router-dom";

import './Signin.scss'
import logoImg from 'components/assets/images/logo.png'
import seclogoImg from 'components/assets/images/logo2.png'

function Signin() {
    return (
        <>
            <div class="wrapper">
                <div class="logo-field">
                    <div>
                        <img src={logoImg} class="main-logo"></img>
                    </div>
                    <div>
                        <img src={seclogoImg} class="sec-logo"></img>
                    </div>
                </div>

                <div class="vertical-line"></div>

                <div class="signin-form">
                    <h1>SIGN IN</h1>
                    <div class="login-field">
                        <div class="input-box">
                            <span class="fa-solid fa-user"></span>
                            <input type="text" placeholder="Username" required ></input>

                        </div>

                        <div class="input-box">
                            <span class="fa-solid fa-lock"></span>
                            <input type="password" placeholder="Password" required></input>
                        </div>
                    </div>

                    <a href="home.html">
                        <Link to="/search"><button type="submit" class="btn">Login</button></Link>
                    </a>


                    <div class="register-link">
                        <p>Don't have an account? <Link to="/signup">Register</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin