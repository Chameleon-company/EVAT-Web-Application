import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ConnectedAccounts from './components/ConnectedAccounts';
import DeleteAccountButton from './components/DeleteAccountButton';
import FooterNavigation from './components/FooterNavigation';
import Header from './components/Header';
import PaymentDetails from './components/PaymentDetails';
import PaymentSection from './components/PaymentSection';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Payment Details</Text>
        <View style={styles.detailsContainer}>
          <PaymentOptions />
          <ConnectedAccounts />
          <DeleteAccountConnection />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      flex: 1, 
    },
  
    content: { 
      padding: 20,
    },
    title: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 28,
    fontWeight: '400',
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: 'rgba(204, 210, 252, 1)',
    borderRadius: 3,
    padding: 10,
  },
});

export default App;