import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import LoadingScreen from '../screens/LoadingScreen';
import Login from '../screens/Login';
import Registration from '../screens/Registration';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return(
        <Stack.Navigator screenOptions= {{headerShown:false}}>
            <Stack.Screen options={{headerShown: false}} name="Loading Screen" component={LoadingScreen} />
            <Stack.Screen options={{headerShown: false}} name="Login Page" component={Login} />
            <Stack.Screen options={{headerShown: false}} name="Registration Page" component={Registration} />
        </Stack.Navigator>
    )
};

export default AuthStack;;