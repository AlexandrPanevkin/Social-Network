import React from "react";
import './MyPosts.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let posts = [
        {id: 1, message: 'post1', likesCount: 7},
        {id: 2, message: 'post2', likesCount: 2},
        {id: 3, message: 'post3', likesCount: 4},
    ]

    let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className="MyPosts">
            <div>My posts:</div>
            <textarea></textarea>
            <button>Add post</button>
            {postsElements}
        </div>
    )
}