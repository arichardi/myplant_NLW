import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import stackRoutes from './stack.routes'

const Routes = () => (
    <NavigationContainer>
        <stackRoutes ></stackRoutes>
    </NavigationContainer>
)

export default Routes