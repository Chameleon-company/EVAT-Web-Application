import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
} from 'react-native';

const SignupPage = ({navigation}) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Email validation function
  const validateEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const handleEmailSignup = async () => {
    // Validate email before proceeding
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (password === '') {
      Alert.alert('Empty Password', 'Please enter your password.');
      return;
    }
    try {
      const response = await fetch(
        'http://192.168.1.100:8001/api/auth/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({username, email, password}),
        },
      );
      if (response.ok) {
        // Handle successful sign-up
        console.log('Sign-up successful');
        navigation.navigate('SignIn');
      } else {
        // Handle sign-up error
        console.log('Sign-up failed');
        Alert.alert('Sign-up Error', 'There was an error during sign-up.');
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleGoogleSignup = () => {
    // Implement Google sign up logic
  };

  const handleAppleSignup = () => {
    // Implement Apple sign up logic
  };

  const toggleSubscription = () => {
    setIsSubscribed(previousState => !previousState);
  };

  const clearUserName = () => setUserName('');
  const clearPassword = () => setPassword('');
  const clearEmail = () => setEmail('');

  return (
    <View style={styles.container}>
      <Image source={require('./logo.jpeg')} style={styles.logo} />
      <Text style={styles.title}>Create Account</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="UserName"
          value={username}
          onChangeText={setUserName}
        />
        {username !== '' && (
          <TouchableOpacity onPress={clearUserName} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>×</Text>
          </TouchableOpacity>
        )}
      </View>

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

      <View style={styles.subscriptionContainer}>
        <Text style={styles.subscriptionText}>
          I’d like to hear from PlugShare for research, news, and marketing
          offers.
        </Text>
        <Switch value={isSubscribed} onValueChange={toggleSubscription} />
      </View>

      <View style={styles.legalContainer}>
        <TouchableOpacity
          onPress={() => {
            /* Implement Privacy Policy logic */
          }}>
          <Text style={styles.legalText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.termsButton}
          onPress={() => {
            /* Implement Terms & Conditions logic */
          }}>
          <Text style={styles.legalText}>Terms & Conditions</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.appleButton} onPress={handleEmailSignup}>
        <Text style={styles.emailButtonText}>Sign Up with Email</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.appleButton} onPress={handleGoogleSignup}>
        <Text style={styles.emailButtonText}>Sign Up with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.appleButton} onPress={handleAppleSignup}>
        <Text style={styles.emailButtonText}>Sign Up with Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.appleButton}
        onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.emailButtonText}>
          Already have an account? Sign In
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
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Inknut Antiqua',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
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
  subscriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  subscriptionText: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  legalContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  legalText: {
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  appleButton: {
    backgroundColor: '#4285F4',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
    width: '100%',
  },
  termsButton: {
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    width: '100%',
  },
  emailButtonText: {
    color: '#ffffff',
    fontSize: 14,
  },
});

export default SignupPage;
