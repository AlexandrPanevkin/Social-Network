import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import postUserSvg from "../../assets/img/postUser.png";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";

export const Dialogs = (props: DialogsPropsType & {isAuth: boolean}) => {

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

    // if(!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div>{messagesElements}</div>
                <div><textarea value={props.newMessageText} onChange={onMessageChangeHandler} className={s.textarea}/>
                </div>
                <div>
                    <button className={s.button} onClick={onSendMessageClickHandler}>Send message</button>
                </div>
            </div>

        </div>
    )
}