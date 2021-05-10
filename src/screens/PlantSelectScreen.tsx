import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import EnviromentButton from '../components/EnviromentButton'

import Header from '../components/Header'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

const PlantSelectScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />
                <Text style={styles.title} >Em qual ambiente</Text>
                <Text style={styles.subtitle} >você quer colocar a sua planta?</Text>
            </View>
            <View>
                <FlatList 
                    data={[1,2,3,4,5,6]}
                    renderItem={ () => (
                        <EnviromentButton title='cozinha'/>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.enviromentButton}
                />
            </View>
        </View>
    )
}

export default PlantSelectScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background,
    },
    header:{
        padding: 30
    },
    title:{
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15
    },
    subtitle:{
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.text,
        lineHeight: 20,
    },
    enviromentButton:{
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
    },

})
