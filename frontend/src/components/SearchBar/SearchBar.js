import React from "react"
import './SearchBar.scss'

function Boardbar() {
    return (
        <nav className="taskbar">
            <div className="search-bar-container">

                <span className="board--item">
                    <h3 className="filter-name">Start time</h3>
                    <div className="board--icon">
                        <i className="fa-solid fa-clock"></i>
                        <input className="event-time-filter" type="datetime-local"/>
                    </div>
                </span>

                <span className="board--item">
                    <h3 className="filter-name">End time</h3>
                    <span className="board--icon">
                        <i className="fa-solid fa-clock"></i>
                        <input className="event-time-filter" type="datetime-local"/>
                    </span>
                </span>

                <span className="board--item">
                    <h3 className="filter-name">Location</h3>
                    <span className="board--icon">
                        <i className="search-btn">
                            <i className="fa-solid fa-location-dot"></i>
                        </i>
                        <input type="text" className="search" placeholder="Search by location" />
                    </span>
                </span>

                <span className="board--item">
                    <h3 className="filter-name">Event name</h3>
                    <span className="board--icon">
                        <i className="search-btn">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </i>
                        <input type="text" className="search" placeholder="Search by name" />
                    </span>
                </span>
                <div className="board--item">
                    <button className="confirm-button">Search</button>
                </div>
                
            </div>
        </nav>
    )
}

export default Boardbar