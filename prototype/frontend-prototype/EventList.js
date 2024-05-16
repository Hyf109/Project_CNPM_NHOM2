import useFetch from "../../frontend/src/hooks/useFetch";
import '../css/EventList.css';
import moment from 'moment';

const formatDate = (datetime) => {
    if (!datetime) return null;
    let date = moment(datetime);
    let formattedDate = date.format('D/M/yyyy - h:mm a');

    return formattedDate;
}

const EventList = ({url}) => {
    //Fetch data from backend server
    const {data, isPending, error} = useFetch(url); 
    
    // //Fetch data from temporary json server
    // const {data, isPending, error} = useFetch('http://localhost:8000/event');
    // npx json-server --watch data/db.json --port 8000

    console.log(data);
    
    if (isPending) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="event-list">
                {data && data.event.map((event) => (
                    <div className="event-card" key={event.id}>
                        <img alt="event-image"/>
                        <div className="info">
                            <div className="title">
                                <h2>{event.title}</h2>
                                <h3>{event.capacity}</h3>
                            </div>
                            <p>Location: {event.location}</p>
                            {event.startTime && <p>From: {formatDate(event.startTime)}</p>}
                            {event.endTime && <p>To: {formatDate(event.endTime)}</p>}
                            <div className="buttons">
                                <button>Join Now</button>
                                <button>View More</button>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
}
 
export default EventList;