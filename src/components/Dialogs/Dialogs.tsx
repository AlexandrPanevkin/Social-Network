import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import postUserSvg from "../../assets/img/postUser.png";
import {DialogsPropsType} from "./DialogsContainer";
import {useFormik} from "formik";

export const Dialogs = (props: DialogsPropsType & { isAuth: boolean }) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)

    let messagesElements = props.messages.map(message => <div key={message.id} className={s.imageAndText}><img
        className={s.messageImg}
        src={postUserSvg} alt={'Message'}/><span
        className={s.message}> <Message
        id={message.id} message={message.message}/></span></div>)

    const onSendMessageClickHandler = (newMessage: valuesType) => {
        props.sendNewMessageText(newMessage.message)
    }
    // if(!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div>{messagesElements}</div>
                <AddItemForm onSendMessageClickHandler={onSendMessageClickHandler}
                             />
            </div>

        </div>
    )
}

type AddItemFormPropsType = {
    onSendMessageClickHandler: (newMessage: any) => void
}

const AddItemForm = (props: AddItemFormPropsType) => {

    const formik = useFormik({
        initialValues: {},
        onSubmit: values => {
            props.onSendMessageClickHandler(values)

        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div><textarea {...formik.getFieldProps('message')} className={s.textarea}/>
            </div>
            <div>
                <button className={s.button}>Send message</button>
            </div>
        </form>
    )
}
export type valuesType = {
    message: string
}