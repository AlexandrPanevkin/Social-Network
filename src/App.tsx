import React, {FC} from 'react';
import s from './App.module.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import UsersClassContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./Redux/appReducer";
import {StateType, store} from "./Redux/reduxStore";
import {Preloader} from "./components/Common/Preloader/Preloader";

export type mapDispatchAppPropsType = {
    initializeApp: () => void
}
type MapStatePropsType = ReturnType<typeof mapStateToProps>
type AppType = mapDispatchAppPropsType & MapStatePropsType

class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.isInitialized) return <Preloader/>
        return (
            <BrowserRouter>
                <div className={s.appWrapper}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={s.appWrapperContent}>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/users' render={() => <UsersClassContainer/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/login' component={LoginContainer}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state: StateType) => ({
    isInitialized: state.app.isInitialized
})

const AppContainer = compose<FC>(
    connect(mapStateToProps, {
        initializeApp
    })
)(App)

export const MainApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}
