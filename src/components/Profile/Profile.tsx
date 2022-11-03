import React from "react";
import mainJpg from "../../assets/img/main.jpg";
import s from './Profile.module.css';
import {MyPosts, postPropsType} from "./MyPosts/MyPosts";

export const Profile = (props:postPropsType) => {

    return (
        <div className={s.profile}>
            <div>
                <img className={s.profileIcon} src={mainJpg} alt="Main"/>
            </div>
            <div>
                My profile
            </div>
            <MyPosts posts={props.posts}/>
        </div>
    )
}