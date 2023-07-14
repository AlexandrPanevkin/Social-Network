import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import postUserSvg from "../../assets/img/postUser.png";
import {DialogsPropsType} from "./DialogsContainer";
import {useFormik} from "formik";
import {Redirect} from "react-router-dom";

export const Dialogs = (props: DialogsPropsType & { isAuth: boolean }) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)

    let messagesElements = props.messages.map(message => <div key={message.id} className={s.imageAndText}><img
        className={s.messageImg}
        src={postUserSvg}/><span
        className={s.message}> <Message
        id={message.id} message={message.message}/></span></div>)

    const onSendMessageClickHandler = () => {
        props.sendNewMessageText()
    }

    const onMessageChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(event.currentTarget.value)
    }

    if(!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div>{messagesElements}</div>
                <AddItemForm onSendMessageClickHandler={onSendMessageClickHandler} newMessageText={props.newMessageText}
                             onMessageChangeHandler={onMessageChangeHandler}/>
            </div>

        </div>
    )
}

type AddItemFormPropsType = {
    newMessageText: string
    onMessageChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void
    onSendMessageClickHandler: () => void
}

const AddItemForm = (props: AddItemFormPropsType) => {

    const formik = useFormik({
        initialValues: {},
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div><textarea {...formik.getFieldProps('email')} value={props.newMessageText} onChange={props.onMessageChangeHandler} className={s.textarea}/>
            </div>
            <div>
                <button className={s.button} onClick={props.onSendMessageClickHandler}>Send message</button>
            </div>
        </form>
    )
}