import React from 'react';
import preloaderSVG from '../../../assets/img/Preloader.svg'
import s from './Preloader.module.css';

export const Preloader = () => {
    return (
        <div className={s.preloaderBox}>
            <img className={s.preloader} src={preloaderSVG}/>
        </div>
    );
};