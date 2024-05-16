import React from "react";
import './EventCard.scss';

function EventCard() {
    return (
        <>
            <div class = "event-card">
                <span class = "event-name">
                    Event Name    
                </span>
                <div class = "event-date event-info">
                    <i class="fa-solid fa-calendar-days icon"></i>
                    <span class = "event-text">
                        2024-12-31
                    </span>
                </div>
                <div class = "event-time event-info">
                    <i class="fa-solid fa-clock icon"></i>
                    <span class = "event-text">
                        12:00
                    </span>
                </div>
                <div class = "event-location event-info">
                    <i class="fa-solid fa-map-marker-alt icon"></i>
                    <span class = "event-text">
                        1234 Street Name 1234 Street Name 1234 Street Name 1234 
                    </span>
                </div>
                <div class = "event-participants event-info">
                    <i class="fa-solid fa-user-friends icon"></i>
                    <span class = "event-text">
                        4/5
                    </span>
                </div>
            </div>
        </>
    )
}

export default EventCard;

