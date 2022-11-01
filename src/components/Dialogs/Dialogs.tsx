import React from "react";
import s from'./Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


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
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.message}>
                {messagesElements}
            </div>
        </div>
    )
}