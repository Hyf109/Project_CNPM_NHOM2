import React from "react";
import './Description.scss';
import { Link } from "react-router-dom";
import catAvt from 'components/assets/images/cat.png';
import { useAuth } from "hooks/useAuth";

function Description() {
    const { user } = useAuth();

    // Ensure user is not null before accessing properties
    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-infomation">
            <span className="avatar">
                <img src={catAvt} alt="User Avatar" />
                <b>{user.username}</b>
                <i className="fa-solid fa-user-pen"></i>
            </span>
        </div>
    );
}

export default Description;
