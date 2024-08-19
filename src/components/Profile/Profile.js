import './Profile.css';
import profilePicture from '../../images/profile-picture.png';

function Profile() {
    return (
        <div className="profile-wrapper">
            <img src={profilePicture} />
            <div className="name-wrapper">
                <p>Roger Guasch Ibarra</p>
                <p>Software Developer Engineer</p>
            </div>
        </div>
    );
}

export default Profile;