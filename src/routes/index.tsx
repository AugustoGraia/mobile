import React, { useContext } from "react";

import { View, ActivityIndicator } from "react-native";

import AppRouter from './app.routes';
import AuthRouter from './auth.routes';

import { AuthContext } from '../contexts/AuthContext';


function Routes(){

    const {isAthenticated} = useContext(AuthContext);
    const loading = false;

    if(loading){
        return(
            <View 
            style={{
                flex: 1,
                backgroundColor: '#1d1d2e',
                justifyContent: 'center',
                alignItems: 'center'
             }}>
                <ActivityIndicator size={60} color='#fff'/>
            </View>
        )

    }

    return(
        isAthenticated ? <AppRouter/> : <AuthRouter/>
    )
}

export default Routes;