import React, {memo} from 'react';
import avatarSVG from '../../assets/img/avatar.svg'
import s from './Users.module.css';
import {UsersType} from "../../Redux/usersReducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "../Common/Paginator/Paginator";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setPage: (page: number) => void
    currentPage: number
    users: UsersType[]
    followingInProgress: number[]
}

export const Users = memo(({
                               users,
                               totalUsersCount,
                               followingInProgress,
                               follow,
                               unfollow,
                               setPage,
                               pageSize,
                               currentPage
                           }: UsersPropsType) => {

    return <div className={s.users}>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} setPage={setPage}
                   currentPage={currentPage}/>
        {users.map(el => <div className={s.usersContainer} key={el.id}>

            <div>
                <NavLink to={'/profile/' + el.id}>
                    <img className={s.userIcon} src={el.photos.small !== null ? el.photos.small : avatarSVG}/>
                </NavLink>
            </div>
            <div className={s.userInfoBox}>
                <div>Name: {el.name}</div>
                <div>Status: {el.status}</div>
                <div>{el.followed ? <button className={s.button} onClick={() => {
                        unfollow(el.id)
                    }}
                    >Unfollow</button> :
                    <button className={s.button} onClick={() => {
                        follow(el.id)
                    }}>Follow</button>}</div>
            </div>
        </div>)}
    </div>
})