import React, {FC} from "react";
import {InitialStateDialogsType, sendNewMessageText, updateNewMessageText} from "../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../Redux/reduxStore";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type mapDispatchToDialogsPropsType = {
    sendNewMessageText: () => void
    updateNewMessageText: (newMessage:string) => void
}

export type DialogsPropsType = InitialStateDialogsType & mapDispatchToDialogsPropsType

const mapStateToProps = (state: StateType) => {
    return {
        dialogs: state.DialogsPage.dialogs,
        messages: state.DialogsPage.messages,
        newMessageText: state.DialogsPage.newMessageText,
    }
}

export default compose<FC>(
    connect(mapStateToProps, {
        sendNewMessageText,
        updateNewMessageText
    }),
    withAuthRedirect
)(Dialogs)
