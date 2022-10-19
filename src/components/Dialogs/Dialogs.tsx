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
    return (
        <div className="dialogs">
            <div className="dialogs-items">
                <DialogItem id={1} name={'Alex'}/>
                <DialogItem id={2} name={'Valera'}/>
                <DialogItem id={3} name={'Sergey'}/>
                <DialogItem id={4} name={'Nikita'}/>
                <DialogItem id={5} name={'Ivan'}/>
            </div>
            <div className="messages">
               <Message message={"Hi"}/>
                <Message message={"Hello"}/>
                <Message message={"How are you?"}/>
            </div>
        </div>
    )
}