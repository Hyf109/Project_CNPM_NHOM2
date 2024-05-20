import React from "react";
import './Description.scss';
import { Link, useNavigate } from "react-router-dom";
import catAvt from 'components/assets/images/cat.png';
import { useAuth } from "hooks/useAuth";
import { useLogout } from "hooks/useLogout";
import useFetch from "hooks/useFetch";

function Description({ viewUserId }) {
    const { user } = useAuth();
    const {logout} = useLogout();
    const navigate = useNavigate();

    const {data, isPending, error} = useFetch(`/finder/api/user/${viewUserId || user.user}`);

    // Check if the logged-in user is viewing their own profile
    const isOwnProfile = user.user === viewUserId;

    // Ensure user is not null before accessing properties
    if (!user) {
        return <div>Loading...</div>;
    }

    if (isPending) {
        return <div>Loading...</div>
    }

    const handleLogOut = () => {
        logout();
        navigate('/');
    }

    return (
        <div className="user-infomation">
            <span className="avatar">
                <img src={catAvt} alt="User Avatar" />
                <b>{data && data.profile && data.profile.username}</b>
                {isOwnProfile && <i className="fa-solid fa-user-pen"></i>}
            </span>

            {isOwnProfile && (
                <span className="logout-button-container">
                    <button className="logout-button" onClick={handleLogOut}>Logout</button>
                </span>
            )}
        </div>
    );
}

export default Description;
