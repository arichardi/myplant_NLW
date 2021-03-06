import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import EnviromentButton from '../components/EnviromentButton'
import Header from '../components/Header'
import Load from '../components/Load'
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

interface EnviromentSelectedProps {

}

const PlantSelectScreen = () => {
    //enviroments from api
    const [ enviroment, setEnviroment] = useState<EnviromentProps[]>()
    //all plants
    const [ plants, setplants] = useState<PlantProps[]>()
    //filtered plants based on plants
    const [ filteredPlants, setFilteredPlants] = useState<PlantProps[]>([])
    //enviroment selected
    const [ enviromentSelected, setEnviromentSelected] = useState('all')
    //loading during fetch plants
    const [ loading, setLoading] = useState(true)
    //qty of plants pages
    const [page, setPage] = useState(1)
    //There's more cards to load
    const [loadMore, setLoadMore] = useState(false)

    //navigation modules
    const navigation = useNavigation()


    //onPressFunctions
    function handleEnviromentSelect(enviroment: string){
        setEnviromentSelected(enviroment)

        if(enviroment === 'all'){
            return setFilteredPlants(plants)
        }
        const filtered = plants?.filter( (item) => item.environments.includes(enviroment))
        setFilteredPlants(filtered)
    }



    async function fetchPlant(){
        const {data} = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`)
        
        if(!data)
            return setLoading(true)
        if(page > 1){
            setplants( oldValue => [...oldValue, ...data])
            setFilteredPlants( oldValue => [...oldValue, ...data])
        }else{
            setplants(data)
            setFilteredPlants(data)
            setLoading(false)
        }

        setLoading(false)
        setLoadMore(false)

    }



    function handleFetchMore(distance: number){
        if(distance < 1)
            return;
        setLoadMore(true)
        setPage( oldValue => oldValue + 1 )
        fetchPlant()
    }

    function handlePlantSelect(plant: PlantProps){
        navigation.navigate('PlantSaveScreen', { plant })
    }

    //enviroment data
    useEffect( () => {
        async function fetchEnviroment(){
            const { data } = await api
            .get(`plants_environments?_sort=title&_order=asc`)
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
    useEffect( () => {fetchPlant()}, [])

    if(loading){
        return <Load />
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />
                <Text style={styles.title} >Em qual ambiente</Text>
                <Text style={styles.subtitle} >voc?? quer colocar a sua planta?</Text>
            </View>
            <View>
                <FlatList 
                    data={enviroment}
                    keyExtractor={ (item) => String(item.key)}
                    renderItem={ ({item}) => (
                        <EnviromentButton 
                        title={item.title} 
                        active={ item.key === enviromentSelected}
                        onPress={ () => handleEnviromentSelect(item.key)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.enviromentButton}
                />
            </View>
            <View style={styles.plants}>
                <FlatList 
                data={filteredPlants}
                keyExtractor={ (item) => String(item.id)}
                renderItem={ ({item}) => (
                    <PlantCardPrimary 
                        data={item} 
                        onPress={() => handlePlantSelect(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                contentContainerStyle={styles.contentContainerStyle}
                onEndReachedThreshold={0.1}
                onEndReached={({ distanceFromEnd}) => handleFetchMore(distanceFromEnd)}
                ListFooterComponent={
                   loadMore ? <ActivityIndicator color={colors.green}/> : <></>
                 }
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
        paddingVertical: 20
    },

})
