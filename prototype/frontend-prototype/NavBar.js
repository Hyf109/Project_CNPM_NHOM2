import '../css/NavBar.css'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    const handleLinkClick = (url) => {
        navigate(url);
    }

    return (
        <div className="NavBar">
            <span onClick={() => handleLinkClick('/')} className="logo">
                <img alt="logo"/>
            </span>

            <span className="nav-links">
                <ul>
                    <li onClick={() => handleLinkClick('/join')}><a>Join Events</a></li>
                    <li onClick={() => handleLinkClick('/host')}><a>Host Events</a></li>
                    <li onClick={() => handleLinkClick('/manage')}><a>My Events</a></li>
                </ul>
            </span>
            <span className="user">
                <a>Sign up</a>
            </span>
            
        </div>
    );
}
 
export default NavBar;