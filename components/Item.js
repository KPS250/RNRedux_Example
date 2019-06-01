import React from 'react'
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native'
import { commonStyles } from '../utils/Styles';

export default function Item ({data, onClick}){

    return(
       <TouchableOpacity style={commonStyles.item} onPress={()=>onClick(data)}>
           <Text>{data.name}</Text>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        
    }
})

