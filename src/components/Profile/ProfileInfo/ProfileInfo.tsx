import React from "react";
import mainJpg from "../../../assets/img/main.jpg";
import s from '../Profile.module.css';
import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfileType} from "../../../Redux/profileReducer";

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profile}>
            <div>
                <img className={s.profileIcon} src={mainJpg} alt="Main"/>
            </div>
            <div className={s.usersProfileBox}>
                <img className={s.img} src={props.profile.photos.large}/>
                <div className={s.profileInfo}>
                    <span className={s.profileFullName}>{props.profile.fullName}</span>
                    <span className={s.profileDescription}>lookingForAJobDescription: {props.profile.lookingForAJobDescription}</span>
                </div>
            </div>
        </div>
    )
}