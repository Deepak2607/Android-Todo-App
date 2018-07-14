import React, {Component} from 'react';
import { StyleSheet, View, Text, Button,  TextInput, TouchableOpacity, CheckBox, ScrollView, ToolbarAndroid, StatusBar, Image, ImageBackground } from 'react-native';

import Overall from './Overall';
import CompletedItemsList from './src/components/CompletedItemsList/CompletedItemsList';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


const initialState={
      value: '',
      items:[], 
}
const reducer=(state =initialState, action)=>{
    switch(action.type){
        case 'VALUE':
            return{
                ...state,
            value:action.value,
            } 
            break;    
        case 'ADD_ITEM':
            const newItem={
                task:state.value,
                id: Date.now(),
                status:false,
            }
            return{
                ...state,
            items:state.items.concat(newItem),
            value:''
            } 
            break;
        case 'DELETE_ITEM':
              return {
                ...state,
                items:state.items.filter(item => {
                  return item.id !== action.itemId;
                }),
              };
              break;
        case 'CHECK_ITEM':  
            return {
                ...state,
                items:state.items.map(item => 
                     (item.id === action.itemId)
                          ? {...item, status: !item.status}
                          : item
                    ),
              };
              break;
        }  
        return state
}
    
const store= createStore(reducer);



const RootStack = createMaterialBottomTabNavigator(
{
  All: { screen: Overall },
  Completed: { screen: CompletedItemsList },
},
{
  initialRouteName: 'All',
  activeTintColor: '#f0edf6',
  inactiveTintColor: '#003d99',
  barStyle: { backgroundColor: '#1a75ff' },
},
);


export default class App extends React.Component {
    
  render(){   
    return(
        <Provider store={store}>
        <RootStack/>
        </Provider>
    );
  }
}

