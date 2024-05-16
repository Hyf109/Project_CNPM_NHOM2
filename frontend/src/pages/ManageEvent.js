import CardList from 'components/HomePage/Card/CardList';
import '../pages/pagestyle/manageEvent.scss'

const ManageEvent = () => {
    
    return (  
        <>
            <div className="event-view-option-bar">
                <button className="event-view-button">All events</button>
                <button className="event-view-button">Upcoming events</button>
                <button className="event-view-button">Past events</button>
                <button className="event-view-button">Ongoing events</button>
            </div>
            
            <div className="manage-event-view-container">
                <div className="event-view">
                    <CardList/>
                </div>

                <div className="calendar-view">

                </div>
            </div>
        </>
    );
}
 
export default ManageEvent;