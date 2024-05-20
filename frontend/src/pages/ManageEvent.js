import '../pages/pagestyle/manageEvent.scss'
import EventList from 'components/EventList/EventList';
import EventInfo from 'components/EventInfo/EventInfo';
import { useState } from 'react';

const ManageEvent = () => {
    const [eventListState, setEventListState] = useState();
    const [selectedButton, setSelectedButton] = useState('All events');

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
        // Update eventListState based on the buttonName
        switch (buttonName) {
            case 'All events':
                setEventListState();  // Set to default
                break;
            case 'Upcoming events':
                setEventListState({ status: 'upcoming' });
                break;
            case 'Past events':
                setEventListState({ status: 'ended' });
                break;
            case 'Ongoing events':
                setEventListState({ status: 'occuring' });
                break;
            default:
                break;
        }
    };

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
                    <EventList queryParams={eventListState} className="manage-event-list"/>
                </div>
                <div className="event-info-view">
                    <EventInfo />
                </div>
            </div>
        </div>
    );
}
 
export default ManageEvent;
