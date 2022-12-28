import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../Redux/State";
import postUserSvg from "../../assets/img/postUser.png";

export type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    let messagesElements = props.messages.map(message => <div className={s.imageAndText}><img className={s.messageImg}
                                                                                              src={postUserSvg}/><span
        className={s.message}> <Message
        id={message.id} message={message.message}/></span></div>)

    const sendMessageRef = React.createRef<HTMLTextAreaElement>()

    const onSendMessageClickHandler = () => {
        alert(sendMessageRef.current?.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div>{messagesElements}</div>
                <div ><textarea className={s.textarea} ref={sendMessageRef}></textarea></div>
                <div >
                    <button className={s.button} onClick={onSendMessageClickHandler}>Send message</button>
                </div>
            </div>

        </div>
    )
}