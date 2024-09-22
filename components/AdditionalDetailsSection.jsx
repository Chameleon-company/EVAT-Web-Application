import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const AdditionalDetailsSection = () => (
  <View style={styles.container}>
    <View style={styles.item}>
      <Text>Personal Vehicles</Text>
    </View>
    <View style={styles.item}>
      <Text>Payment Details</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
    container: {
      borderRadius: 10,
      backgroundColor: 'rgba(27, 48, 185, 1)',
      display: 'flex',
      marginTop: 86,
      flexDirection: 'column',
      alignItems: 'stretch',
      fontSize: 18,
      padding: '27px 14px',
    },
  
    item: {
      borderRadius: 10,
      backgroundColor: 'rgba(255, 255, 255, 1)', 
      minHeight: 40,  
      marginTop: 21,  
    padding: '0 67px',
    },
});

export default AdditionalDetailsSection;