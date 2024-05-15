import React from "react"
import './Contents.scss'
import Boardbar from "components/HomePage/Board/Boardbar"
import Events from "components/HomePage/Events/Events"

function Contents() {
    return (
        <div class="home--contents">
            <Boardbar />
            <Events />
        </div>
    )
}

export default Contents