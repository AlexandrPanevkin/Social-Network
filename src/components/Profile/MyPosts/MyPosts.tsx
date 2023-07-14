import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ProfilePropsType} from "./MyPostsContainer";
import {useFormik} from "formik";

export const MyPosts = (props: ProfilePropsType) => {
    let postsElements = props.posts.map(post => <Post key={post.id} message={post.message}
                                                      likesCount={post.likesCount}/>)

    const onAddPostClickHandler = (newPost: string) => {
        props.addPost(newPost)
    }
    return (
        <div className={s.myPosts}>
            <div>My posts:</div>
            <MyPostsAddItemForm addPost={onAddPostClickHandler}/>
            <div>{postsElements}</div>
        </div>
    )
}

type MyPostsAddItemFormType = {
    addPost: (newPost: string) => void
}

const MyPostsAddItemForm = (props: MyPostsAddItemFormType) => {
    const {addPost} = props
    const formik = useFormik({
        initialValues: {
            post: ''
        },
        onSubmit: values => {
            debugger
            addPost(values.post)

        },
    })
    return <form onSubmit={formik.handleSubmit}>
        <div><textarea {...formik.getFieldProps('post')} className={s.textarea}/></div>
        <div>
            <button className={s.button}>Add post</button>
        </div>
    </form>
}