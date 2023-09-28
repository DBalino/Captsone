import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import PurchaseHistoryScreen from '../screens/PurchaseHistoryScreen';
import StartLive from '../screens/StartLive';
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen';
import LiveSection from '../screens/LiveSection';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import livebutton from '../../assets/livebutton.jpg'

  const toggleBottomNavBar = () => {
    setBottomNavBarVisible(!isBottomNavBarVisible);
  }
const Tab = createBottomTabNavigator();


const TabNavigator = ({navigation}) => {
  const showLiveSection = false;
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 55,
            position: "absolute",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="History"
          component={PurchaseHistoryScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cart-outline" color={color} size={30} />
            ),
          }}
        />

        <Tab.Screen
          name="Start Live"
          component={StartLive}
          options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Start Live")}
              >
                <View
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor: "red",
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 30,
                  }}
                >
                  <Image
                    source={livebutton}
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 50,
                      tintColor: "white",
                    }}
                  ></Image>
                </View>
              </TouchableOpacity>
            ),
          }}
        />

        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="shopping-bag" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" color={color} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
    );
}

export default TabNavigator;