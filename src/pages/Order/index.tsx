import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default function Order(){
    return(
        <View style={styles.container}>
            <Text>Teste Order</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        flex: 1,

    }
})