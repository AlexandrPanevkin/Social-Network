import React from "react";
import samuraiSvg from "../assets/img/samurai.svg";
import './Header.css';

export const Header = () => {
    return  <header className="header">
        <img className="header__logo-icon" src={samuraiSvg} alt="Samurai"/>
    </header>
}