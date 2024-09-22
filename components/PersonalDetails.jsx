import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const PersonalDetails = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Personal Details</Text>
  </View>
);

const styles = StyleSheet.create({
    container: {
      marginTop: 25,
      marginLeft: 26,
    },
  
    title: {
      color: 'rgba(0, 0, 0, 1)',
      fontSize: 28,
    },
  });  

  export default PersonalDetails;