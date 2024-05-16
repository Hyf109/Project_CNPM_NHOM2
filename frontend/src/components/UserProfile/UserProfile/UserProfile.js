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
        <div>
            <Appbar/>

            <div class="profile">
                <div class="left-profile">
                    <Description/>
                    <b className="user-title"><li>About me</li></b>
                    <UserIntroduction />
                    
                </div>

                <div class="right-profile">
                    <UserInfo />
                    <b className="user-title"><li>For More Infomation</li></b>
                    <UserContact />
                </div>
            </div>
        </div>
    )
}

export default UserProfile