import React from "react";
import {InitialStateDialogsType, sendNewMessageTextAC, updateNewMessageTextAC} from "../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StateType} from "../../Redux/reduxStore";

type mapDispatchToDialogsPropsType = {
    sendMessage: () => void
    messageChange: (newMessage:string) => void
}

export type DialogsPropsType = InitialStateDialogsType & mapDispatchToDialogsPropsType

const mapStateToProps = (state: StateType): InitialStateDialogsType => {
    debugger
    return {
        dialogs: state.DialogsPage.dialogs,
        messages: state.DialogsPage.messages,
        newMessageText: state.DialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToDialogsPropsType => {
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