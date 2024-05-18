import React from "react";
import { Link } from "react-router-dom";

import 'components/Verification/Verification.scss'
import 'App.scss'
import logoImg from 'components/assets/images/logo.png'
import seclogoImg from 'components/assets/images/logo2.png'

function Signin() {
    return (
        <div className="section">
            <div className="logo-field">
                <div>
                    <Link to="/"><img src={logoImg} className="main-logo"></img></Link>
                </div>
                <div>
                    <Link to="/"><img src={seclogoImg} className="sec-logo"></img></Link>
                </div>
            </div>
            <div className="wrapper">
                <div className="form">
                    <h1>SIGN IN</h1>
                    <div className="field">
                        <div className="input-box">
                            <span className="fa-solid fa-envelope"></span>
                            <input type="email" placeholder="example@abc.xyz" required ></input>

                        </div>

                        <div className="input-box">
                            <span className="fa-solid fa-lock"></span>
                            <input type="password" placeholder="Password" required></input>
                        </div>
                    </div>

                    <button type="submit" className="btn">Login</button>                    

                    <div className="register-link">
                        <p>Don't have an account? <Link to="/signup">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin