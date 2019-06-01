import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {commonStyles} from '../utils/Styles'

class HomeScreen extends Component{

    render(){
        return(
            <View style={commonStyles.container}>
               <TouchableOpacity style={commonStyles.button} onPress={()=>this.props.navigation.navigate('Electronics')}>
                    <Text style={commonStyles.text} >Electronics</Text>
               </TouchableOpacity> 

               <TouchableOpacity style={commonStyles.button} onPress={()=>this.props.navigation.navigate('Furniture')}>
                    <Text style={commonStyles.text} >Furniture</Text>
               </TouchableOpacity> 
            </View>
        )
    }
}

export default HomeScreen

const styles = StyleSheet.create({
    
})

