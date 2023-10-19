import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  ScrollView,
  TextInput,
 
} from "react-native";

import BottomSheet from "react-native-simple-bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";

const StartLiveCategories = () => {
     const [itemName1, setItemName1] = useState("");
     const [itemName2, setItemName2] = useState("");
     const [itemName3, setItemName3] = useState("");
     const [itemCode1, setItemCode1] = useState("");
     const [itemCode2, setItemCode2] = useState("");
     const [itemCode3, setItemCode3] = useState("");
     const [itemPrice1, setPrice1] = useState("");
     const [itemPrice2, setPrice2] = useState("");
     const [itemPrice3, setPrice3] = useState("");
     const [isScrolled, setIsScrolled] = useState(false);
     const bottomSheetRef = React.useRef(null);

     const navigation = useNavigation();

     const handlePress = () => {
       navigation.navigate("Home");
     };

        const proceedToLive = () => {
          navigation.navigate("Seller Live");
        };
  const onScrollEndDrag = () => {
    setIsScrolled(true);
  };
  return (
    <View style={styles.bottom}>
      <View style={styles.container}>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.hamburger} onPress={handlePress}>
            <Icon
              name="arrow-back-ios"
              size={20}
              color={"white"}
              style={{ marginLeft: 17, marginTop: 5 }}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Start Live</Text>
        </View>

        <ScrollView style={styles.startliveScroll}>
          <View style={styles.MotherHeader}>
            <Text style={styles.header}> New item </Text>
            <View style={styles.selectCateg}>
              <Text style={styles.setCateg}>Select Categories </Text>
              <Icon
                name="navigate-next"
                size={30}
                color={"white"}
                style={{ marginLeft: -5, marginTop: -5 }}
              />
            </View>
          </View>

          <View style={styles.items}>
            <View style={styles.itemCateg}>
              <Text style={styles.itemText}>Item Category</Text>
              <Icon
                name="chevron-right"
                size={30}
                color={"white"}
                style={{ marginTop: -5 }}
              />
            </View>
            <View sylte={styles.itemInput}>
              <View style={styles.inputColumn}>
                <TextInput
                  placeholder="Item Name:"
                  style={styles.inputField}
                  value={itemName1}
                  onChangeText={(text) => setItemName1(text)}
                />
              </View>
              <View style={styles.inputColumn}>
                <TextInput
                  placeholder="Item Code:"
                  style={styles.inputField}
                  value={itemCode1}
                  onChangeText={(text) => setItemCode1(text)}
                />
              </View>
              <View style={styles.inputColumn}>
                <TextInput
                  placeholder="Price:"
                  style={styles.inputField}
                  value={itemPrice1}
                  onChangeText={(text) => setPrice1(text)}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={styles.itemCateg}>
              <Text style={styles.itemText}>Item Category</Text>
              <Icon
                name="chevron-right"
                size={30}
                color={"white"}
                style={{ marginTop: -5 }}
              />
            </View>
            <View sylte={styles.itemInput}>
              <View style={styles.inputColumn}>
                <TextInput
                  placeholder="Item Name:"
                  style={styles.inputField}
                  value={itemName2}
                  onChangeText={(text) => setItemName2(text)}
                />
              </View>
              <View style={styles.inputColumn}>
                <TextInput
                  placeholder="Item Code:"
                  style={styles.inputField}
                  value={itemCode2}
                  onChangeText={(text) => setItemCode2(text)}
                />
              </View>
              <View style={styles.inputColumn}>
                <TextInput
                  placeholder="Price:"
                  style={styles.inputField}
                  value={itemPrice2}
                  onChangeText={(text) => setPrice2(text)}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={styles.itemCateg}>
              <Text style={styles.itemText}>Item Category</Text>
              <Icon
                name="chevron-right"
                size={30}
                color={"white"}
                style={{ marginTop: -5 }}
              />
            </View>
            <View sylte={styles.itemInput}>
              <View style={styles.inputColumn}>
                <TextInput
                  placeholder="Item Name:"
                  style={styles.inputField}
                  value={itemName3}
                  onChangeText={(text) => setItemName3(text)}
                />
              </View>
              <View style={styles.inputColumn}>
                <TextInput
                  placeholder="Item Code:"
                  style={styles.inputField}
                  value={itemCode3}
                  onChangeText={(text) => setItemCode3(text)}
                />
              </View>
              <View style={styles.inputColumn}>
                <TextInput
                  placeholder="Price:"
                  style={styles.inputField}
                  value={itemPrice3}
                  onChangeText={(text) => setPrice3(text)}
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <BottomSheet isOpen>
        {(onScrollEndDrag) => (
          <ScrollView onScrollEndDrag={onScrollEndDrag}>
            <View style={styles.bottomSheet}>
              <View style={styles.editItem}>
                <Text style={styles.edit}>Edit Items</Text>
              </View>
              <TouchableOpacity onPress={proceedToLive}>
                <View style={styles.StartLive}>
                  <Text style={styles.textLive}>Start Live</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </BottomSheet>
    </View>
  );
}
const styles = StyleSheet.create({
bottom:{
  flex:1,
},
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
    marginTop: -60,
    width: 400,
    height: 160,
  },
  hamburger: {
    marginLeft: 30,
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
    
  },
  MotherHeader: {
    flexDirection: "row",
    paddingTop: 10,
    
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
    marginLeft: 80,
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
    marginLeft: 5,
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
    width:350,
    borderRadius: 15,
  },
  bottomSheet: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: 55,
  },
  editItem: {
    backgroundColor: "#00E7FF",
    borderRadius: 20,
    height: 40,
    width: 150,
    marginBottom: 10,
    margin: 5,
  },
  StartLive: {
    backgroundColor: "#FF0000",
    borderRadius: 20,
    height: 40,
    width: 150,
    marginBottom: 10,
    margin: 5,
  },
  textLive: {
    textAlign: "center",
    color: "white",
    margin:10,
  },
  edit: {
    textAlign: "center",
    color: "white",
    margin:10,
  },
  startliveScroll:{
    marginBottom: 55,
  }
});
export default StartLiveCategories;
