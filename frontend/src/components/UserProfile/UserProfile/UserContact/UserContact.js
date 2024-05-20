import React from "react";
import './UserContact.scss'
import '../UserProfile.scss'
import { useAuth } from "hooks/useAuth";
import { useState } from "react";
import useFetch from "hooks/useFetch";

function UserContact({ viewUserId }) {
    const [editable, setEditable] = useState(false);

    const { user } = useAuth();
    const {data, isPending, error} = useFetch(`/finder/api/user/${viewUserId || user.user}`);

    if (isPending) {
        return <div>Loading...</div>
    }

    // Check if the logged-in user is viewing their own profile
    const isOwnProfile = user.user === viewUserId;

    return (
        <div className="user-link">
            <div className="contact-links-title">
                <h2>Contact links</h2>
                    <div className="buttons-row">
                        {
                            isOwnProfile && !editable && <button onClick={(e) => {
                                e.preventDefault();
                                setEditable(true);
                            }} className="contact-button">Edit</button>
                        }

                        {
                            isOwnProfile && editable && 
                                <>
                                    <button onClick={(e) => {
                                        e.preventDefault();
                                            setEditable(false);
                                        }} className="contact-button">Save</button>
                                        
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            setEditable(false);
                                    }} className="contact-button">Cancel</button>
                                </>
                        }
                    </div>
                    
            </div>
            
            <div className="contact-list">
                {/* Check if data and data.profile exist before trying to map over data.profile.contact_detail.contacts */}
                {data && data.profile && data.profile.contact_detail.contacts.map((contact) => (
                    <div className="contact-line" key={contact._id}>
                        <div className="contact-line-name">
                            <h3>{contact.contact_method}</h3>
                        </div>
                        <a href={contact.detail}>{contact.detail}</a>
                    </div>
                ))}
            </div>

            {error && <div>{error}</div>}
            

        </div>
    )
}

export default UserContact
