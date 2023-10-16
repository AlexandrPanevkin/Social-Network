import React, {FC, lazy, Suspense} from 'react';
import s from './App.module.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./Redux/appReducer";
import {StateType, store} from "./Redux/reduxStore";
import {Preloader} from "./components/Common/Preloader/Preloader";

const UsersClassContainer = lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const LoginContainer = lazy(() => import('./components/Login/LoginContainer'));

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
                        <Route path='/profile/:userId?' render={() => <Suspense fallback={<Preloader/>}>
                            <ProfileContainer/>
                        </Suspense>}/>
                        <Route path='/dialogs' render={() => <Suspense fallback={<Preloader/>}>
                            <DialogsContainer/>
                        </Suspense>}/>
                        <Route path='/users' render={() => <Suspense fallback={<Preloader/>}>
                            <UsersClassContainer/>
                        </Suspense>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/login' render={() => <Suspense fallback={<Preloader/>}>
                            <LoginContainer/>
                        </Suspense>}/>
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
