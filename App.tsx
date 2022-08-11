import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import Signin from './src/pages/Signin';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import React from 'react';
import {AuthProvider} from './src/contexts/AuthContext';


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
            <View style={styles.StatusBar}>
              <StatusBar barStyle="light-content" translucent={false} />
            </View>
          <Routes/>
      </AuthProvider>
    </NavigationContainer>
  
  );
}


const styles = StyleSheet.create({
  StatusBar: {
      height: Constants.statusBarHeight,
      backgroundColor: '#1d1d2e'
  }
});