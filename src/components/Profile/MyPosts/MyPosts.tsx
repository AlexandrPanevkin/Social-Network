import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {dispatchActionType, postsType} from "../../../Redux/State";
import { addPostAC, updateNewPostTextAC } from "../../../Redux/profileReducer";

type MyPostsPropsType = {
    posts: postsType[]
    newPostText: string
    dispatch: (action: dispatchActionType) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    const onAddPostClickHandler = () => {
        props.dispatch(addPostAC(props.newPostText))
    }

    const onPostChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(event.currentTarget.value))
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