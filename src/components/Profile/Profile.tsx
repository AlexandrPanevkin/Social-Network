import React from "react";
import mainJpg from "../../assets/img/main.jpg";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {dispatchActionType, postsType, ProfilePageType} from "../../Redux/Store";

export type postPropsType = {
    // posts: postsType[]
    // newPostText: string
    dispatch:(action: dispatchActionType)=>void
    profilePage:ProfilePageType
}

export const Profile = (props:postPropsType) => {
    return (
        <div className={s.profile}>
            <div>
                <img className={s.profileIcon} src={mainJpg} alt="Main"/>
            </div>
            <div>
                My profile
            </div>
            <MyPosts dispatch={props.dispatch} newPostText={props.profilePage.newPostText} posts={props.profilePage.posts}/>
        </div>
    )
}