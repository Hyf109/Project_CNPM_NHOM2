import React, { useState, useEffect, useRef } from 'react';
import './AboutMe.scss';
import '../UserProfile.scss'

import { useAuth } from 'context/AuthProvider';
import useFetch from 'hooks/useFetch';
import useUpdateProfile from 'hooks/useUpdateProfile';

const AboutMe = ({ viewUserId }) => {
    const [text, setText] = useState('');
    const [initialText, setInitialText] = useState(''); // New state for initial text
    const [editable, setEditable] = useState(false);
    const { user, isLoading } = useAuth();
    const {data, isPending, error} = useFetch(`/finder/api/user/${viewUserId || user.user}`);
    const {updateProfile} = useUpdateProfile();
    const isOwnProfile = user.user === viewUserId;
    const textAreaRef = useRef(null); // Create a ref for the textarea

    const handleTextareaChange = (e) => {
        setText(e.target.value);
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
    };

    useEffect(() => {
        if (data && data.profile) {
            setText(data.profile.description);
            setInitialText(data.profile.description);
            // Adjust the height of the textarea to fit the content
        }
    }, [data]);

    if (!user) {
        return <div>Loading...</div>;
    }

    if (isPending) {
        return <div>Loading...</div>
    }

    return (
        <div className="about-me-container">
            <div className="about-me-title">
                <h2>About me</h2>
                <div className="buttons-row">
                    {
                        isOwnProfile && !editable && <button onClick={(e) => {
                            e.preventDefault();
                            setEditable(true);
                            setInitialText(text); // Save the initial text when entering edit mode
                        }} className="about-me-button">Edit</button>
                    }

                    {isOwnProfile && editable && (
                        <>
                            <button onClick={(e) => {
                                e.preventDefault();
                                setEditable(false);
                                updateProfile({description: text});
                            }} className="about-me-button">Save</button>

                            <button onClick={(e) => {
                                e.preventDefault();
                                setText(initialText); // Reset text to initial text when canceling edit
                                setEditable(false);
                            }} className="about-me-button">Cancel</button>
                        </>
                    )}
                </div>
            </div>
            
            <textarea
                ref={textAreaRef} // Attach the ref to the textarea
                className={`about-me-text-area ${editable ? 'editable' : 'non-editable'}`}
                value={text}
                onChange={handleTextareaChange}
                readOnly={!editable}
            ></textarea>
        </div>
    );
};

export default AboutMe;
