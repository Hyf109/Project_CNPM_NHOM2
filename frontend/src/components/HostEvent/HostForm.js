import React from "react";
import './HostForm.scss';
import { Button } from "react-scroll";

function HostForm() {
    return (
        <div className="host-form-body">
            <h1 className="header-text">
                    Host event
            </h1>
            <div className="host-container">
                <div className="host-form form-1"> 
                    <input type="text" className="text-box name-input" placeholder="Event name"></input>
                </div>
                <div className="host-form-2">
                    <div className="date-select">
                        <div className="start-time">
                            <h1 className="form-2-name-tag">Start time</h1>
                            <input type="datetime-local" className="text-box date-input" placeholder="Start time"></input>
                        </div>
                        <div className="end-time">
                            <h1 className="form-2-name-tag">End time</h1>
                            <input type="datetime-local" className="text-box date-input" placeholder="End time"></input>
                        </div>
                        
                    </div>
                </div>
                <div className="host-form form-3">   
                    <input type="text" className="text-box place-input" placeholder="Place"></input>
                    <input type="text" className="text-box PartNum-input" placeholder="Participants Number"></input>
                </div> 
                <div className="host-form form-4">
                    <textarea type="text" className="text-box des-input" placeholder="Description"></textarea>  
                </div>
                <div className="host-form form-5">
                    <Button className="button host-button">Host</Button>   
                </div>      
            </div>
        </div>      
    )
}

export default HostForm