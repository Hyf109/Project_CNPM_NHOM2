import useFetch from "../hooks/useFetch";
import '../css/EventList.css';

const EventList = () => {
    const {data, isPending, error} = useFetch('/event');

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
                            <p>From: {event.startDate + " " + event.startTime}</p>
                            <p>To:   {event.endDate + " " +event.endTime}</p>
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