
import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';


const ProfileScreen = () => {
  return (
    <View style={styles.container}>
    <Image
      source={require('../assets/profile.png')} 
      style={styles.image}
    />
     <Text style={styles.name}>Zion Dayle L. Malinao</Text>
  </View>
);
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop:50,
  },
  name:{
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
  }
});
export default ProfileScreen;