// declare const navigator: any;
import GetLocation from 'react-native-get-location'
import React, { useEffect, useState } from 'react';
import FakeChargers from '../data/test_amenitites_local.json';
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

import MapView, { Marker, Region } from 'react-native-maps';
import { ChargerInfo } from '../components/ChargerInfo';
import { ConfigData } from '../data/config';
import NavBar from '../components/Navbar';

const config = ConfigData();
const url = `https://evat.vt2.app/api/navigation/getchargersnode`

type GeolocationPosition = {
  coords: {
    latitude: number;
    longitude: number;
    accuracy: number;
    altitude?: number | null;
    altitudeAccuracy?: number | null;
    heading?: number | null;
    speed?: number | null;
  };
  timestamp: number;
};

type GeolocationPositionError = {
  code: number;
  message: string;
};

//dummy data
const chargerOptions = {
  charger: {
    title: "Charger 1",
    location: {
      latitude: -22.22222,
      longitude: 111.11111
    },
    details: "This is a dummy charger"
  }
}


const MapPage = () => {
  const [region, setRegion] = useState<Region | null>(null);
  const [error, setError] = useState<boolean | null>(null);
  const [chargers, setChargers] = useState<Object | null>(null);



  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        await locateUser();
        getChargers(region, 1000);  // 1000m radius
      }
    } else {
      //handle position granted

    }
  };
  


  const getChargers = async (location: {}, distance: number) => {
    try {
      const response = await fetch(`${url}?lat=${location.latitude}&lon=${location.longitude}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();
      if (response.ok) {
        // Handle successful get of chargers
        setChargers(data.data);
        //populate map with icons

      } else {
        // Handle get chargers error
        console.log("Response not ok")
      }
    } catch (error) {
      console.log("Error with get chargers")
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

  useEffect(() => {requestLocationPermission()}, []);

  useEffect(() => {
    if (region) {
      getChargers(region, 1000);
    }
  }, [region]);

  if (!region) {
    console.log("Region Null")
    return null;
  }


  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        showsUserLocation={true}>
        {/* {FakeChargers.map(charger =>
            <Marker
              key={`${charger.id}`}
              identifier={`${charger.id}`}
              // onPress={() => setChargerInfo(chargerOptions)}
              coordinate={ {latitude: charger.lat, longitude: charger.lon }}
              title={charger.title?.toString() || charger.brand?.toString() || charger.name?.toString() || "Charger"}
              description={charger?.description ? charger.description : "No description"}
              onCalloutPress={() => {
                const info = Object.entries(charger)
                  .map(([key, value]) => `${key}: ${value}`)
                  .join('\n');
          
                Alert.alert("Charger Information", info, [
                  { text: 'OK', onPress: () => console.log('OK Pressed') }
                ]);
              }}
            >
            <Image source={require('../data/ev_charger_symbol.webp')} style={styles.marker} />
          </Marker>)} */}


        {region && chargers && chargers.map(charger =>
          <Marker
            key={`${charger.id}`}
            identifier={`${charger.id}`}
            // onPress={() => setChargerInfo(chargerOptions)}
            coordinate={{ latitude: charger.geometry.location.lat, longitude: charger.geometry.location.lng }}
            title={charger.title?.toString() || charger.brand?.toString() || charger.name?.toString() || "Charger"}
            description={charger?.description ? charger.description : "No description"}
            onCalloutPress={() => {
              const info = Object.entries(charger)
                .map(([key, value]) => `${key}: ${value}`)
                .join('\n');

              Alert.alert("Charger Information", info, [
                { text: 'OK', onPress: () => console.log('OK Pressed') }
              ]);
            }}
          >
            <Image source={require('../data/ev_charger_symbol.webp')} style={styles.marker} />
          </Marker>)}

      </MapView>
      {/* <View style={styles.navbar}>
      </View> */}
      <NavBar />
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
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
