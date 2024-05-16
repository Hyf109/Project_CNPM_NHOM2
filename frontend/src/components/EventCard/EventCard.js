import React from "react";
import './EventCard.scss';

function EventCard() {
    return (
        <>
            <div className = "event-card">
                <span className = "event-name">
                    Event Name    
                </span>
                <div className = "event-date event-info">
                    <i className="fa-solid fa-calendar-days icon"></i>
                    <span className = "event-text">
                        2024-12-31
                    </span>
                </div>
                <div className = "event-time event-info">
                    <i className="fa-solid fa-clock icon"></i>
                    <span className = "event-text">
                        12:00
                    </span>
                </div>
                <div className = "event-location event-info">
                    <i className="fa-solid fa-map-marker-alt icon"></i>
                    <span className = "event-text">
                        1234 Street Name 1234 Street Name 1234 Street Name 1234 
                    </span>
                </div>
                <div className = "event-participants event-info">
                    <i className="fa-solid fa-user-friends icon"></i>
                    <span className = "event-text">
                        4/5
                    </span>
                </div>
            </div>
        </>
    )
}

export default EventCard;

