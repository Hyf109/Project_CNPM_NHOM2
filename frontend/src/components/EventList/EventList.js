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

function EventList({ queryParams, onEventSelect }) {
    const { data: events, isPending, error } = useEvents(queryParams);

    if (isPending) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.log(error);
        return <div><h1>Oops! Something went wrong!</h1></div>;
    }

    const handleButtonClick = (event) => {
        console.log(event);
        onEventSelect(event);  // Pass the id to the onEventSelect function
      }

    return (
        <div className="event-list">
            {events && events.map((event) => (
                <div className="event-card" key={event._id}>
                    <div className="event-card-info">
                        <div className="event-card-title">
                            <h2>{event.title}</h2>
                            <h3 id="event-capacity">{event.member_list.length}/{event.capacity}</h3>
                        </div>
                        <p>Location: {event.location}</p>
                        {event.startTime && <p>From: {formatDate(event.startTime)}</p>}
                        {event.endTime && <p>To: {formatDate(event.endTime)}</p>}

                        <div className="event-card-buttons">
                            <button className="event-button" onClick={() => handleButtonClick(event)}>View info</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default EventList;
