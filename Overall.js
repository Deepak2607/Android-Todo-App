import React, {Component} from 'react';
import { StyleSheet, View, Text, Button,  TextInput, TouchableOpacity, CheckBox, ScrollView, ToolbarAndroid, StatusBar } from 'react-native';

import ItemInput from './src/components/ItemInput/ItemInput';
import ItemsList from './src/components/ItemsList/ItemsList';
import { createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

class Overall extends React.Component { 
    
    static navigationOptions = {
    title: 'TodoApp',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#0066ff',
    },

  };
    
  render() {     
    return (
        
        <View style={styles.container}> 
        <ItemInput />     
        <ItemsList />
        </View>
        
    );
  }
}

 export default createStackNavigator(
  {
       Home: Overall,
  },
);

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },     
});
