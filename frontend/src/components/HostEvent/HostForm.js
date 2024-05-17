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
                    <div className="date-select">
                        <input type="datetime-local" className="text-box date-input" placeholder="Start time"></input>
                        <input type="datetime-local" className="text-box date-input" placeholder="End time"></input>
                    </div>
                </div>
                <div className="host-form form-2">   
                    <Button className="button pick-button">Pick from map</Button>
                    <input type="text" className="text-box place-input" placeholder="Place"></input>
                    <input type="text" className="text-box PartNum-input" placeholder="Participants Number"></input>
                </div> 
                <div className="host-form form-3">
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