import React from "react";
import './MyPosts.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className="MyPosts">
            <div>My posts:</div>
            <textarea></textarea>
            <button>Add post</button>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}