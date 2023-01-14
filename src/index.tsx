import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './Redux/reduxStore';
import {BrowserRouter} from "react-router-dom";

export type RootState = ReturnType<typeof store.getState>

export let rerenderEntireTree = (state: RootState) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

// dispatch={store.dispatch.bind(store)}