import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Analytics from '../../../../screens/Analytics';
import Authenticated from '../../../../screens/Authenticated';
const AnalyticsStack = createNativeStackNavigator();

export default function AnalyticsStackScreen(){
    return (
        <AnalyticsStack.Navigator>
            <AnalyticsStack.Screen name="auth" component={Authenticated} />
            <AnalyticsStack.Screen name="analytics" component={Analytics} />
        </AnalyticsStack.Navigator>
    )
}