import * as React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn : false,
            isLoading : false,
            userToken : null
        }
    }

    signIn = (email, pwd) => {
        this.setState({
            isLoggedIn : true,
            isLoading : false,
            userToken : 'ljshdksqj'
        })
    }

    AuthContext = React.createContext(
        {
            
        }
    );

    render() {
        return (
            <View>
                <Text>Coucou</Text>
            </View>
        );
    }
}
