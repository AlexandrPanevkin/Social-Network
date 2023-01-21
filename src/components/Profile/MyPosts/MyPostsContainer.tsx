import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {stateType} from "../../../Redux/reduxStore";
import {connect} from "react-redux";

// type MyPostsContainerPropsType = {
//     store?: StoreType
// }
//
// export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
//     return (
//         <StoreContext.Consumer>
//             {store => {
//
//                 const state = store.getState()
//                 const onAddPost = () => {
//                     store.dispatch(addPostAC())
//                 }
//
//                 const onPostChange = (newText: string) => {
//                     store.dispatch(updateNewPostTextAC(newText))
//                 }
//                 return <MyPosts updateNewPostText={onPostChange} addPost={onAddPost}
//                                 posts={state.ProfilePage.posts}
//                                 newPostText={state.ProfilePage.newPostText}/>
//             }
//             }
//
//         </StoreContext.Consumer>
//
//     )
// }

const mapStateToProps = (state: stateType) => {
    return {
        posts: state.ProfilePage.posts,
        newPostText: state.ProfilePage.newPostText
    }

}

const mapDispatchToProps = (dispatch: any) => {
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