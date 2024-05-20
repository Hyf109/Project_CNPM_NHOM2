import React, { useState } from "react"
import './EventInfo.scss'

import moment from "moment";
import MemberList from "components/MemberList/MemberList";
import { useAuth } from "context/AuthProvider";

const formatDate = (datetime) => {
    if (!datetime) return null;
    let date = moment(datetime);
    let formattedDate = date.format('D/M/yyyy - h:mm a');

    return formattedDate;
}

function EventInfo({ event, onClose }) {

    //Data code
    const [joinError, setJoinError] = useState(null);
    const [isJoining, setIsJoining] = useState(false);

    const {user} = useAuth();

    if (!user) {
        return <div>Loading...</div>
    }

    const cancelEvent = async (event_id) => {
        try {
            setIsJoining(true);
            
            const response = await fetch(`finder/api/event/delete/${event_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    

            const json = await response.json();

            //Handle if cancel success
            if (response.ok) {
                console.log(json);
            }

            if (!response.ok) {
                setJoinError(json.mssg);
            }

            setIsJoining(false);
        } catch (error) {
            console.log(error);
            setIsJoining(false);
        }
    }

    const leaveEvent = async (event_id) => {
        try {
            setIsJoining(true);
            
            const response = await fetch(`finder/api/event/leave/${event_id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    

            const json = await response.json();

            //Handle if leave success
            if (response.ok) {
                console.log(json);
            }

            if (!response.ok) {
                setJoinError(json.mssg);
            }

            setIsJoining(false);
        } catch (error) {
            console.log(error);
            setIsJoining(false);
        }
    }

    const joinEvent = async (event_id) => {
        try {
            setIsJoining(true);
            
            const response = await fetch(`finder/api/event/join/${event_id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    

            const json = await response.json();

            //Handle if join success
            if (response.ok) {
                console.log(json);
            }

            if (!response.ok) {
                setJoinError(json.mssg);
            }

            setIsJoining(false);
        } catch (error) {
            console.log(error);
            setIsJoining(false);
        }
    }

    const isUserJoined = event.member_list.some(member => member.member_id === user.user);
    const isUserHost = event.host_id === user.user;

    return (
        <div className="event-info-container">
            <div className="event-info-window">
                <div className="event-info">
                    <h1 className="event-info-title">
                        {event.title}
                    </h1>
                    <div className="event-time-info">
                        <span>
                            <div>Start time:&nbsp; &nbsp;</div>
                            <div>End time: &nbsp; &nbsp; </div>
                        </span>
                        <span>
                            <div> {formatDate(event.startTime)}</div>
                            <div> {formatDate(event.endTime)}</div>
                        </span>
                    </div>
                    <span className="event-location-info">
                        Location: {event.location}
                    </span>
                    <span className="event-description-info">
                        
                        <h3><br></br>About this event:</h3>
                            <div className="event-description-info">
                            {event.description}
                            </div>
                    </span>
                </div>

                <div className="event-extra-info">
                    <div className="event-member-list">
                        <MemberList event_id={event._id}></MemberList>
                    </div>
                </div>
            </div>

            <div className="event-button-row">
                <button className="close-button" onClick={onClose}>Close</button>
                {joinError && <div>{joinError}</div>}
                
                {
                    event.status === 'upcoming' && !isUserJoined && <button disabled={isJoining} onClick={() => {joinEvent(event._id); window.location.reload();}} className="close-button">Join</button>
                }
                
                {
                    event.status === 'upcoming' && isUserJoined && isUserHost && <button disabled={isJoining} onClick={() => {cancelEvent(event._id); window.location.reload()}} className="close-button">Cancel</button>
                }

                {
                    event.status === 'upcoming' && isUserJoined && !isUserHost && <button disabled={isJoining} onClick={() => {leaveEvent(event._id); window.location.reload();}} className="close-button">Leave</button>
                }
            </div>
        </div>
    )
}

export default EventInfo
