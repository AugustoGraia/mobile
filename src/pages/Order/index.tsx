import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

import { useRoute, RouteProp } from '@react-navigation/native';

//Tipo do parametro que ira receber
type RouteDetailParams = {
    Order:{
        number: string | number,
        order_id: string
    }
}

type OrderRouterProps = RouteProp<RouteDetailParams, 'Order'>;

export default function Order(){
    //Recebendo parametros da dashboard
    const route = useRoute<OrderRouterProps>();

    return(
        <View style={styles.container}>
            <Text>Teste Order</Text>
                <Text>{route.params.number}</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        flex: 1,

    }
})