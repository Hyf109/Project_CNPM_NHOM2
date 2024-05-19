import React from "react";
import './Description.scss';
import { Link, useNavigate } from "react-router-dom";
import catAvt from 'components/assets/images/cat.png';
import { useAuth } from "hooks/useAuth";
import { useLogout } from "hooks/useLogout";

function Description() {
    const { user, dispatch } = useAuth();
    const {logout} = useLogout();
    const navigate = useNavigate();

    // Ensure user is not null before accessing properties
    if (!user) {
        return <div>Loading...</div>;
    }

    const handleLogOut = () => {
        logout();
        navigate('/');
    }

    return (
        <div className="user-infomation">
            <span className="avatar">
                <img src={catAvt} alt="User Avatar" />
                <b>{user.username}</b>
                <i className="fa-solid fa-user-pen"></i>
            </span>

            <span className="logout-button-container">
                <button className="logout-button" onClick={handleLogOut}>Logout</button>
            </span>
        </div>
    );
}

export default Description;
