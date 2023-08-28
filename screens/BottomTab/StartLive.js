
import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const StartLive = () => {
  return (
    <View style={styles.navbar} /* Top Nav Bar Content */>
    <TouchableOpacity style={styles.hamburger}>
      <Image source={require('../../assets/hamburger.png')} style={styles.hamburgerIcon} />
    </TouchableOpacity>

    <Image source={require('../../assets/TNG_L.png')} style={styles.logo} />
    
    <TouchableOpacity style={styles.chat}>
      <Image source={require('../../assets/chat.png')} style={styles.chatIcon} />
    </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        paddingTop: 20,
        borderBottomWidth: 9,
        borderColor: 'white',
        elevation: 10,
    },
    hamburger: {
        marginRight: 10,
    },
    chat: {
        marginLeft: 10,
       
    },
    logo: {
        width: 190,
        height: 50,
        marginTop: 30,
    },
    chatIcon: {
        width: 35,
        height: 10,
        padding: 20,
        marginRight: 30,
        marginTop: 5,
        resizeMode: 'stretch',
    },
    hamburgerIcon:{
        width: 40,
        height: 35,
        padding: 20,
        marginLeft: 30,
        marginTop: 5,
        resizeMode: 'stretch',
    }
});
export default StartLive;
