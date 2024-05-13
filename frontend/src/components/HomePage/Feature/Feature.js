import React from "react";

import meetingIco from 'components/assets/images/meeting.png'
import managementIco from 'components/assets/images/management.png'
import locationIco from 'components/assets/images/location.png'
import communityIco from 'components/assets/images/community.png'

import './Feature.scss'

function Feature() {
    return (
        <ul className="feature-item">
            <li>
                <div><img src={meetingIco} alt="meeting" className="meeting-icon"></img></div>
                <strong>Offline Meeting Creation</strong> With Finder, users can easily create offline meetings, specifying essential details such as location, meeting name, and participants. Whether it's a team huddle, a brainstorming session, or a casual get-together, Finder streamlines the process of setting up face-to-face interactions.
            </li>
            <li>
                <div><img src={managementIco} alt="meeting" className="meeting-icon"></img></div>
                <strong>Flexible Meeting Management</strong> Finder offers unparalleled flexibility in managing meetings. Participants have the autonomy to initiate new meetings or join existing ones, providing convenience and adaptability to their schedules. Whether you're organizing a last-minute meetup or planning ahead, Finder caters to your needs.
            </li>

            <li>
                <div><img src={locationIco} alt="meeting" className="meeting-icon"></img></div>
                <strong>Location-Based Functionality</strong> Leveraging location-based features, Finder ensures that meetings are conveniently accessible to all participants. By integrating precise location data, users can effortlessly navigate to the designated meeting spot, eliminating the hassle of coordination and ensuring timely arrivals.
            </li>
            <li>
                <div><img src={communityIco} alt="meeting" className="meeting-icon"></img></div>
                <strong>Community Integration</strong> Finder fosters a vibrant community of users, facilitating seamless collaboration and networking opportunities. Through the Finder community, users can discover and engage with like-minded individuals, expanding their social and professional circles while unlocking new possibilities for meaningful interactions.
            </li>
        </ul>
    )
}

export default Feature