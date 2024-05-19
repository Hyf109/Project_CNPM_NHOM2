import React from "react";
import './UserInfo.scss'
import '../UserProfile.scss'
import { useState } from "react";

function UserInfo() {
    const [editable, setEditable] = useState(false);

    return (
        <div className="user-info">
            <div className="user-info-title">
                <h2>Information</h2>
                <div className="buttons-row">
                        {
                            !editable && <button onClick={(e) => {
                                e.preventDefault();
                                setEditable(true);
                            }} className="info-button">Edit</button>
                        }

                        {
                            editable && 
                                <>
                                    <button onClick={(e) => {
                                        e.preventDefault();
                                            setEditable(false);
                                        }} className="info-button">Save</button>
                                        
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            setEditable(false);
                                    }} className="info-button">Cancel</button>
                                </>
                        }
                    </div>
            </div>
        </div>
    )
}

export default UserInfo



