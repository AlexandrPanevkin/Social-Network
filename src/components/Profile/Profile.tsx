import React from "react";
import s from './Profile.module.css';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../Redux/profileReducer";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type ProfilePropsType = {
    profile: ProfileType | null
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}/>
            <ProfileStatus/>
            <MyPostsContainer/>
        </div>
    )
}