import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView, Image, Alert, TouchableOpacity, Platform } from 'react-native'
import { SvgUri } from 'react-native-svg'
import { useRoute } from '@react-navigation/core'
import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import { format, isBefore } from 'date-fns'

import waterdrop from '../assets/waterdrop.png'
import Button from '../components/Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface Params {
    plant: {
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
}}


const PlantSaveScreen = () => {

    //receive the data
    const route = useRoute()
    const { plant } = route.params as Params;

    //save time
    const [ selectedDateTime, setSelectedDateTime ] = useState(new Date())
    const [ showDateTimePicker, setShowDateTimePicker] = useState(Platform.OS == 'ios')

     function handleChangeTime(event: Event, dateTime: Date | undefined){
        if(Platform.OS === 'android'){
            setShowDateTimePicker(oldState => !oldState)
        }

        if(dateTime && isBefore(dateTime, new Date())){
            setSelectedDateTime(new Date());
            return Alert.alert('Escolha uma data no futuro!')
        }

        if(dateTime)
            setSelectedDateTime(dateTime)
    }

    function handleOpenDate(){
        setShowDateTimePicker(oldState => !oldState)
    }

    return (
        <View style={styles.container}>
        <View style={styles.plantInfo}>
            <SvgUri 
                uri={plant.photo}
                height={150}
                width={150}
            />
            <Text style={styles.plantName}>
                {plant.name}
            </Text>
            <Text style={styles.plantAbout}>
                {plant.about}
            </Text>
        </View>
        <View style={styles.controllers}>
            <View style={styles.tipContainer}>
                <Image style={styles.tipImage} source={waterdrop} />
                <Text style={styles.tipText} >
                    {plant.water_tips}
                </Text>
            </View>

            <Text style={styles.alertLabel}>
                Escolha o melhor horário para ser lembrado
            </Text>

            <DateTimePicker 
                value={selectedDateTime}
                mode='time'
                display='spinner'
                onChange={handleChangeTime}
            />

            <TouchableOpacity style={styles.changeDateButton} onPress={handleOpenDate} >
                <Text style={styles.changeDate} >
                    {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
                </Text>
            </TouchableOpacity>

            <Button 
                title='Cadastrar Planta'
                onPress={ () => {}}
            />
        </View>
        </View>
    )
}

export default PlantSaveScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'space-between',
        backgroundColor: colors.shape,
    },
    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape
    },
    plantName:{
        fontFamily: fonts.heading,
        fontSize: 24,
        color: colors.heading,
        marginTop: 15
    },
    plantAbout:{
        textAlign: 'center',
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 17,
        marginTop: 10
    },
    controllers:{
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20
    },
    tipContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        padding: 20,
        borderRadius: 20,
        position: 'relative',
        bottom: 60
    },
    tipImage:{
        width: 56,
        height: 56,
    },
    tipText:{
        flex: 1,
        marginLeft: 20,
        fontFamily: fonts.text,
        color: colors.blue,
        fontSize: 17,
        textAlign: 'justify',
    },
    alertLabel:{
        textAlign: 'center',
        fontFamily: fonts.complement,
        color: colors.heading,
        fontSize: 12,
        marginBottom: 5,
    },
    changeDate:{
        color: colors.heading,
        fontSize: 24,
        fontFamily: fonts.text
    },
    changeDateButton:{
        width: '100%',
        alignItems: 'center',
        paddingVertical: 40
    },
})
