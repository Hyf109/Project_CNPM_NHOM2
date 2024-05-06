import '../css/JoinEvent.css'
import EventList from '../components/EventList';

const JoinEvent = () => {
    
    return (
        <div className="join-event">
            <aside className="left-column">
                aaaaa
            </aside>

            <div className="center-column">
                <EventList url="/finder/api/event"/>
            </div>
            
            <aside className="right-column">
                aaaaa
            </aside>
        </div>
    );
}
 
export default JoinEvent;