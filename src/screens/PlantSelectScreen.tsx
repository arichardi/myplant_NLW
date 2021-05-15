import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import EnviromentButton from '../components/EnviromentButton'
import Header from '../components/Header'
import PlantCardPrimary from '../components/PlantCardPrimary'
import api from '../services/api'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface EnviromentProps {
    key: string
    title: string
} 

interface PlantProps {
    id: 1
    name: string
    about: string
    water_tips: string
    photo: string
    environments: [string]
    frequency: {
      times: number
      repeat_every: string
    }
}

const PlantSelectScreen = () => {

    const [ enviroment, setEnviroment] = useState<EnviromentProps[]>()
    const [ plants, setplants] = useState<PlantProps[]>()

        //enviroment data
    useEffect( () => {
        async function fetchEnviroment(){
            const { data } = await api.get('plants_environments')
            setEnviroment([
                {
                    key: 'all',
                    title: 'Todos',
                }, ...data
            ])
        }
        fetchEnviroment();
    }, [])

    //plant data
    useEffect( () => {
        async function fetchPlant(){
            const {data} = await api.get('plants')
            setplants(data)
        }
        fetchPlant()
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />
                <Text style={styles.title} >Em qual ambiente</Text>
                <Text style={styles.subtitle} >você quer colocar a sua planta?</Text>
            </View>
            <View>
                <FlatList 
                    data={enviroment}
                    renderItem={ ({item}) => (
                        <EnviromentButton title={item.title} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.enviromentButton}
                />
            </View>
            <View style={styles.plants}>
                <FlatList 
                data={plants}
                renderItem={ ({item}) => (
                    <PlantCardPrimary data={item} />
                )}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                contentContainerStyle={styles.contentContainerStyle}
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
    plants:{
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    },
    contentContainerStyle:{
        marginTop: 20,
    },

})
