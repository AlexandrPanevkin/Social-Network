import React from "react";
import mainJpg from "../../assets/img/main.jpg";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {postsType} from "../../Redux/Redux";

export type postPropsType = {
    posts: postsType[]
    addPost:(postMessage: string)=>void
    newPostText: string
    updateNewPostText:(newText: string)=>void
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
            <MyPosts updateNewPostText={props.updateNewPostText}  newPostText={props.newPostText} posts={props.posts} addPost={props.addPost}/>
        </div>
    )
}