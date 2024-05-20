import * as React from 'react'
import EventListContainer from "components/EventList/EventList";
import HostForm from 'components/HostEvent/HostForm';
import './pagestyle/HostEvent.scss'
import EventList from 'components/EventList/EventList';

import { useEffect, useState } from 'react';
import { useAuth } from 'context/AuthProvider';

function HostEvent() {
    const { user } = useAuth();
    const [eventListState, setEventListState] = useState(user ? { host_id: user.user } : null);

    // Update eventListState once user is loaded
    useEffect(() => {
        if (user) {
            setEventListState({ host_id: user.user });
        }
    }, [user]);


    if (!user) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className="host-page-wrapper">
                <div className="event-list-container">
                    <h2>Your upcoming events</h2>
                    <EventList queryParams={{host_id: user.user, status: 'occuring' }}/>
                </div>

                <div className="host-form-container">
                    <h2>Host a new event<br></br></h2>
                    <HostForm/>
                </div>
            </div>
            

            
        </>
    )
}

export default HostEvent