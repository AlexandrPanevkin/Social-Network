import {dispatchActionType} from "./Store";

const initialState = {
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

export const dialogsReducer = (state = initialState, action: dispatchActionType) => {
    switch (action.type) {
        case "SEND-NEW-MESSAGE-TEXT": {
            const newMessage = {
                id: 1,
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

export const sendNewMessageTextAC = (newMessageText: string) => {
    return {
        type: 'SEND-NEW-MESSAGE-TEXT',
        payload: {
            newMessageText
        }
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