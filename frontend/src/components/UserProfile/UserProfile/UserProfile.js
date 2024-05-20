import React from "react";
import './UserProfile.scss'
import'App.scss'
import Description from "./Description/Description";
import UserContact from "./UserContact/UserContact";
import UserInfo from "./UserInfo/UserInfo";
import AboutMe from "./AboutMe/AboutMe";
import EventList from "components/EventList/EventList";
import { useAuth } from "context/AuthProvider";
import { useState, useEffect} from "react";

function UserProfile() {
    const { user } = useAuth();
    const [eventListState, setEventListState] = useState(user ? { host_id: user.user } : null);

    // Update eventListState once user is loaded
    useEffect(() => {
        if (user) {
            setEventListState({ host_id: user.user });
        }
    }, [user]);


    if (!user) {
        return <div>Loading...</div>
    }


    return (
        <>
            <div className="user-profile-content">
                <div className="profile-container">
                    <Description/>

                    <div className="detailed-information-container">
                        <div className="left-info-column">
                            <AboutMe/>
                            <div className="profile-hosted-event-list-container">
                                <h2>Past events</h2>
                                <EventList queryParams={{host_id: user.user, status: 'ended' }}/>
                            </div>
                        </div>
                        <div className="right-info-column">
                            <UserInfo/>
                            <UserContact/>
                        </div>

                    </div>
                </div>


            </div>
        </>

    )
}

export default UserProfile