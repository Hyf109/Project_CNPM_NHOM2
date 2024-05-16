import React from "react";
import { Link } from "react-router-dom";
import './EventList.scss';
import EventCard from 'components/EventCard/EventCard';

function EventListContainer() {
    return(
        <>
            <div className = "event-container">
                <span className = "container-text header-text">
                    Current Events    
                </span> 
                <div className = "event-list">
                    <EventCard/>
                    <EventCard/>    
                    <EventCard/> 
                    <EventCard/> 
                    <EventCard/> 
                </div>
            </div>  
        </>
    )
}

export default EventListContainer