import * as React from 'react';
import AuthContext from './src/contexts/AuthContext';
import {View, Text, TextInput, Button, StatusBar} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from "./src/screens/HomeScreen";
import * as Font from 'expo-font';


export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        isLoggedIn: false,
        isLoading: false,
        userToken: null
    }

    signIn = () => {
        this.setState({
            isLoggedIn: true,
            isLoading: false,
            userToken: 'ljshdksqj'
        })
    }

    logOut = () => {
        this.setState({
            isLoggedIn: false,
            isLoading: false,
            userToken: null
        })
    }


    render() {
        if (this.state.isLoggedIn) {
            return (
                <AuthContext.Provider value={{state: this.state, logOut: this.logOut}}>
                    <HomeScreen/>
                </AuthContext.Provider>
            );
        } else {
            return (
                <AuthContext.Provider value={{state: this.state, signIn: this.signIn}}>
                    <LoginScreen/>
                </AuthContext.Provider>
            )
        }
    }

    componentDidMount() {
        Font.loadAsync({
            'box-office': require('./assets/BoxOffice.ttf'),
        })
    }
}
