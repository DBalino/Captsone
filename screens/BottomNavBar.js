
import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, ScrollView, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


const Tab = createBottomTabNavigator();

function HomeScreen ({ route, navigation }) {
  const { username } = route.params;

  const goToProfile = () => {
    
    navigation.navigate('Side Bar', { username });
  };
return(
  <View style={styles.screenContainer}>

    <View style={styles.navbar}>
      
      <TouchableOpacity style={styles.hamburger}>
      <Image source={require('../assets/hamburger.png')} style={styles.hamburgerIcon} />
      </TouchableOpacity>

      <Image source={require('../assets/TNG_L.png')} style={styles.logo} />
      
      <TouchableOpacity style={styles.chat}>
        <Image source={require('../assets/chat.png')} style={styles.chatIcon} />
      </TouchableOpacity>

    </View>
    
    <SafeAreaView style={styles.scroll}>
    <ScrollView style={styles.scrollView}> 
    
    <Text style={{fontSize: 17, fontWeight: 'bold', paddingRight: 45, paddingTop: 5,}}>
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


const PictureScreen = () => (
  <View style={styles.screenContainer}>
  </View>
);

//Cart Screen
const CartScreen = () => (
  <View style={styles.screenContainer}>
    <Text>"Cart" W.I.P </Text>
  </View>
);
const LiveScreen = () => (
  <View style={styles.screenContainer}>
    <Text>"Live" W.I.P </Text>
  </View>
);

//Account Screen
const AccountScreen = () => (
  <View style={styles.screenContainer}>
    <Text>"Account" W.I.P </Text>
  </View>
);

function BottomNavBar(){
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        tabBarOptions={{
          style: styles.bottomContainer,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
        name="Purchase History"
          component={PictureScreen}
          options={{
            tabBarLabel: 'History',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="calendar-check-o" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Live"
          component={LiveScreen}
          options={{
            tabBarLabel: 'Live',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="eercast" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="shopping-cart" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={size} color={color} />
            ),
          }}
        />
      
      </Tab.Navigator>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingTop: 125,
    paddingLeft: 90,
    paddingRight: 90,
    padding: 15,
    elevation: 5,
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
    resizeMode: 'stretch',
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
    marginBott: 200,
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
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: 170,
    height: 165,
    margin: 5,
  },
});

export default BottomNavBar;