import React from "react"
import './Boardbar.scss'

function Boardbar() {
    return (
        <nav className="taskbar">
            <div className="search-bar-container">
                <span className="board--item">
                    <span className="board--icon">
                        <i className="fa-solid fa-clock"></i>
                        <input type="datetime-local"/>
                    </span>
                </span>

                <span className="board--item">
                    <span className="board--icon">
                        <i className="search-btn">
                            <i className="fa-solid fa-location-dot"></i>
                        </i>
                        <input type="text" className="search" placeholder="Search by location" />
                    </span>
                </span>

                <span className="board--item">
                    <span className="board--icon">
                        <i className="search-btn">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </i>
                        <input type="text" className="search" placeholder="Search by name" />
                    </span>
                </span>
                <div className="board--item">
                    <button className="confirm-button">Confirm</button>
                </div>
                
            </div>
        </nav>
    )
}

export default Boardbar