import React from "react";
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id;
    return (
        <NavLink to={path}><div>{props.name}</div></NavLink>
    )
}