import * as React from 'react'
import Header from "components/HeaderOnly/Appbar";
import EventListContainer from "components/EventList/EventListContainer";
import EventCard from 'components/EventCard/EventCard';
import HostForm from 'components/HostEvent/HostForm';
function HostEvent() {
    return (
        <>
        <div class = "wrapper">
            <HostForm/>
        </div>
        </>
    )
}

export default HostEvent