import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapPage from './src/screens/MapPage';
import SettingsPage from './src/screens/SettingsPage'; // create
import HomePage from './src/screens/HomePage';         // create
import FavoritesPage from './src/screens/FavoritesPage'; // create
import MyAccountPage from './src/screens/MyAccountPage'; // create



const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
     <Tab.Navigator screenOptions={{ headerShown: false }}>
  <Tab.Screen name="Search" component={HomePage} />
  <Tab.Screen name="Favourites" component={FavoritesPage} />
  <Tab.Screen name="Map" component={MapPage} />
  <Tab.Screen name="Settings" component={SettingsPage} />
  <Tab.Screen name="Sign Out" component={MyAccountPage} />
</Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
