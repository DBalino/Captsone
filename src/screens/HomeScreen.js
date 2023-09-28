import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, ScrollView, } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen({navigation}){

return(
  <View style={styles.screenContainer}>

    <View style={styles.navbar}>
      
      <TouchableOpacity style={styles.hamburger} onPress = {()=> navigation.openDrawer()}>
      <Ionicons name="list-outline" size={40}/> 
      </TouchableOpacity>

      <Image source={require('../../assets/TNG_L.png')} style={styles.logo} />
      
      <TouchableOpacity style={styles.chat}  onPress = {()=> navigation.navigate('Message')}>
      <Ionicons name="chatbubble-ellipses-outline" size={35}/> 
      </TouchableOpacity>

    </View>
    
    <SafeAreaView style={styles.scroll}>
    <ScrollView style={styles.scrollView}> 

    <Text style={styles.header1}>
      <Text>Live channels </Text>
      <Text style={styles.header2}>
        we think you'll like
      </Text>
    </Text>

  
    <ScrollView horizontal={true} /* First Category */>
      <ScrollView>

      <View style={styles.category}>
        <TouchableOpacity onPress = {()=> navigation.navigate('Live Section')}>
          <View style={styles.row}>
            <Image source={require('../../assets/333.png')} style={styles.liveImage} />
            <Image source={require('../../assets/22.png')} style={styles.liveImage} />
            <Image source={require('../../assets/33.png')} style={styles.liveImage} />
            <Image source={require('../../assets/111.png')} style={styles.liveImage} />
            <Image source={require('../../assets/222.png')} style={styles.liveImage} />
            <Image source={require('../../assets/11.png')} style={styles.liveImage} />
          </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScrollView>

    <Text style={styles.header3}>
      <Text>Categories </Text>
      <Text style={styles.header4}>
        you think you'll like
      </Text>
    </Text>

    <Text style={{fontSize: 17, fontWeight: 'bold', paddingRight: 45, paddingTop: 10,}}>
      Kids, Shoes, Bag, Shorts, Pants
    </Text>
    <ScrollView horizontal={true} /* Second Category */>
      <ScrollView>
        <View style={styles.category}>
          <View style={styles.row}>
            <Image source={require('../../assets/sandobata.png')} style={styles.image} />
            <Image source={require('../../assets/bagbata.png')} style={styles.image} />
            <Image source={require('../../assets/shusbata.png')} style={styles.image} />
            <Image source={require('../../assets/shortbata.png')} style={styles.image} />
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
            <Image source={require('../../assets/medyas.png')} style={styles.image} />
            <Image source={require('../../assets/socksbata.png')} style={styles.image} />
            <Image source={require('../../assets/medyasmatanda.png')} style={styles.image} />
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
            <Image source={require('../../assets/necklace.png')} style={styles.image} />
            <Image source={require('../../assets/bag.png')} style={styles.image} />
            <Image source={require('../../assets/relo.png')} style={styles.image} />
          </View>
        </View>
      </ScrollView>
      
    </ScrollView>
    </ScrollView>
    </SafeAreaView>
    

  </View>
);
}
const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingTop: 125,
    marginTop:30,
    paddingLeft: 90,
    paddingRight: 90,
    padding: 15,
    elevation:5,
  },
  hamburger: {
    marginRight: 0,
    marginLeft: 30,
    marginTop: 15,
  },
  chat: {
    marginLeft: 0,
    marginRight:30,
    marginTop:15,
  },
  logo: {
    width: 190,
    height: 50,
    marginTop: 30,
    marginRight:40,
    marginLeft:40,
  },
  chatIcon: {
    width: 35,
    height: 10,
    padding: 20,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 5,
    resizeMode: 'stretch',
  },
  hamburgerIcon:{
    width: 40,
    height: 35,
    padding: 20,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5,
  },
  bottomContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 9,
    borderTopColor: '#ccc',
    height: 56,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
    marginHorizontal: 5,
   marginTop: -20,
   marginBottom: 20,
  },
  scroll:{
    paddingBottom: 110,
  },
  containerImage:{
    flexDirection: 'row',
  },
  category:{
    flexDirection: 'column',
    alignItems: 'center',
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: 170,
    height: 165,
    margin: 5,
  },
  liveImage:{
    width: 170,
    height: 250,
    margin: 5,
  },
  profileBG:{
    marginBottom: 100,
    width: 400,
    height: 270,
    alignItems: 'center',

  },
  header1:{
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 45,
    paddingTop: 5,
    color: "#FF0000",
  },
  header2:{
    fontSize: 15,
    fontWeight: "normal",
    color: "black",

  },
  header3:{
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 45,
    paddingTop: 15,
    color: "#009EFF",
  },
  header4:{
    fontSize: 15,
    fontWeight: "normal",
    color: "black",

  },
});
export default HomeScreen;