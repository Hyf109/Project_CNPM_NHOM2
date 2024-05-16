import React from "react";
import './Description.scss'
import { Link } from "react-router-dom";
import catAvt from 'components/assets/images/cat.png'

function Description() {
    return (
        <div className="user-infomation">
            <span className="avatar">
                <img src={catAvt}></img>
                <b>Username</b>
                <i className="fa-solid fa-user-pen"></i>
            </span>
            <div className="infomation">
                <li>Expert Software Engineering for over 10 years.</li>
                <li>Started working at Google company since 2017.</li>
                <li>etc.</li>
            </div>
        </div>
    )
}

export default Description