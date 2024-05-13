import React from "react"
import { Link } from 'react-router-dom';
import './Appbar.scss'
import logoImg from 'components/assets/images/logo.png'
import catAvt from 'components/assets/images/cat.png'
import 'components/assets/fonts/fontawesome-free-6.5.2/scss/brands.scss'
import 'components/assets/fonts/fontawesome-free-6.5.2/scss/solid.scss'
import 'components/assets/fonts/fontawesome-free-6.5.2/scss/regular.scss'
import 'components/assets/fonts/fontawesome-free-6.5.2/scss/fontawesome.scss'

function Appbar() {
    return (
        <nav class="menu">
            <div>
                <span class="menu--item">
                    <span class="menu--icon">
                        <a><img src={logoImg} alt=""></img></a>
                    </span>
                </span>
                <span class="menu--item">
                    <span class="menu--icon">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <a>Search</a>
                </span>

                <span class="menu--item">
                    <span class="menu--icon">
                        <i class="fa-solid fa-calendar-minus"></i>
                    </span>
                    <a href="#">My Schedule</a>
                </span>

                <span class="menu--item">
                    <span class="menu--icon">
                        <i class="fa-solid fa-square-plus"></i>
                    </span>
                    <a href="#">Host new Event</a>
                </span>

                <span class="menu--item">
                    <span class="user--avatar--bar">
                        <img src={catAvt} />
                    </span>
                </span>
            </div>
        </nav>
    )
}

export default Appbar