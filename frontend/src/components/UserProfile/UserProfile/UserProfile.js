import React from "react";
import './UserProfile.scss'
import'App.scss'
import Appbar from "components/NavBar/NavBar";
import Description from "./Description/Description";
import UserContact from "./UserContact/UserContact";
import UserInfo from "./UserInfo/UserInfo";
import UserEvents from "./Events/UserEvents";
import UserIntroduction from "../UserIntroduction/UserIntroduction";

function UserProfile() {
    return (
        <div className="user-profile-content">
            <div className="profile">
                <div className="left-profile">
                    <Description/>
                    <b className="user-title"><li>About me</li></b>
                    <UserIntroduction />
                    
                </div>

                <div className="right-profile">
                    <UserInfo />
                    <b className="user-title"><li>For More Infomation</li></b>
                    <UserContact />
                </div>
            </div>
        </div>
    )
}

export default UserProfile