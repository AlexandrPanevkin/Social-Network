import React from "react";
import './MyPosts.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className="MyPosts">
            <div>My posts:</div>
            <textarea></textarea>
            <button>Add post</button>
            <Post message={"post1"} likesCount={1}/>
            <Post message={"post2"} likesCount={7}/>
            <Post message={"post3"} likesCount={4}/>
        </div>
    )
}