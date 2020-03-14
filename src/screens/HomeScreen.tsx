import * as React from 'react';
import {View, Text, Button, Image, ImageBackground, StyleSheet, StatusBar} from 'react-native';
import AuthContext from '../contexts/AuthContext';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import NewsFeedScreen from "./LoggedApp/NewsFeedScreen";
import CheckingScreen from "./LoggedApp/CheckingScreen";
import TournamentScreen from "./LoggedApp/TournamentScreen";

export default class HomeScreen extends React.Component{
    constructor(props){
        super(props)
    }

    MainNavigator = createDrawerNavigator();

    DrawerContent = (props)=>{
        return(
            <AuthContext.Consumer>
                {
                    ({state, logOut})=>(
                        <DrawerContentScrollView {...props} style={style.drawerScrollView}>
                                <View style={{alignItems:'center', marginBottom:5, height:300}}>
                                    <Image source={require('../../assets/logo_drawer.jpg')} style={{width:300, height:300}} resizeMode='contain' />
                                </View>
                                <View style={{flex:1}}>
                                    <DrawerItemList labelStyle={style.drawerItemLabel} {...props} inactiveBackgroundColor="#f56328" activeBackgroundColor="#fec714" />
                                    <DrawerItem
                                        label="SE DECONNECTER"
                                        labelStyle={style.drawerItemLabel}
                                        inactiveBackgroundColor="#f56328"
                                        onPress={() => logOut()}
                                    />
                                </View>
                        </DrawerContentScrollView>
                    )
                }
            </AuthContext.Consumer>
        );
    }

    render(){
        return (
            <NavigationContainer>
                <this.MainNavigator.Navigator initialRouteName="NEWS FEED" drawerContent={this.DrawerContent}>
                    <this.MainNavigator.Screen name="NEWS FEED" component={NewsFeedScreen} />
                    <this.MainNavigator.Screen name="CHECKING" component={CheckingScreen} />
                    <this.MainNavigator.Screen name="TOURNAMENT" component={TournamentScreen} />
                </this.MainNavigator.Navigator>
            </NavigationContainer>
        );
    }
}

const style = StyleSheet.create({
    drawerScrollView : {
        flex:1,
        marginTop:-15,
        backgroundColor:"#191b44"
    },
    drawerItem : {
    },
    drawerItemLabel: {
        color: '#fff',
        fontFamily :'box-office',
        fontSize: 20,
        letterSpacing: 2
    }
})
