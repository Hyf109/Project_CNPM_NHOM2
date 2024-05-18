import React from "react";
import './UserContact.scss'
import { useAuth } from "hooks/useAuth";
import { useState } from "react";
import useFetch from "hooks/useFetch";

function UserContact() {
    const [editable, setEditable] = useState(false);

    const {data, isPending, error} = useFetch('/finder/api/user/');
    console.log(data); 

    return (
        <div className="user-link">
            <div className="contact-links-title">
                <h2>Contact links</h2>
                    <div className="contact-buttons">
                        {
                            !editable && <button onClick={(e) => {
                                e.preventDefault();
                                setEditable(true);
                            }} className="contact-link-edit-button">Edit</button>
                        }

                        {
                            editable && 
                                <>
                                    <button onClick={(e) => {
                                        e.preventDefault();
                                            setEditable(false);
                                        }} className="contact-save-button">Save</button>
                                        
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            setEditable(false);
                                    }} className="contact-cancel-button">Cancel</button>
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