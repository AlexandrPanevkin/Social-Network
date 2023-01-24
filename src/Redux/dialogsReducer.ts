export type DialogsReducerActionType = sendNewMessageTextACType | updateNewMessageTextACType

type sendNewMessageTextACType = ReturnType<typeof sendNewMessageTextAC>

type updateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

const initialState = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Maxim'},
    ] as DialogsType[],
    messages: [
        {id: 1, message: 'Hi, have a good day!!'},
        {id: 2, message: 'Go to the DREAM'},
        {id: 3, message: 'Good luck'},
    ] as MessagesType[],
    newMessageText: ''
}

export type InitialStateDialogsType = typeof initialState

export const dialogsReducer = (state: InitialStateDialogsType = initialState, action: DialogsReducerActionType): InitialStateDialogsType => {
    switch (action.type) {
        case "SEND-NEW-MESSAGE-TEXT": {
            const newMessage = {
                id: Math.random(),
                message: state.newMessageText
            }
            return {...state, messages: [newMessage, ...state.messages], newMessageText: ''}
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            return {...state, newMessageText: action.payload.message}
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