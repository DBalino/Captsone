import React from "react";  
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Registration from './screens/Registration';
import LoadingScreen from './screens/LoadingScreen';
import Homepage from './screens/Homepage';
import BottomTabNavigator from "./screens/BottomTabNavigator";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Loading Screen" component={LoadingScreen} />
        <Stack.Screen options={{headerShown: false}} name="Login Page" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="Registration Page" component={Registration} />
        <Stack.Screen options={{headerShown: false}} name="Home Page" component={Homepage} />
        <Stack.Screen options={{headerShown: false}} name="Bottom Bar" component={BottomTabNavigator} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App; 