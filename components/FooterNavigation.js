import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const FooterNavigation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Map')}>
        <Icon name="map" size={25} color="#0000ff" />
        <Text>Map</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('TripPlanner')}>
        <Icon name="clipboard-text-outline" size={25} color="#0000ff" />
        <Text>Trip Planner</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Save')}>
        <Icon name="star-outline" size={25} color="#0000ff" />
        <Text>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Me')}>
        <Icon name="account-outline" size={25} color="#0000ff" />
        <Text>Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#87CEEB',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
    paddingHorizontal: 15, // Increased horizontal padding
    marginHorizontal: 18, // Increased horizontal margin
  },
});

export default FooterNavigation;
