import React from "react";
import './Post.css';
import postUserSvg from "../../../../assets/img/postUser.png";

export const Post = () => {
    return (
        <div className="Post">
            <img className="postUser-icon" src={postUserSvg} alt="Post User"/>
           Post
        </div>
    )
}