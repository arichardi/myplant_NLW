import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface ButtonProps {
    title: String
}

export default function Button({title}: ButtonProps){
    return(
        <TouchableOpacity style={styles.button} > 
            <Text style={styles.buttonText}>
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
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontFamily: fonts.heading
    }
})