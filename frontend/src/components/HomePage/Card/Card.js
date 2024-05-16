import React from "react"
import './Card.scss'
import catAvt from 'components/assets/images/cat.png'


function Card() {
    return (
        <div className="event-card">
            <img src={catAvt} alt="" className="event-card-photo"></img>
            <div className="event-card-info">
                <div className="event-title">
                    <h2>Event name</h2>
                    <h3 className="number-of-user">0/5</h3>
                </div>
                <div className="location">location</div>
                <div className="date">Date</div>
                <div className="time">Time</div>
                <div className="tag">Tags</div>
                <div className="event-card-button">
                    <button>View more</button>
                    <button>Join now</button>
                </div>
            </div>
        </div>
    )
}

export default Card