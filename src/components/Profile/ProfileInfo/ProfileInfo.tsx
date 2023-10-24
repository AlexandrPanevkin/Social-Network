import React, {ChangeEvent, memo} from "react";
import mainJpg from "../../../assets/img/main.jpg";
import s from '../Profile.module.css';
import {Preloader} from "../../Common/Preloader/Preloader";
import {ContactsType, ProfileType, updatePhoto} from "../../../Redux/profileReducer";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import avatarSVG from '../../../assets/img/avatar.svg'

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    updatePhoto: (file: File) => void
}

export const ProfileInfo = memo(({profile, status, updateStatus, isOwner, updatePhoto}: ProfileInfoPropsType) => {
    if (!profile) {
        return <Preloader/>
    }
    const onUpdatePhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            updatePhoto(e.target.files[0])
        }
    }
    return (
        <div className={s.profile}>
            <div>
                <img className={s.profileIcon} src={mainJpg} alt="Main"/>
            </div>
            <div className={s.usersProfileBox}>
                <img className={s.img} src={profile.photos.large || avatarSVG}
                     alt='profile'/>
                {isOwner && <input onChange={onUpdatePhotoHandler} type={'file'}/>}
                <div className={s.profileInfo}>
                    <ProfileData profile={profile}/>
                    <span>
                        <ProfileStatus updateStatus={updateStatus} status={status}/>
                    </span>
                </div>
            </div>
        </div>
    )
})

type ProfileDataPropsType = {
    profile: ProfileType
}

export const ProfileData = ({profile}: ProfileDataPropsType) => {
    return (
        <>
            <span className={s.profileFullName}>{profile.fullName}</span>
            <span>
                        Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}
                    </span>
            {
                profile.lookingForAJob && <span
                    className={s.profileDescription}>lookingForAJobDescription: {profile.lookingForAJobDescription}</span>}
            <span>
                        Contacts: {Object.keys(profile.contacts).map(key => {
                return <Contact contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}
                                key={key}/>
            })}
                    </span>
        </>
    )
}

type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

export const Contact = ({contactTitle, contactValue}: ContactsPropsType) => {
    return <div>{contactTitle}: {contactValue}</div>
}