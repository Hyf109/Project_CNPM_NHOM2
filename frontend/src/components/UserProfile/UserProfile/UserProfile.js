import React from "react";
import './UserProfile.scss'
import'App.scss'
import Appbar from "components/HomePage/Menu/Appbar";
import Description from "./Description/Description";
import UserContact from "./UserContact/UserContact";
import UserInfo from "./UserInfo/UserInfo";
import UserEvents from "./Events/UserEvents";

function UserProfile() {
    return (
        <div>
            <Appbar/>

            <div class="profile">
                <div class="left-profile">
                    <Description/>

                    <b><li>For More Infomation</li></b>

                    <UserContact />
                </div>

                <div class="right-profile">
                    <UserInfo />

                    <b><li class="ev">Events</li></b>

                    <UserEvents />

                    <b><li class="ev">Achievements</li></b>

                    <UserEvents />
                </div>
            </div>
        </div>
    )
}

export default UserProfile