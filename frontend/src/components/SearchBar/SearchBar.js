import React, { useState } from "react";
import './SearchBar.scss';

function Boardbar({ onSearch }) {
    const [queryParams, setQueryParams] = useState({
        startTime: '',
        endTime: '',
        location: '',
        title: ''
    });

    const handleInputChange = (event) => {
        setQueryParams({
            ...queryParams,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = () => {
        onSearch(queryParams);
    };
    return (
        <nav className="taskbar">
            <div className="search-bar-container">

                <span className="board--item">
                    <h3 className="filter-name">Start time</h3>
                    <div className="board--icon">
                        <i className="fa-solid fa-clock"></i>
                        <input name="startTime" className="event-time-filter" type="datetime-local" onChange={handleInputChange}/>
                    </div>
                </span>

                <span className="board--item">
                    <h3 className="filter-name">End time</h3>
                    <span className="board--icon">
                        <i className="fa-solid fa-clock"></i>
                        <input name="endTime" className="event-time-filter" type="datetime-local" onChange={handleInputChange}/>
                    </span>
                </span>

                <span className="board--item">
                    <h3 className="filter-name">Location</h3>
                    <span className="board--icon">
                        <i className="search-btn">
                            <i className="fa-solid fa-location-dot"></i>
                        </i>
                        <input name="location" type="text" className="search" placeholder="Search by location" onChange={handleInputChange} />
                    </span>
                </span>

                <span className="board--item">
                    <h3 className="filter-name">Event name</h3>
                    <span className="board--icon">
                        <i className="search-btn">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </i>
                        <input name="title" type="text" className="search" placeholder="Search by name" onChange={handleInputChange} />
                    </span>
                </span>
                <div className="board--item">
                    <br></br>
                    <button className="confirm-button" onClick={handleSubmit}>Search</button>
                </div>
                
            </div>
        </nav>
    )
}

export default Boardbar;
