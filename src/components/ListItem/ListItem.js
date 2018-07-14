import React,{Component} from 'react';
import { StyleSheet, View, Text, Button,  TextInput, TouchableOpacity, CheckBox, ScrollView, ToolbarAndroid ,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';



class ListItem extends React.Component{

    render(){
    
        return(               
        <View style={styles.item}>
         <CheckBox title='Click Here' value={this.props.status} onValueChange={this.props.checkItem} />
         <Text style={ this.props.status ? styles.itemText1 : styles.itemText2 }>{this.props.task}</Text> 
         <TouchableOpacity onPress={this.props.deleteItem}>
         <Ionicons name="ios-trash" size={32} color="red" />
         </TouchableOpacity>
        </View>
    );
    }
}
 
export default ListItem;

const styles = StyleSheet.create({
   
    itemText1: {
      color:'#404040',
      fontSize:20,
      alignItems:'flex-start',
      textDecorationLine:'line-through',
  },
     itemText2: {
      color:'#404040',
      fontSize:20,
      alignItems:'flex-start',
  },
  item: {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#E8E8E8',
    width:'90%',
    marginTop:5,
    marginBottom:5,
    padding:8,
    flexWrap:'wrap',
  },


});
