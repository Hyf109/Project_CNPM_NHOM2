import React from "react";
import './UserInfo.scss'
import '../UserProfile.scss'
import { useState } from "react";
import { useAuth } from "context/AuthProvider";

function UserInfo({ viewUserId }) {
    const [editable, setEditable] = useState(false);

    const { user } = useAuth();

    // Check if the logged-in user is viewing their own profile
    const isOwnProfile = user.user === viewUserId;

    return (
        <div className="user-info">
            <div className="user-info-title">
                <h2>Information</h2>
                <div className="buttons-row">
                        {
                            isOwnProfile && !editable && <button onClick={(e) => {
                                e.preventDefault();
                                setEditable(true);
                            }} className="info-button">Edit</button>
                        }

                        {
                            isOwnProfile && editable && 
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
