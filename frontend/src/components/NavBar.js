import '../css/NavBar.css'

const NavBar = () => {
    return (
        <div className="NavBar">
            <span>
                <img alt="logo"/>
            </span>
            <span>
                <ul>
                    <li><a>Join Events</a></li>
                    <li><a>Host Events</a></li>
                    <li><a>My Events</a></li>
                </ul>
            </span>
            <span>
                <a>Sign up</a>
            </span>
            
        </div>
    );
}
 
export default NavBar;