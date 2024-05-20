import React from "react";
import './HostForm.scss';

import { useState } from "react";

function HostForm() {
    const defaultFormState = {
        title: '',
        startTime: '',
        endTime: '',
        location: '',
        description: '',
        capacity: '',
        error: null
    }
    const [formState, setFormState] = useState(defaultFormState);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const handleStateChange = (e) => {
        const {name, value} = e.target;
        setFormState(prevState => ({...prevState, [name]: value})); //Spread fields of previous to stay the same
    }
    
    const handleSubmit = async (e) => {
        // e.preventDefault();
        
        setFormState({error: null});

        const event = formState;

        setIsLoading(true);
        
        const response = await fetch('/finder/api/event/create', {
            method: 'POST',
            body: JSON.stringify(event),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if (!response.ok) {
            setFormState({error: json.error});
        }
        
        if (response.ok) {
            setFormState(defaultFormState);
            console.log('New event added', json );
            window.location.reload();
        }

        setIsLoading(false);

        // console.log(error);


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
                        <input name="capacity" value={formState.capacity} onChange={handleStateChange} type="number" min="1" className="text-box form-event-capacity" placeholder="0"/>
                    </span>
                </div> 

                <div className="host-form-component-container">
                    <span>
                        <h3>Event desciption</h3>
                        <textarea name="description" value={formState.description} onChange={handleStateChange} type="text" className="text-box form-event-description" placeholder="Description"></textarea>  
                    </span>
                </div>

                <div className="host-form-component-container form-event-button">
                    {isSubmitting ? (
                        <>
                        <button disabled={isLoading} className="host-form-button confirm-submit-button" onClick={handleSubmit}>Confirm</button>
                        <button className="host-form-button cancel-submit-button" onClick={(e) => {
                            e.preventDefault();
                            setIsSubmitting(false)
                        }}>Cancel</button>
                        </>
                    ) : (
                        <button className="host-form-button submit-event-form-button" onClick={(e) => {
                            e.preventDefault();
                            setIsSubmitting(true)
                        }}>Create</button>
                    )}
                </div>
                {formState.error && <div>{formState.error}</div>}
            </form>   
            )}

export default HostForm