import React from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const handlePress = () => {
  navigation.navigate("Home");
};
const data = [
  {
    image: require("../../assets/necklace.png"),
    text: "CONG CLOTHING                                 99.8% Gold Wireless Necklace               ____________________________ ₱2369.00",
  },
  {
    image: require("../../assets/damit.png"),
    text: "CONG CLOTHING                                 RGB T-Shirt 100% Cotton                                     ____________________________ ₱1498.00",
  },
  {
    image: require("../../assets/sandobata.png"),
    text: "CONG CLOTHING                                 Kids Sando for Kids                                     ____________________________ ₱294.00",
  },
  {
    image: require("../../assets/socksbata.png"),
    text: "CONG CLOTHING                                 Multilayered Socks 200% Cotton                                     ____________________________ ₱527.00",
  },
  {
    image: require("../../assets/medyas.png"),
    text: "CONG CLOTHING                                 Kids Water Proof Socks                                     ____________________________ ₱349.00",
  },
  {
    image: require("../../assets/sando.png"),
    text: "CONG CLOTHING                                  500% Cotton Sando                                   ____________________________ ₱119.00",
  },
  {
    image: require("../../assets/shus.png"),
    text: "CONG CLOTHING                                 Nike Shoe 100% Jump Boost                                     ____________________________ ₱2349.00",
  },
  {
    image: require("../../assets/undies.png"),
    text: "CONG CLOTHING                                 Liquid Cooling Underwear                                     ____________________________ ₱449.00",
  },
];

const PurchaseHistoryScreen = () => {
  return (
    <ScrollView style={styles.historyContainer}>
      {data.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.text}>{item.text},</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    paddingTop: 125,
    paddingLeft: 90,
    paddingRight: 90,
    padding: 15,
    elevation: 5,
  },
  hamburger: {
    marginTop: 10,
  },
  chat: {
    marginTop: 10,
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
  },
  hamburgerIcon: {
    width: 40,
    height: 35,
    padding: 20,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5,
  },
  bottomContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopWidth: 9,
    borderTopColor: "#ccc",
    height: 56,
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  pictureContainer: {
    width: 54,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
  },
  picture: {
    width: 70,
    height: 99,
    paddingTop: 110,
    marginTop: 12,
    resizeMode: "cover",
  },
  scrollView: {
    marginHorizontal: 5,
    marginTop: -32,
  },
  scroll: {
    paddingBottom: 110,
  },
  containerImage: {
    flexDirection: "row",
  },
  category: {
    flexDirection: "column",
    alignItems: "center",
  },
  history: {
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  image: {
    width: 170,
    height: 165,
    margin: 5,
  },
  liveImage: {
    width: 170,
    height: 250,
    margin: 5,
  },
  profileBG: {
    marginBottom: 100,
    width: 400,
    height: 270,
    alignItems: "center",
  },
  header1: {
    fontSize: 20,
    fontWeight: "bold",
    paddingRight: 45,
    paddingTop: 5,
    color: "#FF0000",
  },
  header2: {
    fontSize: 15,
    fontWeight: "normal",
    color: "black",
  },
  header3: {
    fontSize: 20,
    fontWeight: "bold",
    paddingRight: 45,
    paddingTop: 15,
    color: "#009EFF",
  },
  header4: {
    fontSize: 15,
    fontWeight: "normal",
    color: "black",
  },
  imageHistory: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 8,
    marginRight: 16,
  },
  historyContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 8,
    marginRight: 16,
  },
  text: {
    flex: 1,
    margin: 2,
    fontSize: 16,
    textAlign: "left",
  },
  categimage: {
    height: 160,
    width: 160,
    margin: 5,
  },
});
export default PurchaseHistoryScreen;
