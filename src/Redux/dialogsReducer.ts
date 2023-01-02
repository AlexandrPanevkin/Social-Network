import {DialogsPageType, dispatchActionType} from "./State";

export const dialogsReducer = (state: DialogsPageType, action: dispatchActionType) => {
    switch (action.type) {
        case "SEND-NEW-MESSAGE-TEXT": {
            const newMessage = {
                id: 1,
                message: action.payload.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            return state.newMessageText = action.payload.message
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