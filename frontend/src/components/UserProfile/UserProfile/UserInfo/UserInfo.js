import React from "react";
import './UserInfo.scss'
import { useState } from "react";

function UserInfo() {
    const [editable, setEditable] = useState(false);

    return (
        <div className="user-info">
            <div className="user-info-title">
                <h2>Information</h2>
                <div className="info-buttons">
                        {
                            !editable && <button onClick={(e) => {
                                e.preventDefault();
                                setEditable(true);
                            }} className="info-edit-button">Edit</button>
                        }

                        {
                            editable && 
                                <>
                                    <button onClick={(e) => {
                                        e.preventDefault();
                                            setEditable(false);
                                        }} className="info-save-button">Save</button>
                                        
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            setEditable(false);
                                    }} className="info-cancel-button">Cancel</button>
                                </>
                        }
                    </div>
            </div>
        </div>
    )
}

export default UserInfo



