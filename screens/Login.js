import React, { useEffect,useState } from 'react';
import {StyleSheet,TextInput, TouchableOpacity, View, icon ,Alert, ImageBackground, Text} from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

    const Login = ({navigation}) => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    
    const toggleShowPassword = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };
   
    const handleLogin = async () => { 
      
      if (!username.trim()) {
        setError('Invalid Input', 'Please fill out the missing fields.');
        return;
      }
    
      if (!password.trim()) {
        setError('Invalid Input', 'Please fill out the missng fields.');
        return;
      }
  
      try {
        const response = await axios.post('http://192.168.135.188:8800/login', {
          username: username,
          password: password
          
        });

        if(response.data.success){
          const token = response.data.token;
          Alert.alert('Welcome to ThirftNGo', `Happy Thrifting!  ${username} !`);
          navigation.navigate('Bottom Bar');
          
        } 
        else {
         setError('Invalid username or password.');
        }

      } catch (error) {
        
      }
    };

    const navigateToOtherScreen = () => { 
        navigation.navigate('Registration Page');
    }
    
    return (
      <View style={styles.container} >
      <ImageBackground source={require('../assets/tng.png')}
        style={styles.backgroundImage}>

<View style={styles.content}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
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

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
      <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.label}>

        <Text>Don't Have an account? </Text>
        <Text style={styles.signup} onPress={navigateToOtherScreen}> Signup</Text>   
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
      paddingTop: 140,
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
    passwordInput: {
      flex: 1,
      paddingVertical: 12,
    },
    toggleButton: {
      padding: 10,
    },
    loginButton: {
      backgroundColor: '#009EFF',
      width: '65%',
      height: 51,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 55,
      marginTop: 20,
    },
    loginButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
    label:{
      marginTop: 35,
    },
    signup:{
      color: '#009EFF',
    },
    error: {
      color: 'red',
      marginBottom: 10,
    },
  });
  
  export default Login;