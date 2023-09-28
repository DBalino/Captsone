import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const Message = ({ navigation }) => {
  const contacts = [
    {
      id: "1",
      sender: "Juan",
      text: "Available pa po ba?",
      profileImage: require("../../assets/profile.png"),
    },
    { id: "2", sender: "Sitwo", text: "still interested po?", profileImage: require("../../assets/shusbata.png") },
    // Add more messages here
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => navigation.navigate("Chat", { contact: item })}
          >
            <Image source={item.profileImage} style={styles.profileImage} />
            <View style={styles.contactInfo}>
              <Text style={styles.contactName}>{item.sender}</Text>
              <Text style={styles.lastMessage}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
     elevation: 4, // Add elevation to the container
    
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000", 
    shadowOpacity: 0.2, 
    shadowOffset: { width: 0, height: 2 }, 
    shadowRadius: 4, 
    borderRadius: 8, 
    marginVertical: 2,

  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  contactInfo: {
    flex: 1,
  
  },
  contactName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  lastMessage: {
    fontSize: 16,
    color: "#888",
  },
});

export default Message;
