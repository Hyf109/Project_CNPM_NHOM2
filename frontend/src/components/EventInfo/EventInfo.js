import React from "react"
import './EventInfo.scss'

function EventInfo() {
    return (
        <div className="event-info-container">
            <h1 className="event-info-title">
                Event Information
            </h1>
            <div className="event-info">
                <span className="event-name-info">
                    Event name
                </span>
                <span className="event-start-info">
                    Start time
                </span>
                <span className="event-end-info">
                    End time
                </span>
                <span className="event-location-info">
                    Location
                </span>
                <span className="event-description-info">
                    Description
                </span>
            </div>
        </div>
    )
}

export default EventInfo