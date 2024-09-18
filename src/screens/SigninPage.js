import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const SigninPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailSignin = async () => {
    try {
      const response = await fetch('http://localhost:8001/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      });

      const data = await response.json();
      if (response.ok) {
        // Handle successful sign-in, e.g., navigate to another screen or store user token
        console.log('Sign-in successful', data);
      } else {
        // Handle sign-in error, e.g., display an error message
        console.log('Sign-in failed', data.message);
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

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
          value={email}
          onChangeText={setEmail}
        />
        {email !== '' && (
          <TouchableOpacity onPress={clearEmail} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>×</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {password !== '' && (
          <TouchableOpacity onPress={clearPassword} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>×</Text>
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity
        style={styles.googleButton}
        onPress={handleGoogleSignin}>
        <Text style={styles.buttonText}>Sign In with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.appleButton} onPress={handleAppleSignin}>
        <Text style={styles.buttonText}>Sign In with Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.emailButton} onPress={handleEmailSignin}>
        <Text style={styles.emailButtonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupText}>
          Don't you have an account? Go to Sign Up
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.signupText}>
          Forgot password? Click here to reset.
        </Text>
      </TouchableOpacity>
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
  logo: {
    width: 100,
    height: 100,
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
  },
  clearButton: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    width: 19,
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  clearButtonText: {
    fontSize: 18,
    color: 'gray',
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
    backgroundColor: '#4285F4',
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
    color: '#4285F4',
    marginTop: 16,
  },
});

export default SigninPage;
