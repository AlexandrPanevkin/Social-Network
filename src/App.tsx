import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {stateType, StoreType} from "./Redux/reduxStore";

type AppPropsType = {
    state: stateType
    store: StoreType
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <Route path='/profile' render={()=><Profile store={props.store}  />}/>
                    <Route path='/dialogs' render={()=><Dialogs dialogs={props.state.DialogsPage.dialogs} messages={props.state.DialogsPage.messages} newMessageText={props.state.DialogsPage.newMessageText} dispatch={props.store.dispatch}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>)
}
export default App;
