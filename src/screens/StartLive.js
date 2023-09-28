
import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

const StartLive = () => {
  return (
   <View style={styles.container}>
    <Text>LiveSection</Text>
   </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',

    },
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        paddingTop: 20,
        borderBottomWidth: 9,
        borderColor: 'white',
        elevation: 10,
    
    }
});
export default StartLive;
