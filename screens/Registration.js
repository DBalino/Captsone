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
  const [showPassword1, setShowPassword1] = useState(false);
  const [error, setError] = useState('');
 
  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
    setShowPassword1((prevShowPassword1) => !prevShowPassword1);
  };

  const validEmail = (email) => {
    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const validPassword = (password) =>{
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    const minLength = 8;

    return passwordRegex.test(password) && password.length >= minLength;
  }
  
  const handleRegistration = async () => {
   
  
    if (!username || !fullname || !email || !password) {
      setError('All fields are required.');
      return;
    } 
    if (username.length <5){
      setError('Username too short');
      return;
    }
    if (!validEmail(email)) {
      setError('Please enter a valid email address.');
      return;
     
    }
    if (!validPassword(password)){
      setError(
        'Password must be 8 characters, an uppercase and digits.'
        
      );
      return;
    }
    if (password !== confirmPassword){
      setError('Passwords do not mactch.');
      return;
    }
 
    
    axios
      .post('http://192.168.135.188:8800/register ', {
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
      setError('')
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
      
      
      </View>

      <View style={styles.CpasswordContainer}>
      <TextInput
        style={styles.passwordInput}
        secureTextEntry={!showPassword1}
        placeholder="Confirm Password"
        value={confirmPassword}
        
        onChangeText={(text) => setConfirmPassword(text)}     
      />
      <TouchableOpacity onPress={toggleShowPassword} style={styles.toggleButton}>
          <Ionicons
            name={showPassword1 ? 'eye-off-outline' : 'eye-outline'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}
      
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
    paddingTop: 260,
    marginTop: 25,
  },
  input: {
    width: '80%',
    height: 49,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#009EFF',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 25,
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
  },
  error: {
    color: 'red',
  },
});

export default Registration;