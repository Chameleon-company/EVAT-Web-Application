import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import SigninPage from './src/screens/SigninPage';
import SignupPage from './EVAT-Web-Application/src/screens/SignupPage';
import MapPage from './src/pages/MapPage';

enableScreens();

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MapPage">
        <Stack.Screen
          name="Signin"
          component={SigninPage}
          options={{ title: 'Sign In' }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupPage}
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen
          name="MapPage"
          component={MapPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
