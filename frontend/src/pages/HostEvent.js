import EventList from '../components/EventList';
import HostEventForm from '../components/HostEventForm';
import '../css/HostEvent.css';

const HostEvent = () => {
    return (  
        <div className="host-event">
            <aside className="left-column">
                <EventList url="/finder/api/event"/>
            </aside>
            
            <div className="main-content">
                <HostEventForm/>
            </div>

        </div>
    );
}
 
export default HostEvent;