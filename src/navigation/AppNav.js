
import React, {useContext} from "react";  
import {View, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";


import TabNavigator from "./TabNavigator";
import Myshop from "../screens/MyShop";
import LiveSection from "../screens/LiveSection";
import Messages from "../screens/Messages";
import ChatScreen from "../screens/ChatScreen";
import StartLiveCategories from "../screens/SetLiveCategories";
import SellerLive from "../screens/SellerLive";
// fix additional screens navigation 


const Stack = createStackNavigator();
function AppNav(){
  return(

    <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen options={{headerShown: false}} name="App Stack" component={AppStack} />
            <Stack.Screen options={{headerShown: false}} name="My Shop" component={Myshop} />
            <Stack.Screen options={{headerShown: false}} name="Live Section" component={LiveSection} />
            <Stack.Screen name="Message" component={Messages}/>
            <Stack.Screen name="Chat" component={ChatScreen}/>
            <Stack.Screen options={{headerShown: false}} name="Seller Live" component={SellerLive}/>
            <Stack.Screen options={{headerShown: false}} name="Start Live" component={StartLiveCategories}/>
            
        </Stack.Navigator>
    </NavigationContainer>
    
    );
    }
export default AppNav;