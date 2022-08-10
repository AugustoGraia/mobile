// Para user não logados
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signin from '../pages/Signin';

const Stack = createNativeStackNavigator();

function AuthRouter(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default AuthRouter;

