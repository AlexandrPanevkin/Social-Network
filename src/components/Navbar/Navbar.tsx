import React from "react";
import './Navbar.css';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return   <nav className="navbar">
        <div className="nav"><NavLink to='/profile'>Profile</NavLink></div>
        <div className="nav"><NavLink to='/dialogs'>Messages</NavLink></div>
        <div className="nav"><NavLink to='/news'>News</NavLink></div>
        <div className="nav"><NavLink to='/music'>Music</NavLink></div>
        <div className="nav"><NavLink to='/settings'>Settings</NavLink></div>
    </nav>
}