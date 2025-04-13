import React, {useState, useContext} from 'react';
import { ConfigData } from '../data/config';
import request from '../util/request';
import { UserContext } from '../context/user.context';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const config = ConfigData();
const url = `${config.backend.ipAddress}:${config.backend.port}/api/auth/login`
const url2 = `${config.backend.ipAddress}:${config.backend.port}/api/auth/profile`


const SigninPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, setUser} = useContext(UserContext);

  const handleEmailSignin = async () => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      });

      const data = await response.json();
      if (response.ok) {
        // Handle successful sign-in, e.g., navigate to another screen or store user token
        console.log('Sign-in successful', data.data.user.email);
        setUser(data.data.user);
        Alert.alert('✅ Sign In Successful', `${data.data.user.fullName}, welcome back!`,
          [{text: 'Ok', onPress: () => navigation.navigate("MapPage")}]);
      } else {
        // Handle sign-in error, e.g., display an error message
        console.log('❌ Sign-in', data.message);
        Alert.alert('❌ Sign in', data.message, [{text: 'Ok',}]);
      }
    } catch (error) {
      Alert.alert('❌ Sign In', error [{text: 'Ok',}]);
      console.error('Error signing in:', error);
    }
  };

  // const getUserProfile = async () => {
  //   request.get('/api/auth/profile?user=',)

  const handleGoogleSignin = () => {
    // Implement Google sign-in logic
  };

  const handleAppleSignin = () => {
    // Implement Apple sign-in logic
  };

  const clearEmail = () => setEmail('');
  const clearPassword = () => setPassword('');

  return (
    <View style={styles.container}>
      <Image source={require('./logo.jpeg')} style={styles.logo} />
      <Text style={styles.title}>Sign In</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#777"
          value={email}
          onChangeText={setEmail}
        />
        {email !== '' && (
          <TouchableOpacity onPress={clearEmail} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>X</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#777"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {password !== '' && (
          <TouchableOpacity onPress={clearPassword} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>X</Text>
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity  style={styles.emailButton} onPress={handleEmailSignin}>
        <Text style={styles.emailButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/*
      <TouchableOpacity
        style={styles.googleButton}
        onPress={handleGoogleSignin}>
        <Text style={styles.buttonText}>Sign In with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.appleButton} onPress={handleAppleSignin}>
        <Text style={styles.buttonText}>Sign In with Apple</Text>
      </TouchableOpacity>

      */}
      <TouchableOpacity color={"#64b131"} onPress={() => navigation.navigate('SignupPage')}>
        <Text style={styles.signupText}>
          Don't you have an account? Go to Sign Up
        </Text>
      </TouchableOpacity>

      {/*
      <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.signupText}>
          Forgot password? Click here to reset.
        </Text>
      </TouchableOpacity>
      */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  inputContainer: {
    color: "black"
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    alignSelf: 'center',
  },
  title: {
    fontSize: 52,
    fontWeight: '400',
    lineHeight: 134.11,
    textAlign: 'center',
    color: '#000000',
    fontFamily: 'Inknut Antiqua',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    width: '100%',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    color: "black"
  },
  clearButton: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 5,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    marginTop: 0,
  },
  clearButtonText: {
    fontSize: 18,
    color: 'red',
    fontWeight: "bold"
  },
  googleButton: {
    backgroundColor: '#4285F4',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
    width: '100%',
  },
  appleButton: {
    backgroundColor: '#4285F4',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
    width: '100%',
  },
  emailButton: {
    // backgroundColor: '#4285F4',
    backgroundColor: '#2e9963',
    padding: 16,
    borderRadius: 8,
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 12,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  emailButtonText: {
    color: '#ffffff',
    fontSize: 14,
  },
  signupText: {
    textAlign: 'center',
    color: '#2e9963',
    marginTop: 16,
    marginBottom: 100,
  },
});

export default SigninPage;
