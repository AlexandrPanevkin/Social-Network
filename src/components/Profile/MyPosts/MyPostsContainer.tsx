import React from "react";
import {addPostAC, InitialStateProfileType} from "../../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../Redux/reduxStore";
import {Dispatch} from "redux";

type mapDispatchToProfilePropsType = {
    addPost: (newPost: string) => void
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
        addPost: (newPost:string) => {
            dispatch(addPostAC(newPost))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)