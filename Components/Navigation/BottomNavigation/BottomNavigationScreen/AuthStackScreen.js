import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Analytics from '../../../../screens/Analytics';
import Authenticated from '../../../../screens/Authenticated';
import MusicCard from '../../../Music/MusicCard';
import MusicList from '../../../Music/MusicList';
const AuthStack = createNativeStackNavigator();

export default function AuthStackScreen(){
    return (
        <AuthStack.Navigator initialRouteName='auth'>
            <AuthStack.Screen name="auth" component={Authenticated} />
        </AuthStack.Navigator>
    )
}