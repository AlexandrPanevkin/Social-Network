import React from "react";
import './Post.css';
import postUserSvg from "../../../../assets/img/postUser.png";

type PostPropsType = {
    message: string
    likesCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className="Post">
            <img className="postUser-icon" src={postUserSvg} alt="Post User"/>
            {props.message}
            <div>Count of likes: {props.likesCount}</div>
        </div>
    )
}