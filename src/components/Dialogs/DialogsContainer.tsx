import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import {sendNewMessageTextAC, updateNewMessageTextAC} from "../../Redux/dialogsReducer";
import {StoreType} from "../../Redux/reduxStore";
import {Dialogs} from "./Dialogs";

export type DialogsContainerPropsType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {

    const onSendMessageClickHandler = () => {
        props.store.dispatch(sendNewMessageTextAC())
    }

    const onMessageChangeHandler = (newMessage:string) => {
        props.store.dispatch(updateNewMessageTextAC(newMessage))
    }

    return (
       <Dialogs dialogs={props.store.getState().DialogsPage.dialogs} messages={props.store.getState().DialogsPage.messages} newMessageText={props.store.getState().DialogsPage.newMessageText} sendMessage={onSendMessageClickHandler} messageChange={onMessageChangeHandler}/>
    )
}