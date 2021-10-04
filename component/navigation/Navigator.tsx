 import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import * as React from 'react';
import LoginScreen from '../../screens/login/LoginScreen';
 
 export default function Navigatior() {
   return (
     <NavigationContainer>
       <RootNavigator />
     </NavigationContainer>
   );
 }
 
 const Stack = createStackNavigator();
 
 function RootNavigator() {
   return (
     <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
       <Stack.Screen name='Login' component={LoginScreen} />
     </Stack.Navigator>
   );
 }