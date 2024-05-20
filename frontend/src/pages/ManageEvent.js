import '../pages/pagestyle/manageEvent.scss'
import EventList from 'components/EventList/EventList';
import EventInfo from 'components/EventInfo/EventInfo';
import { useState, useEffect } from 'react';
import useFetch from 'hooks/useFetch';

const ManageEvent = () => {
    const [eventListState, setEventListState] = useState(null);
    const [selectedButton, setSelectedButton] = useState('All events');
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showEventInfo, setShowEventInfo] = useState(false);

    const {data: manager, isPending, error} = useFetch('finder/api/event/manager');

    // Update eventListState once manager data is loaded
    useEffect(() => {
        if (manager && manager.events) {
            setEventListState({ joined_event_id_list: manager.events.map(event => event.event_id) });
        }
    }, [manager]);

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
        // Update eventListState based on the buttonName
        setShowEventInfo(false);
        
        switch (buttonName) {
            case 'All events':
                setEventListState({ joined_event_id_list: manager.events.map(event => event.event_id) });  // Set to default
                
                break;
            case 'Upcoming events':
                setEventListState({ joined_event_id_list: manager.events.map(event => event.event_id), status: 'upcoming' });
                break;
            case 'Past events':
                setEventListState({ joined_event_id_list: manager.events.map(event => event.event_id), status: 'ended' });
                break;
            case 'Ongoing events':
                setEventListState({ joined_event_id_list: manager.events.map(event => event.event_id), status: 'occuring' });
                break;
            default:
                break;
        }
    };

    if (!manager) {
        return <div>Loading...</div>
    }

    return (  
        <div className="manage-event-page-container">
            <div className="event-view-option-bar">
                <button 
                    className={`event-view-button ${selectedButton === 'All events' ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('All events')}
                >
                    All events
                </button>
                <button 
                    className={`event-view-button ${selectedButton === 'Upcoming events' ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('Upcoming events')}
                >
                    Upcoming events
                </button>
                <button 
                    className={`event-view-button ${selectedButton === 'Past events' ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('Past events')}
                >
                    Past events
                </button>
                <button 
                    className={`event-view-button ${selectedButton === 'Ongoing events' ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('Ongoing events')}
                >
                    Ongoing events
                </button>
            </div>
            
            <div className="manage-event-view-container">
                <div className="event-view">
                    {eventListState && <h2>Your {eventListState.status} events</h2>}
                    {!eventListState && <h2>All events</h2>}
                    <EventList queryParams={eventListState} onEventSelect={(event) => {setShowEventInfo(true); setSelectedEvent(event);}} className="manage-event-list"/>
                </div>
                {
                    showEventInfo &&
                    <div className="event-info-view">
                        <EventInfo event={selectedEvent} onClose={() => {setShowEventInfo(false); setSelectedEvent(null)}} />
                    </div>
                }

            </div>
        </div>
    );
}
 
export default ManageEvent;
