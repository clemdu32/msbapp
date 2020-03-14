import * as React from 'react';
import {View, Text, Button, ImageBackground, StatusBar} from 'react-native';
import AuthContext from '../../contexts/AuthContext';

export default class NewsFeedScreen extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#fcf6de'}}>
                <Text>NewsFeedScreen</Text>
            </View>
        );
    }
}
