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
import { useParams } from "react-router-dom";

function UserProfile() {
    const { user } = useAuth();
    const { userId: viewUserId } = useParams();
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

    // Check if the logged-in user is viewing their own profile
    const isOwnProfile = user.user === viewUserId;

    return (
        <>
            <div className="user-profile-content">
                <div className="profile-container">
                    <Description viewUserId={viewUserId} isEditable={isOwnProfile} />

                    <div className="detailed-information-container">
                        <div className="left-info-column">
                            <AboutMe viewUserId={viewUserId} isEditable={isOwnProfile} />
                            {/* <div className="profile-hosted-event-list-container">
                                <h2>Past events</h2>
                                <EventList queryParams={{host_id: viewUserId, status: 'ended' }}/>
                            </div> */}
                        </div>
                        <div className="right-info-column">
                            {/* <UserInfo viewUserId={viewUserId} isEditable={isOwnProfile} /> */}
                            <UserContact viewUserId={viewUserId} isEditable={isOwnProfile} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile
