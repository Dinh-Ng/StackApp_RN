import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from './types'
import Home from '@modules/screens/Home'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator()

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
)

const DrawerStack = () => (
  <Drawer.Navigator initialRouteName="HomeStack">
    <Drawer.Screen name="HomeStack" component={HomeStack} />
  </Drawer.Navigator>
)

const MainNavigator = () => (
  <NavigationContainer>
    <DrawerStack />
  </NavigationContainer>
)

export default MainNavigator
