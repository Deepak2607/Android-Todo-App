import React, {Component} from 'react';
import { StyleSheet, View, Text, Button,  TextInput, TouchableOpacity, CheckBox, ScrollView, ToolbarAndroid } from 'react-native';
import CompletedItem from '../CompletedItem/CompletedItem';
import { createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import {connect} from 'react-redux';

class CompletedItemsList extends React.Component{ 
    
    static navigationOptions = {
    title: 'Completed Todos',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#0066ff',
    },

  };
    
    render() {
       return (
        <View style={styles.background}>
        <ScrollView showsVerticalScrollIndicator={true}
        automaticallyAdjustContentInsets={false}
        keyboardDismissMode='on-drag'
        keyboardShouldPersistTaps='handled'>
        <View style={styles.container}>
        
        {this.props.items.map(item =>
           item.status ?
        <CompletedItem key= {item.id} id= {item.id} task= {item.task} status= {item.status}     
        deleteItem= {()=>this.props.deleteItem(item.id)} 
        checkItem= {()=>this.props.checkItem(item.id)} /> : null
         
         )}
        </View>
        </ScrollView>
        </View>
    );
  }
}
                       
const mapStateToProps= (state) =>{
    return {
      value:state.value,
      items:state.items,
    } 
}

const mapDispatchToProps= (dispatch) =>{
    return{
        deleteItem: (id) =>  dispatch({
               type:"DELETE_ITEM",
               itemId:id
          }),
        checkItem: (id) =>  dispatch({
               type:"CHECK_ITEM",
               itemId:id
          })
     }
}

export default createStackNavigator(
{
   Completed: connect(mapStateToProps,mapDispatchToProps)(CompletedItemsList),
},
);

const styles = StyleSheet.create({
 
  container: {  
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width:'100%',    
  }, 
  background:{
      flex:1,
      backgroundColor: '#fff',
  }
     
});
