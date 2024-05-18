
import '../pages/pagestyle/manageEvent.scss'
import EventList from 'components/EventList/EventList';
import EventInfo from 'components/EventInfo/EventInfo';

const ManageEvent = () => {
    
    return (  
        <div className="manage-event-page-container">
            <div className="event-view-option-bar">
                <button className="event-view-button">All events</button>
                <button className="event-view-button">Upcoming events</button>
                <button className="event-view-button">Past events</button>
                <button className="event-view-button">Ongoing events</button>
            </div>
            
            <div className="manage-event-view-container">
                <div className="event-view">
                    <EventList className="manage-event-list"/>
                </div>
                <div className="event-info-view">
                    <EventInfo />
                </div>
            </div>
        </div>
    );
}
 
export default ManageEvent;