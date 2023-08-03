import React from "react";  
import { View, TouchableOpacity, Image, Text, StyleSheet, ScrollView, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


const Tab = createBottomTabNavigator();

const Homepage = () => {
  return (

    <View style={styles.screenContainer}>
      
      

    
    <SafeAreaView style={styles.scroll}>
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.hamburger}>
        <Image source={require('../assets/hamburger.png')} style={styles.hamburgerIcon} />
      </TouchableOpacity>

      <Image source={require('../assets/TNG_L.png')} style={styles.logo} />
      
      <TouchableOpacity style={styles.chat}>
        <Image source={require('../assets/chat.png')} style={styles.chatIcon} />
      </TouchableOpacity>

      </View>
    <ScrollView style={styles.scrollView}> 
    
    
    <Text style={{fontSize: 17, fontWeight: 'bold', paddingRight: 45, paddingTop: 20,}}>
      Women, Men, Underwear, Top, Trouser
    </Text>

    <ScrollView horizontal={true} /* First Category */>
      <ScrollView>

      <View style={styles.category}>
          <View style={styles.row}>
            <Image source={require('../assets/shus.png')} style={styles.image} />
            <Image source={require('../assets/damit.png')} style={styles.image} />
            <Image source={require('../assets/sando.png')} style={styles.image} />
            <Image source={require('../assets/undies.png')} style={styles.image} />
          </View>
        </View>
      </ScrollView>
    </ScrollView>

    <Text style={{fontSize: 17, fontWeight: 'bold', paddingRight: 45, paddingTop: 20,}}>
      Kids, Shoes, Bag, Shorts, Pants
    </Text>
    <ScrollView horizontal={true} /* Second Category */>
      <ScrollView>
        <View style={styles.category}>
          <View style={styles.row}>
            <Image source={require('../assets/sandobata.png')} style={styles.image} />
            <Image source={require('../assets/bagbata.png')} style={styles.image} />
            <Image source={require('../assets/shusbata.png')} style={styles.image} />
            <Image source={require('../assets/shortbata.png')} style={styles.image} />
          </View>    
        </View>
      </ScrollView>
    </ScrollView>

    <Text style={{fontSize: 17, fontWeight: 'bold', paddingRight: 45, paddingTop: 20,}}>
      Kids, Men, Women, Socks
    </Text>
    
    <ScrollView horizontal={true} /* Third Category */>
      <ScrollView>
        <View style={styles.category}>
          <View style={styles.row}>
            <Image source={require('../assets/medyas.png')} style={styles.image} />
            <Image source={require('../assets/socksbata.png')} style={styles.image} />
            <Image source={require('../assets/medyasmatanda.png')} style={styles.image} />
          </View>
        </View>
      </ScrollView>
    </ScrollView>

    <Text style={{fontSize: 17, fontWeight: 'bold', paddingRight: 45, paddingTop: 20,}}>
      Men, Women, Bag, Watch, Necklace
    </Text>

    <ScrollView horizontal={true} /* Fourth Category */>
      <ScrollView>
        <View style={styles.category}>
          <View style={styles.row}>
            <Image source={require('../assets/necklace.png')} style={styles.image} />
            <Image source={require('../assets/bag.png')} style={styles.image} />
            <Image source={require('../assets/relo.png')} style={styles.image} />
          </View>
        </View>
      </ScrollView>
    </ScrollView>




    </ScrollView>

    </SafeAreaView>
    

  </View>

    
    
);


};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingTop: null,
    borderBottomWidth: 9,
    borderColor: 'white',
    elevation: 9,
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
  },
  
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    height: 56,
  },
  pictureContainer: {
    width: 54,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    width: 70,
    height: 99,
    paddingTop: 110,
    marginTop: 12,
    resizeMode: 'cover',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  containerImage:{
    flexDirection: 'row',
  },
  category:{
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: 160,
    height: 160,
    margin: 5,
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
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },


});

export default Homepage;


