import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
function Myshop() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Profile");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePress}>
          <Ionicons name="chevron-back-outline" size={20}>
            {" "}
            <Text>My Shop</Text>
          </Ionicons>
        </TouchableOpacity>
        <View style={styles.navbar}>
          <View style={styles.profile}>
            <Image
              source={require("../../assets/profile.png")}
              style={{
                marginLeft: 20,
                width: 100,
                height: 100,
                borderRadius: 100,
                marginTop: 20,
              }}
            />
            <View style={styles.status}>
              <Text style={{ fontSize: 18, color: "white" }}>Username</Text>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="brightness-1" size={15} color={"chartreuse"} />
                <Text style={{ marginLeft: 5, color: "white" }}>Online</Text>
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={{ color: "white" }}>888 Followers</Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  header: {
    flex: 1,
    height: 30,
    marginBottom: 730,
    marginTop: 50,
  },
  navbar: {
    backgroundColor: "#5F1C1C",
    height: 150,
    marginTop: 20,
  },
  profile: {
    flexDirection: "row",
  },
  status: {
    marginLeft: 20,
    justifyContent: "center",
   
  },
});
export default Myshop;
