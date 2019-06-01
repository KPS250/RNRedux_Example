import {StyleSheet} from 'react-native'

export const commonStyles = StyleSheet.create({
    button:{
        borderRadius : 30,
        backgroundColor: 'gray',
        padding:20,
        marginBottom:30,
    },
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'white'
    },
    item:{
        borderRadius : 30,
        backgroundColor: 'orange',
        padding:20,
        marginBottom:30,
    }
})