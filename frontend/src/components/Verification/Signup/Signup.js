import React from "react";
import './Signup.scss'

export const Signup = () => {
    return (
        <>
            <div class="signup-form">
                <h1 className="sign--up--title">SIGN UP</h1>
                <div class="signup-field">
                    <div class="input-box">
                        <span class="icon-envelope"></span>
                        <input type="email" placeholder="Email" required></input>
                    </div>

                    <div class="input-box">
                        <span class="icon-user"></span>
                        <input type="text" placeholder="Username" required ></input>

                    </div>

                    <div class="input-box">
                        <span class="icon-lock"></span>
                        <input type="password" placeholder="Password" required></input>
                    </div>

                    <div class="input-box">
                        <span class="icon-check"></span>
                        <input type="password" placeholder="Confirm password" required></input>
                    </div>


                </div>
                <div class="confirm-terms">
                    <label><input type="checkbox" class="terms-button" required>I do accept your </input><a href="terms.html">Terms and Conditions</a> of your site.</label>

                </div>

                <button type="submit" class="btn">Register</button>

                <div class="login-link">
                    <p>Already have an account? <a href="login.html">Login</a></p>
                </div>
            </div>

            <div class="vertical-line"></div>

            <div class="logo-field">
                <div>
                    <img src="./assets/images/logo.png" class="main-logo"></img>
                </div>
                <div>
                    <img src="./assets/images/logo2.png" class="sec-logo"></img>
                </div>
            </div>
        </>
    )
}

export default Signup