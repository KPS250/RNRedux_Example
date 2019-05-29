import React, {Component} from 'react'
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native'
import {connect} from 'react-redux'

class Counter extends Component {

    render() {
      return (
        <View style={styles.container}>
        <TouchableOpacity  style={styles.padding} onPress={()=>this.props.decrease()}>
            <Text>Decrease</Text>
        </TouchableOpacity>

        <Text>{this.props.counter}</Text>

        <TouchableOpacity style={styles.padding} onPress={()=>this.props.increase()}>
            <Text>Increase</Text>
        </TouchableOpacity>
        </View>
      );
    }
  }

function mapStateToProps(state){
    return {
        counter : state.counter
    }
}

function mapDispatchToProps(dispatch){
    return{
        increase: ()=> dispatch({ type: 'INCREASE'}),
        decrease: ()=> dispatch({ type: 'DECREASE'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    padding:{
        padding:20,
    }
  });