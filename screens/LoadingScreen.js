import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Text} from 'react-native';
import LottieView from 'lottie-react-native';

    const LoadingScreen = ({navigation}) => {
   
      return (
        <View style={styles.LScreen}>
          <ImageBackground source={require('../assets/loadingscreen.png')}
            style={styles.backgroundImage}>
          </ImageBackground>
        

        <TouchableOpacity style = {styles.text} onPress = {()=> navigation.navigate('Login Page')}>
            <Text style = {styles.text2}>Welcome</Text>
          <View style = {[StyleSheet.absoluteFillObject, styles.spinning]}></View>
            <LottieView source={require('../assets/loading.json')} autoPlay loop  />
        </TouchableOpacity>

        
        </View>
      );
    };
    LoadingScreen.navigationOptions = {
      drawerLabel: () => null, // Hide sidebar label for this screen
    };
    const styles = StyleSheet.create({
      LScreen:{
        flex: 1,
        backgroundColor: 'white'
      },
      backgroundImage:{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
      },
      text2:{
       textAlign: 'center',
       justifyContent: 'center',
       backgroundColor: 'white',
       marginBottom: 40,
       fontSize: 50,
       color:'white'
      },
      spinning:{
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
      }



    });

  
  export default LoadingScreen;