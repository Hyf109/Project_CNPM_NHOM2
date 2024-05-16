import React from "react"
import './Boardbar.scss'

function Boardbar() {
    return (
        <nav class="taskbar">
            <div>
                <span class="board--item">
                    <span class="board--icon">
                        <i class="fa-solid fa-clock"></i>
                        <input
                            type="datetime-local"
                            id="meeting-time"
                            name="meeting-time"
                            value="2024-01-01T00:30"
                            min="2024-01-01T00:00"
                            max="2069-12-31T23:59" />
                    </span>
                </span>

                <span class="board--item">
                    <span class="board--icon">
                        <i class="search-btn">
                            <i class="fa-solid fa-location-dot"></i>
                        </i>
                        <input type="text" class="search" placeholder="Search by location" />
                    </span>
                </span>

                <span class="board--item">
                    <span class="board--icon">
                        <i class="search-btn">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </i>
                        <input type="text" class="search" placeholder="Search by name" />
                    </span>
                </span>

                <span class="board--item">
                    <span class="board--icon">
                        <button>Confirm</button>
                    </span>
                </span>
            </div>
        </nav>
    )
}

export default Boardbar