import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./Redux/State";


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>,
        document.getElementById('root')
    );
}
store.subscribe(rerenderEntireTree)
rerenderEntireTree()