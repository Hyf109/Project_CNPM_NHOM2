import React from "react";
import './UserProfile.scss'
import'App.scss'
import Description from "./Description/Description";
import UserContact from "./UserContact/UserContact";
import UserInfo from "./UserInfo/UserInfo";
import AboutMe from "./AboutMe/AboutMe";
import EventList from "components/EventList/EventList";


function UserProfile() {
    return (
        <>
            <div className="user-profile-content">
                <div className="profile-container">
                    <Description/>

                    <div className="detailed-information-container">
                        <div className="left-info-column">
                            <AboutMe/>
                            <div className="profile-hosted-event-list-container">
                                <h2>User's upcoming events</h2>
                                <EventList/>
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