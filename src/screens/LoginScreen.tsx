import * as React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import AuthContext from '../contexts/AuthContext';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default class LoginScreen extends React.Component{
    constructor(props) {
        super(props);
    }

    state = {
        userName : '',
        password : ''
    }

    render(){
        return (
            <AuthContext.Consumer>
                {
                    ({state, signIn}) => (
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <TextInput
                                placeholder="Username"
                                value={this.state.userName}
                                onChangeText={(value) => this.setState({userName : value})}
                            />
                            <TextInput
                                placeholder="Password"
                                value={this.state.password}
                                onChangeText={(value) => this.setState({password : value})}
                                secureTextEntry
                            />
                            <Button title="Sign in" onPress={signIn}/>
                        </View>
                    )
                }
            </AuthContext.Consumer>
        );
    }

}
