import React from "react";
import mainJpg from "../../assets/img/main.jpg";
import s from './Profile.module.css';
import {StoreType} from "../../Redux/reduxStore";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

// export type ProfilePropsType = {
//     store: StoreType
// }

export const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img className={s.profileIcon} src={mainJpg} alt="Main"/>
            </div>
            <div>
                My profile
            </div>
            <MyPostsContainer/>
        </div>
    )
}