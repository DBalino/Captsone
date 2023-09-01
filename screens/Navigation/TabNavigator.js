import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../HomeScreen';
import PurchaseHistoryScreen from '../BottomTab/PurchaseHistoryScreen';
import StartLive from '../BottomTab/StartLive';
import ProfileScreen from '../BottomTab/ProfileScreen';
import CartScreen from '../BottomTab/CartScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';



const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarStyle:{height:50}
    }}>
        
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({color, size}) => (
                <Ionicons name="home-outline" color={color} size={size}/>
            )
        }}/>

        <Tab.Screen name="History" component={PurchaseHistoryScreen}  options={{
            tabBarIcon: ({color, size}) => (
                <Ionicons name="cart-outline" color={color} size={30}/>
            )
        }} />

        <Tab.Screen name="Start Live" component={StartLive}options={{
            tabBarIcon: ({color, size}) => (
                <Ionicons name="videocam-outline" color={color} size={30}/>
            )
        }}/>

        <Tab.Screen name="Cart" component={CartScreen} options={{
            tabBarIcon: ({color, size}) => (
                <Feather name="shopping-bag" color={color} size={size}/>
            )
        }} />

        <Tab.Screen name="Profile" component={ProfileScreen} options={{
            tabBarIcon: ({color, size}) => (
                <Ionicons name="person-outline" color={color} size={25}/>
            )
        }} />
    </Tab.Navigator>
    );
}

export default TabNavigator;