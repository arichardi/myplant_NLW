import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import colors from '../styles/colors'
import WelcomeScreen from '../screens/WelcomeScreen';
import UserIdentification from '../screens/UserIdentification';
import Confirmation from '../screens/Confirmation';
import PlantSelectScreen from '../screens/PlantSelectScreen'

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            }
        }}
    >
        <stackRoutes.Screen 
            name='WelcomeScreen'
            component={WelcomeScreen}
        />
        <stackRoutes.Screen 
            name='UserIdentification'
            component={UserIdentification}
        />
        <stackRoutes.Screen 
            name='Confirmation'
            component={Confirmation}
        />
        <stackRoutes.Screen 
            name='PlantSelectScreen'
            component={PlantSelectScreen}
        />
    </stackRoutes.Navigator>
) 

export default AppRoutes