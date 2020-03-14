import * as React from 'react';
import {View, Text, Button} from 'react-native';
import AuthContext from '../../contexts/AuthContext';

export default class TournamentScreen extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>TournamentScreen</Text>
            </View>
        );
    }
}
