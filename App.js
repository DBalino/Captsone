APP.JS
import React, { useState } from "react";  
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './screens/Login';
import Registration from './screens/Registration';
import LoadingScreen from './screens/LoadingScreen';
import Homepage from './screens/BottomTab/Homepage';
import BottomTabNavigator from './screens/BottomTabNavigator';
import Sidebar from './screens/Sidebar';
import { AuthProvider } from './screens/AuthProvider';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => (
  <Stack.Navigator>
       <Stack.Screen options={{headerShown: false}} name="Loading Screen" component={LoadingScreen} />
        <Stack.Screen options={{headerShown: false}} name="Login Page" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="Registration Page" component={Registration} />
        <Stack.Screen options={{headerShown: false}} name="Home Page" component={Homepage} />
        <Stack.Screen options={{headerShown: false}} name="Bottom Bar" component={BottomTabNavigator} />
  </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Drawer.Navigator initialRouteName="MainStack" drawerContent={(props) => <Sidebar {...props} CustomDrawerContent{...props} />}>
          <Drawer.Screen name="Mainstack" component={MainStack} />
          {/* Add other drawers */}
        </Drawer.Navigator>
      </AuthProvider>
    </NavigationContainer>

  );
}

export default App; 	



