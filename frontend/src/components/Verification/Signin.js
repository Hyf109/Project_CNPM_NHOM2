import React from "react";
import { Link, useNavigate } from "react-router-dom";

import 'components/Verification/Verification.scss'
import 'App.scss'
import logoImg from 'components/assets/images/logo.png'
import seclogoImg from 'components/assets/images/logo2.png'
import { useState } from "react";
import { useAuth } from "hooks/useAuth";
import { useSignin } from "hooks/useSignin";

function Signin() {
    const navigate = useNavigate('/search');
    const {signin, error, isLoading} = useSignin();

    const {user} = useAuth();

    if (user) {
        navigate('/search');
    }
    

    const [state, setState] = useState({
        email:'',
        password:'',
    });

    const handleOnChange = (e) => {
        const {name, value} = e.target;

        setState(prevState => ({
            ...prevState, 
            [name]:value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signin(state.email, state.password);
    }

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
                            <input value={state.email} name="email" onChange={handleOnChange}  type="email" placeholder="example@abc.xyz" required ></input>
                        </div>

                        <div className="input-box">
                            <span className="fa-solid fa-lock"></span>
                            <input value={state.password} name="password" onChange={handleOnChange} type="password" placeholder="Password" required></input>
                        </div>
                    </div>
                    {error && <div className="authentication-field-error">{error.credential}</div>}

                    <button disabled={isLoading} onClick={handleSubmit} type="submit" className="btn">Login</button>                    

                    <div className="register-link">
                        <p>Don't have an account? <Link to="/signup">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin