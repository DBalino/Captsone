import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, ImageBackground, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

const Registration = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  
  const handleRegistration = async () => {
    if (!username || !fullname || !email || !password) {
      Alert.alert('Missing Fields', 'Please fill in all fields.');
      return;
    }
  
    axios
      .post('http://192.168.0.112:8800/register ', {
        username,
        fullname,
        email,
        password,
      })
      .then((response) => {
        console.log(response.data.message);
        Alert.alert('Success', 'Registration successful!');
        navigation.navigate('Login Page');
     
      })
      .catch((error) => {
        console.error('Error registering user:', error);
      
      });
  };

  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/registration.png')}
      style={styles.backgroundImage}>
  
    <View style={styles.content}>
      <TextInput
        style={styles.input}
        value={username}
        placeholder={"Username"}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input}
        value={fullname}
        placeholder={"Fullname"}
        onChangeText={(text) => setFullname(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input}
        value={email}
        placeholder={"Email"}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize={"none"}
      />
      <View style={styles.passwordContainer}>
      <TextInput
        style={styles.passwordInput}
        secureTextEntry={!showPassword}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
       <TouchableOpacity onPress={toggleShowPassword} style={styles.toggleButton}>
          <Ionicons
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.CpasswordContainer}>
      <TextInput
        style={styles.passwordInput}
        secureTextEntry={!showPassword}
        placeholder="Confirm Password"
        value={password}
        
        onChangeText={(text) => setConfirmPassword(text)}     
 />
      <TouchableOpacity onPress={toggleShowPassword} style={styles.toggleButton}>
          <Ionicons
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}  onPress={handleRegistration}>
       <Text style={styles.signup}>Register</Text>
      </TouchableOpacity>

      <Text style={styles.label}>
      <Text>Already have an account? 
      </Text>

      <Text onPress={() => navigation.navigate("Login Page")}>
      <Text style={styles.login}> Login</Text>
      </Text>
              
      </Text>

      </View>
      </ImageBackground>
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 160,
  },
  input: {
    width: '80%',
    height: 49,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#009EFF',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 25,
    marginTop: 5,
  },
  passwordContainer: {
    width: '80%',
    height: 49,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#009EFF',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 25,
    marginTop: 5,
  },
  CpasswordContainer: {
    width: '80%',
    height: 49,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#009EFF',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 25,
    marginTop: 5,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
  },
  toggleButton: {
    padding: 10,
  },
  button: {
    backgroundColor: '#009EFF',
    width: '65%',
    height: 51,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 55,
    marginTop: 20,
  },
  label: {
    marginTop: 20,
  },
  login: {
    marginTop: 35,
    color: '#009EFF',

  },
  signup:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }
});



export default Registration;