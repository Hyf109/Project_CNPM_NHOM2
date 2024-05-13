import React from "react";
import './UserProfile.scss'
import'App.scss'
import Appbar from "components/HomePage/Menu/Appbar";
import Description from "./Description/Description";

function UserProfile() {
    return (
        <div>
            <Appbar/>

            <div class="profile">
                <div class="left-profile">
                    <Description/>

                    <b><li>For More Infomation</li></b>

                    <div class="user-link">
                        <a href="https://www.github.com/Raphael9143">
                            <button class="fa-brands fa-github"><b>Github</b></button>
                            <label>/Raphael9143</label>
                        </a>

                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <button class="fa-brands fa-x-twitter"><b>Twitter</b></button>
                            <label>Just Click!</label>
                        </a>

                        <a href="https://www.instagram.com/dxgdium">
                            <button class="fa-brands fa-instagram"><b>Instagram</b></button>
                            <label>/dxgdium</label>
                        </a>

                        <a href="https://www.facebook.com/iamdxgdium">
                            <button class="fa-brands fa-facebook"><b>Facebook</b></button>
                            <label>/iamdxgdium</label>
                        </a>

                        <a href="mailto:s3jack3s@gmail.com">
                            <button class="fa-brands fa-at"><b>Email</b></button>
                            <label>s3jack3s@gmail.com</label>
                        </a>
                    </div>
                </div>

                <div class="right-profile">
                    <div class="user-profile">
                        <div class="input-box">
                            <strong>Full Name</strong>
                            <input type="text" placeholder="Nguyen Van A"></input>
                        </div>

                        <div class="input-box">
                            <strong>Email</strong>
                            <input type="email" placeholder="example@abc.xyz"></input>
                        </div>

                        <div class="input-box">
                            <strong>Phone</strong>
                            <input type="number" placeholder="(+84) 123 456 789"></input>
                        </div>

                        <div class="input-box">
                            <strong>Date Of Birth</strong>
                            <input type="date" class="datebirth" value="2000-01-01" min="1900-01-01" max="2024-12-31" />
                        </div>

                        <div class="input-box">
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

                    <b><li class="ev">Events</li></b>

                    <div class="events">
                        <div class="manager">
                            <b>Events management</b>
                            <li>Event a</li>
                            <li>Event b</li>
                            <li>Event c</li>
                            <li>Event d</li>
                            <li>Event e</li>
                        </div>

                        <div class="participant">
                            <b>Events participant</b>
                            <li>Event a</li>
                            <li>Event b</li>
                            <li>Event c</li>
                            <li>Event d</li>
                            <li>Event e</li>
                        </div>
                    </div>

                    <b><li class="ev">Achievements</li></b>

                    <div class="achievement">
                        <strong>Achievement</strong>
                        <li>Achievement 1</li>
                        <li>Achievement 2</li>
                        <li>Achievement 3</li>
                        <li>Achievement 4</li>
                        <li>Achievement 5</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile