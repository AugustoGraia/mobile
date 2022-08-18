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
            <View style={styles.titele}> 
                <Text style={styles.number}>Mesa {route.params.number}</Text>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1d1d2e',
        paddingVertical: '5$',
        paddingEnd: '4%',
        paddingStart: '4%',
        paddingTop: 10,
    },
    titele:{

    },
    number:{
        
    }
    
})