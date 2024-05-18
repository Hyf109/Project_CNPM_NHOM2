import React from "react";
import './HostForm.scss';
import { Button } from "react-scroll";

import { useState } from "react";

function HostForm() {
    const [title, setTitle] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [capacity, setCapacity] = useState('');
    const [error, setError] = useState(null);

    const [formState, setFormState] = useState({
        title: '',
        startTime: '',
        endTime: '',
        location: '',
        description: '',
        capacity: '',
        error: null
    });

    const handleStateChange = (e) => {
        const {name, value} = e.target;
        setFormState(prevState => ({...prevState, [name]: value})); //Spread fields of previous to stay the same
    }

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
            <form className="host-event-form">

                <div className="host-form-component-container"> 
                    <span>
                        <h3>Event name</h3>
                        <input name="title" value={formState.title} onChange={handleStateChange} type="text" className="text-box form-event-name" placeholder="Event name"/>
                    </span>
                </div>

                <div className="host-form-component-container date-select">
                    <span>
                        <h3>Start time</h3>
                        <input name="startTime" value={formState.startTime} onChange={handleStateChange} type="datetime-local" className="text-box form-event-time" placeholder="Start time"/>
                    </span>
                    <span>
                        <h3>End time</h3>
                        <input name="endTime" value={formState.endTime} onChange={handleStateChange} type="datetime-local" className="text-box form-event-time" placeholder="End time"/>
                    </span>
                </div>

                <div className="host-form-component-container">   
                    <span>
                        <h3>Location</h3>
                        <input name="location" value={formState.location} onChange={handleStateChange} type="text" className="text-box form-event-location" placeholder="e.g Hanoi, Vietnam"/>
                    </span>

                    <span>
                        <h3>Member limit</h3>
                        <input name="capacity" value={formState.capacity} onChange={handleStateChange} type="text" className="text-box form-event-capacity" placeholder="0"/>
                    </span>
                </div> 

                <div className="host-form-component-container">
                    <span>
                        <h3>Event desciption</h3>
                        <textarea name="description" value={formState.description} onChange={handleStateChange} type="text" className="text-box form-event-description" placeholder="Description"></textarea>  
                    </span>
                </div>

                <div className="host-form-component-container form-5">
                    <button className="button submit-event-form-button">Create</button>   
                </div>
            </form>   
    )
}

export default HostForm