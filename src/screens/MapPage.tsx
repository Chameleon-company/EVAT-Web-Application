import React, {
  useEffect,
  useState,
  useContext,
  useLayoutEffect,
  useCallback,
  useRef // ✅ added
} from 'react';
import { UserContext } from '../context/user.context';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import {
  Text,
  View,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Alert,
  Dimensions,
  Image,
} from 'react-native';

import MapView, { Region } from 'react-native-maps';
import ChargerMarker from '../components/ChargerInfo';
import { ConfigData } from '../data/config';
import NavBar from '../components/Navbar';
import SearchModal from '../components/SearchModal';
import MapViewDirections from 'react-native-maps-directions';
import GetLocation from 'react-native-get-location';
import Geolocation from '@react-native-community/geolocation';
import { map } from '../../server/data/vehicles';
import { get, set } from 'mongoose';
import NavigationInfo from '../components/NavigationInfo';

const config = ConfigData();


//set the mode of the application to either dev or prod
const mode = config.mode;
//set the backend URL based on the mode of the application
const url2 = config.backendURL(mode) + `/api/chargers`;
const suitabilityUrl = config.backendURL(mode) + `/api/predict/suitability`;

//for testing purposes
console.log("Mode: ", mode, ", URL: ", url2);

const MapPage = () => {
  const mapRef = useRef<MapView>(null); // ✅ map reference for centering
  let watchId = useRef<number | null>(null); // ✅ watchId reference
  const selectedChargerRef = useRef<{ latitude: number; longitude: number } | null>(null);
  const [region, setRegion] = useState<Region | null>(null);
  // const [region, setRegion] = useState<null>(null);
  const [error, setError] = useState<boolean | null>(null);
  const [chargers, setChargers] = useState<Object | null>(null);
  const [searchWindow, setSearchWindow] = useState<Boolean | false>(false);
  const { user, setUser } = useContext(UserContext);
  const [selectedCharger, setSelectedCharger] = useState<{ latitude: number; longitude: number } | null>(null);
  const [travelTime, setTravelTime] = useState<number | null>(null);
  const [travelDistance, setTravelDistance] = useState<number | null>(null);
  const [suitabilitySites, setSuitabilitySites] = useState<any[]>([]);
  const [showSuitability, setShowSuitability] = useState<boolean>(false);

  const navigation = useNavigation()<any>;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text style={{ color: 'white', marginRight: 15 }} onPress={() => Alert.alert("User Information", `User: ${user?.fullName}\nEmail: ${user?.email}\nRole: ${user?.role}`)}>
          {user.fullName}
        </Text>
      ),
    });
  }, [navigation]);


  const searchFunction = () => setSearchWindow(true);
  const settingsFunction = () => {
    console.log('Settings Function Called');
    navigation.navigate('SettingsPage');
  }


  const getAndSetLocation = async () => {
    try {
      const location = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 6000,
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
  }

  const cancelNavigation = () => {
    Alert.alert("❌ Navigation", "Are you sure you want to stop navigation?", [
      { text: "No", style: "cancel" },
      {
        text: "Stop", onPress: () => {
          setSelectedCharger(null);
        }
      }])
  }

  // Request location permission
  const getUserPermissions = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        setError(true);
        console.log("Get User Permissions: Location permission denied");
        return false;
      }
      console.log("Get User Permissions: Location permission granted");
      return true;
    }
  }


  useEffect(() => {
    selectedChargerRef.current = selectedCharger;
    const startLocation = async () => {
      await getUserPermissions();
      if (error) {
        return;
      }
      await getAndSetLocation();
      mapRef.current.animateToRegion(region, 1000);
      watchId.current = Geolocation.watchPosition(
        (position) => {
          // console.log("Location updated, selectedCharger state:", selectedCharger);
          const { latitude, longitude } = position.coords;
          const newRegion = {
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          };
          setRegion(newRegion);

          // ✅ Auto-center map if user is navigating
          if (mapRef.current && selectedChargerRef.current) {
            mapRef.current.animateToRegion(newRegion, 1000);
          }
        },
        (err) => {
          console.log("Location error:", err);
          setError(true);
        },
        {
          enableHighAccuracy: true,
          distanceFilter: 10,
          interval: 5000,
          fastestInterval: 2000,
        }
      );
    };
    startLocation();
    return () => {
      console.log("Stopping location watch");
      Geolocation.clearWatch(watchId);
      watchId.current = null;
    };

  }, [selectedCharger]);




  //Sends request to backend to get chargers - function to work with the new backend endpoint
  const searchChargers = async (data) => {
    try {
      setSearchWindow(false);
      //Alternative endpoint for chargers
      // const response = await fetch(url2, {
      //   method: 'POST',
      //   body: JSON.stringify(data),
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${user.token.accessToken}`
      //   }
      // });
      const params = new URLSearchParams(data);
      const urlParams = params.toString();
      const response = await fetch(`${url2}?${urlParams}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token.accessToken}` 
        }
      });
      console.log(`Bearer ${user.token.accessToken}`);
      const result = await response.json();
      if (response.ok) {
        Alert.alert("🔋 Charging Stations", `Found ${result.count} chargers`, [{ text: 'Ok', }]);
        setChargers(result.data);
        setSearchWindow(false);

        const coords = result.data.map((charger) => ({
          latitude: charger.latitude,
          longitude: charger.longitude,
        }));

        coords.push({
          latitude: region.latitude,
          longitude: region.longitude,
        });

        mapRef.current.fitToCoordinates(coords, {
          edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
          animated: true,
        });
      } else { console.log("Response not ok: ", response) }
    } catch (error) {
      console.log("Error with search chargers", error);
    }
  }

  const fetchTopSuitabilitySites = async () => {
  try {
    const response = await fetch(`${suitabilityUrl}/top?n=10`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token.accessToken}`
      }
    });
    const result = await response.json();
    if (response.ok) {
      setSuitabilitySites(result.data);
      setShowSuitability(true);
      Alert.alert(
        "📍 Site Suitability",
        `Showing top ${result.data.length} recommended EV charger locations`
      );
    } else {
      Alert.alert("Error", "Could not retrieve suitability data");
    }
  } catch (error) {
    console.log("Error fetching suitability sites:", error);
    Alert.alert("Error", "Could not connect to suitability service");
  }
}

  return (
    <View style={styles.container}>
      <SearchModal dataIn={{ lat: region?.latitude, lon: region?.longitude }} onResults={searchChargers} visible={searchWindow} onClose={() => setSearchWindow(false)} />

      {/* Loading screen */}
      {(!region || error) && (
        <View style={styles.loadingDiv}>
          <View style={styles.loadingInnerDiv}>
            <Image source={require('../data/loading-img.png')} style={styles.loadingImage} />
            <Text style={styles.loadingText}>Waiting for user location</Text>
            <Text style={styles.loadingText}>Loading map...</Text>
          </View>
        </View>
      )}

      <MapView
        ref={mapRef} // ✅ attach ref to MapView
        style={styles.map}
        // region={region} causes map to auto track user location
        initialRegion={region}
        showsUserLocation={true}
      >
        {chargers && chargers.map((charger, idx) => (
          <ChargerMarker
            key={`${idx}`}
            charger={charger}
            goToPressed={(location) => setSelectedCharger(location)}
          />
        ))}

        {showSuitability && suitabilitySites && suitabilitySites.map((site, idx) => (
          <MapView.Marker
            key={`suitability-${idx}`}
            coordinate={{
              latitude: site.lat,
              longitude: site.lon,
            }}
            title={site.sa2}
            description={`Suitability Score: ${site.suitability_score} | Rank: ${site.rank}`}
            pinColor="green"
  />
))}
        

        {selectedCharger && (
          <MapViewDirections
            origin={{ latitude: region.latitude, longitude: region.longitude }}
            destination={selectedCharger}
            apikey={"AIzaSyDCzcXBa_XmfVjGsapneInLFHruLdEit28"}
            strokeWidth={6}
            strokeColor="blue"
            onReady={result => {
              console.log(`Route found. Distance: ${result.distance} km, Duration: ${result.duration} min`);
              setTravelDistance(result.distance.toFixed(1));
              setTravelTime(result.duration.toFixed(1));
            }}
            onError={errorMessage => {
              console.error("Directions error:", errorMessage);
              Alert.alert("Error", "Unable to find directions. Please try again later.");
            }}
          />
        )}
        {/* <MapView.Marker
          coordinate={selectedCharger}
          title="Selected Charger"
          description="This is the selected charger"
        >
          <Image source={require('../data/charger.png')} style={styles.marker} />
        </MapView.Marker> */}


      </MapView>

      {selectedCharger && (
        <NavigationInfo travelDistance={travelDistance} travelTime={travelTime} cancelFunction={cancelNavigation} />
        // <NavigationInfo travelDistance={"10"} travelTime={"10"} />
      )}
      
      <View style={styles.suitabilityButtonContainer}>
        <Text
          style={styles.suitabilityButton}
          onPress={() => showSuitability 
            ? setShowSuitability(false) 
            : fetchTopSuitabilitySites()
          }
        >
          {showSuitability ? "Hide Suitability Sites" : "Show Suitability Sites"}
        </Text>
      </View>

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
  marker: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  loadingImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  loadingDiv: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffffaa',
    borderRadius: 20,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  loadingInnerDiv: {
    position: 'absolute',
    top: Dimensions.get('window').height / 2 - 250,
    left: Dimensions.get('window').width / 2 - 150,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    backgroundColor: '#ffffff55',
    fontSize: 25,
  },
  suitabilityButtonContainer: {
  position: 'absolute',
  bottom: 80,
  left: 20,
  zIndex: 10,
  },
  suitabilityButton: {
  backgroundColor: '#2E75B6',
  color: 'white',
  paddingVertical: 10,
  paddingHorizontal: 16,
  borderRadius: 8,
  fontSize: 14,
  fontWeight: 'bold',
  overflow: 'hidden',
  },
});

export default MapPage;
