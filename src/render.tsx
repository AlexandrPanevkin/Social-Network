import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, stateType} from "./Redux/Redux";

export const rerenderEntireTree = (state:stateType)=>{
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}
