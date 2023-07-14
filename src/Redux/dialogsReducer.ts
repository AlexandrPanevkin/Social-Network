export type DialogsReducerActionType = sendNewMessageTextType

type sendNewMessageTextType = ReturnType<typeof sendNewMessageText>


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
    ] as MessagesType[]
}

export type InitialStateDialogsType = typeof initialState

export const dialogsReducer = (state: InitialStateDialogsType = initialState, action: DialogsReducerActionType): InitialStateDialogsType => {
    switch (action.type) {
        case "SEND-NEW-MESSAGE-TEXT": {
            const newMessage = {
                id: Math.random(),
                message: action.newMessageText
            }
            return {...state, messages: [newMessage, ...state.messages]}
        }
        default: {
            return state
        }
    }
}

export const sendNewMessageText = (newMessageText: string) => {
    return {
        type: 'SEND-NEW-MESSAGE-TEXT',
        newMessageText
    } as const
}