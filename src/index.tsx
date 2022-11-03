import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: 1, message: 'post1', likesCount: 7},
    {id: 2, message: 'post2', likesCount: 2},
    {id: 3, message: 'post3', likesCount: 4},
]

ReactDOM.render(
    <App posts={posts} />,
  document.getElementById('root')
);