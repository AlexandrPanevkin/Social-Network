import React, {memo} from "react";
import s from './Profile.module.css';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/profileReducer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    updatePhoto: (file: File) => void
    updateProfile: (profile: ProfileType) => Promise<string>
}

export const Profile = memo(({
                                 profile,
                                 status,
                                 updateStatus,
                                 isOwner,
                                 updatePhoto,
                                 updateProfile
                             }: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo  updatePhoto={updatePhoto}
                          isOwner={isOwner}
                          profile={profile}
                          status={status}
                          saveProfile={updateProfile}
                          updateStatus={updateStatus}/>
            {isOwner && <MyPostsContainer/>}
        </div>
    )
})