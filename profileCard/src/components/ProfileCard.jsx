import React from "react";
import "./profileCard.css";


const ProfileCard = ({name,age,profilePicture,bio}) => {
  return (
    <div className="main">
    <div className="profile-card">
      <img src={profilePicture} alt="no profile picture" className="profile-picture" />
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>My Bio: {bio}</p>
    </div>
    </div>
  );
};
export default ProfileCard;