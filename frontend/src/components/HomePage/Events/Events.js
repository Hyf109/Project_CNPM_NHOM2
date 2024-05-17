import React from "react"
import './Events.scss'

import Filter from "components/HomePage/Filter/Filter"
import Schedule from "components/HomePage/Schedule/Schedule"

function Events() {
    return (
        <div class="events">
            <Filter/>

            <Schedule/>
        </div>
    )
}

export default Events