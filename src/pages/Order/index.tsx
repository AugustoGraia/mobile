import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { Feather } from '@expo/vector-icons';

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
    const navigation = useNavigation();



    async function handleCloseOrder(){
        
        try{
            await api.delete('/delete/order', {
                params:{
                    order_id: route.params?.order_id,
                }
            })

            navigation.goBack();

        }catch(err){
            console.log(err)
        }
    }


    return(
        <View style={styles.container}>
            <View style={styles.header}> 
                <Text style={styles.title}>Mesa {route.params.number}</Text>
                <TouchableOpacity onPress={handleCloseOrder}>
                    <Feather name="trash-2" size={28}  color="#ff3f4b" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.input}>
                <Text style={{ color: '#fff'}}>Pizzas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.input}>
                <Text style={{ color: '#fff'}}>Pizzas de frango</Text>
            </TouchableOpacity>

            <View style={styles.qtdConteiner}>
                <Text style={styles.qtdText}>Quantidade</Text>
                <TextInput 
                style={[styles.input, { width: '60%', textAlign: 'center'}]}
                value='1'
                placeholderTextColor={"#f0f0f0"}
                keyboardType="numeric"
                />
            </View>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.buttonADD}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Avan??ar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1d1d2e',
        paddingVertical: '5%',
        paddingEnd: '4%',
        paddingStart: '4%',
        paddingTop: 10,
    },
    header:{
        flexDirection: 'row',
        marginBottom: 12,
        alignItems: 'center',
        marginTop: 24,
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginRight: 14,
    },
    input:{
        backgroundColor: '#101026',
        borderRadius: 4,
        width: '100%',
        height: 40,
        marginBottom: 12,
        justifyContent: 'center',
        paddingHorizontal: 8,
        color: '#fff',
        fontSize: 20,
    },
    qtdConteiner:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    qtdText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    actions:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    buttonADD:{
        backgroundColor: '#3fd1ff',
        borderRadius: 4,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
    },
    buttonText: {
        color: '#101026',
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#3fffa3',
        borderRadius: 4,
        height: 40,
        width: "75%",
        alignItems: 'center',
        justifyContent: 'center',
    }

    
})