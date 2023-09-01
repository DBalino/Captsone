import React from 'react';
import { View, Text, ImageBackground, Image, } from 'react-native'
import { DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = (props) => {
    return(
        <View style={{flex:1}}>
        <DrawerContentScrollView{...props} contentContainerStyle={{backgroundColor:'#5F1C1C'}}>

        <ImageBackground source={require('../../assets/bg.png')} style={{padding:20,}}>
            <Image source={require('../../assets/profile.png')}style={{height:90,width:90,borderRadius:40,marginBottom:20,justifyContent:'center',alignContent:'center'}}/>
            <Text style={{color:'#ffff', fontSize:18}}>@Username</Text>
            </ImageBackground>

            <View style={{flex:1, backgroundColor:'#ffff', paddingTop:10}}>
            <DrawerItemList {...props}/>
            </View>
        </DrawerContentScrollView>
        <View style={{padding:20,borderTopWidth:1,borderTopColor:'#ccc'}}>
            <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <Ionicons name="exit-outline" size={22}/>
            <Text style={{marginLeft:5}}>Logout</Text>
            </View>
            </TouchableOpacity>
        </View>
        </View>

    );
}
export default CustomDrawer;