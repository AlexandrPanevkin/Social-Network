import React from "react";
import mainJpg from "../assets/img/main.jpg";
import './Profile.css';

export const Profile = () => {
    return (
        <div className="profile">
            <div>
                <img className="profile-icon" src={mainJpg} alt="Main"/>
            </div>
            <div>
                My profile
            </div>
            <div>My posts:</div>
            <div>Post1</div>
            <div>Post2</div>
        </div>
    )
}