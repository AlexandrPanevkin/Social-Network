import React from "react";
import s from './Post.module.css';
import postUserSvg from "../../../../assets/img/postUser.png";

type PostPropsType = {
    message: string
    likesCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.post}>
            <img className={s.postUserIcon} src={postUserSvg} alt="Post User"/>
            {props.message}
            <div>Count of likes: {props.likesCount}</div>
        </div>
    )
}