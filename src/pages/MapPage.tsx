declare const navigator: any;
import GetLocation from 'react-native-get-location'

console.log(GetLocation);

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

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';

const MapPage = () => {
  const [region, setRegion] = useState<Region | null>(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          locateUser();
        }
      } else {
        locateUser();
      }
    };

    // const locateUser = () => {
    //   Geolocation.getCurrentPosition(
    //     (position: GeolocationPosition) => {
    //       const {latitude, longitude} = position.coords;
    //       setRegion({
    //         latitude,
    //         longitude,
    //         latitudeDelta: 0.01,
    //         longitudeDelta: 0.01,
    //       });
    //     },
    //     (error: GeolocationPositionError) => {
    //       console.log('Geolocation error:', error.message);
    //     },
    //     {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    //   );
    // };

    const locateUser = () => {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
      })
        .then(location => {
          console.log(location);
          const { latitude, longitude } = location;
          setRegion({
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          });
        })
        .catch(error => {
          const { code, message } = error;
          console.warn(code, message);
        })
    };

    requestLocationPermission();
  }, []);

  if (!region) {
    console.log("Region Null")
    return null;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        showsUserLocation={true} >
        <Marker
          key={1}
          coordinate={region}
          title="Test"
          description="This is a thing"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapPage;
