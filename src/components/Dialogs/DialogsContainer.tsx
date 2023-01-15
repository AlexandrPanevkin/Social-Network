import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import {sendNewMessageTextAC, updateNewMessageTextAC} from "../../Redux/dialogsReducer";
import {StoreType} from "../../Redux/reduxStore";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";

// export type DialogsContainerPropsType = {
//     store: StoreType
// }

export const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { store => {
        const onSendMessageClickHandler = () => {
        store.dispatch(sendNewMessageTextAC())
    }

        const onMessageChangeHandler = (newMessage:string) => {
        store.dispatch(updateNewMessageTextAC(newMessage))
    }
        return  <Dialogs dialogs={store.getState().DialogsPage.dialogs} messages={store.getState().DialogsPage.messages} newMessageText={store.getState().DialogsPage.newMessageText} sendMessage={onSendMessageClickHandler} messageChange={onMessageChangeHandler}/>
    }
    }
    </StoreContext.Consumer>
}