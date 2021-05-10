import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Header from '../components/Header'

import colors from '../styles/colors'

const PlantSelectScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
        </View>
    )
}

export default PlantSelectScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background,
    },

})
