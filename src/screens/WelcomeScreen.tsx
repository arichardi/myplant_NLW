import React from 'react'
import { Text, Image, StyleSheet, View } from 'react-native'

import Button from '../components/Button'

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors'

const WelcomeScreen = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.title} >
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
                </Text>
            <Image source={wateringImg} style={styles.image}/>
            <Text style={styles.subtitle} >
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>
            <Button 
                title='Avançar'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        marginTop: 70,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading
    }, 
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    image: {
        height: 284,
        width: 292
    }
})

export default WelcomeScreen
