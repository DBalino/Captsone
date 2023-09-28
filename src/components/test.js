import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

function StartLiveCategories() {
  const [itemName, setItemName] = useState("");
  const [itemCode, setItemCode] = useState("");
  const [price, setPrice] = useState("");

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.hamburger}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="list-outline" size={40} />
        </TouchableOpacity>

        <Image source={require("../../assets/TNG_L.png")} style={styles.logo} />

        <TouchableOpacity style={styles.chat}>
          <Ionicons name="chatbubble-ellipses-outline" size={35} />
        </TouchableOpacity>
      </View>

      <ImageBackground
        source={require("../../assets/333.png")}
        style={styles.backgroundImage}
      ></ImageBackground>

      <View style={styles.commentsec}>
        <FlatList
          data={comments}
          renderItem={({ item }) => (
            <Text style={{ color: "black" }}>{item}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
          reverted // To display comments in reverse order (newest on top)
        />

        <View style={styles.addComment}>
          <TextInput
            placeholder="Say something..."
            value={newComment}
            onChangeText={(text) => setNewComment(text)}
            onSubmitEditing={addComment}
          />
        </View>
      </View>
      <View style={styles.minelock}>
        <TouchableOpacity>
          <View style={styles.mine}>
            <Text style={styles.mineText}>LOCK</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.lock}>
            <Text style={styles.lockText}>MINE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.items}>
            <Text style={styles.lockText}>Item 1</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    elevation: 5,
    marginTop: -330,
    width: 400,
    height: 160,
  },
  hamburger: {
    marginLeft: 20,
    backgroundColor: "#009EFF",
    height: 40,
    borderRadius: 30,
    width: 50,
    paddingTop: 5,
    marginTop: 100,
  },
  text: {
    marginRight: 230,
    marginTop: 95,
    fontSize: 20,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: -10,
  },
  MotherHeader: {
    flexDirection: "row",
    paddingTop: 20,
  },
  setCateg: {
    fontSize: 15,
    marginLeft: 10,
    textAlign: "center",
    color: "white",
  },

  selectCateg: {
    flexDirection: "row",
    paddingTop: 10,
    marginLeft: 120,
    backgroundColor: "#009EFF",
    borderRadius: 30,
    height: 40,
    width: 160,
  },
  itemCateg: {
    flexDirection: "row",
    paddingTop: 5,
    backgroundColor: "#009EFF",
    borderRadius: 30,
    height: 30,
    width: 130,
  },
  itemText: {
    marginLeft: 10,
    textAlign: "center",
    color: "white",
  },
  itemInput: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  inputColumn: {
    margin: 5,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 15,
  },
});

export default StartLiveCategories;
