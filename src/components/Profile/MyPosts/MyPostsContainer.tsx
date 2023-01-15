import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../Redux/reduxStore";
import StoreContext from "../../../StoreContext";

type MyPostsContainerPropsType = {
    store?: StoreType
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    return (
        <StoreContext.Consumer>
            {store => {

                const state = store.getState()
                const onAddPost = () => {
                    store.dispatch(addPostAC())
                }

                const onPostChange = (newText: string) => {
                    store.dispatch(updateNewPostTextAC(newText))
                }
                return <MyPosts updateNewPostText={onPostChange} addPost={onAddPost}
                                posts={state.ProfilePage.posts}
                                newPostText={state.ProfilePage.newPostText}/>
            }
            }

        </StoreContext.Consumer>

    )
}