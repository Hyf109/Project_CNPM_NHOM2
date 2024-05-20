import React, { useState } from "react"
import './EventInfo.scss'

import moment from "moment";
import MemberList from "components/MemberList/MemberList";

const formatDate = (datetime) => {
    if (!datetime) return null;
    let date = moment(datetime);
    let formattedDate = date.format('D/M/yyyy - h:mm a');

    return formattedDate;
}



function EventInfo({ event, onClose }) {

    //Data code
    const [joinError, setJoinError] = useState(null);
    const [isJoining, setIsJoining] = useState(false);

    const joinEvent = async (event_id) => {
        try {
            setIsJoining(true);
            
            const response = await fetch(`finder/api/event/join/${event_id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    

            const json = await response.json();

            //Handle if join success
            if (response.ok) {
                console.log(json);
            }

            if (!response.ok) {
                setJoinError(json.mssg);
            }

            setIsJoining(false);
        } catch (error) {
            console.log(error);
            setIsJoining(false);
        }
    }


    return (
        <div className="event-info-container">
            <div className="event-info-window">
                <div className="event-info">
                    <h1 className="event-info-title">
                        {event.title}
                    </h1>
                    <div className="event-time-info">
                        <span>
                            <div>Start time: </div>
                            <div>End time: </div>
                        </span>
                        <span>
                            <div> {() => formatDate(event.startTime)}</div>
                            <div> {() => formatDate(event.endTime)}</div>
                        </span>
                    </div>
                    <span className="event-location-info">
                        Location: {event.location}
                    </span>
                    <span className="event-description-info">
                        <h3>About this event:</h3>
                            <div className="event-description-info">
                            {event.description}
                            </div>
                    </span>
                </div>

                <div className="event-extra-info">
                    <div className="event-member-list">
                        <MemberList event_id={event._id}></MemberList>
                    </div>
                </div>
            </div>

            <div className="event-button-row">
                {/* Call the onClose function when the Close button is clicked */}
                <button onClick={onClose}>Close</button>
                {joinError && <div>{joinError}</div>}
                <button disabled={isJoining} onClick={() => joinEvent(event._id)} className="info-join-event-button">Join</button>
            </div>
        </div>
    )
}

export default EventInfo