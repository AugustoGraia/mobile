import React, {useContext, useState} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';

import {StackParametrosList} from '../../routes/app.routes';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


export default function Dashboard(){
    //Recebendo parametros para o navigate do routes
    const navigation = useNavigation<NativeStackNavigationProp <StackParametrosList>>();
    const [numero, setNumero] = useState('');

    async function openOrder(){
       if(numero === ''){
        alert("Insira um número valido")
        return;
       }
       //Redirecionamento
       navigation.navigate('Order',{
            number: numero,
            order_id: 'dffd86e9-75c6-4852-846f-4c9fd9aa7325'
       })
    }


    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

            <SafeAreaView style={styles.container}>
                <Text style={styles.titulo}>Novo Pedido</Text>

                <TextInput 
                    style={styles.input}
                    placeholder="Número da mesa"
                    placeholderTextColor="#f0f0f0"
                    keyboardType='numeric'
                    value={numero}
                    onChangeText={setNumero}
                />

                <TouchableOpacity style={styles.button} onPress={openOrder}>
                    <Text style={styles.buttonText}>Abrir Mesa</Text>
                </TouchableOpacity>
            </SafeAreaView>

        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d1d2e',
        paddingVertical: 15

    },
    button:{    
        width: '90%',
        height: 40,
        backgroundColor: '#3fffa3',
        borderRadius: 10,
        marginVertical: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#101026',
        fontWeight: 'bold',
    },
    titulo:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffff',
        marginBottom: 24,
    }, 
    input:{
        width: '90%',
        height: 40,
        backgroundColor: '#101026',
        borderRadius: 10,
        textAlign: 'center',
        paddingHorizontal: 8,
        fontSize: 22,
        color: '#ffff'
    }

})
