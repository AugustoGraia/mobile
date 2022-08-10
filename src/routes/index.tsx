import React from "react";

import { View, ActivityIndicator } from "react-native";

import AppRouter from './app.routes';
import AuthRouter from './auth.routes';

function Routes(){

    const estaLogado = false;
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
        estaLogado ? <AppRouter/> : <AuthRouter/>
    )
}

export default Routes;