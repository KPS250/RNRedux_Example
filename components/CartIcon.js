import React, {Component} from 'react'
import {TouchableOpacity, Text, StyleSheet } from 'react-native'
import {commonStyles} from '../utils/Styles'
import {connect} from 'react-redux'

class CartIcon extends Component{

    render(){
        return(
            <TouchableOpacity style={commonStyles.container} onPress={()=>{this.props.navigation.navigate('Cart')}}>
               <Text style={{paddingRight:20, color:'white'}}>{this.props.cart.length}</Text>
            </TouchableOpacity>
        )
    }

    onClick=(data)=>{
       
    }
}

export default connect(mapStateToProps, null)(CartIcon)

function mapStateToProps(state){
    return {
        cart : state
    }
}

const styles = StyleSheet.create({
    
})