import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import avatarSVG from '../../assets/img/avatar.svg'
import s from './Users.module.css';

export const Users = (props: UsersPropsType) => {
    return (
        <div className={s.users}>
            {props.users.map(el => <div className={s.usersContainer} key={el.id}>
                <div><img className={s.userIcon} src={avatarSVG}/></div>
                <div className={s.userInfoBox}>
                    <div>Name: {el.fullName}</div>
                    <div>Location: {el.location}</div>
                    <div>Status: {el.status}</div>
                    <div>{el.followed ? <button className={s.button} onClick={() => {
                            props.unfollow(el.id)
                        }}>Unfollow</button> :
                        <button className={s.button} onClick={() => {
                            props.follow(el.id)
                        }}>Follow</button>}</div>
                </div>
            </div>)}</div>
    );
};