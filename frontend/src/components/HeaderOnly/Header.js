import './Header.scss'
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
                    <li onClick={() => handleLinkClick('/search')}>
                        <a className="text">Search</a>
                    </li>
                    <li onClick={() => handleLinkClick('/host-event')}>
                        <a className="text">Host Events</a>
                    </li>
                    <li onClick={() => handleLinkClick('/schedule')}>
                        <a className="text">My Schedule</a>
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