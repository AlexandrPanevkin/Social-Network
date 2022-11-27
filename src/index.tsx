import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state, stateType, subscribe, updateNewPostText} from "./Redux/Redux";

export let rerenderEntireTree = ()=>{
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}
subscribe(rerenderEntireTree)
rerenderEntireTree()