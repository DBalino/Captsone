import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {Camera, CameraType} from 'expo-camera';
import * as Medialibrary from 'expo-media-library';


export default function SellerLive (){
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage]= useEffect(null);
  const [type, setType] = useState(Camera.Constants.Type.back.front);
  const [flash, setType] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      Medialibrary.requestPemissionAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted')
    })();
  }, [])
  return(
    <View style={styles.container}>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
 
});
