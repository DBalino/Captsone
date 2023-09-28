import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialIcons";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.shopbar}>
          <TouchableOpacity onPress={() => navigation.navigate("My Shop")}>
            <Text style={{ marginLeft: 10 }}>
              My Shop
              <Ionicons name="arrow-forward-outline" size={15}></Ionicons>
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.profile}>
          <Image
            source={require("../../assets/profile.png")}
            style={{
              marginLeft: 120,
              width: 150,
              height: 150,
              borderRadius: 100,
              marginTop: 20,
            }}
          />
          <Text
            style={{
              color: "white",
              marginTop: 30,

              fontSize: 20,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            @Username
          </Text>
        </View>
      </View>
      <View style={styles.userInfo}>
        
        <View style={styles.name}>
          <TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="person" size={20} color={"black"} />
            <Text style={{ fontSize: 18, marginLeft: 10 }}>
              Username D. Username
            </Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.mail}>
          <TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="mail" size={20} color={"black"} />
              <Text style={{ fontSize: 18, marginLeft: 10 }}>
                Username@gmail.com
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.mobile}>
          <TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="call" size={20} color={"black"} />
              <Text style={{ fontSize: 18, marginLeft: 10 }}>099999999</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.address}>
          <TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="location-on" size={20} color={"black"} />
              <Text style={{ fontSize: 18, marginLeft: 10 }}>
                Tuguegarao City, Cagayan
              </Text>
            </View>
          </TouchableOpacity>
        </View>
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
    backgroundColor: "#5F1C1C",
    height: 300,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    justifyContent: "flex-start",
    marginTop: -180,
    width: 400,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 2, height: 2 },
    marginVertical: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 1001,
  },
  shopbar: {
    backgroundColor: "#ffff",
    height: 30,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: 100,
    paddingTop: 5,
    marginTop: 30,
  },
  name: {
    marginTop: 30,
    fontWeight: "bold",
    flexDirection: "column",
    marginBottom: 30,
  },
  mail: {
    marginBottom: 30,
  },
  mobile: {
    marginBottom: 30,
  },
  address: {
    marginBottom: 30,
  },
  userInfo: {
    flexDirection: "column",
    textAlign: "center",
  },
});
export default ProfileScreen;
