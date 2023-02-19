import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import avatarSVG from '../../assets/img/avatar.svg'
import s from './Users.module.css';
import axios from "axios";
import {InitialStateUsersType} from "../../Redux/usersReducer";

export class UsersC extends React.Component<UsersPropsType, InitialStateUsersType> {
    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        let onPageClickHandler = (page: number) => {
            this.props.setPage(page)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
            })
        }

        return <div className={s.users}>
            <div>
                {pages.map(p => {
                    return <span onClick={() => onPageClickHandler(p)}
                                 className={this.props.currentPage === p ? s.selectedPage : s.page}>{p}</span>
                })
                }
            </div>
            {this.props.users.map(el => <div className={s.usersContainer} key={el.id}>
                <div><img className={s.userIcon} src={el.photos.small !== null ? el.photos.small : avatarSVG}/>
                </div>
                <div className={s.userInfoBox}>
                    <div>Name: {el.name}</div>
                    <div>Status: {el.status}</div>
                    <div>{el.followed ? <button className={s.button} onClick={() => {
                            this.props.unfollow(el.id)
                        }}>Unfollow</button> :
                        <button className={s.button} onClick={() => {
                            this.props.follow(el.id)
                        }}>Follow</button>}</div>
                </div>
            </div>)}
        </div>
    }
}