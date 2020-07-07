import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV3}>
            <Quadrado cor='#F05' lado={20}/>
            <Quadrado cor='#F05' lado={30}/>
            <Quadrado cor='#F00' lado={40}/>
            <Quadrado cor='#080' lado={50}/>
            <Quadrado cor='#00F' lado={60}/>
            <Quadrado cor='#0FF' lado={70}/>
            <Quadrado cor='#F0F' lado={80}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 350,
        width: '100%',
        backgroundColor: '#000'
    }
})