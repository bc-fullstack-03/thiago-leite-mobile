// In App.js in a new project

import * as React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/Screens/Login';
import SignUp from './src/Screens/SignUp';
import Home from './src/Screens/Home';
import Friends from './src/Screens/Friends';
import Profile from './src/Screens/Profile';
import { THEME } from './src/theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: THEME.COLORS.BACKGROUND_900
  }
}

function App() {
  const isLoggedIn = false;
  return (
    <NavigationContainer theme={AppTheme}>
      {!isLoggedIn ? (

        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            statusBarStyle: "inverted",
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>) : (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Friends" component={Friends} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;