import React, {memo} from 'react';
import avatarSVG from '../../assets/img/avatar.svg'
import s from './Users.module.css';
import {UsersType} from "../../Redux/usersReducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    user: UsersType
}

export const User = memo(({
                              user, unfollow, follow
                          }: UsersPropsType) => {

    return <div className={s.usersContainer}>

        <div>
            <NavLink to={'/profile/' + user.id}>
                <img className={s.userIcon} src={user.photos.small !== null ? user.photos.small : avatarSVG}/>
            </NavLink>
        </div>
        <div className={s.userInfoBox}>
            <div>Name: {user.name}</div>
            <div>Status: {user.status}</div>
            <div>{user.followed ? <button className={s.button} onClick={() => {
                    unfollow(user.id)
                }}
                >Unfollow</button> :
                <button className={s.button} onClick={() => {
                    follow(user.id)
                }}>Follow</button>}</div>
        </div>
    </div>
})