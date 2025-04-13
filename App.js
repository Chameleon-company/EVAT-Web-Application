import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SigninPage from './src/screens/SigninPage';
import SignupPage from './src/screens/SignupPage';
import AppPage from './src/pages/app'; 
import { UserProvider } from './src/context/user.context';

const Stack = createStackNavigator();

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SigninPage" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SigninPage" component={SigninPage} />
          <Stack.Screen name="SignupPage" component={SignupPage} />
          <Stack.Screen name="AppPage" component={AppPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
