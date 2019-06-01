import React, {Component} from 'react'
import {View, Text, StyleSheet, FlatList } from 'react-native'
import {commonStyles} from '../utils/Styles'
import Item from '../components/Item'
import {furniture} from '../data/Data'
import {connect} from 'react-redux'

class Furniture extends Component{

    render(){
        return(
            <View style={commonStyles.container}>
               <FlatList
                data={furniture}
                renderItem={({item}) => 
                    <Item data={item} onClick={this.props.add} />}
                />
            </View>
        )
    }

    onClick=(data)=>{
        alert(data)
    }
}

export default connect(null, mapDispatchToProps)(Furniture)

function mapDispatchToProps(dispatch){
    return{
        add: (product)=> dispatch({ type: 'ADD', payload: product}),
        delete: (product)=> dispatch({ type: 'DELETE', payload: product}),
    }
}

const styles = StyleSheet.create({
    
})