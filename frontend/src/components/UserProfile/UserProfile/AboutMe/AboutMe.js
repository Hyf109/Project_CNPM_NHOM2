import React, { useState, useEffect, useRef } from 'react';
import './AboutMe.scss';
import '../UserProfile.scss'

import { useAuth } from 'context/AuthProvider';
import useFetch from 'hooks/useFetch';
import useUpdateProfile from 'hooks/useUpdateProfile';

const AboutMe = ({ viewUserId }) => {
    const [text, setText] = useState('');
    const [initialText, setInitialText] = useState('');
    const [editable, setEditable] = useState(false);
    const { user, isLoading } = useAuth();
    const {data, isPending, error} = useFetch(`/finder/api/user/${viewUserId || user.user}`);
    const {updateProfile} = useUpdateProfile();
    const isOwnProfile = user.user === viewUserId;
    const textAreaRef = useRef(null);

    const handleTextareaChange = (e) => {
        setText(e.target.value);
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
    };

    useEffect(() => {
        if (data && data.profile) {
            setText(data.profile.description);
            setInitialText(data.profile.description);
        }
    }, [data]);

    useEffect(() => {
        if (editable && textAreaRef.current) {
            textAreaRef.current.style.height = 'auto';
            textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
        }
    }, [editable]);
    

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
                            setInitialText(text);
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
                                setText(initialText);
                                setEditable(false);
                            }} className="about-me-button">Cancel</button>
                        </>
                    )}
                </div>
            </div>
            
            {editable ? (
                <textarea
                    ref={textAreaRef}
                    className={`about-me-text-area ${editable ? 'editable' : 'non-editable'}`}
                    value={text}
                    onChange={handleTextareaChange}
                    readOnly={!editable}
                ></textarea>
            ) : (
                <p className="about-me-text-area non-editable">{text}</p>
            )}
        </div>
    );
};

export default AboutMe;
