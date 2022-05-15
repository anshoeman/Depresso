import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import Authenticated from '../Authenticated';
import MusicCard from '../../Components/Music/MusicCard';
import Header from '../../Components/Layouts/Header'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
export default function Drawer() {
  return (
    <NavigationContainer>
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="header" component={Header} />
      <Drawer.Screen name="music" component={MusicCard} />
    </Drawer.Navigator>
  </NavigationContainer>
  )
}