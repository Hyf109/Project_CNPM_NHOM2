import React from "react"
import './Events.scss'
import CardList from "components/HomePage/Card/CardList"
import Filter from "components/HomePage/Filter/Filter"
import Schedule from "components/HomePage/Schedule/Schedule"

function Events() {
    return (
        <div class="events">
            <Filter/>
            <CardList/>
            <Schedule/>
        </div>
    )
}

export default Events