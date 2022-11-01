import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return   <nav className={s.navbar}>
        <div className={s.navbarNav}><NavLink to='/profile'>Profile</NavLink></div>
        <div className={s.navbarNav}><NavLink to='/dialogs'>Messages</NavLink></div>
        <div className={s.navbarNav}><NavLink to='/news'>News</NavLink></div>
        <div className={s.navbarNav}><NavLink to='/music'>Music</NavLink></div>
        <div className={s.navbarNav}><NavLink to='/settings'>Settings</NavLink></div>
    </nav>
}