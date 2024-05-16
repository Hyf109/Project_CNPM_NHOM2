import React from "react";
import './UserEvents.scss'
import userEvent from "@testing-library/user-event";

function UserEvents() {
    return (
        <div className="events-participating-in">
            <div className="manager">
                <b>Events management</b>
                <li>Event a</li>
                <li>Event b</li>
                <li>Event c</li>
                <li>Event d</li>
                <li>Event e</li>
            </div>

            <div className="participant">
                <b>Events participant</b>
                <li>Event a</li>
                <li>Event b</li>
                <li>Event c</li>
                <li>Event d</li>
                <li>Event e</li>
            </div>
        </div>
    )
}

export default UserEvents
