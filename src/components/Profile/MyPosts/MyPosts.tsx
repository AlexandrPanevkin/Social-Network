import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ProfilePropsType} from "./MyPostsContainer";

export const MyPosts = (props: ProfilePropsType) => {
    let postsElements = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)

    const onAddPostClickHandler = () => {
        props.addPost()
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