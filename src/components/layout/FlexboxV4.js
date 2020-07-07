import React from 'react'
import { StyleSheet, View, Text} from 'react-native'

export default props => {
    return (
        <View style={style.FlexV4}>
            <View style={style.V0}/>
            <View style={style.V1}/>
            <View style={style.V2}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        width: 100,
        backgroundColor: '#000',
        flexGrow: 1
    },
    V0: {
        height: 300,
        backgroundColor: '#00F',
    },
    V1: {
        backgroundColor: '#F00',
        flexGrow: 5
    },
    V2: {
        backgroundColor: '#0F0',
        flexGrow: 1
    }
})