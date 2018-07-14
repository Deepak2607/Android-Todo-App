import React, {Component} from 'react';
import { StyleSheet, View, Text, Button,  TextInput, TouchableOpacity, CheckBox, ScrollView, ToolbarAndroid, Image } from 'react-native';
import {connect} from 'react-redux';

class ItemInput extends React.Component { 
       render(){
        return ( 
            <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={this.props.inputHandler} value={this.props.value} placeholder='Add a todo' underlineColorAndroid='transparent' /> 
            <Button title='Add' onPress={this.props.addItem} disabled={!this.props.value} />   
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
        inputHandler: (event) =>  dispatch({
               type:"VALUE",
               value:event,
          }),
        addItem: () =>  dispatch({
               type:"ADD_ITEM",
          }),
     }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemInput)

const styles = StyleSheet.create({
  input: {
      width:250, 
      fontSize:20,
      borderWidth:1,
      borderRadius:4,
      borderColor:'#DCDCDC',
      padding:3,
      paddingLeft:10,
      marginRight:10,
  },
  container: {
    display:'flex',
    alignItems:'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop:15,
    marginBottom:10,
  }, 
});
