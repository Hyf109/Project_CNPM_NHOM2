import React from "react";
import { Link, useNavigate } from "react-router-dom";
import 'components/Verification/Verification.scss'

import logoImg from 'components/assets/images/logo.png'
import seclogoImg from 'components/assets/images/logo2.png'
import { useState } from "react";
import { useAuth } from "hooks/useAuth";
import { useSignup } from "hooks/useSignup";


function Signup() {
    const navigate = useNavigate();
    
    let {signup, isLoading, error} = useSignup();

    const {user} = useAuth();

    if (user) {
        navigate('/search');
    }

    const [state, setState] = useState({
        email:'',
        username:'',
        password:'',
        confirm:''
    });

    const handleOnChange = (e) => {
        const {name, value} = e.target;

        setState(prevState => ({
            ...prevState, 
            [name]:value
        }));

        console.log(state);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, username, password } = state;
        
        await signup(email, username, password);
    };

    // const {email, password, username} = error;
    
    

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
                    <h1 className="sign--up--title">SIGN UP</h1>
                    <div className="field">
                        <div className="input-box">
                            <span className="fa-solid fa-envelope"></span>
                            <input value={state.email} onChange={handleOnChange} name="email" type="email" placeholder="Email" required></input>
                        </div>
                        {error && <div className="authentication-field-error">{error.email}</div>}

                        <div className="input-box">
                            <span className="fa-solid fa-user"></span>
                            <input value={state.username} onChange={handleOnChange} name="username" type="text" placeholder="Username" required ></input>
                        </div>
                        {error && <div className="authentication-field-error">{error.username}</div>}

                        <div className="input-box">
                            <span className="fa-solid fa-lock"></span>
                            <input value={state.password} onChange={handleOnChange} name="password" type="password" placeholder="Password" required></input>
                        </div>
                        {error && <div className="authentication-field-error">{error.password}</div>}

                        {/* <div className="input-box">
                            <span className="fa-solid fa-check"></span>
                            <input value={state.confirm} onChange={handleOnChange} name="confirm" type="password" placeholder="Confirm password" required></input>
                        </div> */}
                    </div>
                    <div className="confirm-terms">
                        {/* <label><input type="checkbox" className="terms-button" required>I do accept your </input><a href="terms.html">Terms and Conditions</a> of your site.</label> */}

                    </div>

                    <button disabled={isLoading} onClick={handleSubmit} type="submit" className="btn">Register</button>

                    <div className="login-link">
                        <p>Already have an account? <Link to="/signin">Login</Link></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup