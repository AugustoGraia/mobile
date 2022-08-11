import React, { useState, useContext, useReducer } from "react";
import { Text, 
        View, 
        StyleSheet, 
        Image, 
        TextInput, 
        TouchableOpacity, 
        KeyboardAvoidingView, 
        Platform } from 'react-native';

import { AuthContext } from '../../contexts/AuthContext';

export default function Signin(){

    const { user } = useContext(AuthContext);

    const [email, setEmail ] =  useState('');
    const [senha, setSenha ] =  useState('');

    function handreLogin(){

        if(email === '' || senha === ''){
            alert("Ensira todos os dados")
        }

    }

    return(
        
        <View style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
                <Image
                style={styles.logo}
                source={require('../../assets/pizza.png')}
                />
                    <Text style={{color: '#fff'}}>{user.name}</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu email"
                        placeholderTextColor="#f0f0f0"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha" 
                        placeholderTextColor="#f0f0f0"
                        secureTextEntry={true}
                        value={senha}
                        onChangeText={setSenha}
                    />
                    
                    <TouchableOpacity style={styles.button} onPress={handreLogin}>
                        <Text style={styles.textButton}>Acessar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d1d2e',
        
    },
    logo:{
        marginBottom: 40,
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 100
    },
    input:{
        width: 280,
        height: 40,
        backgroundColor: '#101026',
        marginBottom: 10,
        color: '#fff',
        borderRadius: 4,
        paddingHorizontal: 8,
    },
    inputContainer:{ 
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 8,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    button:{
        width: 280, 
        backgroundColor: '#3fffa3',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginBottom: 110,
    },
    textButton:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#101026',
    }
})