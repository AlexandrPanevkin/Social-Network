import React from "react";
import mainJpg from "../../assets/img/main.jpg";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {dispatchActionType, postsType} from "../../Redux/State";

export type postPropsType = {
    posts: postsType[]
    newPostText: string
    dispatch:(action: dispatchActionType)=>void
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
            <MyPosts dispatch={props.dispatch} newPostText={props.newPostText} posts={props.posts}/>
        </div>
    )
}