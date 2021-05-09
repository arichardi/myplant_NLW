import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import colors from '../styles/colors'

interface ButtonProps extends TouchableOpacity {
    title: String
}

export default function Button({title, ...rest}: ButtonProps){
    return(
        <TouchableOpacity style={styles.button} {...rest}>
        <Text style={styles.buttonText} >
            {title}
        </Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    buttonText: {
        color: colors.white,
        fontSize: 24,
    }
})