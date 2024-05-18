import * as React from 'react'
import EventListContainer from "components/EventList/EventList";
import HostForm from 'components/HostEvent/HostForm';
import './pagestyle/hostEvent.scss'
import EventList from 'components/EventList/EventList';

function HostEvent() {
    return (
        <>
            <div className="host-page-wrapper">
                <div className="event-list-container">
                    <EventList/>
                </div>

                <div className="host-form-container">
                    <HostForm/>
                </div>
            </div>
            

            
        </>
    )
}

export default HostEvent