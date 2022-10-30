import React from "react";
import './Dialogs.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: number
    name: string
}
const DialogItem = (props: DialogItemType) => {
    return (
        <div className="item"><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
    )
}

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className="message">{props.message}</div>
    )
}


export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Sergey'},
        {id: 4, name: 'Nikita'},
        {id: 5, name: 'Ivan'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you?'},
    ]

    let dialogsElements = dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    let messagesElements = messages.map(message=> <Message message={message.message}/>)

    return (
        <div className="dialogs">
            <div className="dialogs-items">
                {dialogsElements}
            </div>
            <div className="messages">
                {messagesElements}
            </div>
        </div>
    )
}