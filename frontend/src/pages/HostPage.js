import * as React from 'react'
import EventListContainer from "components/EventList/EventListContainer";
import EventCard from 'components/EventCard/EventCard';
import HostForm from 'components/HostEvent/HostForm';
import './pagestyle/HostEvent.scss';

function HostEvent() {
    return (
        <>
            <div className="host-container">
                <div className="event-list">
                    <EventListContainer/>    
                </div>
                <div className="host-form">
                    <HostForm/>
                </div>
            </div>
        </>
    )
}

export default HostEvent