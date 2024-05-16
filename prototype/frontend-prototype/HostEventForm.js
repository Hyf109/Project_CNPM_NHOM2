import '../css/HostEventForm.css';
import { useState } from 'react';

const HostEventForm = () => {
    const [title, setTitle] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [capacity, setCapacity] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const event = {title, startTime, endTime, location, description, capacity};

        const response = await fetch('/finder/api/event', {
            method: 'POST',
            body: JSON.stringify(event),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }
        
        if (response.ok) {
            setTitle('');
            setCapacity('');
            setEndTime('');
            setStartTime('');
            setLocation('');
            setDescription('');
            setError(null);
            console.log('New event added', json );
        }
    }

    return (  
        <div className="host-event-form">
            <form className="create">
                <label><h2 className="form-name">Create event</h2></label>

                <span className="event-name">
                    <div className="event-image">
                        
                    </div>
                    <input type="text" name="eventName" placeholder="Event Name" onChange={(e) => {setTitle(e.target.value)}} value={title}/>
                </span>
                

                <span className="event-time">
                    <div className="start-time">
                        <h3>Start time</h3>
                        <input type="datetime-local" name="startTime" onChange={(e) => {setStartTime(e.target.value)}} value={startTime}/>
                    </div>

                    <div className="end-time">
                        <h3>End time</h3>
                        <input type="datetime-local" name="endTime" onChange={(e) => {setEndTime(e.target.value)}} value={endTime}/>
                    </div>
                </span>

                <div className="location">
                    <h3>Location</h3>
                    <input type="text" name="location" placeholder="Location" onChange={(e) => {setLocation(e.target.value)}} value={location}/>
                </div>
                
                <div className="capacity">
                    <h3>Maximum number of participants</h3>
                    <input type="number" name="capacity" min="0" onChange={(e) => {setCapacity(e.target.value)}} value={capacity}/>
                </div>

                <div className="description">
                    <h3>Event description</h3>
                    <textarea className="event-description" name="Description" onChange={(e) => {setDescription(e.target.value)}} value={description}/>
                </div>

                <button onClick={handleSubmit} className="create-button">
                    Create event
                </button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
}
 
export default HostEventForm
