
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

  const handlePress = () => {
    navigation.navigate("Home");
  };

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.orderlist}>
        <Icon
          name="remove-shopping-cart"
          size={50}
          color={"black"}
       
        
        />
        <Text style={styles.orders}> no orders yet</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    elevation: 5,
    marginTop: -340,
    width: 400,
    height: 120,
  },
  hamburger: {
    marginLeft: 30,
    backgroundColor: "#009EFF",
    height: 40,
    borderRadius: 30,
    width: 50,
    paddingTop: 5,
    marginTop: 50,
  },
  text: {
    marginRight: 270,
    marginTop: 48,
    fontSize: 20,
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
    resizeMode: "stretch",
  },
  hamburgerIcon: {
    width: 40,
    height: 35,
    padding: 20,
    marginLeft: 30,
    marginTop: 5,
    resizeMode: "stretch",
  },
  orderlist: {
    justifyContent: "center",
    alignItems: "center",
    
  },
  orders: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
   
  },
});

export default CartScreen;