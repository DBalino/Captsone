import React, {useState} from "react";
import { View, TouchableOpacity, Image, TextInput, Button, FlatList, Text, StyleSheet, ImageBackground} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from "react-native-vector-icons/MaterialIcons";


function LiveSection ({navigation}) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
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
        source={require("../../assets/11.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.commentsec}>
          <FlatList
            data={comments}
            renderItem={({ item }) => (
              <Text style={{ color: "white" }}>{item}</Text>
            )}
            keyExtractor={(item, index) => index.toString()}
            reverted // To display comments in reverse order (newest on top)
          />

          <View style={styles.addComment}>
            <TextInput 
              style={styles.input}
              placeholder="Say something..."
              placeholderTextColor="white"
              
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
              <Icon
                name="shopping-cart"
                size={30}
                color={"white"}
                style={{ marginTop: -20, marginLeft: 10 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.lock}>
              <Text style={styles.lockText}>MINE</Text>
              <Icon
                name="add-shopping-cart"
                size={30}
                color={"white"}
                style={{ marginTop: -20, marginLeft: 10 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.items}>
              <Text style={styles.lockText}>Item 1</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    paddingTop: 10,
    paddingLeft: 90,
    paddingRight: 90,
    padding: 15,
    elevation: 5,
  },
  hamburger: {
    marginTop: 15,
    marginLeft: -75,
  },
  chat: {
    marginRight: 30,
    marginTop: 15,
  },
  logo: {
    width: 190,
    height: 50,
    marginTop: 30,
    marginRight: 30,
    marginLeft: 28,
  },
  chatIcon: {
    width: 35,
    height: 10,
    padding: 20,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 5,
    resizeMode: "stretch",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  commentsec: {
  
    width: 270,
    height: 200,
    padding: 15,
    borderRadius: 20,
    marginTop: 500,
    marginLeft: 10,
    color: "white",
  },
  addComment: {
   
    backgroundColor: "#FFFFF",
    borderRadius: 20,
    width: 200,
    marginTop: 10,
    textInput: "white",
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  minelock: {
    marginLeft: 230,
    marginBottom: 130,
  },
  lock: {
    //mine
    marginTop: -100,
    backgroundColor: "#00E7FF",
    borderRadius: 20,
    height: 40,
    marginRight: 20,
  },
  mine: {
    //lock
    marginTop: -50,
    backgroundColor: "#00E7FF",
    borderRadius: 20,
    height: 40,
    marginRight: 20,
  },
  mineText: {
    //lock text
    textAlign: "center",
    marginTop: 8,
  },
  lockText: {
    textAlign: "center",
    marginTop: 8,
  },
  mineLogo: {
    width: 100,
    height: 100,
    marginTop: 200,
  },
  items: {
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    height: 50,
    marginRight: 20,
    width: 340,
    marginLeft: -220,
  },
  TabNavigator: {
    marginBottom: 1000,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    color: "white", // Set the text color here
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius:10
  },
});

export default LiveSection;