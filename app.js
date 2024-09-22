import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AdditionalDetails from './components/AdditionalDetails';
import AdditionalDetailsSection from './components/AdditionalDetailsSection';
import PersonalDetails from './components/PersonalDetails';
import PersonalDetailsForm from './components/PersonalDetailsForm';
import FooterNavigation from './components/FooterNavigation';
import Header from './components/Header';


const Stack = createNativeStackNavigator();

const App = () => (
  <View style={styles.container}>
    <View style={styles.content}>
      <Header />
      <PersonalDetails />
      <View style={styles.divider} />
      <AdditionalDetails />
      <View style={styles.detailsContainer}>
        <View style={styles.formContainer}>
          <PersonalDetailsForm />
        </View>
        <AdditionalDetailsSection />
      </View>
    </View>
  </View>
);


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    display: 'flex',
    maxWidth: 480,
    width: '100%',
    paddingBottom: 147,
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'stretch',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
    margin: '0 auto',
  },

  content: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
  },

  divider: {
    minHeight: 4,
    marginTop: 23,
    width: '100%',
    borderTopWidth: 4,
    borderTopColor: 'rgba(27, 48, 185, 1)',
    borderStyle: 'solid',
  },

  detailsContainer: {
    display: 'flex',
    alignItems: 'center',
    color: 'rgba(0, 0, 0, 1)',
    justifyContent: 'space-between',
    padding: 10,
  },

  formContainer: {
    borderRadius: 3,
    backgroundColor: 'rgba(204, 210, 252, 1)',
    alignSelf: 'stretch',
    display: 'flex',
    minWidth: 240,
    width: 333,
    flexDirection: 'column',
    alignItems: 'stretch',
    margin: 'auto 0',
    padding: '17px 6px 320px',
  },
});


export default App;