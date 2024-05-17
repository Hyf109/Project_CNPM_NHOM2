
import '../pages/pagestyle/manageEvent.scss'
import EventList from 'components/EventList/EventListContainer'
import EventInfo from 'components/EventInfo/EventInfo'

const ManageEvent = () => {
    
    return (  
        <div className="manage-event-page-container">
            <div className="event-view-option-bar">
                <button className="event-view-button">All events</button>
                <button className="event-view-button">Upcoming events</button>
                <button className="event-view-button">Past events</button>
                <button className="event-view-button">Ongoing events</button>
            </div>
            
            <div className="manage-event-wrapper">
                <div className="event-list-container-wrapper">
                    <EventList />
                </div>
                <div className="event-info-wrapper">
                    <EventInfo />
                </div>
            </div>
        </div>
    );
}
 
export default ManageEvent;