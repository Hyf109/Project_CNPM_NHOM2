import './NavBar.scss'
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logoImg from 'components/assets/images/logo.png'

const NavBar = () => {
    const navigate = useNavigate();
    const handleLinkClick = (url) => {
        navigate(url);
    }

    return (
        <div className="NavBar">
            <span className="logo">
                <img src={logoImg} class="logo-image" alt="logo"/>
            </span>

            <span className="nav-links">
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
            <span onClick={() => handleLinkClick('/profile')} className="user text">
                Username
            </span>
            
        </div>
    );
}
 
export default NavBar;