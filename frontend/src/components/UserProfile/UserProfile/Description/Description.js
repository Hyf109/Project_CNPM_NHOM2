import React from "react";
import './Description.scss'
import catAvt from 'components/assets/images/cat.png'

function Description() {
    return (
        <div class="user-infomation">
            <span class="avatar">
                <img src={catAvt}></img>
                <b>Username</b>
                <i class="fa-solid fa-user-pen"></i>
                <a href="intro_profile.html"><button class="to-intro">Intro</button></a>

            </span>
            <div class="infomation">
                <li>Expert Software Engineering for over 10 years.</li>
                <li>Started working at Google company from 2017.</li>
                <li>etc.</li>
            </div>
        </div>
    )
}

export default Description