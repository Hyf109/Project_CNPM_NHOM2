import React from "react";
import './UserContact.scss'
import '../UserProfile.scss'
import { useAuth } from "hooks/useAuth";
import { useState } from "react";
import useFetch from "hooks/useFetch";

function UserContact() {
    const [editable, setEditable] = useState(false);

    const {data, isPending, error} = useFetch('/finder/api/user/');

    if (isPending) {
        <div>Is Loading...</div>
    }
    
    // console.log(data); 

    return (
        <div className="user-link">
            <div className="contact-links-title">
                <h2>Contact links</h2>
                    <div className="buttons-row">
                        {
                            !editable && <button onClick={(e) => {
                                e.preventDefault();
                                setEditable(true);
                            }} className="contact-button">Edit</button>
                        }

                        {
                            editable && 
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
                {data && data.profile.contact_detail.contacts.map((contact) => (
                    <div className="contact-line" key={contact._id}>
                        <div className="contact-line-name">
                            <h3>{contact.contact_method}</h3>
                            {/* <button className="edit-contact-line-button">edit</button> */}
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