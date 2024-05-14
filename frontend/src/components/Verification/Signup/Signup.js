import React from "react";
import { Link } from "react-router-dom";
import './Signup.scss'

import logoImg from 'components/assets/images/logo.png'
import seclogoImg from 'components/assets/images/logo2.png'

export const Signup = () => {
    return (
        <>
            <div className="wrapper">
                <div class="signup-form">
                    <h1 className="sign--up--title">SIGN UP</h1>
                    <div class="signup-field">
                        <div class="input-box-signup">
                            <span class="fa-solid fa-envelope"></span>
                            <input type="email" placeholder="Email" required></input>
                        </div>

                        <div class="input-box-signup">
                            <span class="fa-solid fa-user"></span>
                            <input type="text" placeholder="Username" required ></input>

                        </div>

                        <div class="input-box-signup">
                            <span class="fa-solid fa-lock"></span>
                            <input type="password" placeholder="Password" required></input>
                        </div>

                        <div class="input-box-signup">
                            <span class="fa-solid fa-check"></span>
                            <input type="password" placeholder="Confirm password" required></input>
                        </div>


                    </div>
                    <div class="confirm-terms">
                        {/* <label><input type="checkbox" class="terms-button" required>I do accept your </input><a href="terms.html">Terms and Conditions</a> of your site.</label> */}

                    </div>

                    <button type="submit" class="btn">Register</button>

                    <div class="login-link">
                        <p>Already have an account? <Link to="/signin">Login</Link></p>
                    </div>
                </div>

                <div class="vertical-line"></div>

                <div class="logo-field">
                    <div>
                        <img src={logoImg} class="main-logo"></img>
                    </div>
                    <div>
                        <img src={seclogoImg} class="sec-logo"></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup