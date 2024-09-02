import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FooterNavigation from './components/FooterNavigation';
import MapScreen from './components/MapScreen';
import TripPlannerScreen from './components/TripPlannerScreen';
import SaveScreen from './components/SaveScreen';
import MeScreen from './components/MeScreen';

const Stack = createNativeStackNavigator();

const routes = [
  { name: 'Map', component: MapScreen },
  { name: 'TripPlanner', component: TripPlannerScreen },
  { name: 'Save', component: SaveScreen },
  { name: 'Me', component: MeScreen },
];

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <View style={styles.navigatorContainer}>
          <Stack.Navigator initialRouteName="Map" screenOptions={{ headerShown: false }}>
            {routes.map((route, index) => (
              <Stack.Screen key={index} name={route.name} component={route.component} />
            ))}
          </Stack.Navigator>
        </View>
        <FooterNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fancyText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20, // Add margin to separate text from the navigator
  },
  navigatorContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10, // Add padding to the navigator container
  },
});

export default App;
