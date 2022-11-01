import React from "react";
import s from '../Dialogs.module.css'
type DialogItemType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogItemType) => {
    return (
       <div>{props.name}</div>
    )
}