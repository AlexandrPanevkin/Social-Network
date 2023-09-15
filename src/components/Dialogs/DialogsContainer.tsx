import {FC} from "react";
import {InitialStateDialogsType, sendNewMessageText} from "../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../Redux/reduxStore";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type mapDispatchToDialogsPropsType = {
    sendNewMessageText: (newMessage: string) => void
    updateNewMessageText: (newMessage:string) => void
}

export type DialogsPropsType = InitialStateDialogsType & mapDispatchToDialogsPropsType

const mapStateToProps = (state: StateType) => {
    return {
        dialogs: state.DialogsPage.dialogs,
        messages: state.DialogsPage.messages
    }
}

export default compose<FC>(
    connect(mapStateToProps, {
        sendNewMessageText
    }),
    withAuthRedirect
)(Dialogs)
