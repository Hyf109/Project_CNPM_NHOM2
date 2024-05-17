import * as React from 'react'
import EventListContainer from "components/EventList/EventListContainer";
import EventCard from 'components/EventCard/EventCard';
import HostForm from 'components/HostEvent/HostForm';
import './pagestyle/HostEvent.scss'
import './pagestyle/HostEventForm'
import HostEventForm from './pagestyle/HostEventForm';

function HostEvent() {
    return (
        <>
            <div className="host-page-wrapper">
                <div className="event-list-container">
                    <EventListContainer/>
                </div>

                <div className="host-form-container">
                    <HostForm/>
                </div>
            </div>
            

            
        </>
    )
}

export default HostEvent