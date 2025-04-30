// declare const navigator: any;
import GetLocation from 'react-native-get-location'
import React, { useEffect, useState, useContext, useLayoutEffect } from 'react';
import { UserContext } from '../context/user.context';
import {useNavigation} from '@react-navigation/native'
import {
  Text,
  View,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Modal,
  Alert,
  Dimensions,
  Image,
  Button
} from 'react-native';

import MapView, { Region } from 'react-native-maps';
import ChargerMarker from '../components/ChargerInfo';
import { ConfigData } from '../data/config';
import NavBar from '../components/Navbar';
import SearchModal from '../components/SearchModal';

const config = ConfigData();
const url = `https://evat.vt2.app/api/navigation/ev-chargers`


const MapPage = () => {
  const [region, setRegion] = useState<Region | null>(null);
  const [error, setError] = useState<boolean | null>(null);
  const [chargers, setChargers] = useState<Object | null>(null);
  const [searchWindow, setSearchWindow] = useState<Boolean | false>(false);
  const { user, setUser } = useContext(UserContext);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text style={{ color: 'white', marginRight: 15 }} onPress={() => Alert.alert("User Information",`User: ${user?.fullName}\nEmail: ${user?.email}\nRole: ${user?.role}`)}>
          {user.fullName}
        </Text>
      ),
    });
  }, [navigation]);


  const searchFunction = () => {
    console.log('Search Function Called'); 
    setSearchWindow(true);
  }

  const settingsFunction = () => {
    console.log('Settings Function Called');
  }

  // Alert.alert(`Welcome ${user?.fullName}`, `Click on any Charger icon to get see its details.`, [{text: 'Ok',}]);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        await locateUser();
      }
    } else {
      //handle position granted
    }
  };

  const getChargers = async (location: {}, distance: number) => {
    try {
      const response = await fetch(`${url}?lat=${location.latitude}&lon=${location.longitude}&distance=${distance}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();
      if (response.ok) {
        // Handle successful get of chargers
        setChargers(data.data);
      } else {
        // Handle get chargers error
        console.log("Response not ok:", data.message);
      }
    } catch (error) {
      console.log("Error with get chargers:", error);
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
      console.log("Error locating user:", error);
    }
  };

  useEffect(() => { requestLocationPermission() }, []);

  useEffect(() => {
    if (region) {
      console.log(region)
      getChargers(region, 30000);
    }
  }, [region]);

  if (!region) {
    console.log("Region Null")
    return null;
  }


  return (
    <View style={styles.container}>
      <SearchModal visible={searchWindow} onClose={() => setSearchWindow(false)} />
      <MapView
        style={styles.map}
        region={region}
        showsUserLocation={true}>
        {region && chargers && chargers.map((charger, idx) => <ChargerMarker key={`${idx}`} charger={charger} />)}
      </MapView>
      <NavBar searchFunction={searchFunction} settingsFunction={settingsFunction} />
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  marker: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  navbar: {
    width: Dimensions.get('window').width,
    height: 40,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
  },
  // chargerButton: {
  //   width: 100,
  //   height: 50,
  //   borderRadius: 5,
  //   backgroundColor: 'red',
  // },
});

export default MapPage;
