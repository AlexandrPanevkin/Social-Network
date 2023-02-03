import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import avatarSVG from '../../assets/img/avatar.svg'
import s from './Users.module.css';
import axios from "axios";

export const Users = (props: UsersPropsType) => {
    if(props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }
    return (
        <div className={s.users}>
            {props.users.map(el => <div className={s.usersContainer} key={el.id}>
                <div><img className={s.userIcon} src={el.photos.small !== null ? el.photos.small : avatarSVG}/></div>
                <div className={s.userInfoBox}>
                    <div>Name: {el.name}</div>
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