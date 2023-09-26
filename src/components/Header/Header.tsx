import React, {memo} from "react";
import samuraiSvg from "../../assets/img/samurai.svg";
import './Header.css';
import {HeaderPropsType} from "./HeaderContainer";
import {NavLink} from "react-router-dom";


export const Header = memo(({isAuth, login, logout}: HeaderPropsType) => {
    return <header className="header">
        <img className="header__logo-icon" src={samuraiSvg} alt="Samurai"/>

        <div className={'login'}>
            {isAuth ?
                <>
                    <div>{login}</div>
                    <button onClick={logout}>Logout</button>
                </>

                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
})