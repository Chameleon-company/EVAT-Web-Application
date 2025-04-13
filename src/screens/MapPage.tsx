import React, { useEffect, useState, useContext, useLayoutEffect } from 'react';
import { View, StyleSheet, PermissionsAndroid, Platform, Alert, Dimensions, Text } from 'react-native';
import GetLocation from 'react-native-get-location';
import MapView, { Region } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

import { UserContext } from '../context/user.context';
import ChargerMarker from '../components/ChargerInfo';
import SearchModal from '../components/SearchModal';
import NavBar from '../components/Navbar';
import { ConfigData } from '../data/config';

const config = ConfigData();
const url = `https://evat.vt2.app/api/navigation/getchargersnode`;

const MapPage = () => {
  const [region, setRegion] = useState<Region | null>(null);
  const [chargers, setChargers] = useState<any[]>([]);
  const [searchWindow, setSearchWindow] = useState(false);
  const { user } = useContext(UserContext);
  const navigation = useNavigation<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text style={{ color: 'white', marginRight: 15 }} onPress={() => Alert.alert('User Info', `User: ${(user as any)?.fullName}\nEmail: ${(user as any)?.email}`)}>
          {(user as any)?.fullName}
        </Text>
      ),
    });
  }, [navigation]);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        locateUser();
      }
    } else {
      locateUser(); // iOS
    }
  };

  const locateUser = async () => {
    try {
      const location = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
      });
      const { latitude, longitude } = location;
      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    } catch (error) {
      console.log('Location Error:', error);
    }
  };

  const getChargers = async (location: Region) => {
    try {
      const response = await fetch(`${url}?lat=${location.latitude}&lon=${location.longitude}&distance=10000`);
      const json = await response.json();
      if (response.ok) {
        setChargers(json.data);
      } else {
        console.log('Failed to load chargers');
      }
    } catch (error) {
      console.log('API error:', error);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (region) {
      getChargers(region);
    }
  }, [region]);

  const searchFunction = () => {
    setSearchWindow(true);
  };

  const settingsFunction = () => {
    (navigation as any).navigate('Settings');
  };
  

  return (
    <View style={styles.container}>
      <SearchModal visible={searchWindow} onClose={() => setSearchWindow(false)} onResults={undefined} />
      <MapView style={styles.map} region={region!} showsUserLocation={true}>
        {chargers.map((charger, idx) => (
          <ChargerMarker key={idx} charger={charger} />
        ))}
      </MapView>
      <NavBar searchFunction={searchFunction} settingsFunction={settingsFunction} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapPage;
