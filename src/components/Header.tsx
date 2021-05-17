import React, { useEffect, useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import colors from '../styles/colors'
import userImg from '../assets/millapic.jpg'
import fonts from '../styles/fonts'

const Header = () => {

    const [userName, setUserName] = useState<string>()

    useEffect( () => {
        async function loadStorageName(){
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUserName(user || ''); 
        }

        loadStorageName()

    }, [])

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting} >Olá,</Text>
                <Text style={styles.userName} >
                    {userName}
                </Text>
            </View>
            <Image source={userImg} style={styles.userImage}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: colors.white,
        marginTop: 30,

    },
    greeting:{
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName:{
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 35,
    },
    userImage:{
        width: 70,
        height: 70,
        borderRadius: 35
    },
})
