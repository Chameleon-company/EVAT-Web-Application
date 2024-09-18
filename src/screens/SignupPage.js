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
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailSignup = async () => {
    try {
      const response = await fetch('http://localhost:8001/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, country, phone, isSubscribed}),
      });

      const data = await response.json();
      if (response.ok) {
        // Handle successful sign-up
        console.log('Sign-up successful', data);
      } else {
        // Handle sign-up error
        console.log('Sign-up failed', data.message);
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

  const clearName = () => setName('');
  const clearCountry = () => setCountry('');
  const clearPhone = () => setPhone('');

  return (
    <View style={styles.container}>
      <Image source={require('./logo.jpeg')} style={styles.logo} />
      <Text style={styles.title}>Create Account</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        {name !== '' && (
          <TouchableOpacity onPress={clearName} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>×</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Country"
          value={country}
          onChangeText={setCountry}
        />
        {country !== '' && (
          <TouchableOpacity onPress={clearCountry} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>×</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
        />
        {phone !== '' && (
          <TouchableOpacity onPress={clearPhone} style={styles.clearButton}>
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
        <Text style={styles.emailButtonText}>Next</Text>
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
