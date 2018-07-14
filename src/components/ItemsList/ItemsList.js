import React, {Component} from 'react';
import { StyleSheet, View, Text, Button,  TextInput, TouchableOpacity, CheckBox, ScrollView, ToolbarAndroid } from 'react-native';
import ListItem from '../ListItem/ListItem';
import { createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import {connect} from 'react-redux';

class ItemsList extends React.Component{  
    render() {
       return (
        <View>
        <ScrollView showsVerticalScrollIndicator={true}
        automaticallyAdjustContentInsets={false}
        keyboardDismissMode='on-drag'
        keyboardShouldPersistTaps='handled'>
        <View style={styles.container}>
        {this.props.items.map(item =>
        <ListItem key= {item.id} id= {item.id} task= {item.task} status= {item.status}     
        deleteItem= {()=>this.props.deleteItem(item.id)} 
        checkItem= {()=>this.props.checkItem(item.id)} /> 
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


export default connect(mapStateToProps,mapDispatchToProps)(ItemsList)
 

const styles = StyleSheet.create({
 
  container: {  
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
     width:'100%', 
      
  }, 
     
});
