import React from "react";
import {addPostAC, InitialStateProfileType, updateNewPostTextAC} from "../../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../Redux/reduxStore";
import {Dispatch} from "redux";

type mapDispatchToProfilePropsType = {
    updateNewPostText: (newText: string) => void
    addPost: () => void
}

export type ProfilePropsType = InitialStateProfileType & mapDispatchToProfilePropsType

const mapStateToProps = (state: StateType): InitialStateProfileType => {
    return {
        posts: state.ProfilePage.posts,
        newPostText: state.ProfilePage.newPostText,
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProfilePropsType => {
    return {
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextAC(newText))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)