import React from "react";
import s from './Dialogs.module.css';
import {sendNewMessageTextAC, updateNewMessageTextAC} from "../../Redux/dialogsReducer";
import {stateType} from "../../Redux/reduxStore";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

// export type DialogsContainerPropsType = {
//     store: StoreType
// }

// export const DialogsContainer = () => {
//
//     return <StoreContext.Consumer>
//         { store => {
//         const onSendMessageClickHandler = () => {
//         store.dispatch(sendNewMessageTextAC())
//     }
//
//         const onMessageChangeHandler = (newMessage:string) => {
//         store.dispatch(updateNewMessageTextAC(newMessage))
//     }
//         return  <Dialogs dialogs={store.getState().DialogsPage.dialogs} messages={store.getState().DialogsPage.messages} newMessageText={store.getState().DialogsPage.newMessageText} sendMessage={onSendMessageClickHandler} messageChange={onMessageChangeHandler}/>
//     }
//     }
//     </StoreContext.Consumer>
// }

const mapStateToProps = (state: stateType) => {
    return {
        dialogs: state.DialogsPage.dialogs,
        messages: state.DialogsPage.messages,
        newMessageText: state.DialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        sendMessage: () => {
            dispatch(sendNewMessageTextAC())
        },
        messageChange: (newMessage:string) => {
            dispatch(updateNewMessageTextAC(newMessage))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)