import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

import Button from '../components/Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

const Confirmation = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}> 
                <Text style={styles.emoji} >
                😃
                </Text>
                <Text style={styles.title}>
                    Prontinho
                </Text>
                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar das suas
                    plantinhas com muiio cuidado.
                </Text>
            <View style={styles.footer}>
                <Button title='confirmar'/>
            </View>
            </View >
        </SafeAreaView>
    )
}

export default Confirmation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },
    emoji:{
        fontSize: 78,        
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 32,
        marginTop: 15
    },
    subtitle: {
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 17,
        paddingVertical: 10,
        color: colors.heading
    },
    footer:{
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20
    },
})