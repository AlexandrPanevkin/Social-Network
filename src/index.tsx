import React from 'react';
import './index.css';
import {state} from "./Redux/Redux";
import {rerenderEntireTree} from "./render";

rerenderEntireTree(state)