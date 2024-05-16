import React from "react";
import { Link } from "react-router-dom";
import 'components/Verification/Verification.scss'

import logoImg from 'components/assets/images/logo.png'
import seclogoImg from 'components/assets/images/logo2.png'

export const Signup = () => {
    return (
        <div className="section">
            <div className="wrapper">
                <div className="form">
                    <h1 className="sign--up--title">SIGN UP</h1>
                    <div className="field">
                        <div className="input-box">
                            <span className="fa-solid fa-envelope"></span>
                            <input type="email" placeholder="Email" required></input>
                        </div>

                        <div className="input-box">
                            <span className="fa-solid fa-user"></span>
                            <input type="text" placeholder="Username" required ></input>

                        </div>

                        <div className="input-box">
                            <span className="fa-solid fa-lock"></span>
                            <input type="password" placeholder="Password" required></input>
                        </div>

                        <div className="input-box">
                            <span className="fa-solid fa-check"></span>
                            <input type="password" placeholder="Confirm password" required></input>
                        </div>


                    </div>
                    <div className="confirm-terms">
                        {/* <label><input type="checkbox" className="terms-button" required>I do accept your </input><a href="terms.html">Terms and Conditions</a> of your site.</label> */}

                    </div>

                    <button type="submit" className="btn">Register</button>

                    <div className="login-link">
                        <p>Already have an account? <Link to="/signin">Login</Link></p>
                    </div>
                </div>

                <div className="vertical-line"></div>

                <div className="logo-field">
                    <div>
                        <Link to="/"><img src={logoImg} className="main-logo"></img></Link>
                    </div>
                    <div>
                        <Link to="/"><img src={seclogoImg} className="sec-logo"></img></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup