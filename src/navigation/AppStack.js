import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AboutUs from '../screens/AboutUs';
import ContactUs from '../screens/ContactUs';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import Terms from '../screens/Terms';
import CustomDrawer from '../components/CustomDrawer';
import TabNavigator from './TabNavigator';


import Ionicons from 'react-native-vector-icons/Ionicons';
import LiveSection from '../screens/LiveSection';

const Drawer = createDrawerNavigator();

const AppStack = () => {
 const shouldShowLiveSection = false;

    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOpntions={{ headerShown: false }}
      >
        <Drawer.Screen
          name="Home Page"
          component={TabNavigator}
          options={{
            headerShown: false,
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="About Us"
          component={AboutUs}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons
                name="information-circle-outline"
                size={25}
                color={color}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Contact Us"
          component={ContactUs}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="mail-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Privacy Policy"
          component={PrivacyPolicy}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="document-text-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Terms of Service"
          component={Terms}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="settings-outline" size={22} color={color} />
            ),
          }}
        />
        {shouldShowLiveSection && (
          <Drawer.Screen
            name="Live section"
            component={LiveSection}
            options={{
              headerShown: false,
              drawerIcon: ({ color }) => (
                <Ionicons name="settings-outline" size={22} color={color} />
              ),
            }}
          />
        )}
      </Drawer.Navigator>
    );
};

export default AppStack;