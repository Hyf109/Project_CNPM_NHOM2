import React from "react";
import Appbar from "components/HomePage/Menu/Appbar";
import './HomePage.scss'
import './App.scss'
import Footer from "components/HomePage/Footer/Footer";
import catAvt from 'components/assets/images/cat.png'

function HomePage() {
    return (
        <>
            <Appbar />
            <div className="home-page">
                <div className="home-page-background"></div>
                <div className="get-start-items">
                    <div className="get-start-welcome">
                        <h1>
                            Welcome to Finder!
                        </h1>
                    </div>
                    <div className="get-start-button">
                        <button>
                            Create account
                        </button>
                    </div>
                </div>

                <div className="about-us">
                    <div className="about-us-text">
                    <h1>
                        About Us
                    </h1>
                    <p>
                        Welcome to Finder, the innovative solution for organizing offline meetings with ease and efficiency. Finder empowers users to orchestrate gatherings effortlessly, ensuring seamless coordination and collaboration among participants.
                    </p>
                    <h2>
                        Features
                    </h2>
                    <ul className="feature-item">
                        <li>  
                            <i class="fa-regular fa-handshake"></i>
                            <strong>Offline Meeting Creation</strong> With Finder, users can easily create offline meetings, specifying essential details such as location, meeting name, and participants. Whether it's a team huddle, a brainstorming session, or a casual get-together, Finder streamlines the process of setting up face-to-face interactions.
                        </li>
                        <li>
                        <i class="fa-regular fa-handshake"></i>
                            <strong>Flexible Meeting Management</strong> Finder offers unparalleled flexibility in managing meetings. Participants have the autonomy to initiate new meetings or join existing ones, providing convenience and adaptability to their schedules. Whether you're organizing a last-minute meetup or planning ahead, Finder caters to your needs.
                        </li>
                        <li>
                        <i class="fa-regular fa-handshake"></i>
                            <strong>Location-Based Functionality</strong> Leveraging location-based features, Finder ensures that meetings are conveniently accessible to all participants. By integrating precise location data, users can effortlessly navigate to the designated meeting spot, eliminating the hassle of coordination and ensuring timely arrivals.
                        </li>
                        <li>
                        <i class="fa-regular fa-handshake"></i>
                            <strong>Community Integration</strong> Finder fosters a vibrant community of users, facilitating seamless collaboration and networking opportunities. Through the Finder community, users can discover and engage with like-minded individuals, expanding their social and professional circles while unlocking new possibilities for meaningful interactions.  
                        </li>
                    </ul>
                    </div>
                    <div className="about-us-pic">
                        <img src={catAvt}></img>
                    </div>
                </div>

                <div className="contact-us">
                    <h1>
                        Contact Us
                    </h1>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default HomePage