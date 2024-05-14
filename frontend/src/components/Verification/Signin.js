import React from "react";
import { Link } from "react-router-dom";

import 'components/Verification/Verification.scss'
import 'App.scss'
import logoImg from 'components/assets/images/logo.png'
import seclogoImg from 'components/assets/images/logo2.png'

function Signin() {
    return (
        <div className="section">
            <div class="wrapper">
                <div class="logo-field">
                    <div>
                        <Link to="/"><img src={logoImg} class="main-logo"></img></Link>
                    </div>
                    <div>
                        <Link to="/"><img src={seclogoImg} class="sec-logo"></img></Link>
                    </div>
                </div>

                <div class="vertical-line"></div>

                <div class="form">
                    <h1>SIGN IN</h1>
                    <div class="field">
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
        </div>
    )
}

export default Signin