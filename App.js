// import React from 'react';
// import 'react-native-gesture-handler';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {enableScreens} from 'react-native-screens';
// import SigninPage from './src/screens/SigninPage';
// import SignupPage from './src/screens/SignupPage';

// enableScreens();

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Signin" component={SigninPage} />
//         <Stack.Screen name="Signup" component={SignupPage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignInPage from './src/screens/SigninPage'; // Your SignIn component
import SignUpPage from './src/screens/SignupPage'; // Your SignUp component
//import Home from './Home'; // Your Home component for after login

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
