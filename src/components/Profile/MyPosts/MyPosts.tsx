import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {postPropsType} from "../Profile";

export const MyPosts = (props: postPropsType) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    const newPostElementRef = React.createRef<HTMLTextAreaElement>();

    const onAddPostClickHandler = () => {
         if (newPostElementRef.current) {
            props.addPost(newPostElementRef.current.value)
             newPostElementRef.current.value = ''
        }
    }

    return (
        <div className={s.myPosts}>
            <div>My posts:</div>
            <div><textarea className={s.textarea} ref={newPostElementRef}></textarea></div>
            <div>
                <button className={s.button} onClick={onAddPostClickHandler}>Add post</button>
            </div>
            <div>{postsElements}</div>
        </div>
    )
}