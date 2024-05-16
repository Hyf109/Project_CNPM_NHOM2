import React from "react";
import './HostForm.scss';
import { Button } from "react-scroll";

function HostForm() {
    return (
        <div class="body">
            <h1 class="header-text">
                    Host event
            </h1>
            <div class="host-container">
                <div class="host-form form-1"> 
                    <input type="text" class="text-box name-input" placeholder="Event name"></input>
                    <div class="date-select">
                        <input type="text" class="text-box date-input" placeholder="Date select"></input>
                    </div>
                    <input type="text" class="text-box time-input" placeholder="Event time"></input>
                </div>
                <div class="host-form form-2">   
                    <Button class="button pick-button">Pick from map</Button>
                    <input type="text" class="text-box place-input" placeholder="Place"></input>
                    <input type="text" class="text-box PartNum-input" placeholder="Participants Number"></input>
                </div> 
                <div class="host-form form-3">
                    <textarea type="text" class="text-box des-input" placeholder="Description"></textarea>  
                </div>
                <div class="host-form form-4">
                    <Button class="button tags-button">Add tags</Button>
                    <input type="text" class="text-box tags-input" placeholder="Tags List"></input>
                </div>
                <div class="host-form form-5">
                    <Button class="button host-button">Host</Button>   
                </div>      
            </div>
        </div>      
    )
}

export default HostForm