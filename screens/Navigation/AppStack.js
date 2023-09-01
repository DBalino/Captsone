import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../HomeScreen'
import AboutUs from '../AboutUs';
import ContactUs from '../ContactUs';
import PrivacyPolicy from '../PrivacyPolicy';
import Terms from '../Terms';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return(
        <Drawer.Navigator screenOptions={{headerShown:false}}>
            <Drawer.Screen name= "Home Screen" compornent={HomeScreen}/>
            <Drawer.Screen name= "About Us" component={AboutUs}/>
            <Drawer.Screen name= "Contact Us" component={ContactUs}/>
            <Drawer.Screen name= "Privacy Policy" component={PrivacyPolicy}/>
            <Drawer.Screen name= "Terms of Service" component={Terms}/>
        </Drawer.Navigator>
    );
};

export default AppStack;