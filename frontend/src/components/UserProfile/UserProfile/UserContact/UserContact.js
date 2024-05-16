import React from "react";
import './UserContact.scss'

function UserContact() {
    return (
        <div className="user-link">
            <a href="https://www.github.com/Raphael9143">
                <button className="fa-brands fa-github"><b>Github</b></button>
                <label>Raphael9143</label>
            </a>

            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <button className="fa-brands fa-x-twitter"><b>Twitter</b></button>
                <label>Just Click!</label>
            </a>

            <a href="https://www.instagram.com/dxgdium">
                <button className="fa-brands fa-instagram"><b>Instagram</b></button>
                <label>dxgdium</label>
            </a>

            <a href="https://www.facebook.com/iamdxgdium">
                <button className="fa-brands fa-facebook"><b>Facebook</b></button>
                <label>iamdxgdium</label>
            </a>

            <a href="mailto:s3jack3s@gmail.com">
                <button className="fa-brands fa-at"><b>Email</b></button>
                <label>s3jack3s@gmail.com</label>
            </a>
        </div>
    )
}

export default UserContact