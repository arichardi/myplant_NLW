import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import Button from  '../components/Button'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

const UserIdentification = () => {

    const navigation = useNavigation()

    function handleSubmit(){
        navigation.navigate('Confirmation')
    }

    //states
    const [isOnFocus, setIsOnFocus] = useState(false)
    const [isOnFilled, setIsOnFilled] = useState(false)
    const [name, setName] = useState<string>()

    function handleBlur(){
        setIsOnFocus(false)
        setIsOnFilled(!!name)
    }
    function handleFocus(){
        setIsOnFocus(true)
    }
    function handleText(value:string){
        setIsOnFilled(!!value)
        setName(value)
    }

    return (
        <View style={styles.master}>
            <KeyboardAvoidingView style={styles.container} 
            behavior={ Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.form} >
                    <Text style={styles.icon}>
                        { isOnFilled? '😊' : '😃' }
                    </Text>
                    <Text style={styles.title} >
                        Como podemos {'\n'}
                        chamar você ?
                    </Text>
                    <TextInput 
                        style={[styles.input, (isOnFocus || isOnFilled) && {borderColor: colors.green}]}
                        placeholder='Digite um nome'
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        onChangeText={handleText}
                    />
                    <View style={styles.footer}>
                        <Button title='confirmar' onPress={handleSubmit} />
                     </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default UserIdentification

const styles = StyleSheet.create({
    master:{
        flex: 1,
        marginTop: 30,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 54,
    },
    icon: {
        fontSize: 44
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20
    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20,
    },
})
