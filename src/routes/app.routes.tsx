// Para user logados
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../pages/Dashboard';
import Order from "../pages/Order";
//Passagem de parametros
export type StackParametrosList = {
    Dashboard: undefined,
    Order: {
        number: number | string;
        order_id: string
    };
}



const Stack = createNativeStackNavigator<StackParametrosList>();

function AppRouter(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
            <Stack.Screen name="Order" component={Order} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default AppRouter;