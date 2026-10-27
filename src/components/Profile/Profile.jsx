import React from 'react';
import './Profile.css';
import profilePicture from '../../images/profile-picture.png';
import i18n from '../../utils/i18n.js';

function Profile() {
    return (
        <div className="profile-card">
            <img className="profile-avatar" src={profilePicture.src} alt={i18n('profile.imgAlt')} />
            <h2 className="profile-name">{i18n('profile.name')}</h2>
            <p className="profile-role">{i18n('profile.role')}</p>
        </div>
    );
}

export default Profile;
