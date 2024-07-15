import './ProfileInfoWrapper.css'
import profileImage from '../../assets/images/avatar-jessica.jpeg'
function ProfileInfoWrapper() {
  return (
    <div id="ProfileInfo">
      <img src={profileImage} id="Avatar" alt="profile image" />
      <div id="ProfileHeadings">
        <h1>Jessica Randall</h1>
        <h3>London, United Kingdom</h3>
      </div>
      <p>"Front-end developer and avid reader."</p>
    </div>
  );
}
export default ProfileInfoWrapper;
