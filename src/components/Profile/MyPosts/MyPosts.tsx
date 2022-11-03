import React from "react";
import './MyPosts.css';
import {Post} from "./Post/Post";

type postsType = {
    id: number
    message: string
    likesCount: number
}

export type postPropsType = {
    posts: postsType[]
}

export const MyPosts = (props: postPropsType) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className="MyPosts">
            <div>My posts:</div>
            <textarea></textarea>
            <button>Add post</button>
            {postsElements}
        </div>
    )
}