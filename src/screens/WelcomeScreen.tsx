import React from 'react'
import { Text, Image, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native'
import { Entypo} from '@expo/vector-icons'


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
            <Image source={wateringImg} style={styles.image} resizeMode='contain' />
            <Text style={styles.subtitle} >
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Text style={styles.buttonText} >
                <Entypo name='chevron-right' style={styles.buttonIcon} />
            </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
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
        height: Dimensions.get('window').width * 0.7
    },
    button: {
        backgroundColor: colors.green,
        height: 56,
        width: 56,
        borderRadius: 16,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    buttonText: {
        color: colors.white,
        fontSize: 24,
    },
    buttonIcon:{
        fontSize: 24,
    },
})

export default WelcomeScreen
