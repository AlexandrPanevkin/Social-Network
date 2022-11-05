import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../Redux/Redux";
import postUserSvg from "../../assets/img/postUser.png";

export type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    let messagesElements = props.messages.map(message => <div className={s.imageAndText}><img className={s.messageImg} src={postUserSvg}/><span className={s.message}> <Message
        id={message.id} message={message.message}/></span></div>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                {messagesElements}
            </div>
        </div>
    )
}