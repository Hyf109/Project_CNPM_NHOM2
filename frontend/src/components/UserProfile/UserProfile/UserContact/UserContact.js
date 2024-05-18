import React from "react";
import './UserContact.scss'

function UserContact() {
    return (
        <div className="user-link">
            <div className="contact-links-title">
                <h2>Contact links</h2>
            </div>
            
            <div className="contact-line">
                <div className="contact-line-name">
                    <h3>Git hub</h3>
                    <button className="edit-contact-line-button">edit</button>
                </div>
                <a href="https://www.github.com/Raphael9143">
                    <label>Raphael9143</label>
                </a>
            </div>

            <div className="contact-line">
                <div className="contact-line-name">
                    <h3>Git hub</h3>
                    <button className="edit-contact-line-button">edit</button>
                </div>
                <a href="https://www.github.com/Raphael9143">
                    <label>Raphael9143</label>
                </a>
            </div>

            
            <div className="contact-line">
                <div className="contact-line-name">
                    <h3>Git hub</h3>
                    <button className="edit-contact-line-button">edit</button>
                </div>
                <a href="https://www.github.com/Raphael9143">
                    <label>Raphael9143</label>
                </a>
            </div>



        </div>
    )
}

export default UserContact