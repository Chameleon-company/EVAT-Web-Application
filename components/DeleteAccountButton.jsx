import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


const DeleteAccountButton: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Delete Account Connections?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  button: {
    backgroundColor: 'rgba(27, 48, 185, 1)',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});


export default DeleteAccountButton;