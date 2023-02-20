import React from 'react';
import avatarSVG from '../../assets/img/avatar.svg'
import s from './Users.module.css';
import {UsersType} from "../../Redux/usersReducer";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setPage: (page: number) => void
    currentPage: number
    users: UsersType[]
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const onPageClickHandler = (page: number) => {
        props.setPage(page)
    }

    return <div className={s.users}>
        <div>
            {pages.map(p => {
                return <span key={p} onClick={() => onPageClickHandler(p)}
                             className={props.currentPage === p ? s.selectedPage : s.page}>{p}</span>
            })
            }
        </div>
        {props.users.map(el => <div className={s.usersContainer} key={el.id}>
            <div><img className={s.userIcon} src={el.photos.small !== null ? el.photos.small : avatarSVG}/>
            </div>
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
        </div>)}
    </div>
}