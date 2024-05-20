import React, { useState, useEffect } from 'react';
import './AboutMe.scss';
import '../UserProfile.scss'

import { useProfile } from 'context/ProfileContext';
import { useAuth } from 'context/AuthProvider';

const AboutMe = () => {
    const [text, setText] = useState('');
    const [editable, setEditable] = useState(false);

    const { profile, updateUserProfile, fetchUserProfile } = useProfile();
    const { user, isLoading } = useAuth();

    useEffect(() => {
        if (user) {
            fetchUserProfile(user.user);
        }
    }, [user]);

    const handleTextareaChange = (event) => {
        setText(event.target.value);
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + 'px';
    };



    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>Please log in to see your profile.</div>;
    }

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div className="about-me-container">
            <div>{profile.description}</div>
            <div className="about-me-title">
                <h2>About me</h2>
                <div className="buttons-row">
                    {
                        !editable && <button onClick={(e) => {
                            e.preventDefault();
                            setEditable(true);
                        }} className="about-me-button">Edit</button>
                    }

                    {editable && (
                        <>
                            <button onClick={(e) => {
                                e.preventDefault();
                                setEditable(false);
                            }} className="about-me-button">Save</button>

                            <button onClick={(e) => {
                                e.preventDefault();
                                setEditable(false);
                            }} className="about-me-button">Cancel</button>
                        </>
                    )}
                </div>
            </div>
            
            <textarea
                className={`about-me-text-area ${editable ? 'editable' : 'non-editable'}`}
                value={text}
                onChange={handleTextareaChange}
                readOnly={!editable}
            ></textarea>
        </div>
    );
};

export default AboutMe;
