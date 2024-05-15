import React from "react";
import './UserInfo.scss'

function UserInfo() {
    return (
        <div class="user-profile">
            <div class="input-box-profile">
                <strong>Full Name</strong>
                <input type="text" placeholder="Nguyen Van A"></input>
            </div>

            <div class="input-box-profile">
                <strong>Email</strong>
                <input type="email" placeholder="example@abc.xyz"></input>
            </div>

            <div class="input-box-profile">
                <strong>Phone</strong>
                <input type="number" placeholder="(+84) 123 456 789"></input>
            </div>

            <div class="input-box-profile">
                <strong>Date Of Birth</strong>
                <input type="date" class="datebirth" value="2000-01-01" min="1900-01-01" max="2024-12-31" />
            </div>

            <div class="input-box-profile">
                <strong>Address</strong><input type="text" placeholder="A street - B city - C country"></input>
                <i class="fa-solid fa-location-dot"></i>
                <b>Pick from Google Map!</b>
            </div>

            <div class="submit-btn">
                <button type="button" class="btn">
                    Edit
                    <i class="fa-solid fa-user-pen"></i>
                </button>
                <button type="button" class="btn">
                    Save
                    <i class="fa-solid fa-check"></i>
                </button>
            </div>
        </div>
    )
}

export default UserInfo



