import React from 'react';
import { View, Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { LoginScreen } from '../Screens/LoginScreen';
import { ScanScreen } from '../Screens/ScanScreen';

export const App = () => {
    return <Router>
        <Scene key='root'>
            <Scene key='login' title='Login' component={LoginScreen} />
            <Scene key='scan' title='Scan' component={ScanScreen} />
        </Scene>
    </Router>
}