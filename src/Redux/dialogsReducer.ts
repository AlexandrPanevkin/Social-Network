import {DialogsType, MessagesType} from "./reduxStore";

export type DialogsReducerActionType = sendNewMessageTextACType | updateNewMessageTextACType

type sendNewMessageTextACType = ReturnType<typeof sendNewMessageTextAC>

type updateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>

type initialStateType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

const initialState: initialStateType = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Maxim'},
    ],
    messages: [
        {id: 1, message: 'Hi, have a good day!!'},
        {id: 2, message: 'Go to the DREAM'},
        {id: 3, message: 'Good luck'},
    ],
    newMessageText: ''
}

export const dialogsReducer = (state:initialStateType = initialState, action: DialogsReducerActionType): initialStateType => {
    switch (action.type) {
        case "SEND-NEW-MESSAGE-TEXT": {
            const newMessage = {
                id: Math.random(),
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            state.newMessageText = action.payload.message
            return state
        }
        default: {
            return state
        }
    }
}

export const sendNewMessageTextAC = () => {
    return {
        type: 'SEND-NEW-MESSAGE-TEXT',
    } as const
}

export const updateNewMessageTextAC = (messageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        payload: {
            message: messageText
        }
    } as const
}