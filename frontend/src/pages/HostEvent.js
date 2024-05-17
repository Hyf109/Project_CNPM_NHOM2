import * as React from 'react'
import EventListContainer from "components/EventList/EventListContainer";
import EventCard from 'components/EventCard/EventCard';
import HostForm from 'components/HostEvent/HostForm';


function HostEvent() {
    return (
        <>
            <div id="host-page-body">
                <EventListContainer/>
                <HostForm/>  
            </div>            
        </>
    )
}

export default HostEvent