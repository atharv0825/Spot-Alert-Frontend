import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from "./src/Screens/Splash/Splash";
import Home from "./src/Screens/Home/Home";
import Login from "./src/Screens/Auth/Login";
import SignUp from "./src/Screens/Auth/Signup";
import Map from "./src/Screens/Map"

import { ThemeProvider } from "./src/theme/ThemeContext"

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="splashscreen" component={SplashScreen} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="splash" component={SplashScreen}/>
          <Stack.Screen name="map" component={Map}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
