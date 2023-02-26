import React from "react";
import samuraiSvg from "../../assets/img/samurai.svg";
import './Header.css';
import {HeaderPropsType} from "./HeaderContainer";
import {NavLink} from "react-router-dom";


export const Header = (props: HeaderPropsType) => {
    return  <header className="header">
        <img className="header__logo-icon" src={samuraiSvg} alt="Samurai"/>

        <div className={'login'}>{props.isAuth ? 'Authorized as ' + props.login : <NavLink to={'/login'}>Login</NavLink>}</div>
    </header>
}