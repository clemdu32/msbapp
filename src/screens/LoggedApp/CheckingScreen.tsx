import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AuthContext from '../../contexts/AuthContext';
import HistoricScreen from "./HistoricScreen";
import {useEffect, useState} from "react";
import {BarCodeScanner} from "expo-barcode-scanner";

export default class CheckingScreen extends React.Component{
    constructor(props){
        super(props)
    }

    Tab = createBottomTabNavigator();

    render(){
        return (
            <this.Tab.Navigator>
                <this.Tab.Screen name="Scan" component={ScanScreen} />
                <this.Tab.Screen name="Stats" component={StatsScreen} />
            </this.Tab.Navigator>
        );
    }
}

class ScanScreen extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        const Tab = createMaterialTopTabNavigator();

        return(
            <Tab.Navigator tabBarOptions={{
                indicatorStyle : {
                    backgroundColor : 'powderblue'
                }
            }}>
                    <Tab.Screen name="QRCode" component={QrCodeScreen} />
                    <Tab.Screen name="Historic" component={HistoricScreen} />
            </Tab.Navigator>
            );
        }
    }


function QrCodeScreen (props){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
            }}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />

            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    );
}

class StatsScreen extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>QRCodeScreen</Text>
            </View>
        )
    }
}
