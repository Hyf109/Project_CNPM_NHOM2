import React, { useState } from 'react';
import './AboutMe.scss';

const AboutMe = () => {
    const [text, setText] = useState('');
    const [editable, setEditable] = useState(false);

    const handleTextareaChange = (event) => {
        setText(event.target.value);
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + 'px';
    };

    return (
        <div className="about-me-container">
            <div className="about-me-title">
                <h2>About me</h2>
                <div className="about-me-buttons">
                    {
                        !editable && <button onClick={(e) => {
                            e.preventDefault();
                            setEditable(true);
                        }} className="about-me-edit-button">Edit</button>
                    }

                    {
                        editable && 
                        <>
                            <button onClick={(e) => {
                                e.preventDefault();
                                setEditable(false);
                            }} className="about-me-save-button">Save</button>

                            <button onClick={(e) => {
                                e.preventDefault();
                                setEditable(false);
                            }} className="about-me-cancel-button">Cancel</button>
                        </>

                    }
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
