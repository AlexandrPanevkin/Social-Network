import React, {memo} from 'react';
import s from './Users.module.css';
import {UsersType} from "../../Redux/usersReducer";
import {Paginator} from "../Common/Paginator/Paginator";
import {User} from "./User";

type UsersPropsType = {
    totalItemsCount: number
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
                               totalItemsCount,
                               followingInProgress,
                               follow,
                               unfollow,
                               setPage,
                               pageSize,
                               currentPage
                           }: UsersPropsType) => {

    return <div className={s.users}>
        <Paginator totalItemsCount={totalItemsCount} pageSize={pageSize} setPage={setPage}
                   currentPage={currentPage}/>
        {users.map(el => <User key={el.id} follow={follow} unfollow={unfollow} user={el}/>)}
    </div>
})