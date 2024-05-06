import React from "react"
import './Boardbar.scss'

function Boardbar() {
    return (
        <nav class="taskbar">
            <div>
                <span class="board--item">
                    <span class="board--icon">
                        <i class="fa-solid fa-calendar"></i>
                        <input type="date" class="datebirth" value="2000-01-01" min="1900-01-01" max="2024-12-31"/>
                    </span>
                </span>

                <span class="board--item">
                    <span class="board--icon">
                        <i class="fa-solid fa-clock"></i>
                        <input type="time" class="datetime" value="00:00:00" min="00:00:00" max="23:59:59"/>
                    </span>
                </span>

                <span class="board--item">
                    <span class="board--icon">
                        <i class="fa-solid fa-location-dot"></i>
                        <a href="home.html">Pick from Google Map!</a>
                    </span>
                </span>

                <span class="board--item">
                    <span class="board--icon">
                        <i class="search-btn">
                            <i class="fa-brands fa-searchengin"></i>
                        </i>
                        <input type="text" class="search" placeholder="Search events"/>
                    </span>
                </span>
            </div>
        </nav>
    )
}

export default Boardbar