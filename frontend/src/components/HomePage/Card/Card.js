import React from "react"
import './Card.scss'
import catAvt from 'components/assets/images/cat.png'


function Card() {
    return (
        <div class="event-card">
            <img src={catAvt} alt="" class="event-card-photo"></img>
            <div class="event-card-info">
                <div class="event-title">
                    <h2>Event name</h2>
                    <h3 class="number-of-user">0/5</h3>
                </div>
                <div class="location">location</div>
                <div class="date">Date</div>
                <div class="time">Time</div>
                <div class="tag">Tags</div>
                <div class="event-card-button">
                    <button>View more</button>
                    <button>Join now</button>
                </div>
            </div>
        </div>
    )
}

export default Card