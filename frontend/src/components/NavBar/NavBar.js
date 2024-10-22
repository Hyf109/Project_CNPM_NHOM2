import './NavBar.scss'
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logoImg from 'components/assets/images/logo.png'
import { useAuth } from 'hooks/useAuth';

const NavBar = () => {
    const {user} = useAuth();

    const navigate = useNavigate();


    if (!user) {
        return <div>Loading...</div>
    }


    return (
        <div className="NavBar">
            <span className="logo nav-bar-flex-item">
                <img src={logoImg} className="logo-image" alt="logo"/>
            </span>

            <span className="nav-links nav-bar-flex-item">
                <ul>
                    <li>
                        <NavLink to="/search" className="text" activeClassname="active">Find Event</NavLink>
                    </li>
                    <li>
                        <NavLink to="/host-event" className="text" activeClassname="active">Host Event</NavLink>
                    </li>
                    <li>
                        <NavLink to="/manage" className="text" activeClassname="active">My Events</NavLink>
                    </li>
                </ul>
            </span>
            <span className="user text nav-bar-flex-item">
                <button id="user-account-button" onClick={() => navigate(`/profile/${user.user}`)}>
                    {user.username}
                </button>
            </span>
            
        </div>
    );
}
 
export default NavBar;