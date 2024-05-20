import * as React from 'react'
import EventListContainer from "components/EventList/EventList";
import HostForm from 'components/HostEvent/HostForm';
import './pagestyle/HostEvent.scss'
import EventList from 'components/EventList/EventList';

import { useEffect, useState } from 'react';
import { useAuth } from 'context/AuthProvider';
import useFetch from 'hooks/useFetch';
import EventInfo from 'components/EventInfo/EventInfo';

function HostEvent() {
    const { user } = useAuth();
    const [eventListState, setEventListState] = useState(user ? { host_id: user.user } : null);
    const {data: manager, isPending, error} = useFetch('finder/api/event/manager');
    
    const [queryParams, setQueryParams] = useState()

    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showEventInfo, setShowEventInfo] = useState(false);

    // Update eventListState once user is loaded
    useEffect(() => {
        if (manager && manager.events) {
            setEventListState({ joined_event_id_list: manager.events.map(event => event.event_id), status: 'upcoming' });
        }
    }, [manager]);


    if (!user) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className="host-page-wrapper">
                <div className="event-list-container">
                    <h2>Your upcoming events</h2>
                    <EventList queryParams={eventListState} onEventSelect={(event) => {setShowEventInfo(true); setSelectedEvent(event);}}/>
                </div>

                <div className="host-form-container">
                    {
                        !showEventInfo &&
                        <>
                            <h2>Host a new event<br></br></h2>
                            <HostForm />
                        </>
                    }

                    { showEventInfo &&
                        <EventInfo event={selectedEvent} onClose={() => {setShowEventInfo(false); setSelectedEvent(null)}}/>
                    }
                </div>

            </div>
            

            
        </>
    )
}

export default HostEvent