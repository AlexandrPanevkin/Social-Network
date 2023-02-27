import React from 'react';
import avatarSVG from '../../assets/img/avatar.svg'
import s from './Users.module.css';
import {UsersType} from "../../Redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

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

            <div>
                <NavLink to={'/profile/' + el.id}>
                    <img className={s.userIcon} src={el.photos.small !== null ? el.photos.small : avatarSVG}/>
                </NavLink>
            </div>
            <div className={s.userInfoBox}>
                <div>Name: {el.name}</div>
                <div>Status: {el.status}</div>
                <div>{el.followed ? <button className={s.button} onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': '1c45f9ae-54d4-47b8-8d6e-435a766d93d6'
                            }
                        }).then(response => {
                            if (response.data.resultCode === 0) {
                                props.unfollow(el.id)
                            }
                        })
                    }}
                    >Unfollow</button> :
                    <button className={s.button} onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': '1c45f9ae-54d4-47b8-8d6e-435a766d93d6'
                            }
                        }).then(response => {
                            if (response.data.resultCode === 0) {
                                props.follow(el.id)
                            }
                        })
                    }}>Follow</button>}</div>
            </div>
        </div>)}
    </div>
}