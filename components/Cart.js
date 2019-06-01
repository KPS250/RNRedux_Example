import React, {Component} from 'react'
import {View, Text, StyleSheet, FlatList } from 'react-native'
import {commonStyles} from '../utils/Styles'
import Item from '../components/Item'
import {connect} from 'react-redux'

class Cart extends Component{

    render(){
        return(
            <View style={commonStyles.container}>
               <FlatList
                data={this.props.cart}
                keyExtractor={(item,key) => item.id}
                renderItem={({item}) => 
                    <Item data={item} onClick={this.props.delete} />}
                />
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

function mapStateToProps(state){
    return {
        cart : state
    }
}

function mapDispatchToProps(dispatch){
    return{
       // add: (product)=> dispatch({ type: 'ADD', payload: product}),
        delete: (product)=> dispatch({ type: 'DELETE', payload: product}),
    }
}

const styles = StyleSheet.create({
    
})