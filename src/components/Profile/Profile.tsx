import React from "react";
import mainJpg from "../../assets/img/main.jpg";
import './Profile.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className="profile">
            <div>
                <img className="profile-icon" src={mainJpg} alt="Main"/>
            </div>
            <div>
                My profile
            </div>
            <MyPosts/>
        </div>
    )
}