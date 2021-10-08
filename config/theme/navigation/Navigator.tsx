import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../../screens/login/LoginScreen";

const Stack = createStackNavigator();
 
export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
      <Stack.Screen name='Login' component={LoginScreen} />
    </Stack.Navigator>
  );
}