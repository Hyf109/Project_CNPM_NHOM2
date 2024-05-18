import React from "react";
import './Description.scss'
import { Link } from "react-router-dom";
import catAvt from 'components/assets/images/cat.png'
import { useAuth } from "hooks/useAuth";

function Description() {
    const {user, isPending, error} = useAuth();
    
    if (isPending) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-infomation">
            <span className="avatar">
                <img src={catAvt}></img>
                <b>{user.username}</b>
                <i className="fa-solid fa-user-pen"></i>
            </span>
        </div>
    )
}

export default Description