import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {postsType} from "../../../Redux/Redux";

type MyPostsPropsType = {
    posts: postsType[]
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    const onAddPostClickHandler = () => {
props.addPost(props.newPostText)
    }

    const onPostChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(event.currentTarget.value)
    }

    return (
        <div className={s.myPosts}>
            <div>My posts:</div>
            <div><textarea value={props.newPostText} className={s.textarea} onChange={onPostChangeHandler}/></div>
            <div>
                <button className={s.button} onClick={onAddPostClickHandler}>Add post</button>
            </div>
            <div>{postsElements}</div>
        </div>
    )
}