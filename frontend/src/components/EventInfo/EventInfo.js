import React from "react"
import './EventInfo.scss'

import moment from "moment";

const formatDate = (datetime) => {
    if (!datetime) return null;
    let date = moment(datetime);
    let formattedDate = date.format('D/M/yyyy - h:mm a');

    return formattedDate;
}

function EventInfo() {

    //Data code

    return (
        <div className="event-info-container">
            <div className="event-info-window">
                <div className="event-info">
                    <h1 className="event-info-title">
                        Name of event
                    </h1>
                    <div className="event-time-info">
                        <span>
                            <div>Start time: </div>
                            <div>End time: </div>
                        </span>
                        <span>
                            <div> 21/5/2024 - 4:56 pm</div>
                            <div> 21/5/2024 - 4:56 pm</div>
                        </span>
                    </div>
                    <span className="event-location-info">
                        Location: 
                    </span>
                    <span className="event-description-info">
                        <h3>About this event:</h3>
                            <div>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                    </span>
                </div>

                <div className="event-extra-info">
                    <div className="event-member-list">
                        {/* Event list */}
                    </div>
                </div>
            </div>

            <div className="event-button-row">
                <button className="info-join-event-button">Join</button>
            </div>
        </div>
    )
}

export default EventInfo