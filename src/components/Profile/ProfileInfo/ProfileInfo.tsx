import React, {memo} from "react";
import mainJpg from "../../../assets/img/main.jpg";
import s from '../Profile.module.css';
import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfileType} from "../../../Redux/profileReducer";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import avatarSVG from '../../../assets/img/avatar.svg'

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = memo(({profile, status, updateStatus}: ProfileInfoPropsType) => {
    if (!profile) {
        return <Preloader/>
    }
    debugger
    return (
        <div className={s.profile}>
            <div>
                <img className={s.profileIcon} src={mainJpg} alt="Main"/>
            </div>
            <div className={s.usersProfileBox}>
                <img className={s.img} src={profile.photos.large || avatarSVG}
                     alt='profile'/>
                <div className={s.profileInfo}>
                    <span className={s.profileFullName}>{profile.fullName}</span>
                    <span
                        className={s.profileDescription}>lookingForAJobDescription: {profile.lookingForAJobDescription}</span>
                    <span>
                        <ProfileStatus updateStatus={updateStatus} status={status}/>
                    </span>
                </div>
            </div>
        </div>
    )
})