import * as React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/Screens/Login';
import SignUp from './src/Screens/SignUp';
import Home from './src/Screens/Home';
import Friends from './src/Screens/Friends';
import Profile from './src/Screens/Profile';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';
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

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    // {fontsLoaded ? () : (<Text>testeoo</Text>)}
    <NavigationContainer theme={AppTheme}>
      {!isLoggedIn ? (

        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            statusBarStyle: "dark",
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