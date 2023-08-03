import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Homepage from '../screens/Homepage';
import PictureScreen from '../screens/PictureScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StartLive from '../screens/StartLive';



const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Picture') {
            iconName = 'photo-camera';
          } else if (route.name === 'Cart') {
            iconName = 'shopping-cart';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name == 'Start Live')
          iconName = 'stream';

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#009EFF', 
        inactiveTintColor: 'gray', 
      }}
    >
      <Tab.Screen options={{headerShown: false}} name="Home" component={Homepage} />
      <Tab.Screen options={{headerShown: false}}name="Picture" component={PictureScreen} />
      <Tab.Screen options={{headerShown: false}} name="Start Live" component={StartLive}/>
      <Tab.Screen options={{headerShown: false}} name="Profile" component={ProfileScreen} />
      <Tab.Screen options={{headerShown: false}} name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;