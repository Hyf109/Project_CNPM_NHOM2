import React, { useState, useEffect } from 'react';
import './AboutMe.scss';
import { useProfile } from 'context/ProfileContext';
import { useAuth } from 'hooks/useAuth';
import useFetch from 'hooks/useFetch';

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
                <div className="about-me-buttons">
                    {!editable && <button onClick={() =>{ 
                        setEditable(true);
                        setText(profile.description);
                    }} className="about-me-edit-button">Edit</button>}

                    {editable && (
                        <>
                            <button onClick={() => {
                                setEditable(false)
                                updateUserProfile({description:text});
                                console.log(profile);
                            }} className="about-me-save-button">Save</button>
                            <button onClick={() => {
                                setEditable(false);
                                setText(profile.description);
                                
                            }} className="about-me-cancel-button">Cancel</button>
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
