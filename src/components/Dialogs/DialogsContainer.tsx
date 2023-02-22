import React from "react";
import {InitialStateDialogsType, sendNewMessageText, updateNewMessageText} from "../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StateType} from "../../Redux/reduxStore";

type mapDispatchToDialogsPropsType = {
    sendNewMessageText: () => void
    updateNewMessageText: (newMessage:string) => void
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

export const DialogsContainer = connect(mapStateToProps, {
    sendNewMessageText,
    updateNewMessageText
})(Dialogs)