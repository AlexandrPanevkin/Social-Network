import React from "react";
import './Navbar.css';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return   <nav className="navbar">
        <div className="navbar-nav"><NavLink to='/profile'>Profile</NavLink></div>
        <div className="navbar-nav"><NavLink to='/dialogs'>Messages</NavLink></div>
        <div className="navbar-nav"><NavLink to='/news'>News</NavLink></div>
        <div className="navbar-nav"><NavLink to='/music'>Music</NavLink></div>
        <div className="navbar-nav"><NavLink to='/settings'>Settings</NavLink></div>
    </nav>
}