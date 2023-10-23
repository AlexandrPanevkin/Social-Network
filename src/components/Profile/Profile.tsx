import React, {memo} from "react";
import s from './Profile.module.css';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../Redux/profileReducer";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    updatePhoto: (file: File) => void
}

export const Profile = memo(({profile, status, updateStatus, isOwner, updatePhoto}: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo updatePhoto={updatePhoto} isOwner={isOwner} profile={profile} status={status} updateStatus={updateStatus}/>
            {isOwner && <MyPostsContainer/>}
        </div>
    )
})