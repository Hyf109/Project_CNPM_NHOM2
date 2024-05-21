import React, { useState } from "react";
import './UserContact.scss'
import '../UserProfile.scss'
import { useAuth } from "hooks/useAuth";
import useFetch from "hooks/useFetch";
import { useEffect } from "react";

function UserContact({ viewUserId }) {
    const [editable, setEditable] = useState(false);
    const [contacts, setContacts] = useState([]);

    const { user } = useAuth();
    const {data, isPending, error} = useFetch(`/finder/api/user/${viewUserId || user.user}`);
    const isOwnProfile = user.user === viewUserId;

    useEffect(() => {
        if (data && data.profile) {
            setContacts(data.profile.contact_detail.contacts);
        }
    }, [data]);

    const handleAddContact = () => {
        setContacts([...contacts, { contact_method: '', detail: '' }]);
    };

    const handleDeleteContact = async (index) => {
        const contact = contacts[index];
        const response = await fetch('/finder/api/user', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contact_detail: {
                    op: 'remove',
                    contact: {
                        _id: contact._id
                    }
                }
            })
        });
    
        if (response.ok) {
            setContacts(contacts.filter((_, i) => i !== index));
        } else {
            console.error('Failed to delete contact');
        }
    };
    
    const handleContactChange = (index, field, value) => {
        const newContacts = [...contacts];
        newContacts[index][field] = value;
        setContacts(newContacts);
    };

    const handleSave = async () => {
        for (const contact of contacts) {
            const response = await fetch('/finder/api/user', {
                method: 'PATCH',  
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contact_detail: {
                        op: contact._id ? 'patch' : 'add',
                        contact: contact
                    }
                })
            });
    
            if (!response.ok) {
                console.error('Failed to save contact');
            }
        }
    
        setEditable(false);
    };
    

    const handleCancel = () => {
        // Reset the contacts to the original data
        if (data && data.profile) {
            setContacts(data.profile.contact_detail.contacts);
        }
        setEditable(false);
    };

    return (
        <div className="user-link">
            <div className="contact-links-title">
                <h2>Contact links</h2>
                <div className="buttons-row">
                    {isOwnProfile && !editable && <button onClick={() => setEditable(true)} className="contact-button">Edit</button>}
                    {isOwnProfile && editable && (
                        <>
                            <button onClick={handleSave} className="contact-button">Save</button>
                            <button onClick={handleCancel} className="contact-button">Cancel</button>
                            <button onClick={handleAddContact} className="contact-button">Add</button>
                        </>
                    )}
                </div>
            </div>
            <div className="contact-list">
                {contacts.map((contact, index) => (
                    <div className="contact-line" key={index}>
                        <div className="contact-line-name">
                            {editable ? (
                                <input value={contact.contact_method} onChange={(e) => handleContactChange(index, 'contact_method', e.target.value)} placeholder="Contact Method"/>
                            ) : (
                                <h3>{contact.contact_method}</h3>
                            )}
                        </div>
                        {editable ? (
                            <input value={contact.detail} onChange={(e) => handleContactChange(index, 'detail', e.target.value)} placeholder="Link"/>
                        ) : (
                            <a>{contact.detail}</a>
                        )}
                        {editable && <button onClick={() => handleDeleteContact(index)} className="edit-button">Delete</button>}
                    </div>
                ))}
            </div>
            {error && <div>{error}</div>}
        </div>
    );
}

export default UserContact;
