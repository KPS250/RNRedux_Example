import React, {Component} from 'react'
import {View, Text,FlatList, StyleSheet } from 'react-native'
import {commonStyles} from '../utils/Styles'
import Item from '../components/Item'
import {electronics} from '../data/Data'
import {connect} from 'react-redux'

class Electronics extends Component{

    render(){
        return(
            <View style={commonStyles.container}>
                <FlatList
                data={electronics}
                renderItem={({item}) => 
                    <Item data={item} onClick={this.props.add} />}
                />
            </View>
        )
    }
}

export default connect(null, mapDispatchToProps)(Electronics)


function mapStateToProps(state){
    return {
       // cart : state.cart
    }
}

function mapDispatchToProps(dispatch){
    return{
        add: (product)=> dispatch({ type: 'ADD', payload: product}),
        delete: (product)=> dispatch({ type: 'DELETE', payload: product}),
    }
}

const styles = StyleSheet.create({
    
})