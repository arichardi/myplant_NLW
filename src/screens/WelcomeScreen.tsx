import React from 'react'
import { Text, Image, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native'
import { Entypo} from '@expo/vector-icons'


import wateringImg from '../assets/watering.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

const WelcomeScreen = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.title} >
                Gerencie {'\n'}
                suas plantas de {'\n'}
                forma fácil
                </Text>
            <Image source={wateringImg} style={styles.image} resizeMode='contain' />
            <Text style={styles.subtitle} >
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Text>
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
        justifyContent: 'space-around',
        paddingHorizontal: 20,
    },
    title: {
        marginTop: 70,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 34,
    }, 
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
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
    buttonIcon:{
        fontSize: 24,
        color: colors.white
    },
})

export default WelcomeScreen
