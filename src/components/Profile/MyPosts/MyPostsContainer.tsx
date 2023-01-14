import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../Redux/reduxStore";

type MyPostsContainerPropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    let state = props.store.getState();

    const onAddPost = () => {
        props.store.dispatch(addPostAC())
    }

    const onPostChange = (newText: string) => {
        props.store.dispatch(updateNewPostTextAC(newText))
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={onAddPost} posts={state.ProfilePage.posts} newPostText={state.ProfilePage.newPostText} />
    )
}