import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EventList.scss';
import moment from 'moment';
import useEvents from 'hooks/useEvents'; // Adjust the import path as necessary

const formatDate = (datetime) => {
    if (!datetime) return null;
    let date = moment(datetime);
    let formattedDate = date.format('D/M/yyyy - h:mm a');
    return formattedDate;
}

function EventList({ queryParams }) {
    const { data: events, isPending, error } = useEvents(queryParams);

    if (isPending) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.log(error);
        return <div><h1>Oops! Something went wrong!</h1></div>;
    }


    return (
        <div className="event-list">
            {events && events.map((event) => (
                <div className="event-card" key={event.id}>
                    <div className="event-card-info">
                        <div className="event-card-title">
                            <h2>{event.title}</h2>
                            <h3 id="event-capacity">{event.capacity}</h3>
                        </div>
                        <p>Location: {event.location}</p>
                        {event.startTime && <p>From: {formatDate(event.startTime)}</p>}
                        {event.endTime && <p>To: {formatDate(event.endTime)}</p>}

                        <div className="event-card-buttons">
                            {/* {use_case === 'join' && (
                                <div className="join-buttons">
                                    <button>Join Now</button>
                                    <button>View More</button>
                                </div>
                            )}

                            {use_case === 'upcoming-ongoing' && (
                                // Check if the current user is the host, and if yes, add a cancel event button.
                                <div className="join-buttons">
                                    <button>Leave</button>
                                    <button>View More</button>
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default EventList;
