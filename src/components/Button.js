import React from 'react'
import{StyleSheet, Text, Dimensions, TouchableHighlight} from 'react-native'



export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.butttoTriple)
    if (props.operation) stylesButton.push(styles.operationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}






const styles = StyleSheet.create({
    button: {
        fontSize:30,
        height: Dimensions.get('window').width/ 4,
        width: Dimensions.get('window').width/ 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'

    },
    
    operationButton:{
        color: '#fff',
        backgroundColor: '#fa8231',
    },

    buttonDouble:{
        width: Dimensions.get('window').width/ 4*2
    },

    butttoTriple:{
        width: Dimensions.get('window').width/ 4*3
    }
})
