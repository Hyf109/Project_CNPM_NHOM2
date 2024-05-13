import React from "react";
import './UserEvents.scss'
import userEvent from "@testing-library/user-event";

function UserEvents() {
    return (
        <div class="events-participating-in">
            <div class="manager">
                <b>Events management</b>
                <li>Event a</li>
                <li>Event b</li>
                <li>Event c</li>
                <li>Event d</li>
                <li>Event e</li>
            </div>

            <div class="participant">
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
