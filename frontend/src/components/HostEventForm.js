import '../css/HostEventForm.css';

const HostEventForm = () => {
    return (  
        <div className="host-event-form">
            <form>
                <label><h2 className="form-name">Create event</h2></label>

                <span className="event-name">
                    <div className="event-image">
                        
                    </div>
                    <input type="text" name="eventName" placeholder="Event Name"/>
                </span>
                

                <span className="event-time">
                    <div className="start-time">
                        <h3>Start time</h3>
                        <input type="datetime-local" name="startTime"></input>
                    </div>

                    <div className="end-time">
                        <h3>End time</h3>
                        <input type="datetime-local" name="endTime"></input>
                    </div>
                </span>

                <div className="location">
                    <h3>Location</h3>
                    <input type="text" name="location" placeholder="Location"/>
                </div>
                
                <div className="capacity">
                    <h3>Maximum number of participants</h3>
                    <input type="number" name="capacity" min="0"/>
                </div>

                <div className="description">
                    <h3>Event description</h3>
                    <textarea className="event-description" name="Description"/>
                </div>
                <div className="create-button">
                    <input id="create-button" type="submit" value="Create Event" />
                </div>
            </form>
        </div>
    );
}
 
export default HostEventForm
