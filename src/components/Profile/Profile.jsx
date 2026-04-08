import React from 'react';
import './Profile.css';
import profilePicture from '../../images/profile-picture.png';

function Profile() {
    return (
        <div className="profile-card">
            <img className="profile-avatar" src={profilePicture.src} alt="Profile picture of Roger Guasch Ibarra" />
            <h2 className="profile-name">Roger Guasch Ibarra</h2>
            <p className="profile-role">Software Developer Engineer</p>
        </div>
    );
}

export default Profile;
