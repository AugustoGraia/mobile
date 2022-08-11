import React, { useContext } from "react";

import { View, ActivityIndicator } from "react-native";

import AppRouter from './app.routes';
import AuthRouter from './auth.routes';

import { AuthContext } from '../contexts/AuthContext';


function Routes(){

    const {isAthenticated, loading} = useContext(AuthContext);
    

    if(loading){
        return(
            <View 
            style={{
                flex: 1,
                backgroundColor: '#1d1d2e',
                justifyContent: 'center',
                alignItems: 'center'
             }}>
                <ActivityIndicator size={"large"} color='#fff'/>
            </View>
        )

    }

    return(
        isAthenticated ? <AppRouter/> : <AuthRouter/>
    )
}

export default Routes;