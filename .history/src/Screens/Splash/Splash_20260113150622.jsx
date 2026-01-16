import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Loder from '../../Assets/Loader.json'
import LottieView from "lottie-react-native";-
const SplashScreen = () => {
  const navigation = useNavigation();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.replace("home");   // go to Home after splash
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={Loder}
        autoPlay
        loop
        style={styles.animation}
      />
      <Text style={styles.logo}>SpotAlert</Text>
      <Text style={styles.tagline}>Road Safety Companion</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4f46e5",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
  },
  tagline: {
    marginTop: 10,
    fontSize: 16,
    color: "#e0e7ff",
  },
});
