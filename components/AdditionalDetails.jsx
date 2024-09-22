import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const AdditionalDetails = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Additional Details</Text>
  </View>
);


const styles = StyleSheet.create({
  container: {
    marginTop: 296,
    marginLeft: 20,
    zIndex: 10,
  },
  title: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 20,
  },
});


export default AdditionalDetails;